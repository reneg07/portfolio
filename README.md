# Portafolio Profesional — René Guevara

> Full-Stack Software Developer · Co-Founder at KeeyCode · San Salvador, El Salvador

Portafolio profesional estático de alto rendimiento construido con **Astro**, **Tailwind CSS v4**, **TypeScript** y **Motion**, siguiendo una dirección visual *Architectural Editorial + Minimal Technology Portfolio*.

---

## 🛠️ Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / MPA)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) vía `@tailwindcss/vite`
- **Tipografía**: [Geist](https://vercel.com/font)
- **Animaciones**: [Motion](https://motion.dev/) (mejora progresiva con soporte estricto a `prefers-reduced-motion`)
- **Imágenes**: Optimización nativa con `astro:assets` (WebP)
- **Despliegue**: GitHub Pages mediante GitHub Actions

---

## 📁 Estructura del Proyecto

```text
src/
├── assets/          # Logos e imágenes optimizadas (forma.png, SIIF.png, transforma.png)
├── components/
│   ├── home/        # Secciones modulares del Home (Hero, SelectedWork, About, etc.)
│   ├── layout/      # Header, Footer, Container
│   ├── projects/    # FeaturedProject (FORMA), ProjectCard
│   └── ui/          # SEO, ExternalLink
├── data/            # Datos estructurados y tipados (projects, experience, education, stack)
├── layouts/         # BaseLayout con soporte nativo para View Transitions
├── pages/           # Rutas estáticas (index.astro)
├── scripts/         # Animaciones progresivas con Motion
├── styles/          # global.css con tokens @theme y reset suizo (0px radius)
└── utils/           # Helper para resolución dinámica de BASE_URL
```

---

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Validar tipos y sintaxis
npm run check

# Compilar para producción
npm run build

# Previsualizar compilación estática
npm run preview
```

---

## 📄 Licencia

© René Guevara. Todos los derechos reservados.
