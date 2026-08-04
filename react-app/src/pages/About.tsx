import { useEffect } from "react";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const TIMELINE = [
  {
    key: "Now",
    value:
      "Serve locally and remotely with small, clear engagements that are easy to understand and easy to buy.",
  },
  {
    key: "Next",
    value:
      "Use successful assessments and support work to create case studies and increase recurring revenue.",
  },
  {
    key: "Later",
    value:
      "Expand into broader coverage and larger scopes only after the delivery engine and trust layer are mature.",
  },
];

const PRINCIPLES = [
  "Use a small public service catalog with clear pricing.",
  "Lead with findings, evidence, and prioritization instead of vague promises.",
  "Keep the design premium and quiet so the technical work feels credible.",
  "Reserve more advanced scopes for discovery and custom engagement.",
];

const WHO_WE_SERVE = [
  {
    title: "Small professional firms",
    copy: "CA firms, law firms, clinics, and similar small offices that need better control over data and access.",
  },
  {
    title: "Growing businesses",
    copy: "Manufacturing, trading, education, and multi-location businesses that need a practical security roadmap.",
  },
  {
    title: "Remote-first teams",
    copy: "Startups and teams that value a remote security partner and do not need a large on-site services footprint.",
  },
];

const ROADMAP = [
  {
    title: "Phase 1",
    copy: "Build trust with visible assessments, small contracts, and clear documentation that helps clients see value quickly.",
  },
  {
    title: "Phase 2",
    copy: "Expand through referrals, case studies, and recurring support once the delivery model is repeatable.",
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

export default function About() {
  useEffect(() => {
    document.title = "About | Technostics Group";
  }, []);

  return (
    <main>
      {/* Page hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <Reveal>
            <Eyebrow>About</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-text sm:text-5xl">
              A focused company built for practical security work.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-muted">
              Technostics Group is a Kolkata-founded cybersecurity partner built
              around remote delivery, clear scope, and practical security
              services that clients can trust.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Positioning */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border-soft bg-surface-raised p-6 shadow-elevated sm:p-8">
              <Eyebrow>Positioning</Eyebrow>
              <h2 className="font-display mt-4 text-2xl font-semibold text-text sm:text-3xl">
                Kolkata-founded, remote-first, and scope-led.
              </h2>
              <p className="mt-3 text-muted">
                We keep the company story grounded in delivery and practical
                results. That means honest scope, clear pricing, and security
                work that is easier to buy and easier to act on.
              </p>

              <div className="mt-6 flex flex-col gap-5">
                {TIMELINE.map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-4 border-l-2 border-gold/40 pl-4"
                  >
                    <div className="w-14 shrink-0 font-display text-lg font-semibold text-gold-deep">
                      {item.key}
                    </div>
                    <div className="text-muted">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface/60 p-6 shadow-soft backdrop-blur-sm sm:p-8">
              <Eyebrow>Operating principles</Eyebrow>
              <h3 className="font-display mt-4 text-xl font-semibold text-text sm:text-2xl">
                Security with no performance theater.
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {PRINCIPLES.map((point) => (
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

      {/* Who we serve */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-text">
              Business types that benefit most from our approach.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            A short, clear set of client profiles makes it easy to see whether
            we are the right fit.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHO_WE_SERVE.map((card, i) => (
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

      <div className="border-t border-border" />

      {/* Roadmap */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Roadmap</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-text">
              How we grow with clients.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            We start with strong assessments and build recurring work from
            proven delivery, not empty expansion.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {ROADMAP.map((card, i) => (
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

      <Footer title="A quieter cyber brand with a stronger signal." />
    </main>
  );
}
