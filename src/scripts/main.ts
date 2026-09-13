// Small, dependency-free progressive enhancements for the whole site:
// mobile menu, scroll-spy nav, scroll reveal, animated counters, and the
// gold "flow line" draw-on. Everything here degrades gracefully with JS off
// (content stays visible; see the `.js` gate in global.css for reveal/flow).

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Supply-chain backdrop video ------------------------------------------
// Reduced motion: freeze on the poster-equivalent first frame instead of
// autoplaying the loop. Also pause when the tab is hidden to save power.
const backdropVideo = document.querySelector<HTMLVideoElement>('.supply-chain-video');
if (backdropVideo) {
  if (prefersReducedMotion) {
    backdropVideo.pause();
  }
  document.addEventListener('visibilitychange', () => {
    if (prefersReducedMotion) return;
    if (document.hidden) backdropVideo.pause();
    else backdropVideo.play().catch(() => {});
  });
}

// --- Theme toggle -----------------------------------------------------
// Multiple toggle buttons can exist on a page (header + footer); all share
// the same global data-theme attribute, so no per-button state is needed.
document.querySelectorAll('.theme-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});

// --- Mobile menu --------------------------------------------------------
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mobileMenu?.toggleAttribute('hidden', expanded);
});
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.setAttribute('hidden', '');
  });
});

// --- Scroll-spy nav highlighting -----------------------------------------
// Nav links appear twice (desktop + mobile menu) and share hrefs, so match
// and update every link with a given href, not just the first.
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
const uniqueHrefs = Array.from(new Set(navLinks.map((l) => l.getAttribute('href') ?? '')));
const sections = uniqueHrefs
  .map((href) => document.querySelector(href))
  .filter((el): el is Element => el !== null);

if (sections.length && 'IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((l) => l.removeAttribute('aria-current'));
        navLinks
          .filter((l) => l.getAttribute('href') === id)
          .forEach((l) => l.setAttribute('aria-current', 'true'));
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
  );
  sections.forEach((section) => spy.observe(section));
}

// --- Scroll reveal --------------------------------------------------------
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  revealEls.forEach((el) => revealer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// --- Flow line draw-on ----------------------------------------------------
const flowPaths = document.querySelectorAll('.flow-path');
if ('IntersectionObserver' in window) {
  const drawer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-drawn');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  flowPaths.forEach((el) => drawer.observe(el));
} else {
  flowPaths.forEach((el) => el.classList.add('is-drawn'));
}

// --- Animated stat counters -------------------------------------------------
type CounterEl = HTMLElement & { dataset: { value: string; prefix?: string; suffix?: string } };

function animateCounter(el: CounterEl) {
  const target = Number(el.dataset.value);
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';

  if (prefersReducedMotion || Number.isNaN(target)) {
    el.textContent = `${prefix}${target}${suffix}`;
    return;
  }

  const duration = 1200;
  const start = performance.now();

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = `${prefix}${current}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counters = document.querySelectorAll<CounterEl>('.counter');
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as CounterEl);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((el) => counterObserver.observe(el));
} else {
  counters.forEach((el) => animateCounter(el));
}
