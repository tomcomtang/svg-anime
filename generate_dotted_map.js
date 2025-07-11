const fs = require('fs');
const DottedMap = require('dotted-map').default;

// 创建点状地图 - 使用更小的尺寸
const map = new DottedMap({ 
  height: 60,  // 从100减少到60
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

// 手动调整 viewBox，给四个方向都添加 padding
svgMap = svgMap.replace(
  'viewBox="0 0 126 60"',
  'viewBox="-1 -1 128 62"'
);

// 保存到文件
fs.writeFileSync('./public/dotted_world_map_small.svg', svgMap);

console.log('SVG 文件已生成: public/dotted_world_map_small.svg');
console.log('文件大小:', (svgMap.length / 1024).toFixed(2), 'KB'); 