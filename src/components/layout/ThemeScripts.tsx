'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/*
 * Port of the WordPress theme scripts (assets/js/*.js): menu, popups, spollers (accordions),
 * scroll animations, sticky columns, Swiper sliders and the Matter.js "falling icons" on /cases.
 * Everything is (re)bound after each client-side navigation and cleaned up before the next one.
 */
export default function ThemeScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(t: Window, type: K, fn: (e: WindowEventMap[K]) => void) =>
      t.addEventListener(type, fn as EventListener, { signal });
    const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
      Array.from(root.querySelectorAll<T>(sel) as unknown as T[]);

    initMenu($$, signal);
    initPreventDefaultLinks($$, signal);
    initPopups($$, signal);
    initSpollers($$, signal, cleanups);
    initScrollAnimations($$, on, cleanups);
    initSticky('.qwerty', '.home-assist__col-01', on);
    initSticky('.qwerty-1', '.home-projects__col-01', on);
    initMatter($$, on, cleanups);
    initSliders($$, cleanups);

    return () => {
      ac.abort();
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}

type Q = <T extends Element = HTMLElement>(sel: string, root?: ParentNode) => T[];
type On = <K extends keyof WindowEventMap>(t: Window, type: K, fn: (e: WindowEventMap[K]) => void) => void;

/* ---------- header menu (script.js) ---------- */
function initMenu($$: Q, signal: AbortSignal) {
  const btn = document.querySelector<HTMLElement>('.header__btn-menu');
  const panels = $$('.header__menu-desktop, .header__menu-mobile');
  // Close the menu after navigating to another page.
  btn?.classList.remove('_active');
  panels.forEach((p) => p.classList.remove('_active'));

  btn?.addEventListener(
    'click',
    () => {
      btn.classList.toggle('_active');
      panels.forEach((p) => p.classList.toggle('_active'));
    },
    { signal },
  );

  // Desktop: open sub-menus on hover.
  for (const id of ['menu-item-321', 'menu-item-57']) {
    $$(`#${id}`).forEach((li) => {
      li.addEventListener('mouseenter', () => toggleSub(li, true), { signal });
      li.addEventListener('mouseleave', () => toggleSub(li, false), { signal });
    });
  }

  // Mobile (<= 992px): tap on the parent item opens its sub-menu.
  if (window.matchMedia('(max-width: 992px)').matches) {
    $$('.menu-item-321, .menu-item-249').forEach((li) => {
      li.addEventListener(
        'click',
        (e) => {
          // Only the parent link toggles; links inside the sub-menu navigate normally.
          if ((e.target as Element).closest('.sub-menu')) return;
          e.preventDefault();
          li.classList.toggle('_active');
          li.querySelector('.sub-menu')?.classList.toggle('_active');
        },
        { signal },
      );
    });
  }
}

function toggleSub(li: Element, open: boolean) {
  li.classList.toggle('_active', open);
  li.querySelector('.sub-menu')?.classList.toggle('_active', open);
}

function initPreventDefaultLinks($$: Q, signal: AbortSignal) {
  $$('.home-hero__link-portfolio, .home-projects__col-03 a, .home-projects__col-04 a').forEach((a) =>
    a.addEventListener('click', (e) => e.preventDefault(), { signal }),
  );
}

/* ---------- popups (popup.js) ---------- */
let unlock = true;

function lockBody(lock: boolean, delay = 500) {
  if (!unlock) return;
  const body = document.body;
  const wrapper = document.querySelector<HTMLElement>('.wrapper');
  const lp = Array.from(document.querySelectorAll<HTMLElement>('._lp'));
  if (lock) {
    const pad = `${window.innerWidth - (wrapper?.offsetWidth ?? window.innerWidth)}px`;
    lp.forEach((el) => (el.style.paddingRight = pad));
    body.style.paddingRight = pad;
    body.classList.add('_lock');
  } else {
    setTimeout(() => {
      lp.forEach((el) => (el.style.paddingRight = '0px'));
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
    }, delay);
  }
  unlock = false;
  setTimeout(() => (unlock = true), delay);
}

function closePopup(popup?: Element | null, bodyUnlock = true) {
  if (!unlock) return;
  const targets = popup ? [popup] : Array.from(document.querySelectorAll('.popup'));
  targets.forEach((p) => {
    const video = p.querySelector('.popup__video');
    if (video) video.innerHTML = '';
    p.classList.remove('_active');
  });
  if (bodyUnlock) lockBody(false);
  if (location.hash) history.replaceState(history.state, '', location.pathname + location.search);
}

function openPopup(name: string, video?: string | null) {
  const popup = document.querySelector(`.popup_${name}`);
  if (!popup || !unlock) return;
  if (document.querySelector('.popup._active')) closePopup(null, false);
  if (video) {
    const holder = document.querySelector('.popup_video .popup__video');
    if (holder) holder.innerHTML = `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(video)}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  }
  lockBody(true);
  popup.classList.add('_active');
  history.replaceState(history.state, '', `#${name}`);
}

function initPopups($$: Q, signal: AbortSignal) {
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as Element;
      const link = target.closest<HTMLAnchorElement>('._popup-link');
      if (link) {
        e.preventDefault();
        if (!unlock) return;
        const name = (link.getAttribute('href') || '').replace('#', '');
        const pack = link.getAttribute('data-pack');
        if (pack) {
          const planEl = document.querySelector(`.popup.popup_${name} .popup-plan__plan`);
          if (planEl) planEl.textContent = pack;
        }
        openPopup(name, link.getAttribute('data-video'));
        return;
      }
      const popup = target.closest('.popup');
      if (popup && (!target.closest('.popup__body') || target.closest('.popup__close, ._popup-close'))) {
        closePopup(popup);
      }
    },
    { signal },
  );
  document.addEventListener('keydown', (e) => e.code === 'Escape' && closePopup(), { signal });

  // Open a popup (or scroll to a block) from the URL hash, like the original site.
  const hash = location.hash.replace('#', '');
  if (hash && /^[\w-]+$/.test(hash)) {
    if (document.querySelector(`.popup_${hash}`)) openPopup(hash);
    else document.querySelector(`div.${hash}`)?.scrollIntoView({ behavior: 'smooth' });
  }
  void $$;
}

/* ---------- spollers / accordions (accordion.js) ---------- */
function slide(target: HTMLElement, open: boolean, duration = 500) {
  if (target.classList.contains('_slide')) return;
  target.classList.add('_slide');
  const s = target.style;
  if (open) {
    target.hidden = false;
    const h = target.offsetHeight;
    Object.assign(s, { overflow: 'hidden', height: '0', paddingTop: '0', paddingBottom: '0', marginTop: '0', marginBottom: '0' });
    void target.offsetHeight;
    Object.assign(s, { transitionProperty: 'height, margin, padding', transitionDuration: `${duration}ms`, height: `${h}px` });
    ['padding-top', 'padding-bottom', 'margin-top', 'margin-bottom'].forEach((p) => s.removeProperty(p));
  } else {
    Object.assign(s, { transitionProperty: 'height, margin, padding', transitionDuration: `${duration}ms`, height: `${target.offsetHeight}px` });
    void target.offsetHeight;
    Object.assign(s, { overflow: 'hidden', height: '0', paddingTop: '0', paddingBottom: '0', marginTop: '0', marginBottom: '0' });
  }
  window.setTimeout(() => {
    if (!open) target.hidden = true;
    ['height', 'overflow', 'transition-duration', 'transition-property', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom'].forEach((p) => s.removeProperty(p));
    target.classList.remove('_slide');
  }, duration);
}

function initSpollers($$: Q, signal: AbortSignal, cleanups: Array<() => void>) {
  const blocks = $$('[data-spollers]');
  const setBody = (block: HTMLElement, hide: boolean) =>
    $$('[data-spoller]', block).forEach((title) => {
      const body = title.nextElementSibling as HTMLElement | null;
      if (!body) return;
      if (hide) {
        title.removeAttribute('tabindex');
        if (!title.classList.contains('_active')) body.hidden = true;
      } else {
        title.setAttribute('tabindex', '-1');
        body.hidden = false;
      }
    });

  const onClick = (e: Event) => {
    const title = (e.target as Element).closest<HTMLElement>('[data-spoller]');
    if (!title) return;
    const block = title.closest<HTMLElement>('[data-spollers]');
    if (!block || !block.classList.contains('_init') || block.querySelector('._slide')) return;
    e.preventDefault();
    if (block.hasAttribute('data-one-spoller') && !title.classList.contains('_active')) {
      const active = block.querySelector<HTMLElement>('[data-spoller]._active');
      if (active) {
        active.classList.remove('_active');
        slide(active.nextElementSibling as HTMLElement, false);
      }
    }
    title.classList.toggle('_active');
    const body = title.nextElementSibling as HTMLElement;
    slide(body, body.hidden);
  };

  blocks.forEach((block) => {
    // data-spollers="992,max" -> only active below 992px.
    const [bp, type = 'max'] = (block.dataset.spollers || '').split(',').map((v) => v.trim());
    const apply = (active: boolean) => {
      block.classList.toggle('_init', active);
      setBody(block, active);
    };
    block.addEventListener('click', onClick, { signal });
    if (!bp) {
      apply(true);
      return;
    }
    const mq = window.matchMedia(`(${type}-width: ${bp}px)`);
    const listener = () => apply(mq.matches);
    mq.addEventListener('change', listener);
    cleanups.push(() => mq.removeEventListener('change', listener));
    apply(mq.matches);
  });
}

/* ---------- scroll animations (animations.js) ---------- */
function initScrollAnimations($$: Q, on: On, cleanups: Array<() => void>) {
  const items = $$('._anim-items');
  if (items.length) {
    const check = () => {
      for (const item of items) {
        const h = item.offsetHeight;
        const top = item.getBoundingClientRect().top + window.scrollY;
        const start = 4;
        let point = window.innerHeight - h / start;
        if (h > window.innerHeight) point = window.innerHeight - window.innerHeight / start;
        if (window.scrollY > top - point && window.scrollY < top + h) item.classList.add('_active');
        else if (!item.classList.contains('_anim-no-hide')) item.classList.remove('_active');
      }
    };
    on(window, 'scroll', check);
    const t = setTimeout(check, 300);
    cleanups.push(() => clearTimeout(t));
  }

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('element-show')),
    { threshold: [0.5] },
  );
  $$('.element-animation').forEach((el) => observer.observe(el));
  cleanups.push(() => observer.disconnect());
}

/* ---------- sticky column on the home page (script.js) ---------- */
function initSticky(stickySel: string, colSel: string, on: On) {
  const sticky = document.querySelector<HTMLElement>(stickySel);
  const col = document.querySelector<HTMLElement>(colSel);
  if (!sticky || !col) return;
  const set = (position: string, top: string, left: string, bottom: string) =>
    Object.assign(sticky.style, { position, top, left, bottom });

  on(window, 'scroll', () => {
    if (window.innerWidth <= 992) return set('static', 'auto', 'auto', 'auto');
    const colTop = col.getBoundingClientRect().top + window.scrollY;
    const end = colTop + col.offsetHeight - sticky.offsetHeight;
    const y = window.scrollY;
    if (y >= colTop && y <= end) set('fixed', '0', 'auto', 'auto');
    else if (y > end) set('absolute', 'auto', '0', '0');
    else set('static', 'auto', 'auto', 'auto');
  });
}

/* ---------- falling social icons on /cases (animation-social.js) ---------- */
function initMatter($$: Q, on: On, cleanups: Array<() => void>) {
  const container = document.querySelector<HTMLElement>('.cases-media__content');
  if (!container) return;
  let started = false;

  const inViewport = (el: Element) => {
    const r = el.getBoundingClientRect();
    return r.top >= 0 && r.left >= 0 && r.bottom <= window.innerHeight && r.right <= window.innerWidth;
  };

  const start = async () => {
    if (started) return;
    started = true;
    const Matter = (await import('matter-js')).default;
    const engine = Matter.Engine.create();
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const t = 100;
    const wall = { isStatic: true, render: { visible: false } };
    Matter.Composite.add(engine.world, [
      Matter.Bodies.rectangle(width / 2, height + t / 2, width + 2 * t, t, wall),
      Matter.Bodies.rectangle(width + t / 2, height / 2, t, height, wall),
      Matter.Bodies.rectangle(-t / 2, height / 2, t, height, wall),
    ]);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    $$('.circle', container).forEach((circle) => {
      const img = circle.querySelector('img');
      if (!img) return;
      const radius = Math.max(img.width, img.height) / 2;
      const ball = Matter.Bodies.circle(circle.offsetLeft + radius, circle.offsetTop + radius, radius, {
        friction: 0.001,
        restitution: 0.5,
        density: 0.001,
      });
      if (ball.render.sprite) ball.render.sprite.texture = (isMobile && img.getAttribute('data-mobile-src')) || img.src;
      Matter.Composite.add(engine.world, ball);
      circle.style.display = 'none';
    });
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    const render = Matter.Render.create({ element: container, canvas, engine, options: { width, height, wireframes: false, background: 'transparent' } });
    Matter.Render.run(render);
    cleanups.push(() => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      canvas.remove();
    });
  };

  const check = () => inViewport(container) && start();
  on(window, 'scroll', check);
  check();
}

/* ---------- sliders (Swiper; replaced slick from script.js) ---------- */
type SwiperT = import('swiper').Swiper;

// Turn an already rendered slider (".agency-slider > .agency-slider__item") into Swiper markup in place,
// the way slick did, so the page markup stays the same. Returns a function that restores it.
function prepareSwiper(root: HTMLElement, cloneTimes = 0): () => void {
  const items = Array.from(root.children) as HTMLElement[];
  const wrapper = document.createElement('div');
  wrapper.className = 'swiper-wrapper';
  items.forEach((item) => {
    item.classList.add('swiper-slide');
    wrapper.appendChild(item);
  });
  // Swiper's loop needs more slides than fit on screen: add copies (like slick's clones).
  const clones: HTMLElement[] = [];
  for (let n = 0; n < cloneTimes; n++) {
    items.forEach((item) => {
      const c = item.cloneNode(true) as HTMLElement;
      c.setAttribute('aria-hidden', 'true');
      c.dataset.clone = '';
      c.querySelectorAll('a').forEach((a) => a.setAttribute('tabindex', '-1'));
      clones.push(c);
      wrapper.appendChild(c);
    });
  }
  root.classList.add('swiper');
  root.appendChild(wrapper);
  return () => {
    clones.forEach((c) => c.remove());
    items.forEach((item) => {
      item.classList.remove('swiper-slide', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev');
      item.removeAttribute('style');
      root.insertBefore(item, wrapper);
    });
    wrapper.remove();
    root.classList.remove('swiper');
  };
}

function initSliders($$: Q, cleanups: Array<() => void>) {
  const agency = document.querySelector<HTMLElement>('.agency-slider');
  const assist = document.querySelector<HTMLElement>('.home-assist-slider');
  const journal = document.querySelector<HTMLElement>('.slider-journal');
  const journalNav = document.querySelector<HTMLElement>('.slider-journal-nav');
  if (!agency && !assist && !journal) return;

  let cancelled = false;
  const instances: Array<{ swiper: SwiperT; restore: () => void }> = [];
  const destroyAll = () => {
    instances.splice(0).forEach(({ swiper, restore }) => {
      swiper.destroy(true, true);
      restore();
    });
  };
  cleanups.push(() => {
    cancelled = true;
    destroyAll();
  });

  (async () => {
    const [{ default: Swiper }, { Navigation }] = await Promise.all([import('swiper'), import('swiper/modules')]);
    if (cancelled) return;
    const make = (el: HTMLElement, opts: ConstructorParameters<typeof Swiper>[1], cloneTimes = 0) => {
      const restore = prepareSwiper(el, cloneTimes);
      const swiper = new Swiper(el, opts);
      instances.push({ swiper, restore });
      return swiper;
    };

    // Agency: slides of different widths, arrows, endless.
    if (agency) {
      make(
        agency,
        {
          modules: [Navigation],
          slidesPerView: 'auto',
          speed: 800,
          loop: true,
          navigation: { prevEl: '.agency-slider__btn-prev', nextEl: '.agency-slider__btn-next' },
        },
        2,
      );
    }

    // "How do we assist": a slider only on screens <= 992px (a grid on desktop), as before.
    if (assist && window.innerWidth <= 992) {
      make(assist, {
        modules: [Navigation],
        slidesPerView: 1,
        loop: true,
        navigation: { prevEl: '.home-assist-slider__btn-prev', nextEl: '.home-assist-slider__btn-next' },
      });
    }

    // Journal on the home page / FAQ: main slider + thumbnails strip, kept in sync both ways.
    if (journal) {
      const count = journal.children.length;
      const main = make(journal, { slidesPerView: 'auto', speed: 300, loop: true }, 2);
      if (journalNav) {
        const nav = make(journalNav, { slidesPerView: 'auto', speed: 300, loop: true, slideToClickedSlide: true }, 2);
        let syncing = false;
        const sync = (to: SwiperT, index: number) => {
          if (syncing) return;
          syncing = true;
          to.slideToLoop(index % count);
          syncing = false;
        };
        main.on('realIndexChange', () => sync(nav, main.realIndex));
        nav.on('realIndexChange', () => sync(main, nav.realIndex));
      }
    }
  })();
  void $$;
}
