export interface EducationItem {
  institution: string;
  degree: string;
  status: string;
  isCurrent?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export const educations: EducationItem[] = [
  {
    institution: 'Universidad Don Bosco',
    degree: 'Ingeniería en Ciencias de la Computación',
    status: 'En curso · Cuarto año',
    isCurrent: true
  },
  {
    institution: 'Universidad Don Bosco',
    degree: 'Técnico en Ingeniería en Computación',
    status: 'Completado'
  },
  {
    institution: 'Colegio Don Bosco',
    degree: 'Bachillerato Técnico Vocacional en Sistemas Informáticos',
    status: 'Completado'
  }
];

export const certifications: CertificationItem[] = [
  {
    title: 'HTML5 Application Development',
    issuer: 'Certiport'
  },
  {
    title: 'HTML & CSS',
    issuer: 'Certiport'
  },
  {
    title: 'JavaScript',
    issuer: 'Certiport'
  },
  {
    title: 'Python',
    issuer: 'Certiport'
  }
];
