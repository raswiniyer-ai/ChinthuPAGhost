import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Shell';
import { Stars, TrendCard, TripCard, PhotoStrip } from '../components/Pieces';
import { useEnquiry } from '../components/Enquiry';
import { hotDeals, packages, trending, brand, WA } from '../data/site';
import { bp } from '../data/bangkokPattaya';

export const PackagesIndex: React.FC = () => {
  const { openWith } = useEnquiry();
  const [filter, setFilter] = useState('All');
  const groups = ['All', 'International', 'Domestic', 'Trending'];
  const domestic = ['kerala-scenic-escape', 'munnar-alleppey-bliss', 'kullu-manali', 'kashmir', 'golden-triangle', 'hyderabad'];
  const list =
    filter === 'Domestic'
      ? packages.filter((p) => domestic.includes(p.slug)).concat(hotDeals.filter((p) => domestic.includes(p.slug)))
      : filter === 'Trending'
        ? trending
        : filter === 'International'
          ? packages.filter((p) => !domestic.includes(p.slug))
          : packages;

  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Holiday packages</div>
        <h1 style={{ marginTop: 16, maxWidth: '24ch' }}>Twelve journeys, priced and ready to shape</h1>
        <p style={{ maxWidth: '62ch', marginTop: 18, fontSize: 17.5 }}>
          Every package below is a starting point. Dates, hotel category, flights and add-ons are adjusted around your group — children, seniors and last-minute changes included.
        </p>

        <PhotoStrip
          items={[
            { src: `${import.meta.env.BASE_URL}img/pkg-bangkok-pattaya.webp`, label: 'Thailand', note: 'Bangkok · Pattaya · Phuket' },
            { src: `${import.meta.env.BASE_URL}img/pkg-kerala.webp`, label: 'Kerala', note: 'Munnar · Alleppey · Kochi' },
            { src: `${import.meta.env.BASE_URL}img/dest-azerbaijan.webp`, label: 'Azerbaijan', note: 'Baku · Gabala · Sheki' },
          ]}
        />

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '26px 0 30px' }}>
          {groups.map((g) => (
            <button key={g} className={`btn btn-sm ${filter === g ? 'btn-ink' : 'btn-ghost'}`} onClick={() => setFilter(g)}>
              {g}
            </button>          ))}
        </div>

        <div className="trip-grid">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 60}>
              <TripCard p={p} index={i} />
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: 40 }} className="card-plain">
          <div className="split" style={{ alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Not on the list</div>
              <h2 style={{ marginTop: 12 }}>We build custom itineraries too</h2>
              <p style={{ marginTop: 12, maxWidth: '48ch' }}>
                MICE, corporate offsites, school groups, honeymoons, visa-only cases and multi-country routes. Share the brief and we come back with two options.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-clay" onClick={() => openWith('Custom itinerary')}>
                Start a custom plan
              </button>
              <a className="btn btn-ghost" href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PackageDetail: React.FC = () => {
  const { slug } = useParams();
  const { openWith } = useEnquiry();
  const known = packages.find((p) => p.slug === slug);

  if (slug !== bp.slug) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">Package</div>
          <h1 style={{ marginTop: 14, maxWidth: '22ch' }}>{known ? known.title : 'Package'}</h1>
          <p style={{ maxWidth: '58ch', marginTop: 18 }}>
            {known?.blurb ||
              'This itinerary is quoted per group. Send us your dates and traveller count and we will send back the day-by-day plan with hotel options.'}
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <button className="btn btn-clay" onClick={() => openWith(known?.title)}>
              Get the itinerary
            </button>
            <Link className="btn btn-ghost" to="/packages">
              All packages
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section style={{ marginTop: 20 }}>
        <div className="wrap">
          <nav className="note" style={{ marginBottom: 14 }}>
            <Link to="/packages">Packages</Link> · {bp.country} · {bp.title}
          </nav>
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <span className="stamp stamp-clay">{bp.country}</span>
              <h1 style={{ marginTop: 16 }}>{bp.title}</h1>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 14, flexWrap: 'wrap' }}>
                <Stars />
                <span className="note">
                  {bp.ratingLabel} · {bp.reviews}
                </span>
              </div>
              <p style={{ marginTop: 18, maxWidth: '56ch' }}>{bp.description}</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 22, flexWrap: 'wrap' }}>
                <button className="btn btn-clay" onClick={() => openWith(bp.title)}>
                  Enquire now
                </button>
                <button className="btn btn-ghost" onClick={() => document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' })}>
                  Read the itinerary
                </button>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-2)' }}>
              <img src={bp.hero} alt={bp.title} style={{ width: '100%', aspectRatio: '4 / 3.2', objectFit: 'cover' }} />
            </div>
          </div>

          <div className="fact-row" style={{ marginTop: 26 }}>
            {bp.facts.map((f) => (
              <div className="fact" key={f.k}>
                <span>{f.k}</span>
                <b>{f.v}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="itinerary">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <div className="eyebrow">Itinerary</div>
            <h2 style={{ marginTop: 14, marginBottom: 26 }}>Four days, in order</h2>
            <div className="timeline">
              {bp.itinerary.map((d) => (
                <div className="tl-item" key={d.day}>
                  <span className="tl-day">{d.day}</span>
                  <h4>{d.title}</h4>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>

            <div className="eyebrow" style={{ marginTop: 42 }}>
              Highlights — what you will do
            </div>
            <div className="chips" style={{ marginTop: 14 }}>
              {bp.highlights.map((h) => (
                <span className="chip" key={h}>
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <div className="card-plain">
              <div className="eyebrow">Includes</div>
              <ul className="check-list" style={{ marginTop: 14 }}>
                {bp.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="eyebrow" style={{ marginTop: 22 }}>
                Not included
              </div>
              <ul className="check-list no" style={{ marginTop: 14 }}>
                {bp.excludes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="card-plain" style={{ background: 'var(--ink)', borderColor: 'transparent', color: 'var(--paper)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--saffron)' }}>Book this</div>
              <h3 style={{ color: '#fffdf8', marginTop: 12 }}>Talk to a consultant</h3>
              <p style={{ color: 'rgba(246,240,228,0.74)' }}>
                We hold seats only after confirmation, so plan early in season. A 25% deposit confirms the booking.
              </p>
              <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
                <button className="btn btn-clay btn-block" onClick={() => openWith(bp.title)}>
                  Send enquiry
                </button>
                <a className="btn btn-ghost btn-block" style={{ borderColor: 'rgba(246,240,228,0.4)', color: '#f6f0e4' }} href={`tel:${brand.phones[1].replace(/\s/g, '')}`}>
                  {brand.phones[1]}
                </a>
              </div>
            </div>

            <div className="card-plain">
              <div className="eyebrow">Terms</div>
              <ul className="check-list" style={{ marginTop: 12, gap: 12 }}>
                {bp.terms.map((t) => (
                  <li key={t} style={{ fontSize: 14.4 }}>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="eyebrow" style={{ marginTop: 22 }}>
                Cancellation policy
              </div>
              <p className="note" style={{ marginTop: 10 }}>
                {bp.cancellation}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight on-paper-2">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">FAQs</div>
              <h2 style={{ marginTop: 14 }}>About {bp.title}</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            {bp.faqs.map((f) => (
              <div className="card-plain" key={f.q}>
                <b>{f.q}</b>
                <p className="note" style={{ marginTop: 8 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="sec-head" style={{ marginTop: 46 }}>
            <div>
              <div className="eyebrow">Trending</div>
              <h2 style={{ marginTop: 14 }}>Departing soon</h2>
            </div>
          </div>
          <div className="trend-grid">
            {trending.map((p) => (
              <TrendCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
