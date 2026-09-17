import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://reneg07.github.io',
  base: '/portfolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
