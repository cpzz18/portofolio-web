import React from 'react';

interface CrtScreenProps {
  children: React.ReactNode;
  className?: string;
}

// Full-viewport terminal shell with 100dvh mobile browser address-bar support
export const CrtScreen: React.FC<CrtScreenProps> = ({ children, className = '' }) => {
  return (
    <div className="relative h-screen h-[100dvh] w-full min-h-[100dvh] overflow-hidden bg-[#050505] text-net-ink flex items-center justify-center">
      <div
        className={`relative z-10 w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
