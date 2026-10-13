import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Shell';
import { DestTile, HeroArt, Stars, TrendCard, TripCard } from '../components/Pieces';
import { useEnquiry } from '../components/Enquiry';
import { blogs, brand, destinations, hero, hotDeals, packages, reviews, trending, channelPartner } from '../data/site';

const SectionHead: React.FC<{ eyebrow: string; title: React.ReactNode; lede?: string; cta?: { to: string; label: string } }> = ({ eyebrow, title, lede, cta }) => (
  <div className="sec-head">
    <div>
      <div className="eyebrow">{eyebrow}</div>
      <h2 style={{ marginTop: 14 }}>{title}</h2>
    </div>
    <div style={{ maxWidth: '46ch' }}>
      {lede ? <p className="lede">{lede}</p> : null}
      {cta ? (
        <Link to={cta.to} className="link-arrow" style={{ marginTop: 12, display: 'inline-flex' }}>
          {cta.label}
        </Link>
      ) : null}
    </div>
  </div>
);

export const Home: React.FC = () => {
  const { openWith } = useEnquiry();

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1>
              Let&rsquo;s explore the world with your <em>trusted travel partner</em>
            </h1>
            <p className="hero-sub">{hero.sub}</p>

            <div className="hero-actions">
              <button className="btn btn-clay" onClick={() => openWith()}>
                Plan my trip
              </button>
              <Link to="/packages" className="btn btn-ghost">
                See all {packages.length} curated journeys
              </Link>
            </div>

            <div className="service-pills">
              {hero.services.map((s) => (
                <span className="pill" key={s}>
                  {s}
                </span>
              ))}
            </div>

            <div className="trust-row">
              <div className="score">
                <b>{brand.rating.google}</b>
                <span>Google rating</span>
              </div>
              <div className="score">
                <b>{brand.rating.tripadvisor}</b>
                <span>TripAdvisor</span>
              </div>
              <div className="score">
                <b>{brand.rating.reviews}</b>
                <span>Reviews</span>
              </div>
              <div className="score">
                <b>10 yrs</b>
                <span>On the ground</span>
              </div>
            </div>
          </div>

          <HeroArt />
        </div>

        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[...destinations, ...destinations].map((d, i) => (
              <span key={i}>{d.name}</span>
            ))}
            {[0, 1].map((i) => (
              <span key={`x${i}`}>Kerala · Karnataka · Kashmir · Dubai · Vietnam</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Plan your best trip ever"
            title={<>Make the most out of your travel experience</>}
            lede="Personalised itineraries designed to match your style and dreams — flights, stays, transfers and sightseeing in one confirmed plan."
            cta={{ to: '/packages', label: 'Explore more' }}
          />
          <Reveal>
            <div className="trip-grid rail">
              {packages.map((p, i) => (
                <TripCard key={p.slug} p={p} index={i} />
              ))}
            </div>
            <p className="rail-hint">Swipe for all {packages.length} journeys</p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight on-paper-2">
        <div className="wrap">
          <SectionHead eyebrow="Trending now" title={<>Departing soon, seats moving</>} lede="Fixed-date departures with the group already forming. Ex-Cochin fares, visas and transfers handled." />
          <div className="trend-grid">
            {trending.map((p) => (
              <TrendCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Where to next" title={<>Four places we know street by street</>} lede="Our consultants travel these routes themselves. That is why the recommendations are specific." cta={{ to: '/destinations', label: 'See more' }} />
          <div className="dest-grid">
            {destinations.map((d, i) => (
              <Reveal key={d.slug} delay={i * 70}>
                <DestTile d={d} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="Hot deals" title={<>Favourites from our Kochi desk</>} lede="Domestic and short-haul escapes that book fast in season." cta={{ to: '/packages', label: 'Explore more' }} />
          <div className="trip-grid rail">
            {hotDeals.map((p) => (
              <TripCard key={p.slug} p={p} />
            ))}
          </div>
          <p className="rail-hint">Swipe for more deals</p>
        </div>
      </section>

      <section className="section on-ink">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Reviews</div>
              <h2 style={{ marginTop: 14 }}>What people say about Live The Day</h2>
            </div>
            <div className="rating-block">
              <div>
                <div className="rating-big">{brand.rating.google}</div>
                <span className="stars" aria-hidden>
                  ★★★★★
                </span>
              </div>
              <div style={{ maxWidth: '26ch' }}>
                <p style={{ color: 'rgba(246,240,228,0.72)', fontSize: 14.6 }}>
                  {brand.rating.reviews} reviews across Google and TripAdvisor. Verified, unedited, from travellers we planned for.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-rail">
          {reviews.map((r) => (
            <article className="review-card" key={r.name}>
              <Stars />
              <p>{r.text}</p>
              {r.img ? <img className="review-shot" src={r.img} alt={`${r.name} review`} loading="lazy" /> : null}
              <div className="review-who">
                <span className="avatar">{r.name.charAt(0)}</span>
                <span>
                  <b>{r.name}</b>
                  <span>Customer</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-tight on-paper-2">
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">{channelPartner.headline}</div>
            <h2 style={{ marginTop: 14 }}>{channelPartner.sub}</h2>
            <p style={{ marginTop: 16, maxWidth: '48ch' }}>{channelPartner.body}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 22, flexWrap: 'wrap' }}>
              <Link className="btn btn-ink" to="/channel-partner">
                Start your travelpreneur journey
              </Link>
              <a className="btn btn-ghost" href={`tel:${brand.phones[0].replace(/\s/g, '')}`}>
                {brand.phones[0]}
              </a>
            </div>
          </div>
          <div className="card-plain">
            <span className="eyebrow">Things you will get</span>
            <ul className="check-list" style={{ marginTop: 14 }}>
              {channelPartner.perks.map((p) => (
                <li key={p.title}>
                  <span>
                    <b style={{ color: 'var(--ink)' }}>{p.title}.</b> {p.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="The journal" title={<>Notes from the road</>} lede="Practical guides we keep for our own travellers — visas, seasons, routes and what to skip." cta={{ to: '/blogs', label: 'Read the journal' }} />
          <div className="blog-grid rail">
            {blogs.slice(0, 3).map((b) => (
              <article className="blog-card" key={b.title}>
                <div className="blog-thumb">
                  <img src={(b as { image?: string }).image} alt={b.title} loading="lazy" />
                </div>
                <span className="meta">
                  {b.tag} · {b.read}
                </span>
                <h3>{b.title}</h3>
                <p style={{ fontSize: 15.2 }}>{b.excerpt}</p>
                <div className="meta" style={{ marginTop: 'auto' }}>
                  {b.author} · {b.date}
                </div>
              </article>
            ))}
          </div>
          <p className="rail-hint">Swipe for more stories</p>
        </div>
      </section>
    </>
  );
};
