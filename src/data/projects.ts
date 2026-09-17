import formaLogo from '../assets/forma.png';
import siifLogo from '../assets/SIIF.png';
import transformaLogo from '../assets/transforma.png';
import type { ImageMetadata } from 'astro';

export interface FeaturedProjectData {
  index: string;
  name: string;
  organization: string;
  badge: string;
  role: string;
  description: string;
  areas: string[];
  privacyNotice: string;
  technologies: string[];
  caseStudyUrl: string;
  logo: ImageMetadata;
  logoAlt: string;
}

export interface SecondaryProjectData {
  index: string;
  name: string;
  subtitle: string;
  organization: string;
  role: string;
  description: string;
  technologies: string[];
  categoryTag: string;
  logo?: ImageMetadata;
  logoAlt?: string;
  hasCustomPlaceholder?: boolean;
}

export const featuredProject: FeaturedProjectData = {
  index: '01 / 04',
  name: 'FORMA',
  organization: 'FUSALMO',
  badge: 'Proyecto Destacado',
  role: 'Desarrollo Integral',
  description: 'Sistema institucional para la centralización y gestión integral de participantes, programas y proyectos.',
  areas: [
    'Inscripción y seguimiento',
    'Gestión de usuarios',
    'Reportes y estadísticas',
    'Programas y proyectos',
    'Grupos y subgrupos',
    'Centralización de datos'
  ],
  privacyNotice: 'Ciertas interfaces y datos no pueden mostrarse públicamente debido a requerimientos de privacidad institucional.',
  technologies: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'CSS', 'MySQL'],
  caseStudyUrl: '/projects/forma',
  logo: formaLogo,
  logoAlt: 'Logo oficial del sistema FORMA'
};

export const secondaryProjects: SecondaryProjectData[] = [
  {
    index: '02 / 04',
    name: 'SIIF',
    subtitle: 'Sistema de Información Institucional',
    organization: 'FUSALMO',
    role: 'Desarrollo en módulos institucionales',
    description: 'Participación en el desarrollo y mantenimiento de módulos institucionales para administración, contabilidad, gestión estratégica y procesos internos.',
    technologies: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'CSS', 'MySQL'],
    categoryTag: 'Plataforma Institucional',
    logo: siifLogo,
    logoAlt: 'Logo oficial de SIIF'
  },
  {
    index: '03 / 04',
    name: 'Transforma',
    subtitle: 'Portales de Educación y Empleo',
    organization: 'FUSALMO',
    role: 'Transforma Edu & Pro',
    description: 'Mantenimiento, soporte e implementación en plataformas WordPress enfocadas en educación e intermediación laboral.',
    technologies: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    categoryTag: 'Plataformas Web',
    logo: transformaLogo,
    logoAlt: 'Logo oficial de Transforma'
  },
  {
    index: '04 / 04',
    name: 'Virtual Party',
    subtitle: 'Plataforma de Evento Interactivo',
    organization: 'FUSALMO',
    role: 'Feria Tecnológica Multidía',
    description: 'Apoyo en montaje de secciones, configuración de stands digitales, navegación e implementación de contenido.',
    technologies: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'CSS'],
    categoryTag: 'Plataforma de Eventos',
    hasCustomPlaceholder: true
  }
];
