/* global React, ReactDOM */
const { useState, useMemo, useEffect } = React;

/* ============================================================
   LOGO — wordmark "maāt" (a avec macron sur le 2e)
   ============================================================ */
function Logo({ size = 'md' }) {
  return (
    <span className={`logo-wordmark size-${size}`}>
      <span className="w">m</span>
      <span className="w">a</span>
      <span className="w-macron"><span className="macron" aria-hidden="true"></span><span>a</span></span>
      <span className="w">t</span>
    </span>
  );
}

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={'nav' + (scrolled ? ' is-scrolled' : '')}>
        <a href="#" className="nav-logo" aria-label="Maat — accueil"><Logo size="md" /></a>
        <ul className="nav-center">
          <li className="nav-item-has-dropdown">
            <span tabIndex="0">Audit CRO <span className="nav-chevron">▾</span></span>
            <div className="nav-dropdown">
              <a href="#methodology">Notre démarche</a>
              <a href="#methods">Les méthodes</a>
              <a href="#equipe">Collaboration</a>
              <a href="#book">Réserver un échange</a>
            </div>
          </li>
          <li>
            <span className="nav-coming">
              Content & Messaging Strategy
              <span className="coming-tooltip">À venir</span>
            </span>
          </li>
        </ul>
        <div className="nav-right">
          <a href="#book" className="btn btn-primary">Réserver un échange</a>
          <button
            className={'nav-hamburger' + (open ? ' is-open' : '')}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={'nav-drawer' + (open ? ' is-open' : '')}>
        <span className="nav-drawer-section-label">Audit CRO</span>
        <a href="#methodology" className="nav-drawer-sub" onClick={() => setOpen(false)}>Notre démarche</a>
        <a href="#methods" className="nav-drawer-sub" onClick={() => setOpen(false)}>Les méthodes</a>
        <a href="#equipe" className="nav-drawer-sub" onClick={() => setOpen(false)}>Collaboration</a>
        <span className="nav-drawer-section-label" style={{ marginTop: 24 }}>Autres</span>
        <div className="nav-drawer-coming">Content & Messaging Strategy <span>À venir</span></div>
        <div className="nav-drawer-cta">
          <a href="#book" className="btn btn-primary btn-lg" onClick={() => setOpen(false)}>Réserver un échange</a>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-overline">
        Audit CRO · 2026
      </div>
      <h1 className="hero-title">
        Votre trafic ne manque pas.<br />
        <em>Vos conversions, si.</em>
      </h1>
      <p className="hero-lead">
        On révèle les incohérences. On identifie les freins. On priorise les actions.
      </p>
      <div className="hero-ctas">
        <a href="#book" className="btn btn-primary btn-lg">Réserver un échange</a>
        <div className="hero-cta-meta">
          <span>sans engagement</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>30 minutes</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SPLIT — Pain / Outcome
   ============================================================ */
const PROBLEMS = [
  { n: '01', t: "Vous venez de lancer votre site et voulez vous assurer qu'il convertit bien — avant d'investir en acquisition." },
  { n: '02', t: "Votre site tourne, vous investissez en acquisition — mais les ventes ou leads ne suivent pas votre trafic." },
  { n: '03', t: "Vous avez des données — analytics, heatmaps, recordings... — mais ne savez pas quoi en faire ni par où commencer." },
  { n: '04', t: "Vous avez essayé des choses : A/B tests, redesigns, ajustements — sans savoir ce qui a vraiment marché." },
  { n: '05', t: "Quelque chose bloque dans votre parcours — message, UX ou business — mais vous ne savez pas quoi exactement." },
];
const OUTCOMES = [
  { n: '01', t: 'Vous comprenez enfin ce qui bloque', d: 'dans votre message, vos pages et vos parcours' },
  { n: '02', t: 'Vous savez comment lever les hésitations', d: 'quoi clarifier, quoi prouver, quoi ajuster' },
  { n: '03', t: 'Vous savez comment mieux guider vers la décision', d: 'sans rupture, sans confusion' },
  { n: '04', t: 'Vous ne testez plus au hasard', d: 'vous améliorez avec méthode' },
];

function SplitPainOutcome() {
  return (
    <section className="split">
      <div className="split-grid">
        <div className="split-col problem">
          <h2 className="split-col-title">Ce que vous vivez<span className="title-dot">.</span></h2>
          <ul className="split-pain reveal-list">
            {PROBLEMS.map(p => (
              <li key={p.n} className="pain-strong reveal-item">
                <span className="split-list-num">{p.n}</span><span>{p.t}</span>
              </li>
            ))}
          </ul>
          <div className="split-pain-foot">
            <span className="split-pain-arrow">→</span> Vous vous reconnaissez&nbsp;? Si oui, cet audit est fait pour vous.
          </div>
        </div>
        <div className="split-col outcome">
          <h2 className="split-col-title">Ce qui va changer<span className="title-dot">.</span></h2>
          <div className="outcome-list reveal-list">
            {OUTCOMES.map(o => (
              <div key={o.n} className="outcome-card reveal-item">
                <div className="outcome-card-title">{o.t}</div>
                <div className="outcome-card-desc">{o.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MODULABLE
   ============================================================ */
function Modulable() {
  return (
    <section className="modulable">
      <div className="mod-wrap">
        <div className="mod-stamp">
          <span className="mod-stamp-tag">Audit modulable</span>
          <span className="mod-stamp-num">à la <em>carte</em></span>
        </div>
        <p className="mod-body">
          Pas un format unique. <strong>On construit l'audit avec vous</strong> — en choisissant les méthodes qui ont le plus de sens pour votre situation, votre budget, vos objectifs.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   METHODOLOGY TIMELINE
   ============================================================ */
const PHASES = [
  { n: '01', title: 'Lecture business', desc: "Comprendre votre contexte, vos objectifs, vos personas, leurs besoins et leurs contraintes. On pose le bon cadre d'analyse.", output: "Cadre d'analyse partagé" },
  { n: '02', title: 'Recherche & insights', desc: "Recherche utilisateur basée sur des méthodes qualitatives et quantitatives. On observe, on interroge, on mesure - pour comprendre les comportements et identifier les points de friction réels et opportunités manquées.", output: "Backlog d'insights sourcés" },
  { n: '03', title: 'Priorisation des actions', desc: "Croiser ces insights pour faire émerger les leviers d'actions les plus pertinents à activer. Chaque action est scorée : impact, confiance, effort.", output: 'Backlog priorisé + synthèse globale' },
  { n: '04', title: 'CRO redesign', desc: "Au besoin, déclinaison design de nos recommandations en templates performants - optimisés pour la conversion et directement exploitables par vos équipes.", output: 'Templates exploitables' },
];

const TL_ICONS = {
  '01': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4" /></g>,
  '02': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6" /><path d="m19.5 19.5-3.5-3.5" /></g>,
  '03': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="3" rx="0.5" /><rect x="3" y="10.5" width="13" height="3" rx="0.5" /><rect x="3" y="17" width="8" height="3" rx="0.5" /></g>,
  '04': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18" /><path d="M8 14h8" /></g>,
};

function MethodologyTimeline() {
  const [active, setActive] = useState(0);
  const progressW = (active / (PHASES.length - 1)) * 86;
  return (
    <section className="methodology" id="methodology">
      <div className="sec-head">
        <span className="overline">Notre démarche</span>
        <h3 className="sec-title">Comprendre. Croiser.<br />Prioriser. <em>Agir.</em></h3>
        <p className="lead">Quatre étapes qui se répondent — pour relier ce que vous savez à ce que font réellement vos utilisateurs.</p>
      </div>
      <div className="timeline">
        <div className="timeline-track" aria-hidden="true"></div>
        <div className="timeline-progress" style={{ width: `${progressW}%` }} aria-hidden="true"></div>
        <div className="timeline-grid">
          {PHASES.map((p, i) => (
            <button key={p.n} className={'tl-step' + (i === active ? ' is-active' : '')} onClick={() => setActive(i)}>
              <div className="tl-marker">
                <span className="tl-marker-num">{p.n}</span>
                <svg className="tl-marker-icon" width="22" height="22" viewBox="0 0 24 24">{TL_ICONS[p.n]}</svg>
                {i < PHASES.length - 1 && (
                  <svg className="tl-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                )}
              </div>
              <div className="tl-content">
                <div className="tl-title">{p.title}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="tl-detail" key={active}>
          <div className="tl-detail-left">
            <span className="tl-detail-num">Étape {PHASES[active].n} · sur 04</span>
            <span className="tl-detail-name">{PHASES[active].title}</span>
          </div>
          <div className="tl-detail-right">
            <p className="tl-detail-desc">{PHASES[active].desc}</p>
            <div className="tl-detail-out-wrap">
              <span className="tl-detail-out-lbl">Livrable</span>
              <span className="tl-detail-out">{PHASES[active].output}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   METHODS CYCLE
   ============================================================ */
const MCX = 320, MCY = 320, MR_OUTER = 240, MR_INNER = 180, MICON_R = 210;
const mPolar = (deg, r) => { const rad = (deg - 90) * Math.PI / 180; return [MCX + r * Math.cos(rad), MCY + r * Math.sin(rad)]; };
const mArcPath = (s, e, rO, rI) => {
  const [x1o, y1o] = mPolar(s, rO), [x2o, y2o] = mPolar(e, rO), [x2i, y2i] = mPolar(e, rI), [x1i, y1i] = mPolar(s, rI);
  const large = (e - s) > 180 ? 1 : 0;
  return `M ${x1o} ${y1o} A ${rO} ${rO} 0 ${large} 1 ${x2o} ${y2o} L ${x2i} ${y2i} A ${rI} ${rI} 0 ${large} 0 ${x1i} ${y1i} Z`;
};

const METHODES = [
  { n: '01', type: 'quanti', color: '#5E3F70', name: 'Analytics', desc: "Review du tracking, identification des pages et parcours qui convertissent — et ceux qui saignent. Détection des segments qui tirent la croissance." },
  { n: '02', type: 'quali',  color: '#3F6B5A', name: 'Heatmaps & Sessions Recordings', desc: "Navigation et interactions sur les pages clés. Analyse des comportements utilisateurs pour comprendre comment ils naviguent, interagissent — et où ils décrochent." },
  { n: '03', type: 'mixte',  color: '#C58A2E', name: 'Sondages onsite', desc: "Freins et déclencheurs de conversion. Pour capter les hésitations avant la décision et les raisons de conversion après coup." },
  { n: '04', type: 'quali',  color: '#B8362A', name: 'Interviews clients', desc: "Expérience d'achat et vécu client. Pour comprendre en profondeur les motivations, les émotions et la perception de valeur — et faire émerger des insights inattendus, souvent invisibles dans les données." },
  { n: '05', type: 'quali',  color: '#7E3A52', name: 'Tests utilisateurs', desc: "Observation en situation réelle. On confronte un panel représentatif à des scénarios clés pour observer les comportements et capter les réactions à chaud — et révéler les frictions concrètes." },
  { n: '06', type: 'quali',  color: '#2E5471', name: 'Évaluation heuristique', desc: "Audit des bonnes pratiques UX et sectorielles. Ce que l'œil expert repère avant même les données." },
];

const MICONS = {
  '01': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l4-4 4 3 6-7" /><path d="M14 9h3v3" /><path d="M3 21h18" /></g>,
  '02': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="1" /><circle cx="9" cy="11" r="2" fill="currentColor" opacity="0.4" /><circle cx="15" cy="11" r="2.5" fill="currentColor" opacity="0.7" /></g>,
  '03': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M9 9h6M9 12h4" /></g>,
  '04': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></g>,
  '05': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6" /><path d="m19.5 19.5-3.5-3.5" /><path d="M11 8v3l2 2" /></g>,
  '06': <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3 8-8" /><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" /></g>,
};

function MethodsCycle() {
  const [active, setActive] = useState(0);
  const [pulseKey, setPulseKey] = useState(0);
  const seg = 360 / METHODES.length, gap = 3;
  const cur = METHODES[active];
  const handlePick = (i) => { setActive(i); setPulseKey(k => k + 1); };
  return (
    <section className="methods" id="methods">
      <div className="sec-head sec-head-left">
        <span className="overline" style={{ color: 'var(--plum)' }}>Ce que nous faisons</span>
        <h3 className="sec-title">Les méthodes qui alimentent<br /><em>cette démarche.</em></h3>
        <p className="lead">Chaque méthode produit un signal. Ensemble, elles se complètent, se recoupent et s'affinent pour transformer le « quoi » en « pourquoi ».</p>
      </div>
      <div className="mcycle">
        <div className="mcycle-stage">
          <svg viewBox="0 0 640 640" className="mcycle-svg">
            {METHODES.map((m, i) => {
              const start = i * seg + gap / 2, end = (i + 1) * seg - gap / 2, isActive = i === active;
              return <path key={m.n + '-' + pulseKey} d={mArcPath(start, end, MR_OUTER, MR_INNER)} fill={m.color} fillOpacity={isActive ? 0.95 : 0.18} className={isActive ? 'marc is-active' : 'marc'} style={{ cursor: 'pointer', transition: 'fill-opacity 240ms var(--ease)' }} onClick={() => handlePick(i)} />;
            })}
            {METHODES.map((m, i) => {
              const midDeg = i * seg + seg / 2, [x, y] = mPolar(midDeg, MICON_R), isActive = i === active;
              return (
                <g key={m.n + '-i'} transform={`translate(${x - 26},${y - 26})`} style={{ cursor: 'pointer' }} onClick={() => handlePick(i)}>
                  <circle cx="26" cy="26" r="26" fill="var(--paper-3)" stroke={isActive ? m.color : 'var(--ink-32)'} strokeWidth={isActive ? 1.8 : 1.25} style={{ transition: 'stroke 240ms var(--ease)' }} />
                  <g transform="translate(14,14)" style={{ color: isActive ? m.color : 'var(--ink)', transition: 'color 240ms var(--ease)' }}>{MICONS[m.n]}</g>
                </g>
              );
            })}
            <g textAnchor="middle" pointerEvents="none">
              <text x={MCX} y={MCY - 4} fontFamily="var(--font-display)" fontWeight="500" fontSize="46" fill="var(--ink)" letterSpacing="-0.5">Démarche</text>
              <text x={MCX} y={MCY + 44} fontFamily="Newsreader, serif" fontWeight="500" fontSize="46" fill={cur.color} fontStyle="italic" style={{ transition: 'fill 240ms var(--ease)' }}>CRO.</text>
              <text x={MCX} y={MCY + 86} fontFamily="var(--font-body)" fontSize="18" fontWeight="500" fill="var(--ink-soft)" letterSpacing="0.4">Business · Utilisateurs · Données</text>
            </g>
          </svg>
        </div>
        <div className="mcycle-legend reveal-list">
          {METHODES.map((m, i) => {
            const isQuanti = m.type === 'quanti';
            const isMixte = m.type === 'mixte';
            return (
              <button key={m.n} className={'mphase-row reveal-item' + (i === active ? ' is-active' : '')} onClick={() => handlePick(i)} style={{ '--mp-color': m.color }}>
                <span className="mphase-n">{m.n}</span>
                <span className="mphase-content">
                  <span className="mphase-headline">
                    <span className="mphase-title">{m.name}</span>
                    {i === active && (
                      isMixte ? (
                        <span className="qq-badge"><span className="qq-dot qq-quanti"></span><span className="qq-dot qq-quali"></span>Quanti + Quali</span>
                      ) : isQuanti ? (
                        <span className="qq-badge"><span className="qq-dot qq-quanti"></span>Quantitatif</span>
                      ) : (
                        <span className="qq-badge"><span className="qq-dot qq-quali"></span>Qualitatif</span>
                      )
                    )}
                  </span>
                  {i === active && <span className="mphase-desc">{m.desc}</span>}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="difference">
        <div className="difference-inner">
          <div className="difference-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v18M3 12h18" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
          <div>
            <p className="difference-body">
              On ne regarde pas seulement ce qui ne marche pas : on comprend <strong>pourquoi</strong> ça ne marche pas dans <strong>votre</strong> <strong style={{ color: 'var(--pompeian)' }}>business</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RECOMMENDATION STACK
   ============================================================ */
const TAG = {
  place:    { bg: 'rgba(178,58,44,0.10)',  fg: '#6E2218' },
  cat:      { bg: 'rgba(28,24,48,0.08)',   fg: '#1C1830' },
  theme:    { bg: 'rgba(110,77,126,0.18)', fg: '#42304E' },
  action:   { bg: 'rgba(178,58,44,0.16)',  fg: '#6E2218' },
  research: { bg: 'rgba(28,24,48,0.05)',   fg: '#4A4666' },
};
const IMPORTANCE = {
  5: { label: 'Critique', color: '#B23A2C' }, 4: { label: 'Élevée', color: '#B23A2C' },
  3: { label: 'Moyenne',  color: '#856392' }, 2: { label: 'Basse',  color: '#9C7FAE' },
};
const RECS = [
  { n: '01', title: "Retirer les champs « société » et « TVA » de l'étape 3", importance: 5, ice: { i: 9, c: 8, e: 2 }, place: 'Checkout',     cat: 'Utilisabilité', theme: 'Effort',       action: 'Modification directe', research: ['Analytics','Sessions recordings'], desc: "Seulement 8% des clients remplissent ces champs. Drop-off de 34% sur l'étape 3." },
  { n: '02', title: 'Remonter les avis clients au-dessus du fold sur la fiche produit', importance: 4, ice: { i: 8, c: 9, e: 3 }, place: 'Page produit', cat: 'Confiance', theme: 'Attention', action: 'Modification directe', research: ['Heatmaps','Sessions recordings'], desc: "73% des visiteurs ne scrollent pas jusqu'aux avis. Pattern de sortie avant ajout au panier." },
  { n: '03', title: 'Reformuler le hero autour du résultat client, pas du produit', importance: 4, ice: { i: 7, c: 6, e: 2 }, place: 'Homepage', cat: 'Motivation', theme: 'Désirabilité', action: 'Test A/B', research: ['Interviews clients','Évaluation heuristique'], desc: "Les interviews révèlent que la promesse principale n'est pas comprise avant la 3ème page visitée." },
  { n: '04', title: 'Clarifier les options de livraison dès la page produit', importance: 3, ice: { i: 6, c: 7, e: 4 }, place: 'Page produit', cat: 'Compréhension', theme: 'Livraison', action: 'Modification directe', research: ['Tests utilisateurs','Analytics'], desc: "Signal fort sur l'abandon panier lié à la découverte tardive des frais. À expliciter en amont." },
  { n: '05', title: 'Ajouter la preuve sociale dans le flow, pas en bas de page', importance: 3, ice: { i: 5, c: 7, e: 2 }, place: 'Panier', cat: 'Confiance', theme: 'Sécurité', action: 'Modification directe', research: ['Tests utilisateurs','Sessions recordings'], desc: "Avis clients enfouis en footer. Repositionnement inline pendant l'ajout au panier." },
  { n: '06', title: "Tester un pricing en 3 tiers avec ancrage sur l'offre premium", importance: 2, ice: { i: 4, c: 9, e: 3 }, place: 'Global / multi-pages', cat: 'Coût', theme: 'Tarification', action: 'Test A/B', research: ['Sondages onsite','Analytics'], desc: "Hésitation forte sur le rapport qualité/prix. Un tier premium visible redirige vers l'offre principale." },
];

function Pill({ kind, children }) { const s = TAG[kind] || TAG.cat; return <span className="rec-pill" style={{ background: s.bg, color: s.fg }}>{children}</span>; }
function ImpDots({ level }) {
  const color = IMPORTANCE[level]?.color || '#8A85A0';
  return <span className="rec-imp">{[1, 2, 3, 4, 5].map(i => <span key={i} className="rec-imp-dot" style={{ background: i <= level ? color : 'rgba(28,24,48,0.12)' }}></span>)}<span className="rec-imp-lbl" style={{ color }}>{IMPORTANCE[level]?.label}</span></span>;
}

function RecommendationStack() {
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
  const bringToFront = (idx) => setOrder(prev => [idx, ...prev.filter(i => i !== idx)]);
  const frontIdx = order[0];
  return (
    <div className="rec-wrap" id="recos">
      <div className="sec-head">
        <span className="overline" style={{ color: 'var(--plum)' }}>Ce que nous livrons</span>
        <h3 className="sec-title">De l'insight à <em>l'action.</em></h3>
        <p className="lead">Chaque recommandation est structurée, priorisée et mise en perspective — pour passer de l'insight à des décisions claires et des actions concrètes.</p>
      </div>
      <div className="rec-stage">
        <button className="rec-nav rec-nav-prev" onClick={() => {
          const prev = (frontIdx - 1 + RECS.length) % RECS.length;
          bringToFront(prev);
        }} aria-label="Recommandation précédente">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="rec-deck">
          {order.map((idx, pos) => {
            const r = RECS[idx], isFront = pos === 0;
            const offset = pos * 12, shift = pos * 14, scale = 1 - pos * 0.035, rot = pos * -1.2;
            return (
              <button key={r.n} className={'rec-card' + (isFront ? ' is-front' : '')}
                style={{ transform: `translate(${shift}px,${offset}px) scale(${scale}) rotate(${rot}deg)`, zIndex: RECS.length - pos, opacity: pos > 4 ? 0 : 1 }}
                onClick={() => !isFront && bringToFront(idx)} tabIndex={isFront ? 0 : -1}
              >
                <header className="rec-top"><span className="rec-n">№ {r.n}</span><ImpDots level={r.importance} /></header>
                <h4 className="rec-title">{r.title}</h4>
                <p className="rec-desc">{r.desc}</p>
                <dl className="rec-schema">
                  <dt>Emplacement</dt><dd><Pill kind="place">{r.place}</Pill></dd>
                  <dt>Catégorie</dt><dd><Pill kind="cat">{r.cat}</Pill></dd>
                  <dt>Thème</dt><dd><Pill kind="theme">{r.theme}</Pill></dd>
                  <dt>Action</dt><dd><Pill kind="action">{r.action}</Pill></dd>
                  <dt>Recherche</dt><dd className="rec-research">{r.research.map(x => <Pill key={x} kind="research">{x}</Pill>)}</dd>
                </dl>
                <footer className="rec-foot">
                  <div className="rec-ice"><span>I <strong>{r.ice.i}</strong></span><span>C <strong>{r.ice.c}</strong></span><span>E <strong>{r.ice.e}</strong></span><span className="rec-score">ICE {(r.ice.i * r.ice.c / r.ice.e).toFixed(1)}</span></div>
                  <span className="rec-cta">Insight lié <span className="rec-cta-arrow"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span></span>
                </footer>
              </button>
            );
          })}
        </div>
        <button className="rec-nav rec-nav-next" onClick={() => {
          const next = (frontIdx + 1) % RECS.length;
          bringToFront(next);
        }} aria-label="Recommandation suivante">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
        <div className="rec-counter"><strong>{String(frontIdx + 1).padStart(2, '0')}</strong> / {String(RECS.length).padStart(2, '0')}</div>
      </div>
    </div>
  );
}

/* ============================================================
   TEAM
   ============================================================ */
function Team() {
  return (
    <section className="team" id="equipe">
      <div className="team-head">
        <span className="overline" style={{ color: 'var(--plum)' }}>Le binôme</span>
        <h2 className="sec-title">Un audit fait <em>en binôme.</em><br />Un double regard.</h2>
        <p className="lead">L'audit CRO gagne en profondeur quand deux lectures différentes — business et utilisateurs — convergent sur les mêmes données.</p>
      </div>
      <div className="binome-stage">
        <div className="binome-grid reveal-list">
          <div className="binome-card left reveal-item">
            <div className="binome-role">CRO · Acquisition · Martech</div>
            <div className="binome-name">Anne-Sophie Roux</div>
            <p className="binome-desc">Spécialiste CRO avec un passif Acquisition et Martech. Je comprends votre business et j’analyse ce que la data révèle pour cadrer des optimisations à fort impact. Une lecture qui relie stratégie business et optimisation de la conversion. En lien direct avec les équipes, pour comprendre leurs enjeux et les traduire en missions claires et concrètes.</p>
            <div className="binome-tags">
              <span className="binome-tag">CRO</span>
              <span className="binome-tag">Acquisition</span>
              <span className="binome-tag">Martech</span>
              <span className="binome-tag">Data</span>
            </div>
          </div>
          <div className="binome-conn">
            <div className="binome-conn-line" aria-hidden="true"></div>
            <div className="binome-rings" aria-label="Binôme">
              <span className="binome-ring binome-ring-l"></span>
              <span className="binome-ring binome-ring-r"></span>
            </div>
          </div>
          <div className="binome-card right reveal-item">
            <div className="binome-role">CRO · Formation</div>
            <div className="binome-name">Florent Kiecken</div>
            <p className="binome-desc">Spécialiste CRO avec un historique de missions sur des sites e-commerce, SaaS et leadgen à fort trafic (+130 marques accompagnées). Expert de la recherche utilisateur et des tests, il forme également au CRO pour transmettre des méthodes éprouvées et actionnables (+1200 personnes formées).</p>
            <div className="binome-tags">
              <span className="binome-tag">CRO</span>
              <span className="binome-tag">UX Research</span>
              <span className="binome-tag">A/B test</span>
              <span className="binome-tag">Formation</span>
            </div>
            <a href="#" className="binome-link">→ Voir son site — SDLV</a>
          </div>
        </div>
        <div className="double-regard">
          <div className="double-regard-head">
            <div className="double-regard-label">Ce que le binôme apporte</div>
            <h3 className="double-regard-title">Un double regard sur votre conversion.</h3>
          </div>
          <div className="double-regard-body">
            <div className="dr-item">
              <div className="dr-item-num">№ 01 · Le recul</div>
              <div className="dr-item-title">Garder le lien avec votre business.</div>
              <p className="dr-item-desc">Sur chaque insight, on prend de la hauteur : est-ce que ça compte vraiment ? pour quel segment ? avec quel impact ? Une lecture qui ramène l'optimisation à vos enjeux.</p>
            </div>
            <div className="dr-item">
              <div className="dr-item-num">№ 02 · La proximité</div>
              <div className="dr-item-title">Rester au plus près de vos utilisateurs.</div>
              <p className="dr-item-desc">Sur les mêmes signaux, on regarde de très près : pourquoi cette hésitation, ce clic, cet abandon ? Une lecture fine du comportement réel.</p>
            </div>
          </div>
          <div className="double-regard-foot">
            La valeur n'est pas dans chaque regard séparément — elle est dans leur croisement, et dans ce qu'on en fait pour votre business.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BOOKING — Calendar
   ============================================================ */
const MONTHS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const WEEKDAYS_FR = ['L','M','M','J','V','S','D'];
const FULL_WEEKDAYS_FR = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
const FULL_DATE_FR = (d) => `${FULL_WEEKDAYS_FR[d.getDay()]} ${d.getDate()} ${MONTHS_FR[d.getMonth()]}`;

function genSlots(date) {
  if (!date) return [];
  const wd = date.getDay();
  if (wd === 0 || wd === 6) return [];
  const base = ['09:30','10:30','11:30','14:00','15:00','16:00','17:00'];
  const seed = date.getDate() + date.getMonth();
  return base.filter((_, i) => ((seed + i * 3) % 5) !== 0);
}

function Calendar({ selectedDate, selectedSlot, onSelectDate, onSelectSlot }) {
  const today = useMemo(() => { const t = new Date(); t.setHours(0, 0, 0, 0); return t; }, []);
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const monthFirst = new Date(view.y, view.m, 1);
  const monthLast = new Date(view.y, view.m + 1, 0);
  const startOffset = (monthFirst.getDay() + 6) % 7;
  const totalDays = monthLast.getDate();
  const grid = [];
  for (let i = 0; i < startOffset; i++) grid.push(null);
  for (let d = 1; d <= totalDays; d++) grid.push(new Date(view.y, view.m, d));
  const canPrev = !(view.y === today.getFullYear() && view.m === today.getMonth());
  const slots = genSlots(selectedDate);
  const goPrev = () => { if (!canPrev) return; setView(view.m === 0 ? { y: view.y - 1, m: 11 } : { y: view.y, m: view.m - 1 }); };
  const goNext = () => { setView(view.m === 11 ? { y: view.y + 1, m: 0 } : { y: view.y, m: view.m + 1 }); };
  const isSameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  return (
    <div className="cal-card">
      <div className="cal-header">
        <div className="cal-header-avatar"><span className="cal-header-mark">M</span></div>
        <div className="cal-header-info">
          <div className="cal-header-org">Maât · Audit CRO</div>
          <div className="cal-header-title">Call de découverte</div>
          <div className="cal-header-meta">
            <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>30 min</span>
            <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>Visio</span>
            <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Europe/Paris</span>
          </div>
        </div>
      </div>
      <div className="cal-body">
        <div className="cal-month">
          <div className="cal-month-nav">
            <span className="cal-month-name">{MONTHS_FR[view.m]} {view.y}</span>
            <div className="cal-arrows">
              <button className="cal-arrow" onClick={goPrev} disabled={!canPrev} aria-label="Mois précédent">‹</button>
              <button className="cal-arrow" onClick={goNext} aria-label="Mois suivant">›</button>
            </div>
          </div>
          <div className="cal-weekdays">{WEEKDAYS_FR.map((d, i) => <span key={i}>{d}</span>)}</div>
          <div className="cal-days">
            {grid.map((d, i) => {
              if (!d) return <div key={i} className="cal-day empty"></div>;
              const wd = d.getDay();
              const isWeekend = wd === 0 || wd === 6;
              const isPast = d < today;
              const isToday = isSameDay(d, today);
              const isSelected = isSameDay(d, selectedDate);
              const isDisabled = isPast || isWeekend;
              const cls = ['cal-day'];
              if (isDisabled) cls.push('disabled'); else cls.push('available');
              if (isToday) cls.push('today');
              if (isSelected) cls.push('selected');
              return <button key={i} className={cls.join(' ')} disabled={isDisabled} onClick={() => onSelectDate(d)}>{d.getDate()}</button>;
            })}
          </div>
        </div>
        <div className="cal-slots">
          <div className="cal-slots-head">
            <div className="cal-slots-date">{selectedDate ? FULL_DATE_FR(selectedDate) : 'Sélectionnez une date'}</div>
            {selectedDate && <div className="cal-slots-tz">Créneaux disponibles · 30 min</div>}
          </div>
          <div className="cal-slots-list">
            {!selectedDate && <div className="cal-empty">Cliquez sur un jour disponible<br />pour voir les créneaux.</div>}
            {selectedDate && slots.length === 0 && <div className="cal-empty">Aucun créneau disponible<br />ce jour-là.</div>}
            {selectedDate && slots.map(s => (
              <button key={s} className={'cal-slot' + (selectedSlot === s ? ' selected' : '')} onClick={() => onSelectSlot(s)}>
                <span>{s}</span>
                {selectedSlot === s && <span className="cal-slot-confirm">Sélectionné</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="cal-foot">
        <span className="cal-foot-info">{selectedDate && selectedSlot ? `Confirmé : ${FULL_DATE_FR(selectedDate)} · ${selectedSlot}` : 'Connecté à Google Calendar · Confirmation auto'}</span>
        <div className="cal-foot-confirm">
          <button className="cal-confirm-btn" disabled={!(selectedDate && selectedSlot)} onClick={() => {
            alert(`(Démo) Réservation : ${FULL_DATE_FR(selectedDate)} · ${selectedSlot}`);
          }}>
            Confirmer le créneau
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function Booking() {
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const handleSelectDate = (d) => { setDate(d); setSlot(null); };
  return (
    <section className="booking" id="book">
      <div className="booking-inner">
        <div className="book-left">
          <span className="overline">Call de découverte · 30 min · Sans engagement</span>
          <h3>Voyons si nous pouvons <em>vous aider.</em></h3>
          <p className="lead">Un premier échange pour comprendre votre situation et voir si notre approche correspond à vos enjeux.</p>
          <ul className="book-points">
            <li>Compréhension de votre business et de vos enjeux</li>
            <li>Clarification de vos objectifs</li>
            <li>Présentation de notre méthode</li>
            <li>Aucune présentation commerciale</li>
          </ul>
        </div>
        <Calendar selectedDate={date} selectedSlot={slot} onSelectDate={handleSelectDate} onSelectSlot={setSlot} />
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="foot-left">
        <Logo size="md" />
        <p>Audits de conversion pour les marques qui ont mieux à faire que deviner.</p>
        <p className="foot-thesis">La conversion est une question d'alignement.</p>
        <p className="foot-def"><span className="foot-def-name">Maat</span> est le principe d'équilibre et de vérité. Nous croyons que la conversion ne se force pas : elle émerge quand promesse, expérience et attente s'accordent enfin.</p>
      </div>
      <div className="foot-cols">
        <div>
          <h6>Audit CRO</h6>
          <a href="#methodology">Notre démarche</a>
          <a href="#methods">Les méthodes</a>
          <a href="#equipe">Collaboration</a>
        </div>
        <div>
          <h6>Contact</h6>
          <a href="#book">Réserver un call</a>
          <a href="mailto:annesophieroux.consulting@gmail.com">annesophieroux.consulting@gmail.com</a>
        </div>
      </div>
      <div className="foot-base">
        <span>© 2026 Maat · Paris</span>
        <div className="foot-base-links">
          <a href="mentions-legales.html">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal-list').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <SplitPainOutcome />
      <MethodologyTimeline />
      <MethodsCycle />
      <RecommendationStack />
      <Team />
      <Modulable />
      <Booking />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
