interface StatsPanelProps {
  isAnimating: boolean;
  activeConnections: number;
  totalNodes: number;
  latency: number;
}

const StatsPanel = ({ isAnimating, activeConnections, totalNodes, latency }: StatsPanelProps) => {
  return (
    <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg p-4 text-white border border-blue-500/30">
      <h3 className="text-lg font-semibold mb-3 text-blue-300">Network Status</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Status:</span>
          <span className={`font-mono ${isAnimating ? 'text-green-400' : 'text-yellow-400'}`}>
            {isAnimating ? 'ACTIVE' : 'STANDBY'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Active Connections:</span>
          <span className="font-mono text-blue-300">{activeConnections}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Total Nodes:</span>
          <span className="font-mono text-blue-300">{totalNodes}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Avg Latency:</span>
          <span className="font-mono text-blue-300">{latency}ms</span>
        </div>
      </div>
      
      {/* 实时状态指示器 */}
      <div className="mt-3 flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${isAnimating ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`}></div>
        <span className="text-xs text-gray-300">
          {isAnimating ? 'Data flowing' : 'Ready'}
        </span>
      </div>
    </div>
  );
};

export default StatsPanel; 