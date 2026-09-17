import React from 'react';

// =============================================================================
// Retro Monochrome 1-bit Avatar Graphic Placeholder
// =============================================================================
export const RetroAvatar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-28 h-28 bg-[#080808] border border-[#303030] overflow-hidden shrink-0 flex items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-[#e8e8e0] opacity-90 p-1"
        fill="currentColor"
      >
        <circle cx="50" cy="38" r="18" fill="#141414" stroke="#e8e8e0" strokeWidth="2" />
        <rect x="37" y="32" width="10" height="7" rx="1" fill="#080808" stroke="#e8e8e0" strokeWidth="1.5" />
        <rect x="53" y="32" width="10" height="7" rx="1" fill="#080808" stroke="#e8e8e0" strokeWidth="1.5" />
        <line x1="47" y1="35" x2="53" y2="35" stroke="#e8e8e0" strokeWidth="1.5" />
        <path
          d="M 32 32 C 32 20, 68 20, 68 32 C 65 24, 35 24, 32 32 Z"
          fill="#e8e8e0"
        />
        <path d="M 45 46 Q 50 50 55 46" fill="none" stroke="#e8e8e0" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M 26 88 C 26 65, 40 60, 50 60 C 60 60, 74 65, 74 88 Z"
          fill="#141414"
          stroke="#e8e8e0"
          strokeWidth="2"
        />
        <polygon points="50,60 45,72 50,78 55,72" fill="#080808" stroke="#e8e8e0" strokeWidth="1" />
        
        <line x1="0" y1="20" x2="100" y2="20" stroke="#e8e8e0" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="0" y1="40" x2="100" y2="40" stroke="#e8e8e0" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="0" y1="60" x2="100" y2="60" stroke="#e8e8e0" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="0" y1="80" x2="100" y2="80" stroke="#e8e8e0" strokeWidth="0.5" strokeOpacity="0.25" />
      </svg>
      <div className="absolute top-1 left-1 text-[8px] text-[#8a8a84] font-mono">
        IMG_01
      </div>
    </div>
  );
};
