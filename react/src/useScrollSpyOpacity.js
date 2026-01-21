// useScrollSpyOpacity.js
import { useEffect, useRef } from 'react';

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}

// How much of the section is inside the viewport? -> 0–1
function computeVisibility(bounds, viewportH) {
  const top = bounds.top;
  const bottom = bounds.bottom;

  const overlap = Math.min(viewportH, bottom) - Math.max(0, top);
  if (overlap <= 0) return 0;

  // Normalize by viewport height (works nicely for long sections)
  return clamp01(overlap / viewportH);
}

export default function useScrollSpyOpacity(
  sectionIds,
  { offsetPx = 16, onVisibilityChange } = {},
) {
  const navRef = useRef(null);

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    // Cache section elements and their links
    const sectionEls = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const linksById = new Map();
    sectionIds.forEach((id) => {
      const link = navEl.querySelector(`a[href="#${CSS.escape(id)}"]`);
      if (link) linksById.set(id, link);
    });

    const minOpacity = 0.2;

    const updateAll = () => {
      const vh = window.innerHeight || 1;

      for (const el of sectionEls) {
        const id = el.id;
        const link = linksById.get(id);
        if (!link) continue;

        const bounds = el.getBoundingClientRect();
        const visibility = computeVisibility(bounds, vh); // 0–1
        const eased = easeOutQuad(visibility);

        const opacity = minOpacity + (1 - minOpacity) * eased;

        // 🔁 Always update the inline opacity
        // link.style.opacity = opacity.toFixed(2);
        link.style.setProperty('--nav-opacity', opacity.toFixed(2));

        if (typeof onVisibilityChange === 'function') {
          onVisibilityChange(id, visibility);
        }
      }
    };

    // Run once so initial state is correct
    updateAll();

    window.addEventListener('scroll', updateAll, { passive: true });
    window.addEventListener('resize', updateAll);

    return () => {
      window.removeEventListener('scroll', updateAll);
      window.removeEventListener('resize', updateAll);

      // Reset nav opacities on cleanup
      for (const [, link] of linksById) {
        link.style.setProperty('--nav-opacity', '0.2');
      }
    };
  }, [sectionIds, offsetPx, onVisibilityChange]);

  return navRef;
}
