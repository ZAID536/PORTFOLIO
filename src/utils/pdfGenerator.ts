export function generateResumeDownload() {
  const resumeText = `
===================================================================
ZAID ZAMAN — GRAPHIC DESIGNER & VISUAL ARCHITECT
San Francisco, CA | zaid.zaman.design@example.com | +1 (415) 890-2341
Portfolio: https://zaidzaman.design | Behance: /zaidzaman | Dribbble: /zaidzaman
===================================================================

SUMMARY
Creative Visual Architect and Lead Designer with 8+ years of experience sculpting brand identities, 3D kinetic systems, and AI-assisted art direction. Specialized in translating complex tech concepts into tactile brand systems.

CORE EXPERTISE
• Brand Strategy & Architecture: Logo Design, Brand Guidelines, Typography Systems
• 3D & Generative AI: Three.js, Blender, Cinema 4D, Midjourney v6, ComfyUI, ControlNet
• Digital & UI/UX: Figma Design Systems, Motion Graphics, Responsive Interfaces
• Software Stack: Adobe Creative Cloud (Illustrator, Photoshop, InDesign, After Effects), React, Tailwind CSS

EXPERIENCE
-------------------------------------------------------------------
Lead Visual Designer & Brand Strategist | Studio Vanguard (2023 — Present)
• Directed visual identity and 3D brand architecture for Fortune 500 technology clients.
• Generated $4.2M agency revenue through 12 complete brand redesigns.
• Pioneered generative AI art direction workflows combining Midjourney with vector precision.

Senior Graphic & Motion Designer | Aetheria Creative Agency (2021 — 2023)
• Designed viral social media campaign reaching 10M+ organic impressions.
• Engineered eco-friendly packaging systems for luxury cosmetic brands.

UI/UX & Brand Identity Designer | Pixel & Geometry Studio (2019 — 2021)
• Built comprehensive Figma design system adopted by 150+ engineers.
• Winner of Red Dot Design Award 2020 for digital product branding.

EDUCATION
-------------------------------------------------------------------
Bachelor of Fine Arts (BFA) in Graphic Design
Rhode Island School of Design (RISD) | Graduated with Honors
===================================================================
  `.trim();

  const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Zaid_Zaman_Graphic_Designer_Resume_2026.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
