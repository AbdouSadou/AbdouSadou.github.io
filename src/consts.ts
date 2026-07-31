// Shared site constants — single source of truth for identity and links.
// TODO before launch: confirm the LinkedIn URL and credential links (spec §11).

export const SITE = {
  title: 'Abdou Sadou · Data Governance & BI Consultant',
  description:
    'Data governance, master data management, BI and big data consultant and university lecturer in West Yorkshire, United Kingdom. I make data trustworthy: frameworks, pipelines and dashboards.',
  author: 'Abdou Sadou',
  role: 'Data Consultant & University Lecturer',
  location: 'West Yorkshire, United Kingdom',
  email: 'sadou.m.abderrahmane@gmail.com',
  linkedin: 'https://www.linkedin.com/in/asadou',
  github: 'https://github.com/AbdouSadou',
  cvPath: '/CV.pdf',
  /** French CV: separate asset, same data-minimisation rules (no phone/address) */
  cvPathFr: '/CV-FR.pdf',
} as const;

export const NAV_ITEMS = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Teaching', href: '/#teaching' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
