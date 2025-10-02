
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function SitoEmilioRostagno() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => { document.head.removeChild(link); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <link rel="canonical" href="https://emilio.rostagno.it/" />
        <title>Emilio Rostagno — Consulenza Finanziaria Vicenza</title>
        <meta name="description" content="Consulenza finanziaria a Vicenza: imprese familiari, PMI, investimenti e pianificazione del patrimonio di famiglia." />
        <link rel="preload" as="image" href="/emilio-hero.jpg" />
      
        <meta property="og:title" content="Emilio Rostagno — Consulenza Finanziaria Vicenza" />
        <meta property="og:description" content="Consulenza finanziaria indipendente a Vicenza: investimenti, pianificazione patrimoniale e tutela del patrimonio per famiglie e imprese." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/emilio-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Ribbon payoff */}
      <section className="bg-gradient-to-r from-[#0F2A47] via-[#1E3A8A] to-[#243B55] text-white">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
          Pianificazione e tutela del patrimonio per famiglie e imprese • Vicenza
        </div>
      </section>

      <div className="min-h-screen bg-stone-50 text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100" style={{fontFamily:'"IBM Plex Sans", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"'}}>
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-stone-50/60 bg-stone-50/80 dark:supports-[backdrop-filter]:bg-neutral-950/60 dark:bg-neutral-950/80 border-b border-neutral-200/70 dark:border-neutral-800/70">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
            <a href="#" className="flex items-center gap-2" aria-label="Home">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-slate-900 shadow-md"></span>
              <span className="text-lg font-semibold tracking-tight">Emilio Rostagno</span>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              <a href="#specializzazioni" className="hover:opacity-80">Ambiti</a>
              <a href="#metodo" className="hover:opacity-80">Metodo</a>
              <a href="#chisono" className="hover:opacity-80">Chi sono</a>
              <a href="#blog" className="hover:opacity-80">Blog</a>
              <a href="#contatti" className="hover:opacity-80">Contatti</a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle tema"
                onClick={() => setDark((v) => !v)}
                className="rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm transition hover:shadow md:text-base dark:border-neutral-700 dark:bg-neutral-900"
              >
                {dark ? (
                  <span className="inline-flex items-center gap-2"><MoonIcon className="h-4 w-4" /> Scuro</span>
                ) : (
                  <span className="inline-flex items-center gap-2"><SunIcon className="h-4 w-4" /> Chiaro</span>
                )}
              </button>

              <a
                href="#consulenza"
                className="hidden rounded-2xl bg-gradient-to-r from-blue-800 to-slate-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:scale-[1.02] active:scale-[0.98] lg:inline-block"
              >
                Prenota prima consulenza
              </a>

              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-300 bg-white shadow-sm hover:shadow lg:hidden dark:border-neutral-700 dark:bg-neutral-900"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Apri menu"
              >
                <BurgerIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="border-t border-neutral-200 bg-stone-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900 lg:hidden">
              <div className="flex flex-col gap-2">
                <a onClick={() => setMenuOpen(false)} href="#specializzazioni" className="rounded-lg px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Ambiti</a>
                <a onClick={() => setMenuOpen(false)} href="#metodo" className="rounded-lg px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Metodo</a>
                <a onClick={() => setMenuOpen(false)} href="#chisono" className="rounded-lg px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Chi sono</a>
                <a onClick={() => setMenuOpen(false)} href="#blog" className="rounded-lg px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Blog</a>
                <a onClick={() => setMenuOpen(false)} href="#contatti" className="rounded-lg px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Contatti</a>
                <a onClick={() => setMenuOpen(false)} href="#consulenza" className="rounded-xl bg-gradient-to-r from-blue-800 to-slate-900 px-4 py-2 text-center font-semibold text-white">Prenota consulenza</a>
              </div>
            </div>
          )}
        </header>

        {/* Hero con foto + banner valore */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-6 lg:py-16">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Strategia e pianificazione per <span className="bg-gradient-to-r from-blue-800 to-slate-900 bg-clip-text text-transparent">imprese familiari e patrimoni</span>
              </h1>
              <p className="mt-4 max-w-prose text-lg text-neutral-700 dark:text-neutral-300">
                Testo fittizio: supporto nella pianificazione del patrimonio della famiglia e nella finanza d'impresa, con attenzione alla governance e alla protezione del capitale.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#consulenza" className="rounded-2xl bg-gradient-to-r from-blue-800 to-slate-900 px-5 py-3 font-semibold text-white shadow transition hover:scale-[1.02] active:scale-[0.98]">Prenota la prima consulenza</a>
                <a href="#specializzazioni" className="rounded-2xl border border-neutral-300 bg-white/70 px-5 py-3 font-semibold shadow-sm backdrop-blur hover:shadow dark:border-neutral-700 dark:bg-neutral-900/70">Ambiti di lavoro</a>
              </div>

              {/* Banner Valore */}
              <div className="mt-6 rounded-3xl p-5 text-white shadow bg-gradient-to-br from-[#0F2A47] via-[#1E3A8A] to-[#243B55]">
                <p className="text-base md:text-lg font-medium">
                  Dalla diagnosi alla reportistica: processo chiaro, KPI misurabili, esecuzione insieme.
                </p>
              </div>
            </div>

            <div className="order-first lg:order-none">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-lg dark:border-neutral-800">
                <img
                  src="/emilio-hero.jpg"
                  alt="Emilio Rostagno — ritratto professionale"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ambiti */}
        <section id="specializzazioni" className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ambiti di lavoro</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Soluzioni pratiche e misurabili per la gestione del patrimonio e la crescita dell'impresa.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<FamilyIcon className="h-5 w-5" />} title="Imprese familiari" desc="Passaggi generazionali, governance e allineamento valori‑obiettivi." />
            <FeatureCard icon={<FactoryIcon className="h-5 w-5" />} title="PMI" desc="Finanza operativa, budgeting, KPI e accesso al credito." />
            <FeatureCard icon={<ChartIcon className="h-5 w-5" />} title="Investimenti" desc="Impostazione strategica del portafoglio e controllo del rischio." />
            <FeatureCard icon={<ShieldIcon className="h-5 w-5" />} title="Patrimonio di famiglia" desc="Pianificazione patrimoniale, tutela e continuità generazionale." />
          </div>
        </section>

        {/* Strip numeri */}
        <section className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-6 rounded-3xl border border-neutral-200 bg-white/70 p-6 backdrop-blur md:grid-cols-3 dark:border-neutral-800">
            <div><p className="text-3xl font-semibold text-[#1E3A8A]">> 10 anni</p><p className="text-sm text-neutral-600">in pianificazione</p></div>
            <div><p className="text-3xl font-semibold text-[#1E3A8A]">Processo</p><p className="text-sm text-neutral-600">diagnosi → piano → KPI</p></div>
            <div><p className="text-3xl font-semibold text-[#1E3A8A]">Vicenza</p><p className="text-sm text-neutral-600">in studio o online</p></div>
          </div>
        </section>

        {/* Metodo */}
        <section id="comelavoriamo" className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div>
      <h3 className="text-2xl font-semibold">Come lavoreremo insieme</h3>
      <div className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
        <p>Definizione delle aspettative e degli obiettivi</p>
        <p>Programmazione del metodo e scelta degli strumenti</p>
        <p>Monitoraggio nel tempo, report periodici ed eventuale ribilanciamento</p>
      </div>
    </div>
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h4 className="font-semibold mb-2">Investimenti</h4>
        <p>Creazione e gestione di soluzioni di investimento globali e diversificate, per far crescere il patrimonio in linea con le priorità.</p>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h4 className="font-semibold mb-2">Wealth protection</h4>
        <p>Ottimizzazione fiscale, pianificazione legale e massima protezione al patrimonio di famiglia.</p>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h4 className="font-semibold mb-2">Passaggio generazionale</h4>
        <p>Pianificazione di tutti gli aspetti fiscali e successori legati al trasferimento del patrimonio.</p>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h4 className="font-semibold mb-2">Impresa di famiglia</h4>
        <p>Assistenza nelle fasi di transizione e sviluppo; supporto nelle scelte strategiche, legali e fiscali.</p>
      </div>
    </div>
  </div>
</section>

        {/* Quote banner */}
        <section className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid items-center gap-6 rounded-3xl p-6 md:grid-cols-[120px_1fr] bg-gradient-to-r from-[#0F2A47] via-[#1E3A8A] to-[#243B55] text-white">
            <img src="/emilio-ritratto.jpg" alt="Emilio Rostagno" className="h-28 w-28 rounded-2xl object-cover" />
            <blockquote className="text-lg leading-snug">
              “Testo fittizio: il mio lavoro è costruire decisioni finanziarie semplici da prendere e robuste nel tempo, con un metodo trasparente.”
            </blockquote>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Articoli</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Approfondimenti su finanza personale, imprese familiari e pianificazione del patrimonio.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {title:'Come impostare un piano di investimento', date:'In arrivo'},
              {title:'Patrimonio di famiglia: da dove partire', date:'In arrivo'},
              {title:'PMI e controllo di gestione pratico', date:'In arrivo'},
            ].map((p, i) => (
              <article key={i} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-stone-200 to-stone-50" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{p.date}</p>
                  <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-blue-800 hover:underline">Leggi →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contatti */}
        <section id="contatti" className="mx-auto max-w-3xl px-4 py-20 lg:px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight">Contatti — Vicenza</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Studio (testo fittizio): Via Esempio 12, 36100 Vicenza — T. +39 0444 000000 — info@studio‑finanziario.it</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Grazie! Questo è un prototipo: in produzione invieremo i dati a un endpoint o a un'email."); }}
            className="mt-8 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm">Nome e cognome</label>
                <input required type="text" placeholder="Il tuo nome" className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none ring-blue-700/20 focus:ring-4 dark:border-neutral-700 dark:bg-neutral-950" />
              </div>
              <div>
                <label className="mb-1 block text-sm">Email</label>
                <input required type="email" placeholder="nome@azienda.it" className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none ring-blue-700/20 focus:ring-4 dark:border-neutral-700 dark:bg-neutral-950" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm">Telefono (opzionale)</label>
                <input type="tel" placeholder="+39 ..." className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none ring-blue-700/20 focus:ring-4 dark:border-neutral-700 dark:bg-neutral-950" />
              </div>
              <div>
                <label className="mb-1 block text-sm">Seleziona ambito</label>
                <select className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-950">
                  <option>Impresa familiare</option>
                  <option>PMI</option>
                  <option>Investimenti</option>
                  <option>Patrimonio di famiglia</option>
                  <option>Altro</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm">Messaggio</label>
              <textarea required rows={5} placeholder="Raccontami brevemente la tua esigenza" className="w-full resize-y rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none ring-blue-700/20 focus:ring-4 dark:border-neutral-700 dark:bg-neutral-950" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-neutral-500">
                Inviando accetti la <a href="#" className="underline">privacy policy</a> (testo fittizio).
              </div>
              <button type="submit" className="rounded-2xl bg-gradient-to-r from-blue-800 to-slate-900 px-5 py-2.5 font-semibold text-white shadow">Invia richiesta</button>
            </div>
          </form>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-600 dark:text-neutral-400 lg:flex-row lg:px-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-800 to-slate-900"></span>
              © {new Date().getFullYear()} Emilio Rostagno — Tutti i diritti riservati
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Termini</a>
              <a href="#blog" className="hover:underline">Blog</a>
              <a href="#contatti" className="hover:underline">Contatti</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Components */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 dark:bg-neutral-800">
        {icon}
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-neutral-700 dark:text-neutral-300">{desc}</p>
    </div>
  );
}

/* Icons */
function SunIcon({ className = "h-4 w-4" }) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
); }
function MoonIcon({ className = "h-4 w-4" }) { return (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
); }
function BurgerIcon({ className = "h-5 w-5" }) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
); }
function ShieldIcon({ className = "h-4 w-4" }) { return (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  </svg>
); }
function RocketIcon({ className = "h-4 w-4" }) { return (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2c4 0 7 3 7 7 0 6-7 13-7 13S5 15 5 9c0-4 3-7 7-7zm0 6a2 2 0 110 4 2 2 0 010-4z" />
  </svg>
); }
function SparklesIcon({ className = "h-4 w-4" }) { return (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4zm7 11l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM5 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
  </svg>
); }
function CheckIcon({ className = "h-5 w-5" }) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
); }
function FamilyIcon({ className = "h-5 w-5" }) { return (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 10a3 3 0 110-6 3 3 0 010 6zm10-2a2 2 0 110-4 2 2 0 010 4zM3 21v-2a5 5 0 015-5h0a5 5 0 015 5v2H3zm13 0v-2a4 4 0 014-4h0a4 4 0 014 4v2h-8z" />
  </svg>
); }
function FactoryIcon({ className = "h-5 w-5" }) { return (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 21V8l6 4V8l6 4V8l6 4v9H3zM5 21h14v-5H5v5z" />
  </svg>
); }
function ChartIcon({ className = "h-5 w-5" }) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M4 19h16M7 16V8m5 8V5m5 11v-6" />
  </svg>
); }
