const RealWorldMap = () => {
  return (
    <g>
      {/* 世界地图 - 基于真实地理轮廓的简化版本 */}
      
      {/* 北美洲 */}
      <path
        d="M 12 25 Q 15 22 18 23 Q 20 25 22 24 Q 25 22 28 23 Q 30 25 32 24 Q 35 22 38 23 L 38 35 Q 35 38 32 37 Q 30 35 28 36 Q 25 38 22 37 Q 20 35 18 36 Q 15 38 12 37 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 南美洲 */}
      <path
        d="M 22 40 Q 25 38 28 39 Q 30 41 32 40 Q 35 38 38 39 L 38 75 Q 35 78 32 77 Q 30 75 28 76 Q 25 78 22 77 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 欧洲 */}
      <path
        d="M 42 28 Q 45 26 47 27 Q 49 29 52 28 Q 54 26 57 27 Q 59 29 62 28 L 62 38 Q 59 40 57 39 Q 54 38 52 39 Q 49 40 47 39 Q 45 38 42 39 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 非洲 */}
      <path
        d="M 45 35 Q 48 33 50 34 Q 52 36 55 35 Q 57 33 60 34 L 60 75 Q 57 78 55 77 Q 52 75 50 76 Q 48 78 45 77 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 亚洲 */}
      <path
        d="M 62 25 Q 68 23 75 24 Q 80 26 85 25 Q 90 23 95 24 L 95 60 Q 90 65 85 64 Q 80 60 75 61 Q 68 65 62 64 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 澳大利亚 */}
      <path
        d="M 78 65 Q 82 63 85 64 Q 87 66 90 65 Q 92 63 95 64 L 95 75 Q 92 77 90 76 Q 87 75 85 76 Q 82 77 78 76 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 格陵兰岛 */}
      <path
        d="M 25 15 Q 28 12 30 13 Q 32 15 35 14 Q 37 12 40 13 L 40 25 Q 37 28 35 27 Q 32 25 30 26 Q 28 28 25 27 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.3"
      />
      
      {/* 俄罗斯远东 */}
      <path
        d="M 85 20 Q 88 18 90 19 Q 92 21 95 20 L 95 30 Q 92 32 90 31 Q 88 30 85 31 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 日本群岛 */}
      <path
        d="M 88 35 Q 90 34 92 35 Q 93 36 95 35 L 95 40 Q 93 41 92 40 Q 90 39 88 40 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 印度尼西亚群岛 */}
      <path
        d="M 75 55 Q 78 53 80 54 Q 82 56 85 55 Q 87 53 90 54 L 90 65 Q 87 67 85 66 Q 82 65 80 66 Q 78 67 75 66 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 新西兰 */}
      <path
        d="M 85 75 Q 87 74 88 75 Q 89 76 90 75 L 90 80 Q 89 81 88 80 Q 87 79 85 80 Z"
        fill="url(#mapGradient)"
        stroke="#3b82f6"
        strokeWidth="0.08"
        opacity="0.4"
      />
      
      {/* 海洋区域 - 添加一些海洋纹理 */}
      <defs>
        <pattern id="oceanPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.5" fill="#1e40af" opacity="0.1"/>
          <circle cx="8" cy="6" r="0.3" fill="#1e40af" opacity="0.1"/>
          <circle cx="5" cy="8" r="0.4" fill="#1e40af" opacity="0.1"/>
        </pattern>
      </defs>
      
      {/* 太平洋 */}
      <rect x="0" y="0" width="100" height="100" fill="url(#oceanPattern)" opacity="0.3"/>
      
      {/* 大西洋 */}
      <path
        d="M 40 0 L 40 100"
        stroke="#1e40af"
        strokeWidth="0.05"
        opacity="0.2"
        strokeDasharray="1,2"
      />
      
      {/* 印度洋 */}
      <path
        d="M 60 0 L 60 100"
        stroke="#1e40af"
        strokeWidth="0.05"
        opacity="0.2"
        strokeDasharray="1,2"
      />
    </g>
  );
};

export default RealWorldMap; 