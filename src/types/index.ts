export interface Project {
  id: string;
  title: string;
  category: 'Mobile' | 'Web' | 'Enterprise' | 'System';
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  mockupType: 'dual-phone' | 'single-phone' | 'laptop' | 'dashboard';
  highlights: string[];
  badge: string;
  row: 1 | 2 | 3;
  imageUrl: string;
  imageSrcSet: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period?: string;
  description: string;
  iconName: string;
  stats?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  color: string;
  proficiency: number;
  iconName: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
  features: string[];
  gradient: string;
}
