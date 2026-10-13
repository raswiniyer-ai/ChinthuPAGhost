import React, { useState } from 'react';
import { Reveal } from '../components/Shell';
import { useEnquiry } from '../components/Enquiry';
import { about, blogs, brand, channelPartner, WA } from '../data/site';

export const About: React.FC = () => (
  <>
    <section className="band-photo" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <figure>
          <img src={`${import.meta.env.BASE_URL}img/about-kochi.webp`} alt="Kochi, Kerala — home of Live The Day Holidays" />
          <figcaption>
            <span>Kochi · Kerala</span>
            <p>Ten years on the ground, one office on the coast, and travellers we still hear from.</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="eyebrow">{brand.tagline}</div>
        <h1 style={{ marginTop: 16, maxWidth: '18ch' }}>{about.headline}</h1>
        <p style={{ maxWidth: '64ch', marginTop: 20, fontSize: 18 }}>{about.body}</p>

        <div className="stat-grid" style={{ marginTop: 40 }}>
          {about.stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="chips" style={{ marginTop: 28 }}>
          {about.pillars.map((p) => (
            <span className="chip" key={p}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="section-tight on-paper-2">
      <div className="wrap split">
        <div className="card-plain">
          <div className="eyebrow">Our mission</div>
          <p style={{ marginTop: 14 }}>{about.mission}</p>
        </div>
        <div className="card-plain">
          <div className="eyebrow">Our vision</div>
          <p style={{ marginTop: 14 }}>{about.vision}</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">The people behind it</div>
            <h2 style={{ marginTop: 14 }}>Directors</h2>
          </div>
          <p className="lede">Two desks, one promise — someone answers when you are standing at an airport counter at midnight.</p>
        </div>
        <div className="split">
          {about.directors.map((d) => (
            <Reveal key={d.name}>
              <div className="card-plain dir-card">
                <div className="who">
                  <span className="avatar" style={{ width: 46, height: 46, fontSize: 18 }}>
                    {d.name.split(' ').slice(-2).map((x) => x.charAt(0)).join('')}
                  </span>
                  <span>
                    <b>{d.name}</b>
                    <span style={{ display: 'block' }}>{d.role}</span>
                  </span>
                </div>
                <h3 style={{ marginTop: 14 }}>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-tight on-ink">
      <div className="wrap split" style={{ alignItems: 'center' }}>
        <div>
          <div className="eyebrow">Why travellers stay with us</div>
          <h2 style={{ marginTop: 14 }}>Ten years, one habit — picking up the phone</h2>
          <p style={{ marginTop: 16, maxWidth: '52ch' }}>
            Flights get cancelled, weather changes plans, someone misses a transfer. Our value is not the brochure; it is who fixes it, and how fast.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            ['4.6 ★', 'Google rating across 6,225+ reviews'],
            ['75,000+', 'Happy customers since 2015'],
            ['24/7', 'Support on every active booking'],
            ['Kochi', 'Head office you can walk into'],
          ].map(([a, b]) => (
            <div key={a} style={{ display: 'flex', gap: 16, alignItems: 'baseline', borderBottom: '1px solid rgba(246,240,228,0.16)', paddingBottom: 12 }}>
              <b style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--saffron)', minWidth: 110 }}>{a}</b>
              <span style={{ color: 'rgba(246,240,228,0.76)' }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export const Contact: React.FC = () => {
  const { openWith } = useEnquiry();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const msg = `Hi Live The Day Holidays.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A${form.message}`;
    window.open(`https://wa.me/${WA}?text=${msg}`, '_blank', 'noopener');
  };

  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 style={{ marginTop: 16 }}>Get in touch</h1>
          <p style={{ maxWidth: '50ch', marginTop: 18 }}>
            We&rsquo;re here to assist you with your queries. Send your questions to us, we shall revert back as early as possible.
          </p>

          <div className="card-plain" style={{ marginTop: 26 }}>
            <div className="eyebrow">Head office</div>
            <p style={{ marginTop: 12 }}>{brand.address}</p>
            <div className="fact-row" style={{ marginTop: 18 }}>
              <div className="fact">
                <span>Phone</span>
                <b>{brand.phones[0]}</b>
                <div style={{ marginTop: 4 }}>
                  <b>{brand.phones[1]}</b>
                </div>
              </div>
              <div className="fact">
                <span>WhatsApp</span>
                <b>
                  <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer">
                    {brand.whatsapp}
                  </a>
                </b>
              </div>
            </div>
            <div className="chips" style={{ marginTop: 18 }}>
              <a className="chip" href={brand.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="chip" href={brand.socials.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a className="chip" href={brand.socials.youtube} target="_blank" rel="noreferrer">
                YouTube Shorts
              </a>
            </div>
          </div>

          <div className="card-plain" style={{ marginTop: 18 }}>
            <div className="eyebrow">Newsletter</div>
            <p className="note" style={{ marginTop: 10 }}>
              Stay informed about the latest travel trends and new destinations. We send one mail a month, mostly with fares.
            </p>
            <form
              style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks — you are on the list.');
              }}
            >
              <input className="chip" style={{ flex: 1, minWidth: 200, padding: '12px 14px' }} placeholder="you@example.com" type="email" required />
              <button className="btn btn-ink" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="card-plain">
          <div className="eyebrow">Send a message</div>
          <h3 style={{ marginTop: 12 }}>Tell us what you need</h3>
          {sent ? (
            <div style={{ marginTop: 16 }}>
              <b>Thanks, {form.name || 'traveller'}.</b>
              <p className="note" style={{ marginTop: 8 }}>
                WhatsApp has opened with your message — press send and a consultant takes it from there. Or call {brand.phones[1]}.
              </p>
              <button className="btn btn-ghost" style={{ marginTop: 14 }} onClick={() => openWith()}>
                Use the trip enquiry instead
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ marginTop: 8 }}>
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="c-phone">Phone</label>
                <input id="c-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="c-msg">Message</label>
                <textarea id="c-msg" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button className="btn btn-clay btn-block" type="submit">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export const ChannelPartnerPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: '', city: '', phone: '', email: '', country: '+91', agree: false });

  return (
    <>
      <section className="section">
        <div className="wrap split">
          <div>
            <div className="eyebrow">{channelPartner.headline}</div>
            <h1 style={{ marginTop: 16 }}>{channelPartner.sub}</h1>
            <p style={{ marginTop: 18, maxWidth: '50ch' }}>{channelPartner.body}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <a className="btn btn-clay" href="#partner-form">
                Join now
              </a>
              <a className="btn btn-ghost" href={`tel:${brand.phones[0].replace(/\s/g, '')}`}>
                Contact now
              </a>
            </div>
          </div>
          <div className="card-plain">
            <div className="eyebrow">Things you will get</div>
            <p className="note" style={{ marginTop: 10 }}>
              We ensure that you&rsquo;ll embark on a perfectly planned, safe vacation at a price you can afford.
            </p>
            <div style={{ display: 'grid', gap: 14, marginTop: 16 }}>
              {channelPartner.perks.map((p) => (
                <div key={p.title}>
                  <b>{p.title}</b>
                  <p className="note" style={{ marginTop: 4 }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight on-paper-2" id="partner-form">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Lets get started</div>
            <h2 style={{ marginTop: 14 }}>Become a channel partner</h2>
            <p style={{ marginTop: 14, maxWidth: '46ch' }}>Connect with us to start your travelpreneur journey. Bring your clients; we handle the operations, ticketing desk and 24/7 support line.</p>
          </div>
          <div className="card-plain">
            {sent ? (
              <div>
                <b>Application noted.</b>
                <p className="note" style={{ marginTop: 8 }}>
                  A partner manager will call {f.phone || 'you'} within one working day. Meanwhile, WhatsApp is open on {brand.whatsapp}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="field">
                  <label htmlFor="p-name">Agency / your name</label>
                  <input id="p-name" required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
                </div>
                <div className="two-col">
                  <div className="field">
                    <label htmlFor="p-city">City</label>
                    <input id="p-city" required value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} />
                  </div>
                  <div className="field">
                    <label htmlFor="p-phone">Phone</label>
                    <input id="p-phone" required value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
                  </div>
                </div>
                <div className="two-col">
                  <div className="field">
                    <label htmlFor="p-cc">Country code</label>
                    <select id="p-cc" value={f.country} onChange={(e) => setF({ ...f, country: e.target.value })}>
                      {['+91', '+1', '+44', '+81'].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="p-email">Email</label>
                    <input id="p-email" type="email" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
                  </div>
                </div>
                <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--ink-mute)', margin: '6px 0 16px' }}>
                  <input type="checkbox" required checked={f.agree} onChange={(e) => setF({ ...f, agree: e.target.checked })} />
                  I agree to all the Terms and Privacy Policies
                </label>
                <button className="btn btn-ink btn-block" type="submit">
                  Submit now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export const Blogs: React.FC = () => (
  <section className="section">
    <div className="wrap">
      <div className="eyebrow">Journal</div>
      <h1 style={{ marginTop: 16, maxWidth: '20ch' }}>Notes from the road</h1>
      <p style={{ maxWidth: '60ch', marginTop: 18, fontSize: 17.5 }}>
        Guides we write for our own travellers — visas, seasons, route order and the things worth skipping.
      </p>

      <article className="trend-card" style={{ marginTop: 34, backgroundImage: `url(${blogs[0] && `${import.meta.env.BASE_URL}img/pkg-bangkok-pattaya.webp`})`, minHeight: 380 }}>
        <div className="trend-inner">
          <span className="stamp" style={{ borderColor: 'rgba(255,253,248,0.5)', color: '#fffdf8' }}>
            Featured · {blogs[0].tag}
          </span>
          <h3>{blogs[0].title}</h3>
          <p>{blogs[0].excerpt}</p>
          <div className="trend-cta">
            <span className="stamp" style={{ borderColor: 'rgba(255,253,248,0.4)', color: '#fffdf8' }}>
              {blogs[0].author} · {blogs[0].date} · {blogs[0].read}
            </span>
          </div>
        </div>
      </article>

      <div className="blog-grid" style={{ marginTop: 26 }}>
        {blogs.map((b, i) => (
          <Reveal key={b.title} delay={(i % 3) * 60}>
            <article className="blog-card">
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
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
