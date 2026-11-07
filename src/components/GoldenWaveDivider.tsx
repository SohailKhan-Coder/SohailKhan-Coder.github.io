import React from 'react';

interface GoldenWaveDividerProps {
  inverted?: boolean;
  className?: string;
}

export const GoldenWaveDivider: React.FC<GoldenWaveDividerProps> = ({
  inverted = false,
  className = '',
}) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none py-2 ${className}`}>
      {/* Golden Glowing Center Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
      <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent blur-[1px]" />
      
      {/* Subtle organic SVG curve */}
      <svg
        className={`w-full h-10 sm:h-14 opacity-25 ${inverted ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#996515" stopOpacity="0" />
            <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#996515" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill="url(#waveGold)"
        />
      </svg>
    </div>
  );
};
