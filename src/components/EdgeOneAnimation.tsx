"use client";

import { useEffect, useRef } from 'react';

const EdgeOneAnimation = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 强制重新加载SVG以确保动画重新播放
    if (imgRef.current) {
      const img = imgRef.current;
      const currentSrc = img.src;
      img.src = '';
      img.src = currentSrc;
    }
  }, []);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="relative w-full h-full max-w-[1500px] max-h-[700px]">
        <img
          ref={imgRef}
          src="/world-map.svg"
          alt="World Map"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default EdgeOneAnimation; 