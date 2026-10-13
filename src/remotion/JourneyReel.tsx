import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Easing, Sequence } from 'remotion';

export const REEL = {
  id: 'JourneyReel',
  fps: 30,
  durationInFrames: 330,
  width: 1080,
  height: 1350,
};

const INK = '#062521';
const PAPER = '#f6f0e4';
const CLAY = '#c1502e';
const SAFFRON = '#eda43b';
const JADE = '#12756a';

const STOPS = [
  { city: 'BANGKOK', tag: '3N / 4D' },
  { city: 'ALMATY', tag: '4N / 5D' },
  { city: 'BAKU', tag: '4N / 5D' },
  { city: 'ABU DHABI', tag: '3–5 DAYS' },
  { city: 'MUNNAR', tag: 'KERALA' },
];

const FONT_D = "'Fraunces', Georgia, 'Times New Roman', serif";
const FONT_M = "'JetBrains Mono', ui-monospace, Menlo, monospace";

/** A stylised night flight map: dotted meridians, an arc route and a travelling plane. */
const Map: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / REEL.durationInFrames;
  const drift = interpolate(t, [0, 1], [0, -46]);

  const dots: React.ReactNode[] = [];
  for (let r = 0; r < 15; r++) {
    for (let c = 0; c < 12; c++) {
      const x = 70 + c * 82 + (r % 2 ? 41 : 0);
      const y = 130 + r * 82 + drift;
      const seed = (r * 12 + c) % 7;
      const o = 0.06 + seed * 0.014;
      dots.push(<circle key={`${r}-${c}`} cx={x} cy={y} r={2.1} fill={PAPER} opacity={o} />);
    }
  }

  const p = interpolate(frame % 210, [0, 210], [0, 1], { easing: Easing.inOut(Easing.quad), extrapolateRight: 'clamp' });
  const start = { x: 150, y: 1010 };
  const ctrl = { x: 540, y: 300 };
  const end = { x: 940, y: 620 };
  const bx = (1 - p) * (1 - p) * start.x + 2 * (1 - p) * p * ctrl.x + p * p * end.x;
  const by = (1 - p) * (1 - p) * start.y + 2 * (1 - p) * p * ctrl.y + p * p * end.y;
  const angle = Math.atan2(
    2 * (1 - p) * (ctrl.y - start.y) + 2 * p * (end.y - ctrl.y),
    2 * (1 - p) * (ctrl.x - start.x) + 2 * p * (end.x - ctrl.x),
  ) * (180 / Math.PI);

  return (
    <AbsoluteFill>
      <svg width="100%" height="100%" viewBox="0 0 1080 1350">
        {dots}
        <path d="M150 1010 Q540 300 940 620" stroke={PAPER} strokeOpacity={0.28} strokeWidth={2.4} fill="none" strokeDasharray="10 12" />
        <circle cx={start.x} cy={start.y} r={7} fill={SAFFRON} />
        <circle cx={start.x} cy={start.y} r={16} fill="none" stroke={SAFFRON} strokeOpacity={0.4} strokeWidth={2} />
        <circle cx={end.x} cy={end.y} r={6} fill={CLAY} />
        <g transform={`translate(${bx} ${by}) rotate(${angle})`}>
          <path d="M0 -13 L9 10 L0 5 L-9 10 Z" fill={PAPER} />
        </g>
        <text x={150} y={1052} fill={PAPER} fillOpacity={0.7} fontFamily={FONT_M} fontSize={21} letterSpacing={5}>
          COCHIN
        </text>
        <text x={840} y={600} fill={PAPER} fillOpacity={0.7} fontFamily={FONT_M} fontSize={21} letterSpacing={5}>
          ARRIVAL
        </text>
      </svg>
    </AbsoluteFill>
  );
};

/** Rotating destination stack, one city per 60 frames with a soft wipe. */
const CityStack: React.FC = () => {
  const frame = useCurrentFrame();
  const idx = Math.floor(frame / 60) % STOPS.length;
  const local = frame % 60;
  const inn = interpolate(local, [0, 10, 50, 60], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const shift = interpolate(local, [0, 12], [40, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  const cur = STOPS[idx];

  return (
    <div style={{ position: 'absolute', left: 74, top: 78, opacity: inn, transform: `translateY(${shift}px)` }}>
      <div style={{ fontFamily: FONT_M, fontSize: 20, letterSpacing: 7, color: SAFFRON, marginBottom: 14 }}>
        NOW BOARDING
      </div>
      <div style={{ fontFamily: FONT_D, fontSize: 108, lineHeight: 0.98, color: PAPER, fontWeight: 600, letterSpacing: -2 }}>
        {cur.city}
      </div>
      <div style={{ fontFamily: FONT_M, fontSize: 20, letterSpacing: 6, color: 'rgba(246,240,228,0.62)', marginTop: 12 }}>
        {cur.tag} · LIVE THE DAY
      </div>
    </div>
  );
};

/** The boarding-pass stub that settles in at the bottom. */
const BoardingPass: React.FC = () => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [26, 62], [120, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  const o = interpolate(frame, [26, 54], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div
      style={{
        position: 'absolute', left: 62, right: 62, bottom: 62, transform: `translateY(${y}px)`, opacity: o,
        background: PAPER, borderRadius: 22, display: 'flex', overflow: 'hidden', boxShadow: '0 30px 70px -30px rgba(0,0,0,0.6)',
      }}
    >
      <div style={{ flex: 1, padding: '26px 30px' }}>
        <div style={{ fontFamily: FONT_M, fontSize: 16, letterSpacing: 5, color: 'rgba(6,37,33,0.55)' }}>KOCHI · COK</div>
        <div style={{ fontFamily: FONT_D, fontSize: 46, color: INK, marginTop: 6, fontWeight: 600 }}>Live The Day Holidays</div>
        <div style={{ fontFamily: FONT_M, fontSize: 16, letterSpacing: 4, color: CLAY, marginTop: 10 }}>
          FLIGHTS · PACKAGES · HOTELS · VISA
        </div>
      </div>
      <div style={{ width: 4, background: 'repeating-linear-gradient(180deg, rgba(6,37,33,0.28) 0 8px, transparent 8px 16px)' }} />
      <div style={{ padding: '26px 26px', textAlign: 'right', minWidth: 168 }}>
        <div style={{ fontFamily: FONT_M, fontSize: 15, letterSpacing: 4, color: 'rgba(6,37,33,0.5)' }}>SEAT</div>
        <div style={{ fontFamily: FONT_D, fontSize: 40, color: INK, fontWeight: 600 }}>1A</div>
        <div style={{ fontFamily: FONT_M, fontSize: 15, letterSpacing: 4, color: JADE, marginTop: 8 }}>CONFIRMED</div>
      </div>
    </div>
  );
};

const Grain: React.FC = () => (
  <AbsoluteFill
    style={{
      background: 'radial-gradient(1100px 700px at 20% 12%, rgba(237,164,59,0.16), transparent 60%)',
      mixBlendMode: 'screen',
      pointerEvents: 'none',
    }}
  />
);

export const JourneyReel: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const sun = interpolate(frame % durationInFrames, [0, durationInFrames], [0, 1]);
  const sx = 1080 - sun * 1080;

  return (
    <AbsoluteFill style={{ background: `linear-gradient(160deg, ${INK} 0%, #0a3a34 58%, #062521 100%)` }}>
      <Map />
      <Grain />
      <div style={{ position: 'absolute', left: sx, top: 200 + Math.sin(sun * Math.PI) * -90, width: 90, height: 90, borderRadius: '50%', background: SAFFRON, opacity: 0.5, filter: 'blur(2px)' }} />
      <Sequence from={0} durationInFrames={durationInFrames}>
        <CityStack />
      </Sequence>
      <BoardingPass />
      <div style={{ position: 'absolute', right: 74, top: 92, textAlign: 'right', fontFamily: FONT_M, fontSize: 17, letterSpacing: 4, color: 'rgba(246,240,228,0.6)' }}>
        EST. 2015
        <div style={{ marginTop: 6 }}>75,000+ TRAVELLERS</div>
        <div style={{ marginTop: 6, color: SAFFRON }}>4.6 ★ GOOGLE</div>
      </div>
    </AbsoluteFill>
  );
};
