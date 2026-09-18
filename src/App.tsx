import { useState } from 'react';
import { CrtScreen } from './components/crt';
import { TopHeader } from './components/layout/TopHeader';
import { BottomBar } from './components/layout/BottomBar';
import { HomeHero } from './components/sections/HomeHero';
import { ProfileWindow } from './components/layout/ProfileWindow';
import { TabSection } from './types/layout';

export default function App() {
  // Config: Initial active tab ('home' | 'about' | 'projects' | 'contact')
  const [activeTab, setActiveTab] = useState<TabSection>('home');

  return (
    <CrtScreen>
      <div className="bezel custom-size flex flex-col overflow-hidden">
        <TopHeader activeTab={activeTab} onTabChange={setActiveTab} />

        <main
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="flex-1 w-full overflow-y-auto flex items-center justify-center bg-[#080808]"
        >
          {activeTab === 'home' ? (
            <HomeHero onNavigateProjects={() => setActiveTab('projects')} />
          ) : (
            <ProfileWindow activeTab={activeTab} />
          )}
        </main>

        <BottomBar />
      </div>
    </CrtScreen>
  );
}
