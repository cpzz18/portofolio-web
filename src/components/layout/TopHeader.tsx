import React, { useState, useEffect } from 'react';
import { TabSection } from '../../types/layout';
import { Navigation, NAV_ITEMS } from './Navigation';
import { Menu, X } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface TopHeaderProps {
  activeTab: TabSection;
  onTabChange: (tab: TabSection) => void;
}

const formatDateTime = () => {
  if (typeof window === 'undefined') return { date: '17-09-26', time: '00:00:00' };
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String(now.getFullYear()).slice(-2);
  return { date: `${day}-${month}-${year}`, time };
};

// =============================================================================
// CONFIGURATION: Header Branding & Links
// =============================================================================
const HEADER_CONFIG = {
  systemTitle: 'NETLINK // ROBBIN CHANDRA',
  systemSubtitle: 'PORTFOLIO NETWORK SYSTEM v1.0.0',
  githubUrl: 'https://github.com/cpzz18',
};

export const TopHeader: React.FC<TopHeaderProps> = ({ activeTab, onTabChange }) => {
  const [dateTime, setDateTime] = useState(() => formatDateTime());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(formatDateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeSysName = activeTab === 'home' ? 'HELLO' : activeTab.toUpperCase();

  return (
    <header className="title-bar w-full select-none font-mono shrink-0">
      <div className="flex items-center justify-between px-3 py-1.5 text-xs gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
          <span className="text-net-ink glow font-semibold truncate text-[11px] sm:text-xs">
            {HEADER_CONFIG.systemTitle}
          </span>
          <span className="text-net-gray hidden lg:inline text-[11px]">
            {HEADER_CONFIG.systemSubtitle}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-net-gray shrink-0 text-[11px]">
          <span className="hidden md:inline">DATE: {dateTime.date}</span>
          <span className="hidden sm:inline">TIME: {dateTime.time}</span>
          <a
            href={HEADER_CONFIG.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit GitHub Profile"
            className="btn-retro px-2 py-0.5 flex items-center gap-1 text-[11px] min-h-[26px]"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GH</span>
          </a>
          <button
            type="button"
            className="btn-retro px-2.5 py-1 lg:hidden text-[11px] flex items-center justify-center min-h-[28px] min-w-[28px]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-3 px-3 pb-2 pt-1 text-xs">
        <span className="text-net-gray">STATUS:</span>
        <span className="text-net-ink glow flex items-center gap-1">
          ONLINE<span className="cursor-blink">█</span>
        </span>
        <span className="text-net-gray">|</span>

        <Navigation activeTab={activeTab} onTabChange={onTabChange} />

        <span className="text-net-gray ml-auto font-mono text-[11px]">{activeSysName}.SYS</span>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#303030] bg-[#0c0c0c] p-3 flex flex-col gap-2 text-xs animate-fadeIn">
          <div className="pb-1.5 border-b border-[#202020] flex items-center justify-between text-[11px]">
            <span className="text-net-gray">
              STATUS: <strong className="text-net-ink glow font-normal">ONLINE █</strong>
            </span>
            <span className="text-net-gray">{activeSysName}.SYS</span>
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onTabChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`btn-retro px-3 py-2 text-left text-xs flex items-center justify-between min-h-[40px] cursor-pointer ${
                  isActive ? 'btn-retro-on font-semibold' : ''
                }`}
              >
                <span>
                  [{item.keyNumber.padStart(2, '0')}] {item.label}
                </span>
                {isActive && <span className="text-[10px]">[ACTIVE]</span>}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
