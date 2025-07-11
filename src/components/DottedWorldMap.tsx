'use client';

import { useEffect, useRef } from 'react';
import DottedMap from 'dotted-map';

export default function DottedWorldMap() {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // 创建点状地图
    const map = new DottedMap({ 
      height: 600, 
      grid: 'diagonal'
    });

    // 添加一些示例点（可以添加你的数据点）
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
    const svgMap = map.getSVG({
      radius: 0.3,
      color: '#0ba3f9',
      shape: 'circle',
      backgroundColor: '#ffffff',
    });

    // 将SVG插入到DOM中
    svgRef.current.innerHTML = svgMap;
  }, []);

  return (
    <div 
      ref={svgRef}
      style={{
        width: '100%',
        maxWidth: '1200px',
        height: 'auto',
        display: 'block'
      }}
    />
  );
} 