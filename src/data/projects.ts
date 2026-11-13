import { Project, SkillItem, ExperienceItem, PlaygroundShapeItem } from '../types';

const marrowCover = new URL('../assets/images/marrow_cover_1785239051470.jpg', import.meta.url).href;
const marrowWorkflow = new URL('../assets/images/marrow_workflow_1785239206207.jpg', import.meta.url).href;
const marrowMoodboard = new URL('../assets/images/marrow_moodboard_1785239074221.jpg', import.meta.url).href;
const marrowLogotype = new URL('../assets/images/marrow_logotype_1785239140291.jpg', import.meta.url).href;
const marrowApparel = new URL('../assets/images/marrow_apparel_1785239101978.jpg', import.meta.url).href;
const marrowIpad = new URL('../assets/images/marrow_ipad_1785239122168.jpg', import.meta.url).href;
const marrowHangtags = new URL('../assets/images/marrow_hangtags_1785239170983.jpg', import.meta.url).href;

export const CATEGORIES = [
  'All',
  'Case Study',
  'Logo',
  'Re-Branding Design',
  'Conceptual Design',
] as const;

export const PROJECTS: Project[] = [
  // ==========================================
  // CATEGORY 1: CASE STUDY (5 Comprehensive Projects)
  // ==========================================
  {
    id: 'lumiere-hotel',
    title: 'MYAZU — BRAND SYSTEM & VISUAL IDENTITY',
    category: 'Case Study',
    subtitle: 'Building a distinctive hospitality identity inspired by Riyadh’s cultural heritage, architectural language, and contemporary luxury.',
    coverImage: 'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249706/26.jpg',
    galleryImages: [
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249652/1.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249662/3.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249662/6.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249652/8.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249664/4.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249659/7.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249677/5.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249661/9.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249656/10.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249680/13.png',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249673/11.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249686/17.png',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249689/12.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249686/19.png',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249699/20.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249674/14.png',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249674/15.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249700/18.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249686/16.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249689/23.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249703/24.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249688/21.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787254678/22.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249706/25_1.png',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787249706/26.jpg'
    ],
    tags: ['Brand Strategy', 'Visual Identity', 'Environmental Graphics', 'Packaging Design', 'Art Direction', 'Brand System'],
    client: 'Myazu Luxury Hotel Riyadh',
    year: '2025',
    duration: '10 Weeks',
    description: 'Myazu was envisioned as a hospitality experience rooted in the cultural character of Riyadh while speaking through a refined and contemporary visual language. The challenge was to create a complete brand identity that feels deeply connected to place, yet modern enough to stand confidently within a premium hospitality environment.',
    challenge: 'The goal was to develop an identity that could communicate luxury without feeling generic. Myazu needed a visual language with a strong connection to Saudi culture, architecture, and hospitality while remaining elegant, modern, and highly recognizable.',
    solution: 'Transformed traditional Saudi architectural forms, geometric ornamentation, Arabic typography, regional color palettes, and decorative borders into a modern heritage luxury brand system.',
    results: [
      'Bilingual Arabic & English typography system for international luxury appeal',
      'Unified environmental branding across façade, architectural signage, and spatial touchpoints',
      'Complete packaging architecture across boxes, cups, takeaway items, and guest collateral'
    ],
    colorPalette: [
      { name: 'Architectural Teal', hex: '#0B4F58' },
      { name: 'Deep Midnight', hex: '#0D1B2A' },
      { name: 'Desert Gold', hex: '#D4AF37' },
      { name: 'Warm Terracotta', hex: '#C25E38' },
      { name: 'Ivory Cream', hex: '#FDFBF7' }
    ],
    typography: 'Playfair Display + Inter',
    tools: ['Adobe Illustrator', 'InDesign', 'Photoshop 3D', 'KeyShot', 'Figma'],
    featured: true
  },
  {
    id: 'coolhaus',
    title: 'COOLHAUS — BRAND SYSTEM & VISUAL IDENTITY',
    category: 'Case Study',
    subtitle: 'Building a bold, playful, and scalable visual language for an ice cream brand designed to stand out.',
    coverImage: 'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338831/C1.jpg',
    galleryImages: [
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338831/C1.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338840/C2.png',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338853/C4.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338842/C7.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338858/C8.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338853/C9.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338854/C10.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338855/C11.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338872/C12.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338866/C13.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338875/C14.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338872/C15.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338875/C18.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338878/C19.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338875/C20.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338882/C23.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338885/C24.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338888/C25.jpg',
      'https://res.cloudinary.com/e2bztnpa/image/upload/v1787338882/C26.jpg'
    ],
    tags: ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'Art Direction', 'Illustration', 'Brand System'],
    client: 'Coolhaus',
    year: '2025',
    duration: '6 Weeks',
    description: 'Building a bold, playful, and scalable visual language for an ice cream brand designed to stand out.',
    challenge: 'Translating Coolhaus\'s bold personality into a visual identity that felt expressive, playful, and unmistakably Coolhaus.',
    solution: 'Oversized typography, high-impact color combinations, expressive illustrations, and playful compositions.',
    results: [
      'Complete brand identity system & packaging architecture',
      'Modular illustration language for multi-SKU product scaling',
      'High-impact retail freezer and campaign communication suite'
    ],
    colorPalette: [
      { name: 'Solstice Orange', hex: '#FF6B00' },
      { name: 'Sun Yellow', hex: '#FFC700' },
      { name: 'Vibrant Pink', hex: '#FF4D8D' },
      { name: 'Deep Charcoal', hex: '#111111' }
    ],
    typography: 'Playfair Display + Inter',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    featured: true
  },
  {
    id: 'marrow-brand-identity',
    title: 'Marrow — Streetwear Culture',
    category: 'Case Study',
    subtitle: 'Comprehensive brand identity system, hip-hop culture positioning, and visual architecture',
    coverImage: marrowCover,
    galleryImages: [
      marrowCover,
      marrowWorkflow,
      marrowMoodboard,
      marrowLogotype,
      marrowApparel,
      marrowIpad,
      marrowHangtags,
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['Brand Identity', 'Streetwear Culture', 'Visual System', 'Case Study'],
    client: 'Marrow Clothing Co.',
    year: '2026',
    duration: 'Full Brand Launch',
    description: 'Marrow is an urban hip-hop streetwear brand built for the bold. "We don\'t design clothing. We design a vocabulary." This case study showcases the complete brand identity system, from initial culture research to apparel graphic design, process workflow, and digital storefront.',
    challenge: 'Creating a streetwear identity that feels raw, authentic, and rooted in hip-hop culture without relying on generic graphic tropes.',
    solution: 'Engineered a custom curved logotype, high-contrast red & charcoal color hierarchy, and a bold brand DNA matrix ("Deep in the bone. Loud in the street.").',
    results: [
      'Complete brand style guide and typography architecture established',
      'Unified physical apparel hangtags, packaging, process workflow, and digital UI',
      'Over 100+ apparel graphics and collection assets generated'
    ],
    colorPalette: [
      { name: 'Noelle Red', hex: '#C13838' },
      { name: 'Dark Rose', hex: '#7F1E1E' },
      { name: 'Fantan Beige', hex: '#F2DAC4' },
      { name: 'Flat Black', hex: '#0D0D0D' },
      { name: 'Attractive Black', hex: '#222222' }
    ],
    typography: 'Custom Script Logotype + Plus Jakarta Sans',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'After Effects'],
    featured: true
  },

  // ==========================================
  // CATEGORY 2: LOGO
  // ==========================================
  {
    id: 'aura-sound',
    title: 'Aura Spatial Audio — Sound Mark & Logo Identity',
    category: 'Logo',
    subtitle: 'Geometric concentric mark expressing 3D audio wave propagation and spatial clarity',
    coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['Logo Design', 'Acoustic Mark', 'Vector Symbolism', 'Identity Grid'],
    client: 'Aura Sound Technologies Berlin',
    year: '2025',
    duration: '4 Weeks',
    description: 'Designing a dynamic audio mark that scales seamlessly from tiny app icons to high-res hardware laser engravings.',
    challenge: 'Simplifying multi-channel surround sound routing concepts into a singular iconic symbol.',
    solution: 'Designed an overlapping dual-ring wave geometry that produces an optical aura effect when rotated or animated.',
    results: [
      'Adopted across 5 flagship audio plugin products',
      'App Store Editor’s Choice Award for UI & Identity',
      'Trademarked across US, EU, and Asian markets'
    ],
    colorPalette: [
      { name: 'Dark Void', hex: '#0B0F17' },
      { name: 'Neon Purple', hex: '#8B5CF6' },
      { name: 'Cyber Teal', hex: '#06B6D4' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    typography: 'JetBrains Mono + Outfit',
    tools: ['Adobe Illustrator', 'Glyphs 3', 'Figma'],
    liveUrl: 'https://aurasound.example'
  },

  // ==========================================
  // CATEGORY 3: RE-BRANDING DESIGN
  // ==========================================
  {
    id: 'velox-motors',
    title: 'Velox Electric Mobility — Heritage Rebrand & Monogram',
    category: 'Re-Branding Design',
    subtitle: 'Transforming a 70-year European automotive manufacturer into an EV lifestyle brand',
    coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['Re-Branding', 'Automotive Identity', 'Badging', 'Design System'],
    client: 'Velox Motors Munich',
    year: '2026',
    duration: '14 Weeks',
    description: 'Velox transitioned its complete lineup to zero-emission electric vehicles. We stripped away heavy chrome badges in favor of a sleek illuminated V-monogram.',
    challenge: 'Honoring 70 years of engineering heritage while signaling a radical clean energy future.',
    solution: 'Simplified the original crest into an aerodynamic V-mark optimized for LED grille backlighting and mobile app UI.',
    results: [
      'Positive reception from 94% of legacy brand club members',
      'Nominated for German Design Award 2026',
      'Deployed across 350 international dealerships'
    ],
    colorPalette: [
      { name: 'Electric Silver', hex: '#E2E8F0' },
      { name: 'Velocity Crimson', hex: '#DC2626' },
      { name: 'Carbon Black', hex: '#09090B' }
    ],
    typography: 'Custom Automotive Sans + Plus Jakarta Sans',
    tools: ['Illustrator', 'Alias 3D', 'Figma', 'KeyShot'],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop'
    }
  },

  // ==========================================
  // CATEGORY 4: CONCEPTUAL DESIGN
  // ==========================================
  {
    id: 'mono-kinetic-posters',
    title: 'Mono: Type in Motion — Kinetic Graphic Posters',
    category: 'Conceptual Design',
    subtitle: 'A structural exploration of typographic weight, optical illusions, and 3D kinetic deformation',
    coverImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['Experimental Type', '3D Posters', 'Brutalism', 'Kinetic Design'],
    client: 'Self-Initiated Design Study',
    year: '2025',
    duration: '1 Week',
    description: 'An experimental project examining how variable typography responds to physical gravitational fields, sound waves, and 3D displacement shaders.',
    challenge: 'Pushing typography beyond static 2D boundaries into interactive spatial dimensions.',
    solution: 'Built an interactive WebGL canvas stage where users deform typography using mouse velocity and click force.',
    results: [
      '180,000+ online interactive session plays',
      'Published in Type Directors Club Annual 2025',
      'Featured on Awwwards Site of the Day'
    ],
    colorPalette: [
      { name: 'Pure Charcoal', hex: '#121212' },
      { name: 'Signal Orange', hex: '#FF5500' },
      { name: 'Chalk White', hex: '#FAFAFA' }
    ],
    typography: 'Custom Kinetic Variable Mono',
    tools: ['Three.js', 'GLSL Shaders', 'Illustrator', 'After Effects']
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: 'Brand Identity & Systems',
    category: 'Brand Strategy',
    level: 96,
    iconName: 'Sparkles',
    description: 'Logo design, brand guidelines, typography hierarchies, and scalable visual systems.'
  },
  {
    name: '3D Modeling & Shader Art',
    category: '3D & AI Art',
    level: 92,
    iconName: 'Box',
    description: 'Three.js, Blender, Cinema 4D, lighting, GLSL materials, and physical rendering.'
  },
  {
    name: 'Generative AI & Prompting',
    category: '3D & AI Art',
    level: 94,
    iconName: 'Cpu',
    description: 'Midjourney v6, ComfyUI workflows, ControlNet vector synthesis, image-to-image enhancement.'
  },
  {
    name: 'UI/UX & Prototyping',
    category: 'UI/UX & Digital',
    level: 90,
    iconName: 'Layout',
    description: 'Figma design systems, micro-interactions, dark glass UI, responsive grid architectures.'
  },
  {
    name: 'Motion Design & Kinetic Type',
    category: 'UI/UX & Digital',
    level: 88,
    iconName: 'Film',
    description: 'After Effects, video editing, Lottie animations, interactive kinetic web typography.'
  },
  {
    name: 'Packaging & Print Craft',
    category: 'Brand Strategy',
    level: 89,
    iconName: 'Package',
    description: 'Foil stamping, die-lines, structural mockups, Pantone matching, eco-packaging.'
  },
  {
    name: 'Adobe Creative Cloud',
    category: 'Core Software',
    level: 98,
    iconName: 'Palette',
    description: 'Photoshop, Illustrator, InDesign, Premiere Pro, Lightroom.'
  },
  {
    name: 'Frontend Creative Coding',
    category: 'Core Software',
    level: 85,
    iconName: 'Code',
    description: 'React, TypeScript, Tailwind CSS, Motion/React, Canvas 2D, WebGL.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: '2023 — Present',
    role: 'Lead Visual Designer & Brand Strategist',
    company: 'Studio Vanguard / AI Creative Lab',
    location: 'San Francisco, CA',
    description: 'Directing brand identity, 3D visual language, and generative AI creative systems for Fortune 500 tech clients and startups.',
    highlights: [
      'Led rebranding for 12 enterprise clients generating $4.2M in agency revenue',
      'Pioneered AI art direction workflows integrating Midjourney with vector precision',
      'Mentored a team of 6 junior graphic designers and motion artists'
    ]
  },
  {
    year: '2021 — 2023',
    role: 'Senior Graphic & Motion Designer',
    company: 'Aetheria Creative Agency',
    location: 'New York, NY',
    description: 'Crafted digital campaigns, editorial magazine layouts, and kinetic social media systems for global lifestyle brands.',
    highlights: [
      'Created viral social media campaign reaching 10M+ impressions',
      'Designed packaging for award-winning craft beverage and luxury skincare brands'
    ]
  },
  {
    year: '2019 — 2021',
    role: 'UI/UX & Brand Identity Designer',
    company: 'Pixel & Geometry Studio',
    location: 'Berlin, Germany',
    description: 'Specialized in design systems, vector logo design, and high-conversion landing page user experiences.',
    highlights: [
      'Built reusable Figma design system adopted by 150+ engineers',
      'Won Red Dot Design Award 2020 for digital product branding'
    ]
  }
];

export const PLAYGROUND_SHAPES: PlaygroundShapeItem[] = [
  {
    id: 'tool-pen-nib',
    name: 'Vector Pen Nib',
    type: 'pen-nib',
    color: '#0EA5E9',
    accentColor: '#38BDF8',
    tagline: 'Precision Anchor Node Control',
    diameterKm: 'Bezier 1.0',
    initialPos: { x: 15, y: 20 }
  },
  {
    id: 'tool-pantone',
    name: 'Pantone Color Swatch',
    type: 'pantone-swatch',
    color: '#D97706',
    accentColor: '#FBBF24',
    tagline: 'PMS Spot Ink System Stack',
    diameterKm: 'PMS 347 C',
    initialPos: { x: 38, y: 55 }
  },
  {
    id: 'tool-layer-stack',
    name: 'Artboard Layer Stack',
    type: 'layer-stack',
    color: '#0D9488',
    accentColor: '#2DD4BF',
    tagline: 'Visual Hierarchy & Opacity Groups',
    diameterKm: 'Vector Group',
    initialPos: { x: 68, y: 22 }
  },
  {
    id: 'tool-bezier-node',
    name: 'Tangential Anchor Node',
    type: 'bezier-node',
    color: '#7C3AED',
    accentColor: '#A78BFA',
    tagline: 'Curvature & Tension Handles',
    diameterKm: 'G2 Smooth',
    initialPos: { x: 82, y: 62 }
  },
  {
    id: 'tool-typography',
    name: 'Typography Matrix',
    type: 'typography-grid',
    color: '#EC4899',
    accentColor: '#F472B6',
    tagline: 'Optical Grid & Kerning Pairs',
    diameterKm: '1.25 Ratio',
    initialPos: { x: 48, y: 18 }
  },
  {
    id: 'tool-prism-mesh',
    name: '3D Volumetric Mesh',
    type: 'prism-shader',
    color: '#2563EB',
    accentColor: '#60A5FA',
    tagline: 'Subsurface Scattering Raytrace',
    diameterKm: 'PBR Shader',
    initialPos: { x: 22, y: 72 }
  }
];
