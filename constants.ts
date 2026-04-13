import { Experience, Education, Skill, ContactInfo } from './types';
import { 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Lightbulb, 
  Server, 
  Terminal, 
  Database, 
  Layout,
  Wrench,
  Router,
  Network,
  Layers,
  Bot,
  MessageSquareCode,
  FileJson
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Edmond NOUMEGNI",
  title: "Informaticien Polyvalent",
  tagline: "Administration Systèmes • Réseaux • Développement Web • IA",
  profile: "Technicien informatique dynamique et polyvalent avec une solide formation en administration des systèmes et réseaux. Passionné par l'optimisation des infrastructures IT, la maintenance informatique et la configuration d'environnements technologiques complexes. Mon objectif est de mettre à profit mes compétences techniques pour garantir la performance, la fiabilité et la sécurité des systèmes d'information, tout en contribuant activement à l'innovation technologique via l'intégration de solutions d'Intelligence Artificielle."
};

export const CONTACT_INFO: ContactInfo = {
  phone: "+237 674 22 85 51",
  email: "dneb237@gmail.com",
  linkedin: "linkedin.com/in/edmond-noumegni",
  location: "Ndogpassi III, Douala, Cameroun"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Stagiaire Développeur Web",
    company: "Institut Universitaire des Technologies, Douala",
    period: "Mars - Mai 2024",
    description: [
      "Développement d'applications web robustes avec Django",
      "Optimisation des performances et de l'UX des sites web",
      "Support technique efficace aux utilisateurs finaux",
      "Collaboration avec l'équipe pour les nouvelles fonctionnalités"
    ]
  },
  {
    id: "2",
    role: "Technicien Informatique Indépendant",
    company: "Projets Personnels",
    period: "2023 - Présent",
    description: [
      "Dépannage et réparation d'appareils électroniques",
      "Formatage et optimisation de systèmes d'exploitation",
      "Configuration de réseaux domestiques et professionnels",
      "Déblocage et réinitialisation sécurisée des appareils",
      "Conseil et assistance technique personnalisée"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Licence Pro. Administration Systèmes et Réseaux",
    school: "Institut Universitaire de Technologie de Douala",
    period: "2024 - 2025"
  },
  {
    id: "2",
    degree: "DUT en Informatique",
    school: "Institut Universitaire de Technologie de Douala",
    period: "2022 - 2024"
  },
  {
    id: "3",
    degree: "Baccalauréat Scientifique série C",
    school: "Collège Polyvalent Bilingue RETI",
    period: "2018 - 2019"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Systèmes & Réseaux",
    items: [
      { name: "Windows Server", iconClass: "devicon-windows8-original colored" },
      { name: "Linux", iconClass: "devicon-linux-plain colored" },
      { name: "Active Directory", iconClass: "devicon-azure-plain colored" },
      { name: "Cisco/Mikrotik", icon: Router },
      { name: "TCP/IP", icon: Network },
      { name: "Sécurité", icon: ShieldCheck },
      { name: "VMware", icon: Layers },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
      { name: "Maintenance", icon: Wrench }
    ]
  },
  {
    category: "Développement",
    items: [
      { name: "React.js", iconClass: "devicon-react-original colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "Java", iconClass: "devicon-java-plain colored" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "HTML/CSS", iconClass: "devicon-html5-plain colored" },
      { name: "Django", iconClass: "devicon-django-plain colored" }
    ]
  },
  {
    category: "Intelligence Artificielle",
    items: [
      { name: "Machine Learning", iconClass: "devicon-tensorflow-original colored" },
      { name: "Prompt Engineering", icon: MessageSquareCode },
      { name: "LLM Integration", icon: Bot },
      { name: "Data Analysis", iconClass: "devicon-pandas-plain colored" },
      { name: "Python (AI)", iconClass: "devicon-python-plain colored" }
    ]
  },
  {
    category: "Outils & Bases de données",
    items: [
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "VS Code", iconClass: "devicon-vscode-plain colored" }
    ]
  }
];

export const INTERESTS = [
  { label: "Technologies Émergentes", icon: Cpu },
  { label: "Innovation Technologique", icon: Lightbulb },
  { label: "Veille Technologique", icon: Globe },
  { label: "Cybersécurité", icon: ShieldCheck }
];

export const LANGUAGES = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" }
];