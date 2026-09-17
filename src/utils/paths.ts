/**
 * Resolves an internal application path respecting Astro's configured BASE_URL.
 * Supports clean concatenation without duplicate slashes.
 */
export function resolvePath(path: string = ''): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;

  if (path.startsWith('#')) {
    return `${cleanBase}/${path}`;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}` || '/';
}

/**
 * Returns the anchor link for section navigation.
 * When on an internal page, prefixes with BASE_URL so the browser navigates back to Home.
 */
export function getSectionLink(sectionId: string, currentPath: string = '/'): string {
  const isHome = currentPath === '/' || currentPath === import.meta.env.BASE_URL || currentPath === '';
  const hash = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;

  if (isHome) {
    return hash;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${cleanBase}/${hash}`;
}
