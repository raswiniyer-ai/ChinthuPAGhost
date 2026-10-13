import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { WA } from '../data/site';

type Enquiry = { open: boolean; preset?: string; pkg?: string; openWith: (preset?: string, pkg?: string) => void; close: () => void };
const Ctx = createContext<Enquiry>({ open: false, openWith: () => {}, close: () => {} });

export const useEnquiry = () => useContext(Ctx);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<{ open: boolean; preset?: string; pkg?: string }>({ open: false });
  const openWith = useCallback((preset?: string, pkg?: string) => setState({ open: true, preset, pkg }), []);
  const close = useCallback(() => setState({ open: false }), []);
  const value = useMemo(() => ({ ...state, openWith, close }), [state, openWith, close]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

const DESTINATIONS = ['Bangkok / Pattaya', 'Almaty', 'Azerbaijan', 'Abu Dhabi', 'Malaysia', 'Vietnam', 'Kashmir', 'Kerala', 'Dubai', 'Something else'];

export const EnquiryModal: React.FC = () => {
  const { open, preset, pkg, close } = useEnquiry();
  const [form, setForm] = useState({ name: '', phone: '', email: '', destination: '', when: '', people: '2', notes: '' });
  const [sent, setSent] = useState(false);

  React.useEffect(() => {
    if (preset) setForm((f) => ({ ...f, destination: preset }));
  }, [preset]);

  React.useEffect(() => {
    if (pkg) setForm((f) => ({ ...f, notes: `Interested in the ${pkg} package.` }));
  }, [pkg]);

  React.useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  if (!open) return null;

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const waLink = () => {
    const msg = [
      `Hi Live The Day Holidays, I'd like help planning a trip.`,
      `Name: ${form.name || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `Email: ${form.email || '-'}`,
      `Destination: ${form.destination || preset || '-'}`,
      pkg ? `Package: ${pkg}` : '',
      `Travel dates: ${form.when || '-'}`,
      `Travellers: ${form.people}`,
      form.notes ? `Notes: ${form.notes}` : '',
    ].filter(Boolean).join('\n');
    return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="modal-back" role="dialog" aria-modal="true" aria-label="Trip enquiry" onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="modal">
        <div className="modal-head">
          <div>
            <div className="eyebrow">Trip enquiry</div>
            <h3 style={{ marginTop: 10 }}>Tell us the shape of the trip</h3>
            <p className="note" style={{ marginTop: 6 }}>A travel consultant replies within one working hour. No forms to chase.</p>
          </div>
          <button className="icon-btn" onClick={close} aria-label="Close">
            ✕
          </button>
        </div>

        {sent ? (
          <div className="card-plain">
            <b>Ready to send.</b>
            <p className="note" style={{ marginTop: 8 }}>
              WhatsApp has opened with your details. Press send there and you are done — or call {`+91 87 14 695 559`} directly.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
              <a className="btn btn-ink" href={waLink()} target="_blank" rel="noreferrer">
                Open WhatsApp again
              </a>
              <a className="btn btn-ghost" href="tel:+918714695559">
                Call now
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              window.open(waLink(), '_blank', 'noopener');
            }}
          >
            <div className="two-col">
              <div className="field">
                <label htmlFor="q-name">Your name</label>
                <input id="q-name" required value={form.name} onChange={set('name')} placeholder="Anitha Menon" />
              </div>
              <div className="field">
                <label htmlFor="q-phone">Phone / WhatsApp</label>
                <input id="q-phone" required value={form.phone} onChange={set('phone')} placeholder="+91 98470 00000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="q-email">Email</label>
              <input id="q-email" type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
            </div>
            <div className="two-col">
              <div className="field">
                <label htmlFor="q-dest">Destination</label>
                <select id="q-dest" value={form.destination || preset || ''} onChange={set('destination')}>
                  <option value="">Choose</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="q-when">Travel dates</label>
                <input id="q-when" value={form.when} onChange={set('when')} placeholder="e.g. 24 Dec – 30 Dec" />
              </div>
            </div>
            <div className="two-col">
              <div className="field">
                <label htmlFor="q-people">Travellers</label>
                <select id="q-people" value={form.people} onChange={set('people')}>
                  {['1', '2', '3', '4', '5', '6', '7+', 'Group / Corporate'].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="q-budget">Anything we should know</label>
                <input id="q-budget" value={form.notes} onChange={set('notes')} placeholder="Honeymoon, visa help, budget…" />
              </div>
            </div>
            <button className="btn btn-clay btn-block" type="submit">
              Send enquiry on WhatsApp
            </button>
            <p className="note" style={{ marginTop: 10 }}>
              We never share your number. Prefer email? Write to us at the Kochi office — details on the contact page.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
