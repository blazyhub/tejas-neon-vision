import { useState, useEffect } from 'react';

interface FuturisticRobotProps {
  rotation: { x: number; y: number };
}

const FuturisticRobot = ({ rotation }: FuturisticRobotProps) => {
  const [eyeGlow, setEyeGlow] = useState(true);
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    const eyeTimer = setInterval(() => {
      setEyeGlow(prev => !prev);
    }, 2000);

    const scanTimer = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(eyeTimer);
      clearInterval(scanTimer);
    };
  }, []);

  return (
    <div 
      className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 ease-out"
      style={{ 
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
      }}
    >
      <div className="relative w-full h-full">
        {/* Robot Head */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl border-2 border-neon-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          {/* Head glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent rounded-2xl animate-pulse"></div>
          
          {/* Eyes */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              eyeGlow ? 'bg-neon-cyan shadow-[0_0_15px_rgba(34,211,238,0.8)]' : 'bg-neon-blue shadow-[0_0_10px_rgba(59,130,246,0.6)]'
            }`}></div>
            <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              eyeGlow ? 'bg-neon-cyan shadow-[0_0_15px_rgba(34,211,238,0.8)]' : 'bg-neon-blue shadow-[0_0_10px_rgba(59,130,246,0.6)]'
            }`}></div>
          </div>

          {/* Mouth/Speaker Grill */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-2 md:w-10 md:h-3">
            <div className="w-full h-full bg-neon-blue/30 rounded-full flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-0.5 h-1 bg-neon-cyan animate-pulse"></div>
                <div className="w-0.5 h-2 bg-neon-cyan animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-0.5 h-1.5 bg-neon-cyan animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-0.5 h-2 bg-neon-cyan animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-0.5 h-1 bg-neon-cyan animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>

          {/* Antenna */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-4 bg-gradient-to-t from-neon-blue to-neon-cyan rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neon-cyan rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Side panels */}
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-neon-blue/40 rounded-full"></div>
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-neon-blue/40 rounded-full"></div>

          {/* Scanning line effect */}
          <div 
            className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60 transition-all duration-75"
            style={{ top: `${scanLine}%` }}
          ></div>

          {/* Circuit patterns */}
          <div className="absolute inset-2 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path 
                d="M20 20 L80 20 L80 40 L60 40 L60 60 L80 60 L80 80 L20 80 Z" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none"
                className="text-neon-blue animate-pulse"
              />
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-neon-cyan animate-pulse" />
              <circle cx="70" cy="50" r="2" fill="currentColor" className="text-neon-cyan animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="50" cy="70" r="2" fill="currentColor" className="text-neon-cyan animate-pulse" style={{ animationDelay: '1s' }} />
            </svg>
          </div>
        </div>

        {/* Floating particles around robot */}
        <div className="absolute -inset-4">
          <div className="absolute top-2 right-2 w-1 h-1 bg-neon-cyan rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-4 left-2 w-1 h-1 bg-neon-blue rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1/2 right-0 w-1 h-1 bg-neon-purple rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute bottom-2 right-4 w-1 h-1 bg-neon-green rounded-full animate-ping" style={{ animationDelay: '2.1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticRobot;