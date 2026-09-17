export interface StackCategory {
  category: string;
  technologies: string[];
}

export const stackCategories: StackCategory[] = [
  {
    category: 'Desarrollo',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Astro']
  },
  {
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'jQuery']
  },
  {
    category: 'Bases de Datos',
    technologies: ['MySQL']
  },
  {
    category: 'CMS',
    technologies: ['WordPress']
  },
  {
    category: 'Herramientas',
    technologies: ['Git', 'GitHub']
  }
];
