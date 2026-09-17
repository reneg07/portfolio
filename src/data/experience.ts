export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    period: '2021',
    role: 'Primera Experiencia Profesional',
    organization: 'FUSALMO',
    description: 'Prácticas profesionales y primeros proyectos en un entorno profesional.'
  },
  {
    period: '2023 — Finales de 2024',
    role: 'Programador JR',
    organization: 'FUSALMO',
    description: 'Desarrollo, mantenimiento y evolución de sistemas institucionales.'
  },
  {
    period: 'Finales de 2024 — Presente',
    role: 'Programador con Enfoque en Monitoreo',
    organization: 'FUSALMO',
    description: 'Desarrollo y mantenimiento de sistemas de información, seguimiento, reportería y plataformas digitales.'
  },
  {
    period: 'Presente',
    role: 'Co-Fundador',
    organization: 'KeeyCode',
    description: 'Nuevo paso profesional orientado al desarrollo de proyectos y soluciones digitales propias.'
  }
];
