const fs = require('fs');
const DottedMap = require('dotted-map').default;

// 创建点状地图
const map = new DottedMap({ 
  height: 40,
  grid: 'diagonal' 
});

// 添加一些示例点
map.addPin({
  lat: 40.73061,
  lng: -73.935242,
  svgOptions: { color: '#0ba3f9', radius: 0.6 },
});
map.addPin({
  lat: 48.8534,
  lng: 2.3488,
  svgOptions: { color: '#0ba3f9', radius: 0.6 },
});
map.addPin({
  lat: 35.6762,
  lng: 139.6503,
  svgOptions: { color: '#0ba3f9', radius: 0.6 },
});
map.addPin({
  lat: -33.8688,
  lng: 151.2093,
  svgOptions: { color: '#0ba3f9', radius: 0.6 },
});

// 生成SVG
let svgMap = map.getSVG({
  radius: 0.3,
  color: '#0ba3f9',
  shape: 'circle',
  backgroundColor: '#ffffff',
});

// 解析所有圆圈的位置
const circles = [];
const circleRegex = /<circle cx="([^"]+)" cy="([^"]+)" r="([^"]+)" fill="([^"]+)" \/>/g;
let match;

while ((match = circleRegex.exec(svgMap)) !== null) {
  circles.push({
    cx: parseFloat(match[1]),
    cy: parseFloat(match[2]),
    r: parseFloat(match[3]),
    fill: match[4]
  });
}

// 按y坐标分组
const rows = {};
circles.forEach(circle => {
  const yKey = Math.round(circle.cy * 10) / 10;
  if (!rows[yKey]) {
    rows[yKey] = [];
  }
  rows[yKey].push(circle);
});

// 对每行按x坐标排序
Object.keys(rows).forEach(yKey => {
  rows[yKey].sort((a, b) => a.cx - b.cx);
});

// 生成连接线SVG - 只连接相邻的点，避免跨大陆连接
let linesSvg = '';
const yKeys = Object.keys(rows).sort((a, b) => parseFloat(a) - parseFloat(b));

// 连接每行内相邻的点（只连接距离较近的点）
yKeys.forEach(yKey => {
  const row = rows[yKey];
  for (let i = 0; i < row.length - 1; i++) {
    const current = row[i];
    const next = row[i + 1];
    const distance = Math.abs(next.cx - current.cx);
    
    // 只连接距离小于3个单位的点（避免跨大陆连接）
    if (distance < 3) {
      linesSvg += `<line x1="${current.cx}" y1="${current.cy}" x2="${next.cx}" y2="${next.cy}" stroke="#0ba3f9" stroke-width="0.1" opacity="0.5" />\n`;
    }
  }
});

// 连接相邻行的点（只连接距离较近的点）
for (let i = 0; i < yKeys.length - 1; i++) {
  const currentYKey = yKeys[i];
  const nextYKey = yKeys[i + 1];
  const currentRow = rows[currentYKey];
  const nextRow = rows[nextYKey];
  
  // 对当前行的每个点，找到下一行中距离最近的点
  currentRow.forEach(currentCircle => {
    let closestCircle = null;
    let minDistance = Infinity;
    
    nextRow.forEach(nextCircle => {
      const distance = Math.sqrt(
        Math.pow(nextCircle.cx - currentCircle.cx, 2) + 
        Math.pow(nextCircle.cy - currentCircle.cy, 2)
      );
      
      if (distance < minDistance && distance < 2) { // 只连接距离小于2个单位的点
        minDistance = distance;
        closestCircle = nextCircle;
      }
    });
    
    if (closestCircle) {
      linesSvg += `<line x1="${currentCircle.cx}" y1="${currentCircle.cy}" x2="${closestCircle.cx}" y2="${closestCircle.cy}" stroke="#0ba3f9" stroke-width="0.1" opacity="0.4" />\n`;
    }
  });
}

// 在SVG中插入连接线（在圆圈之前）
svgMap = svgMap.replace(
  /<svg([^>]*)>/,
  `<svg$1>\n  <!-- 大陆内部连接线 -->\n  <g id="boundary-lines">\n${linesSvg}  </g>\n  <!-- 圆圈点 -->\n`
);

// 调整 viewBox
svgMap = svgMap.replace(
  'viewBox="0 0 84 40"',
  'viewBox="-1 -1 86 42"'
);

// 保存到文件
fs.writeFileSync('./public/dotted_world_map_with_lines.svg', svgMap);

console.log('修复后的SVG文件已生成: public/dotted_world_map_with_lines.svg');
console.log('文件大小:', (svgMap.length / 1024).toFixed(2), 'KB');
console.log('圆圈数量:', circles.length);
console.log('连接线数量:', (linesSvg.match(/<line/g) || []).length); 