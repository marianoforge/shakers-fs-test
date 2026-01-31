export interface MockProject {
  id: number;
  title: string;
  organization: {
    name: string;
    logo: string;
  };
  category: string;
  subcategory?: string | undefined;
  budget: {
    total: number | null;
    hourFrom: number | null;
    hourTo: number | null;
  };
  skills: string[];
}

export const mockProjects: MockProject[] = [
  {
    id: 1,
    title: 'Diseña una app movil para un SaaS de contabilidad',
    organization: {
      name: 'HappyBrand',
      logo: '/logos/logos_happybrand.png',
    },
    category: 'Desarrollo de apps',
    subcategory: 'Educación',
    budget: { total: null, hourFrom: 25, hourTo: 35 },
    skills: ['React', 'Gitlab', 'Next.js', 'Figma'],
  },
  {
    id: 2,
    title: 'Desarrolla una plataforma de e-learning',
    organization: {
      name: 'TechSolutions',
      logo: '/logos/logos_tech_solutions.png',
    },
    category: 'Desarrollo web',
    subcategory: undefined,
    budget: { total: null, hourFrom: 30, hourTo: 40 },
    skills: ['Vue.js', 'GitHub', 'Node.js', 'Adobe XD'],
  },
  {
    id: 3,
    title: 'Crea un CRM personalizado para pymes',
    organization: {
      name: 'Uber',
      logo: '/logos/logos_uber.png',
    },
    category: 'Negocios',
    subcategory: undefined,
    budget: { total: null, hourFrom: 20, hourTo: 30 },
    skills: ['Angular', 'Bitbucket', 'Express.js', 'Sketch'],
  },
  {
    id: 4,
    title: 'Desarrollar una estrategia de marketing digital',
    organization: {
      name: 'Brand',
      logo: '/logos/logos_brand.png',
    },
    category: 'Marketing',
    subcategory: 'Estrategia',
    budget: { total: null, hourFrom: 25, hourTo: 35 },
    skills: ['Google Ads', 'Trello', 'SEO', 'Adobe Illustrator'],
  },
  {
    id: 5,
    title: 'Diseñar una interfaz de usuario para la nueva aplicación',
    organization: {
      name: 'Spotify',
      logo: '/logos/logos_spotify.png',
    },
    category: 'Diseño',
    subcategory: 'UX/UI',
    budget: { total: 25000, hourFrom: null, hourTo: null },
    skills: ['Figma', 'Jira', 'HTML/CSS', 'InVision'],
  },
  {
    id: 6,
    title: 'Implementar un sistema de gestión de contenidos',
    organization: {
      name: 'Airbnb',
      logo: '/logos/logos_airbnb.png',
    },
    category: 'Desarrollo',
    subcategory: 'Tecnología',
    budget: { total: null, hourFrom: 22, hourTo: 32 },
    skills: ['React', 'GitHub', 'Node.js', 'Adobe XD'],
  },
];
