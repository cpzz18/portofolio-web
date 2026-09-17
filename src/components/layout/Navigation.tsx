import React, { useEffect } from 'react';
import { TabSection, NavItemConfig } from '../../types/layout';

export interface NavigationProps {
  activeTab: TabSection;
  onTabChange: (tab: TabSection) => void;
  className?: string;
  onItemClick?: () => void;
}

  export const NAV_ITEMS: NavItemConfig[] = [
  { id: 'home', keyNumber: '1', label: 'HOME' },
  { id: 'about', keyNumber: '2', label: 'PROFILE' },
  { id: 'projects', keyNumber: '3', label: 'PROJECTS' },
  { id: 'contact', keyNumber: '4', label: 'REQUESTS' },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  className = '',
  onItemClick,
}) => {
  // Global keyboard shortcuts: Keys 1-4 and Arrow Left/Right
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInputActive =
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          (activeEl as HTMLElement).isContentEditable);

      if (isInputActive) return;
      if (event.ctrlKey || event.altKey || event.metaKey) return;

      const currentIndex = NAV_ITEMS.findIndex((item) => item.id === activeTab);

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % NAV_ITEMS.length;
        onTabChange(NAV_ITEMS[nextIndex].id);
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + NAV_ITEMS.length) % NAV_ITEMS.length;
        onTabChange(NAV_ITEMS[prevIndex].id);
        return;
      }

      const targetItem = NAV_ITEMS.find((item) => item.keyNumber === event.key);
      if (targetItem) {
        event.preventDefault();
        onTabChange(targetItem.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, onTabChange]);

  return (
    <nav role="tablist" aria-label="Workstation Tabs" className={`flex items-center gap-2 ${className}`}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            role="tab"
            type="button"
            id={`tab-${item.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${item.id}`}
            onClick={() => {
              onTabChange(item.id);
              onItemClick?.();
            }}
            className={`btn-retro px-3 py-1 text-xs transition-colors cursor-pointer ${
              isActive ? 'btn-retro-on font-semibold' : ''
            }`}
          >
            [{item.keyNumber.padStart(2, '0')}] {item.label}
          </button>
        );
      })}
    </nav>
  );
};
