
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
        <title>Emilio Rostagno — Consulenza Finanziaria Vicenza</title>
        <meta name="description" content="Consulente finanziario per imprese familiari, PMI e trust a Vicenza. Pianificazione patrimoniale e protezione del patrimonio." />
      </Head>
      <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100" style={{fontFamily:'\"IBM Plex Sans\", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"'}}>
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/70 dark:border-neutral-800/70">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
            <a href="#" className="flex items-center gap-2" aria-label="Home">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-indigo-800 shadow-md"></span>
              <span className="text-lg font-semibold tracking-tight">Emilio Rostagno</span>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              <a href="#specializzazioni" className="hover:opacity-80">Specializzazioni</a>
              <a href="#metodo" className="hover:opacity-80">Metodo</a>
              <a href="#contatti" className="hover:opacity-80">Contatti</a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle tema"
                onClick={() => setDark((v) => !v)}
                className="rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm transition hover:shadow md:text-base dark:border-neutral-700 dark:bg-neutral-900"
              >
                {dark ? (
                  <span className="inline-flex items-center gap-2">Scuro</span>
                ) : (
                  <span className="inline-flex items-center gap-2">Chiaro</span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20 blur-3xl">
            <div className="mx-auto h-64 w-64 translate-x-20 translate-y-10 rounded-full bg-blue-600/30"></div>
            <div className="mx-auto -mt-20 h-80 w-80 translate-x-[60%] rounded-full bg-indigo-700/20"></div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-6 lg:py-28">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Consulenza finanziaria per <span className="bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">imprese familiari, PMI e trust</span>
              </h1>
              <p className="mt-4 max-w-prose text-lg text-neutral-700 dark:text-neutral-300">
                Supporto nella pianificazione patrimoniale, protezione del patrimonio e strategie su misura per imprenditori e famiglie.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#contatti" className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-3 font-semibold text-white shadow transition hover:scale-[1.02] active:scale-[0.98]">Prenota la prima consulenza</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
              <img src="https://images.unsplash.com/photo-1554224155-3a589877462f?q=80&w=1600&auto=format&fit=crop" alt="Consulenza" className="rounded-xl object-cover" />
            </div>
          </div>
        </section>

        {/* Specializzazioni */}
        <section id="specializzazioni" className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A chi mi rivolgo</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">Consulenza indipendente con focus su continuità aziendale e tutela del patrimonio.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Imprese familiari" desc="Passaggi generazionali, patti di famiglia, governance e allineamento valori‑obiettivi." />
            <Card title="PMI" desc="Finanza operativa, budgeting, analisi e accesso al credito con approccio data‑driven." />
            <Card title="Trust" desc="Protezione patrimoniale, strumenti fiduciari, coordinamento con professionisti legali e fiscali." />
          </div>
        </section>

        {/* Metodo */}
        <section id="metodo" className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center mb-8">Come lavoreremo insieme</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>Diagnosi della situazione attuale: finanziaria, patrimoniale e giuridica</p>
            <p>Definizione delle aspettative e degli obiettivi</p>
            <p>Programmazione del metodo e scelta degli strumenti</p>
            <p>Monitoraggio nel tempo, report periodici ed eventuale ribilanciamento</p>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 text-neutral-700 dark:text-neutral-300">
            <li className="p-6 rounded-xl bg-white shadow dark:bg-neutral-900">1) Creazione e gestione di soluzioni di investimento globali e diversificate.</li>
            <li className="p-6 rounded-xl bg-white shadow dark:bg-neutral-900">2) Servizio di wealth protection: ottimizzazione fiscale, pianificazione legale e protezione del patrimonio familiare.</li>
            <li className="p-6 rounded-xl bg-white shadow dark:bg-neutral-900">3) Pianificazione del passaggio generazionale, aspetti fiscali e successori.</li>
            <li className="p-6 rounded-xl bg-white shadow dark:bg-neutral-900">4) Assistenza per aziende familiari nelle fasi di transizione e sviluppo.</li>
          </ul>
        </section>

        {/* Contatti */}
        <section id="contatti" className="mx-auto max-w-3xl px-4 py-20 lg:px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight">Contatti</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Studio: Via Esempio 12, 36100 Vicenza — T. +39 0444 000000 — info@studio-finanziario.it</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-500 lg:flex-row lg:px-6">
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-700 to-indigo-800"></span>
              © {new Date().getFullYear()} Emilio Rostagno — Tutti i diritti riservati
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Termini</a>
              <a href="#contatti" className="hover:underline">Contatti</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-neutral-600 dark:text-neutral-300">{desc}</p>
    </div>
  );
}
