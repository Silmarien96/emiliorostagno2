import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Briefcase, Shield, Repeat, Building2 } from "lucide-react";

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
      <div className="min-h-screen bg-[#f9f6f1] text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100" style={{fontFamily:'\"IBM Plex Sans\", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"'}}>
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur bg-[#f9f6f1]/90 dark:bg-neutral-950/80 border-b border-neutral-200/70 dark:border-neutral-800/70">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
            <a href="#" className="flex items-center gap-2" aria-label="Home">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-indigo-800 shadow-md"></span>
              <span className="text-lg font-semibold tracking-tight">Emilio Rostagno</span>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              <a href="#specializzazioni" className="hover:opacity-80 text-blue-700 font-medium">Specializzazioni</a>
              <a href="#metodo" className="hover:opacity-80 text-blue-700 font-medium">Metodo</a>
              <a href="#bio" className="hover:opacity-80 text-blue-700 font-medium">Chi sono</a>
              <a href="#contatti" className="hover:opacity-80 text-blue-700 font-medium">Contatti</a>
            </nav>
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

        {/* Banner separatore */}
        <div className="w-full h-24 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

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
            <li className="p-6 rounded-xl bg-white shadow flex items-start gap-3 dark:bg-neutral-900"><Briefcase className="text-blue-700 w-6 h-6 shrink-0"/> <span>Creazione e gestione di soluzioni di investimento globali e diversificate.</span></li>
            <li className="p-6 rounded-xl bg-white shadow flex items-start gap-3 dark:bg-neutral-900"><Shield className="text-blue-700 w-6 h-6 shrink-0"/> <span>Servizio di wealth protection: ottimizzazione fiscale, pianificazione legale e protezione del patrimonio familiare.</span></li>
            <li className="p-6 rounded-xl bg-white shadow flex items-start gap-3 dark:bg-neutral-900"><Repeat className="text-blue-700 w-6 h-6 shrink-0"/> <span>Pianificazione del passaggio generazionale, aspetti fiscali e successori.</span></li>
            <li className="p-6 rounded-xl bg-white shadow flex items-start gap-3 dark:bg-neutral-900"><Building2 className="text-blue-700 w-6 h-6 shrink-0"/> <span>Assistenza per aziende familiari nelle fasi di transizione e sviluppo.</span></li>
          </ul>
        </section>

        {/* Banner separatore */}
        <div className="w-full h-24 bg-gradient-to-r from-indigo-700 to-blue-600"></div>

        {/* Bio */}
        <section id="bio" className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Chi sono</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
              Formazione giuridica (Facoltà di Giurisprudenza – Università degli Studi di Padova) ed economica (Diploma di Ragioniere Programmatore).<br/>
              Iscritto all’Albo dei Consulenti Finanziari abilitati all’offerta fuori sede (OCF, Delibera n. 1506 del 12.11.2020) e al RUI (sez. E).<br/>
              Certificato EFPA – ESG Advisor (finanza sostenibile).
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Sono un consulente finanziario che crede nell'importanza della conoscenza e dell'esperienza per aiutare i clienti a raggiungere i propri obiettivi.<br/><br/>
              Oltre al lavoro nel settore finanziario, sono appassionato di storia, archeologia, arti marziali e cultura orientale. Queste passioni mi hanno insegnato l'importanza della visione a lungo termine, della disciplina e dell'equilibrio tra mente e corpo.<br/><br/>
              Sono un ascoltatore attento e mi impegno a creare connessioni significative con i miei clienti per sviluppare strategie finanziarie personalizzate, nell’ottica di costruire insieme un futuro solido e duraturo.
            </p>
          </div>
        </section>

        {/* Banner separatore */}
        <div className="w-full h-24 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

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
              <a href="#contatti" className="hover:underline">Contatti</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}