interface DataParticleProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  delay: number;
  duration: number;
}

const DataParticle = ({ fromX, fromY, toX, toY, delay, duration }: DataParticleProps) => {
  return (
    <circle
      cx={fromX}
      cy={fromY}
      r="0.2"
      fill="#60a5fa"
      opacity="0.8"
      filter="url(#glow)"
    >
      <animate
        attributeName="cx"
        values={`${fromX};${toX}`}
        dur={`${duration}ms`}
        begin={`${delay}ms`}
        fill="freeze"
      />
      <animate
        attributeName="cy"
        values={`${fromY};${toY}`}
        dur={`${duration}ms`}
        begin={`${delay}ms`}
        fill="freeze"
      />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur={`${duration}ms`}
        begin={`${delay}ms`}
        fill="freeze"
      />
      <animate
        attributeName="r"
        values="0.2;0.4;0.2"
        dur={`${duration}ms`}
        begin={`${delay}ms`}
        fill="freeze"
      />
    </circle>
  );
};

export default DataParticle; 