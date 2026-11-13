export type ProjectCategory =
  | 'All'
  | 'Case Study'
  | 'Logo'
  | 'Re-Branding Design'
  | 'Conceptual Design';

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  subtitle: string;
  coverImage: string;
  galleryImages: string[];
  tags: string[];
  client: string;
  year: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  colorPalette: ColorSwatch[];
  typography: string;
  tools: string[];
  featured?: boolean;
  aiPrompt?: string; // For Design With AI category
  liveUrl?: string;
  driveFolderUrl?: string;
  beforeAfterImages?: { before: string; after: string };
}

export interface SkillItem {
  name: string;
  category: 'Brand Strategy' | 'UI/UX & Digital' | '3D & AI Art' | 'Core Software';
  level: number; // 0 - 100
  iconName: string;
  description: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface PlaygroundShapeItem {
  id: string;
  name: string;
  type: 'pen-nib' | 'pantone-swatch' | 'layer-stack' | 'bezier-node' | 'typography-grid' | 'prism-shader';
  color: string;
  accentColor: string;
  tagline: string;
  diameterKm: string;
  initialPos: { x: number; y: number };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
}
