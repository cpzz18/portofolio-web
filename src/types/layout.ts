export type TabSection = 'home' | 'about' | 'projects' | 'contact';

export interface NavItemConfig {
  id: TabSection;
  keyNumber: string;
  label: string;
}
