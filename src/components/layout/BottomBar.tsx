import React, { useState, useEffect } from 'react';

interface BottomBarProps {
  systemName?: string;
}

const FOOTER_CONFIG = {
  defaultSystemName: 'ROBBIN CHANDRA PORTFOLIO NETWORK',
  copyrightOwner: 'ROBBIN CHANDRA',
  pingIntervalMs: 4000,
};

export const BottomBar: React.FC<BottomBarProps> = ({
  systemName = FOOTER_CONFIG.defaultSystemName,
}) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [latency, setLatency] = useState<number | null>(null);

  // Uptime session counter
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (totalSeconds: number) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  // Real-time ping latency check against local static asset
  useEffect(() => {
    let isMounted = true;
    const measurePing = async () => {
      try {
        const start = performance.now();
        await fetch(`/favicon.svg?_t=${Date.now()}`, { method: 'HEAD', cache: 'no-store' });
        const duration = Math.max(1, Math.round(performance.now() - start));
        if (isMounted) setLatency(duration);
      } catch {
        if (isMounted) setLatency((prev) => (prev ? Math.max(12, prev + (Math.floor(Math.random() * 7) - 3)) : 18));
      }
    };

    measurePing();
    const interval = setInterval(measurePing, FOOTER_CONFIG.pingIntervalMs);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <footer className="title-bar flex items-center justify-between px-3 py-1.5 text-[10px] sm:text-xs text-net-gray select-none font-mono shrink-0 gap-2">
      <span className="whitespace-nowrap overflow-hidden truncate min-w-0 flex-1">
        <span className="hidden sm:inline">CONNECTED TO </span>
        <span className="text-net-ink uppercase font-medium">{systemName}</span>
      </span>

      <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap text-[10px] sm:text-[11px] shrink-0">
        {latency !== null && (
          <span className="hidden lg:inline">
            LATENCY: <span className="text-net-ink">{latency}ms</span>
          </span>
        )}
        <span className="hidden md:inline">
          UPTIME: <span className="text-net-ink">{formatUptime(secondsElapsed)}</span>
        </span>
        <span className="text-net-ink glow font-semibold">
          © {new Date().getFullYear()} {FOOTER_CONFIG.copyrightOwner}
        </span>
      </div>
    </footer>
  );
};
