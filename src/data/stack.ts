export interface StackCategory {
  category: string;
  technologies: string[];
}

export const stackCategories: StackCategory[] = [
  {
    category: 'Development',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Astro']
  },
  {
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'jQuery']
  },
  {
    category: 'Database',
    technologies: ['MySQL']
  },
  {
    category: 'CMS',
    technologies: ['WordPress']
  },
  {
    category: 'Tools',
    technologies: ['Git', 'GitHub']
  }
];
