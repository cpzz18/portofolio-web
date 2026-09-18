import React from 'react';
import { TabSection } from '../../types/layout';

interface ProfileWindowProps {
  activeTab: TabSection;
}

// =============================================================================
// CONFIGURATION: Tab Module Titles & Headers
// Maps each navigation tab ID to its window header and .SYS module identifier
// =============================================================================
const TAB_TITLES: Record<TabSection, { header: string; module: string }> = {
  home: { header: 'USER PROFILE', module: 'HELLO' },
  about: { header: 'PROFILE MATRIX', module: 'PROFILE' },
  projects: { header: 'PROJECTS REPOSITORY', module: 'PROJECTS' },
  contact: { header: 'REQUEST CHANNELS', module: 'REQUESTS' },
};

export const ProfileWindow: React.FC<ProfileWindowProps> = ({ activeTab }) => {
  const meta = TAB_TITLES[activeTab] || { header: 'SYSTEM WINDOW', module: 'SYS' };

  return (
    <div className="w-full h-full flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn">
      <div className="sys-panel w-full max-w-2xl font-mono select-none overflow-hidden">
        <div className="sys-head px-3 py-1.5 flex items-center justify-between text-[11px] sm:text-xs">
          <span className="font-semibold text-net-ink tracking-wider truncate mr-2">
            {meta.header}
          </span>
          <span className="text-[10px] text-net-gray shrink-0">SYS_01 · NET_STATUS: ONLINE</span>
        </div>

        <div className="p-4 sm:p-8 flex flex-col items-center justify-center text-center space-y-4">
          <div className="text-[10px] sm:text-[11px] text-net-gray tracking-widest uppercase">
            // MODULE: {meta.module}.SYS
          </div>

          <div className="well p-5 sm:p-6 space-y-2.5 max-w-md w-full border border-net-line">
            <div className="text-lg sm:text-2xl font-bold font-mono tracking-widest text-[#52a5ff] drop-shadow-[0_0_4px_rgba(82,165,255,0.3)] flex items-center justify-center gap-2">
              <span>&gt; COMING SOON</span>
              <span className="cursor-blink text-[#52a5ff]">█</span>
            </div>
            <p className="text-xs text-net-gray leading-relaxed">
              This channel is currently under construction and calibration.
            </p>
          </div>

          <div className="text-[10px] sm:text-[11px] text-net-gray font-mono">
            STATUS: <span className="text-[#9ac4ff] font-semibold">PENDING INITIALIZATION</span>
          </div>
        </div>
      </div>
    </div>
  );
};
