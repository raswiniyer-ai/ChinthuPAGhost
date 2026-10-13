import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brand, footerActivities, footerDestinations, quickLinks, WA } from '../data/site';
import { useEnquiry } from './Enquiry';

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const THEME_KEY = 'ltd-theme';

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) };
}

const LINKS = [
  { to: '/destinations', label: 'Destinations' },
  { to: '/packages', label: 'Packages' },
  { to: '/aboutus', label: 'About' },
  { to: '/blogs', label: 'Journal' },
  { to: '/channel-partner', label: 'Partners' },
  { to: '/contactus', label: 'Contact' },
];

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { openWith } = useEnquiry();
  const { theme, toggle } = useTheme();
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [loc.pathname]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menu);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [menu]);

  return (
    <>
      <header className={`nav-shell ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav">
          <Link to="/" className="brandmark" aria-label="Live The Day Holidays home">
            <span className="dot">L</span>
            <span>
              <b>Live The Day</b>
              <small>Holidays · Kochi</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-tools">
            <button className="icon-btn" onClick={toggle} aria-label="Switch colour mode" title="Switch colour mode">
              {theme === 'dark' ? '☾' : '☀'}
            </button>
            <a className="icon-btn" href={`tel:${brand.phones[1].replace(/\s/g, '')}`} aria-label="Call us" title="Call us">
              ✆
            </a>
            <button className="btn btn-clay btn-sm" onClick={() => openWith()}>
              Plan my trip
            </button>
            <button
              className={`icon-btn burger ${menu ? 'is-open' : ''}`}
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              aria-expanded={menu}
              aria-controls="mobile-menu"
            >
              <span className="burger-bars" aria-hidden>
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <div className="drawer-panel" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="drawer-top">
            <Link to="/" className="brandmark" onClick={() => setMenu(false)} aria-label="Live The Day Holidays home">
              <span className="dot">L</span>
              <span>
                <b>Live The Day</b>
                <small>Holidays · Kochi</small>
              </span>
            </Link>
            <button className="icon-btn drawer-x" onClick={() => setMenu(false)} aria-label="Close menu">
              ✕
            </button>
          </div>

          <nav className="drawer-links" aria-label="Primary">
            {LINKS.map((l, i) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `big ${isActive ? 'active' : ''}`}>
                <span>{l.label}</span>
                <em>{String(i + 1).padStart(2, '0')}</em>
              </NavLink>
            ))}
          </nav>

          <div className="drawer-foot">
            <button className="drawer-row" onClick={toggle}>
              <span>Appearance</span>
              <b>{theme === 'dark' ? 'Dark ☾' : 'Light ☀'}</b>
            </button>
            <a className="drawer-row" href={`tel:${brand.phones[1].replace(/\s/g, '')}`}>
              <span>Call a consultant</span>
              <b>{brand.phones[1]}</b>
            </a>
            <button className="btn btn-clay btn-block" onClick={() => { setMenu(false); openWith(); }}>
              Plan my trip
            </button>
            <a className="btn btn-ghost btn-block" href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer">
              WhatsApp {brand.whatsapp}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export const Footer: React.FC = () => (
  <footer className="foot">
    <div className="wrap">
      <div className="foot-grid">
        <div>
          <div className="brandmark" style={{ marginBottom: 14 }}>
            <span className="dot">L</span>
            <span>
              <b>Live The Day</b>
              <small>Holidays Pvt Ltd</small>
            </span>
          </div>
          <p style={{ color: 'var(--foot-ink-soft)', fontSize: 14.6, maxWidth: '34ch' }}>{brand.address}</p>
          <div className="foot-list" style={{ marginTop: 14 }}>
            {brand.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>
                {p}
              </a>
            ))}
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer">
              WhatsApp {brand.whatsapp}
            </a>
          </div>
        </div>

        <div>
          <h4>Top destinations</h4>
          <div className="foot-list">
            {footerDestinations.map((d) => (
              <Link key={d} to="/destinations">
                {d}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4>Top activities</h4>
          <div className="foot-list">
            {footerActivities.map((a) => (
              <span key={a} style={{ color: 'var(--foot-ink-soft)', fontSize: 14.4 }}>
                {a}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4>Quick links</h4>
          <div className="foot-list">
            {quickLinks.map((q) => (
              <Link
                key={q}
                to={
                  q === 'Home' ? '/' : q === 'Destinations' ? '/destinations' : q === 'Holiday Packages' ? '/packages' : q === 'About Us' ? '/aboutus' : q === 'Contact Us' ? '/contactus' : '/packages'
                }
              >
                {q}
              </Link>
            ))}
          </div>
          <h4 style={{ marginTop: 22 }}>Connect with us</h4>
          <div className="foot-list">
            <a href={brand.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={brand.socials.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={brand.socials.youtube} target="_blank" rel="noreferrer">
              YouTube Shorts
            </a>
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} Live The Day Holidays Pvt Ltd · Kerala, India</span>
        <span>Google {brand.rating.google} ★ · TripAdvisor {brand.rating.tripadvisor} ★ · {brand.rating.reviews} reviews</span>
      </div>
    </div>
  </footer>
);

export const StickyBar: React.FC = () => {
  const { openWith } = useEnquiry();
  return (
    <div className="sticky-bar">
      <a className="btn btn-ghost" style={{ flex: 1 }} href={`tel:${brand.phones[1].replace(/\s/g, '')}`}>
        Call
      </a>
      <a className="btn btn-ghost" style={{ flex: 1 }} href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
      <button className="btn btn-clay" style={{ flex: 1.4 }} onClick={() => openWith()}>
        Enquire
      </button>
    </div>
  );
};

export const FloatWhatsApp: React.FC = () => (
  <a className="float-wa" href={`https://wa.me/${WA}?text=${encodeURIComponent('Hi Live The Day Holidays, I want to plan a trip.')}`} target="_blank" rel="noreferrer">
    <span aria-hidden>✦</span> Chat with a planner
  </a>
);
