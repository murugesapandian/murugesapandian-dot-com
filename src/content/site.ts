// Site-wide copy and settings. Edit this file to update text without touching any component.

export const siteMeta = {
  name: 'Murugesapandian Thangaraj',
  shortName: 'MP',
  title: 'Murugesapandian Thangaraj — Senior Engineering & Product Leader, Supply Chain Technology',
  description:
    'Senior engineering and product leader with 20+ years building the execution platforms behind large-scale retail supply chains — WMS/WCS/OMS/TMS, robotics integration, and AI-native operations.',
  url: 'https://murugesapandian.com',
  ogImage: '/og-image.png',
  email: 'murugesapandian@gmail.com',
  linkedin: 'https://www.linkedin.com/in/murugesapandiant/',
  github: 'https://github.com/murugesapandian',
  location: 'Bentonville, Arkansas',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Impact', href: '#impact' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Senior Engineering & Product Leader · Supply Chain Technology',
  heading: 'Murugesapandian Thangaraj',
  sub: 'Building the execution platforms behind large-scale retail supply chains — warehouse systems, automation, and AI-native operations.',
  ctaPrimary: { label: 'View Career Journey', href: '#journey' },
  ctaSecondary: { label: 'Connect on LinkedIn', href: siteMeta.linkedin },
  locationLine: 'Bentonville, Arkansas · Open to relocation (Atlanta · Texas · Kansas) · US-based roles',
};

export type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Years in supply chain technology' },
  { value: 80, suffix: '+', label: 'Fulfillment & distribution centers' },
  { prefix: '$', value: 20, suffix: 'M+', label: 'Annual cost savings delivered' },
  { value: 98, suffix: '%+', label: 'Operational accuracy achieved' },
];

export const about = {
  headline: 'Two decades at the intersection of warehouses, software, and scale.',
  paragraphs: [
    'MP is a senior engineering and product leader with 20+ years building and running the execution platforms behind large-scale retail supply chains, most recently at Walmart and Sam’s Club in Bentonville, Arkansas. He has led WMS/WCS/OMS/TMS platforms across 80+ fulfillment and distribution centers, onboarded seven automation and robotics partners — Locus Robotics, Symbotic, GreyOrange, Dematic, Packsize, Sparck CVP, and IPG — and delivered $20M+ in annual cost savings with 98%+ operational accuracy and a 90% reduction in manual processing.',
    'He holds a Master of Computer Applications (MCA) and the PgMP® program-management credential, with executive education from IIM Ahmedabad (Supply Chain Digitization) and UC Irvine (Supply Chain Planning). Today he builds AI-native tooling — retrieval-augmented generation, MCP servers, and Claude Code-driven workflows — to make supply chain operations faster, safer, and more autonomous.',
  ],
  atAGlance: [
    'Based in Bentonville, AR',
    'MCA, PgMP®',
    'IIM Ahmedabad',
    'UC Irvine',
    'Walmart / Sam’s Club',
    'Mphasis',
    'SoftClouds',
    'TCS',
  ],
};

export type ImpactTile = {
  value: string;
  label: string;
};

export const impact: ImpactTile[] = [
  { value: '$20M+', label: 'Annual cost savings' },
  { value: '90%', label: 'Reduction in manual processing' },
  { value: '98%+', label: 'Operational accuracy' },
  { value: '80+', label: 'DCs & FCs supported' },
  { value: '7', label: 'Automation & robotics partners onboarded' },
  { value: 'Minutes, not hours', label: 'Incident detection-to-escalation with the AI control tower' },
];

export const guidingPrinciples = [
  'Operational truth over dashboards',
  'Build it, prove it, then scale it',
  'Vendors are partners, not tickets',
  'AI should remove toil, not add risk',
];

export const vision = {
  headline: "Where I'm headed.",
  columns: [
    {
      label: "Where I've been",
      body: 'Two decades turning warehouse operations into software: from enterprise Java integration to owning the execution platforms and robotics partnerships that move product through 80+ sites.',
    },
    {
      label: 'Where I am',
      body: 'Operating at the seam between engineering, product, and operations — designing AI-native tooling, incident intelligence, and 0-to-1 concepts like Hybrid Shopping and Autonomous Returns.',
    },
    {
      label: "Where I'm going",
      body: 'Leading engineering and product organizations at the Senior Manager / Director level, building the next generation of autonomous, AI-orchestrated supply chain platforms — where warehouses sense, decide, and act with minimal human intervention.',
    },
  ],
};

export const contact = {
  headline: "Let's build something that moves.",
  line: 'Open to Senior Manager, Director, Principal, and advisory conversations in supply chain technology, automation, and AI-enabled operations.',
  resumeHref: '/resume',
  resumeFile: '/Murugesapandian-Thangaraj-Resume.pdf',
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Murugesapandian Thangaraj · Bentonville, AR`,
};
