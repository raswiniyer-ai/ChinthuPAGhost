import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@remotion/player';
import { JourneyReel, REEL } from '../remotion/JourneyReel';
import { useEnquiry } from './Enquiry';
import type { Destination, Pkg } from '../data/site';

export const Stars: React.FC<{ value?: string; reviews?: string }> = ({ reviews }) => (
  <span className="stars" aria-label="rating">
    <span aria-hidden>★★★★★</span>
    {reviews ? <small>{reviews}</small> : null}
  </span>
);

export const HeroArt: React.FC = () => (
  <div className="hero-collage">
    <figure className="hc-main">
      <img src={`${import.meta.env.BASE_URL}img/pkg-bangkok-pattaya.webp`} alt="Pattaya coastline, Thailand" />
      <figcaption className="hc-tag">
        <b>Bangkok · Pattaya</b>
        <span>4N / 5D · from ₹38,000</span>
      </figcaption>
    </figure>
    <div className="hc-side">
      <figure>
        <img src={`${import.meta.env.BASE_URL}img/dest-almaty.webp`} alt="Big Almaty Lake, Kazakhstan" loading="lazy" />
        <figcaption className="hc-tag">
          <b>Almaty</b>
          <span>Kazakhstan · 4N / 5D</span>
        </figcaption>
      </figure>
      <figure>
        <img src={`${import.meta.env.BASE_URL}img/pkg-kerala.webp`} alt="Houseboat on the Kerala backwaters" loading="lazy" />
        <figcaption className="hc-tag">
          <b>Kerala</b>
          <span>Backwaters · 5N / 6D</span>
        </figcaption>
      </figure>
    </div>
    <div className="hc-reel" aria-hidden>
      <Player
        component={JourneyReel}
        durationInFrames={REEL.durationInFrames}
        compositionWidth={REEL.width}
        compositionHeight={REEL.height}
        fps={REEL.fps}
        loop
        autoPlay
        style={{ width: '100%', height: '100%' }}
        acknowledgeRemotionLicense
      />
      <span className="hc-reel-note">Journey reel · 10s</span>
    </div>
  </div>
);

export const TripCard: React.FC<{ p: Pkg; index?: number }> = ({ p }) => {
  const { openWith } = useEnquiry();
  return (
    <article className="trip-card">
      <Link to={p.slug === 'bangkok-pattaya' ? '/package/bangkok-pattaya' : '/packages'} className="trip-media">
        <img src={p.image} alt={p.title} loading="lazy" />
        <span className="stamp nights">{p.nights}</span>
      </Link>
      <div className="trip-body">
        <h3>{p.title}</h3>
        <span className="region">{p.region}</span>
        <div className="trip-foot">
          <Stars reviews={p.reviews ? `${p.reviews} reviews` : undefined} />
          <button className="btn btn-ink btn-sm" onClick={() => openWith(undefined, p.title)}>
            Enquire
          </button>
        </div>
      </div>
    </article>
  );
};

export const DestTile: React.FC<{ d: Destination; index: number }> = ({ d, index }) => (
  <Link to={`/destination/${d.slug}`} className="dest-tile">
    <img src={d.image} alt={`${d.name}, ${d.country}`} loading="lazy" />
    <div className="inner">
      <span className="stamp stamp-solid">{String(index + 1).padStart(2, '0')}</span>
      <h3 style={{ marginTop: 10 }}>{d.name}</h3>
      <div className="meta">
        <span>{d.country}</span>
        <span>{d.duration}</span>
      </div>
    </div>
  </Link>
);

export const TrendCard: React.FC<{ p: Pkg }> = ({ p }) => {
  const { openWith } = useEnquiry();
  return (
    <article className="trend-card" style={{ backgroundImage: `url(${p.image})` }}>
      <div className="trend-inner">
        <span className="stamp" style={{ borderColor: 'rgba(255,253,248,0.5)', color: '#fffdf8' }}>
          Trending now
        </span>
        <h3>{p.title}</h3>
        <p>{p.blurb}</p>
        {p.dates ? (
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: '0.08em', color: '#eda43b' }}>{p.dates}</p>
        ) : null}
        <div className="trend-cta">
          <span className="stamp" style={{ borderColor: 'rgba(255,253,248,0.45)', color: '#fffdf8' }}>
            {p.region} · {p.nights}
          </span>
          <button className="btn btn-clay btn-sm" onClick={() => openWith(p.title)}>
            Enquire now
          </button>
        </div>
      </div>
    </article>
  );
};

export const PhotoStrip: React.FC<{ items: { src: string; label: string; note?: string }[] }> = ({ items }) => (
  <div className="photo-strip">
    {items.map((it) => (
      <figure key={it.src + it.label}>
        <img src={it.src} alt={it.label} loading="lazy" />
        <figcaption className="hc-tag">
          <b>{it.label}</b>
          {it.note ? <span>{it.note}</span> : null}
        </figcaption>
      </figure>
    ))}
  </div>
);
