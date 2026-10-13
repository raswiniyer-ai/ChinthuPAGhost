import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Shell';
import { DestTile, PhotoStrip } from '../components/Pieces';
import { useEnquiry } from '../components/Enquiry';
import { destinations } from '../data/site';

const Head: React.FC<{ eyebrow: string; title: React.ReactNode; sub: string }> = ({ eyebrow, title, sub }) => (
  <div style={{ paddingTop: 'clamp(26px,4vw,52px)' }}>
    <div className="eyebrow">{eyebrow}</div>
    <h1 style={{ marginTop: 16, maxWidth: '20ch' }}>{title}</h1>
    <p style={{ maxWidth: '62ch', marginTop: 18, fontSize: 17.5 }}>{sub}</p>
  </div>
);

export const DestinationsIndex: React.FC = () => {
  const { openWith } = useEnquiry();
  return (
    <section className="section">
      <div className="wrap">
        <Head
          eyebrow="Destinations"
          title={<>Where we send people, and when</>}
          sub="Four flagship routes our consultants run through the year — plus everything else you see on the packages page. Pick a place and we will build the itinerary around your dates."
        />

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '28px 0 34px' }}>
          {['Thailand', 'Kazakhstan', 'Azerbaijan', 'UAE', 'Malaysia', 'Vietnam', 'Kashmir', 'Kerala'].map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>

        <PhotoStrip
          items={[
            { src: `${import.meta.env.BASE_URL}img/dest-abu-dhabi.webp`, label: 'Abu Dhabi', note: 'UAE · Grand Mosque' },
            { src: `${import.meta.env.BASE_URL}img/dest-bangkok.webp`, label: 'Bangkok', note: 'Thailand · temples & markets' },
            { src: `${import.meta.env.BASE_URL}img/pkg-vietnam.webp`, label: 'Ha Long Bay', note: 'Vietnam · cruise nights' },
          ]}
        />

        <div className="dest-grid">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={i * 70}>
              <DestTile d={d} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="stat-grid" style={{ marginTop: 46 }}>
          <div className="stat">
            <b>100+</b>
            <span>Countries</span>
          </div>
          <div className="stat">
            <b>1500+</b>
            <span>Products</span>
          </div>
          <div className="stat">
            <b>24/7</b>
            <span>On-trip support</span>
          </div>
          <div className="stat">
            <b>1 hr</b>
            <span>Reply promise</span>
          </div>
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-clay" onClick={() => openWith()}>
            Not sure where? Ask us
          </button>
          <Link className="btn btn-ghost" to="/packages">
            Browse packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export const DestinationDetail: React.FC = () => {
  const { slug } = useParams();
  const { openWith } = useEnquiry();
  const d = destinations.find((x) => x.slug === slug) || destinations[0];
  const others = destinations.filter((x) => x.slug !== d.slug);

  return (
    <>
      <section style={{ position: 'relative', marginTop: 18 }}>
        <div className="wrap">
          <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', minHeight: 'clamp(300px, 46vw, 460px)', display: 'flex', alignItems: 'flex-end', isolation: 'isolate' }}>
            <img src={d.image} alt={`${d.name}, ${d.country}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }} />
            <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, rgba(11,31,28,0.05) 20%, rgba(11,31,28,0.86))' }} />
            <div style={{ padding: 'clamp(22px,3.4vw,40px)', color: '#fffdf8' }}>
              <span className="stamp" style={{ borderColor: 'rgba(255,253,248,0.5)', color: '#fffdf8' }}>
                Destination
              </span>
              <h1 style={{ marginTop: 14, color: '#fffdf8' }}>{d.name}</h1>
              <p style={{ maxWidth: '58ch', color: 'rgba(255,253,248,0.84)' }}>{d.intro}</p>
            </div>
          </div>

          <div className="fact-row" style={{ marginTop: 18 }}>
            <div className="fact">
              <span>Best time to visit</span>
              <b>{d.bestTime}</b>
            </div>
            <div className="fact">
              <span>Recommended duration</span>
              <b>{d.duration}</b>
            </div>
            <div className="fact">
              <span>Region</span>
              <b>{d.country}</b>
            </div>
            <div className="fact" style={{ display: 'flex', alignItems: 'center' }}>
              <button className="btn btn-clay btn-sm" onClick={() => openWith(d.name)}>
                Enquire about {d.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Sights you can&rsquo;t miss</div>
            <h2 style={{ marginTop: 14, marginBottom: 26 }}>In {d.name}</h2>
            <div className="timeline">
              {d.sights.map((s) => (
                <div className="tl-item" key={s.title}>
                  <span className="tl-day">Stop</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <div className="card-plain">
              <div className="eyebrow">What we arrange</div>
              <div className="chips" style={{ marginTop: 14 }}>
                {['Holiday packages', 'Activities', 'Hotels', 'Visa', 'Travel insurance', 'Cab'].map((x) => (
                  <span className="chip" key={x}>
                    {x}
                  </span>
                ))}
              </div>
              <p className="note" style={{ marginTop: 16 }}>
                Tell us your dates and we send a plan with the hotel options in the same thread — no separate quote chase.
              </p>
              <button className="btn btn-ink btn-block" style={{ marginTop: 16 }} onClick={() => openWith(d.name)}>
                Get a {d.name} plan
              </button>
            </div>

            <div className="card-plain">
              <div className="eyebrow">Need anything else in {d.name}?</div>
              <p style={{ marginTop: 12 }}>
                We handle airport transfers, internal flights, insurance, SIM cards and last-mile cabs. Ask in the same enquiry — it is all priced together.
              </p>
              <a className="link-arrow" href="tel:+918714695559" style={{ marginTop: 14, display: 'inline-flex' }}>
                Call the Kochi desk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight on-paper-2">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Keep looking</div>
              <h2 style={{ marginTop: 14 }}>Where to next</h2>
            </div>
            <Link className="link-arrow" to="/destinations">
              All destinations
            </Link>
          </div>
          <div className="dest-grid">
            {others.map((o, i) => (
              <DestTile key={o.slug} d={o} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
