import { useEffect } from "react";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

const HOW_IT_WORKS = [
  "Install the app on your Windows device.",
  "Launch the scan and allow the requested permissions.",
  "Review the results and receive practical recommendations.",
];

const WHAT_YOU_GET = [
  "Basic router and network exposure checks",
  "Visibility into common weak settings",
  "Plain-language recommendations you can act on",
  "A guided path to deeper support if needed",
];

const WHY_IT_MATTERS = [
  {
    title: "Fast onboarding",
    copy: "The app is easy to install and designed to show high-value findings quickly, without a complicated setup process.",
  },
  {
    title: "Useful insights",
    copy: "You receive a concise overview of missing hardening steps, weak access habits, and simple areas to improve.",
  },
  {
    title: "A calm next step",
    copy: "If the scan reveals bigger issues, we can guide you into the right support tier with clarity and no pressure.",
  },
];

const cardClass =
  "rounded-2xl border border-border-soft bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-hover";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-deep">
      <span className="h-1.5 w-1.5 rounded-full bg-gold-rich" />
      {children}
    </span>
  );
}

export default function FreeScan() {
  useEffect(() => {
    document.title = "Free Scan | Technostics Group";
  }, []);

  return (
    <main>
      {/* Page hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <Reveal>
            <Eyebrow>Free Scan</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-text sm:text-5xl">
              Install the app, run the check, and get a clear view of your
              exposure.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-muted">
              The Free Scan is built for organizations that want a low-friction
              first step. It helps you understand common router and device risks
              without the commitment of a full engagement.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Request the Scan</Button>
              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Install section */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border-soft bg-surface-raised p-6 shadow-elevated sm:p-8">
              <Eyebrow>Install the app</Eyebrow>
              <h2 className="font-display mt-4 text-2xl font-semibold text-text sm:text-3xl">
                The Free Scan app is ready for a quick first inspection.
              </h2>
              <p className="mt-3 text-muted">
                Download the lightweight app, install it on the device you want
                to evaluate, and follow the guided scan. The app keeps the
                process simple, practical, and focused on the most relevant
                security checks first.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href="./src/assets/Technostics-Group-Free-Scan-Installer.exe"
                  download="Technostics-Group-Free-Scan-Installer.exe"
                >
                  ↓ Install the App
                </Button>
                <Button to="/services" variant="secondary">
                  See Full Services
                </Button>
              </div>

              <div className="mt-6 rounded-xl border border-border-soft bg-surface p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                  How it works
                </div>
                <ol className="mt-3 flex flex-col gap-3">
                  {HOW_IT_WORKS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-pale text-xs font-semibold text-gold-deep">
                        {i + 1}
                      </span>
                      <span className="text-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface/60 p-6 shadow-soft backdrop-blur-sm sm:p-8">
              <Eyebrow>What you get</Eyebrow>
              <h3 className="font-display mt-4 text-xl font-semibold text-text sm:text-2xl">
                A clear scan that points to the next best action.
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {WHAT_YOU_GET.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-rich" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Why this matters */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Why this matters</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-text">
              Security starts with visibility.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            Most breaches begin with small, overlooked gaps. A free scan gives
            you a fast, credible starting point before bigger changes are made.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_IT_MATTERS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <article className={cardClass}>
                <h3 className="font-display text-xl font-semibold text-text">
                  {card.title}
                </h3>
                <p className="mt-2 text-muted">{card.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer title="Start with a scan, then move to stronger protection with confidence." />
    </main>
  );
}
