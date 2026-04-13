export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
}

export interface SkillItem {
  name: string;
  iconClass?: string;
  icon?: any;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  CONTACT = 'contact'
}