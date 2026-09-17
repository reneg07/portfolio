export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    period: '2021',
    role: 'First Professional Experience',
    organization: 'FUSALMO',
    description: 'Prácticas profesionales y primeros proyectos en un entorno profesional.'
  },
  {
    period: '2023 — Late 2024',
    role: 'Programador JR',
    organization: 'FUSALMO',
    description: 'Desarrollo, mantenimiento y evolución de sistemas institucionales.'
  },
  {
    period: 'Late 2024 — Present',
    role: 'Programador con Enfoque en Monitoreo',
    organization: 'FUSALMO',
    description: 'Desarrollo y mantenimiento de sistemas de información, seguimiento, reportería y plataformas digitales.'
  },
  {
    period: 'Present',
    role: 'Co-Founder',
    organization: 'KeeyCode',
    description: 'Nuevo paso profesional orientado al desarrollo de proyectos y soluciones digitales propias.'
  }
];
