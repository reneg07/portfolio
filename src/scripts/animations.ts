import { animate, inView } from 'motion';

/**
 * Initializes progressive enhancements and subtle animations using Motion.
 * Respects prefers-reduced-motion: reduce by exiting early.
 * Layout and base styles do not depend on this script.
 */
export function initAnimations(): void {
  // Exit immediately if user prefers reduced motion or window is undefined
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // 1. Hero Subtle Entrance Stagger
  const heroMeta = document.querySelector('.hero-meta');
  const heroRole = document.querySelector('.hero-role');
  const heroTitle = document.querySelector('.hero-title');
  const heroStatements = document.querySelector('.hero-statements');

  if (heroTitle) {
    if (heroMeta) {
      animate(heroMeta, { opacity: [0, 1], y: [10, 0] }, { duration: 0.5, delay: 0.05 });
    }
    if (heroRole) {
      animate(heroRole, { opacity: [0, 1], y: [12, 0] }, { duration: 0.5, delay: 0.15 });
    }
    animate(heroTitle, { opacity: [0, 1], y: [16, 0] }, { duration: 0.6, delay: 0.25 });
    if (heroStatements) {
      animate(heroStatements, { opacity: [0, 1], y: [14, 0] }, { duration: 0.5, delay: 0.4 });
    }
  }

  // 2. Sections Reveal with inView
  const sections = document.querySelectorAll('section:not(#hero)');
  sections.forEach((section) => {
    inView(
      section,
      () => {
        animate(
          section,
          { opacity: [0.05, 1], y: [18, 0] },
          { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
        );
      },
      { margin: '-40px 0px -40px 0px' }
    );
  });

  // 3. Project Cards Viewport Stagger
  const cards = document.querySelectorAll('.project-card');
  if (cards.length > 0) {
    inView(
      '#work',
      () => {
        cards.forEach((card, index) => {
          animate(
            card,
            { opacity: [0.1, 1], y: [16, 0] },
            { duration: 0.5, delay: index * 0.08, ease: 'easeOut' }
          );
        });
      },
      { margin: '-30px 0px' }
    );
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
