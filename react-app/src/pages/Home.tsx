import { useEffect } from "react";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import logo from "../assets/favicon.png";

const HERO_PILLS = [
  "Kolkata-founded",
  "Pan-India remote delivery",
  "Starting at INR 4,999",
];

const STATS = [
  { value: "3 tiers", label: "clear offers instead of a bloated menu" },
  { value: "48 hrs", label: "delivery for the introductory health check" },
  { value: "Remote", label: "most work is delivered without a site visit" },
  {
    value: "Practical",
    label: "reports, roadmaps, and support your team can act on",
  },
];

const FREE_SCAN_INFO = [
  {
    label: "What it covers",
    value:
      "Router hardening basics, weak exposure points, and simple onboarding guidance.",
  },
  {
    label: "Who it suits",
    value:
      "Small teams, founders, and offices looking for a safe first step into security improvement.",
  },
  {
    label: "Outcome",
    value:
      "A clearer view of your current risk and an actionable next step for the right support.",
  },
];

const CORE_SERVICES = [
  {
    title: "Router Hardening",
    copy: "Close the easy gaps first: default passwords, weak access controls, unnecessary services, and unstable network settings.",
  },
  {
    title: "Network Assessment",
    copy: "Map devices, review exposure, and prioritize the issues that matter most using a plain-language security report.",
  },
  {
    title: "SOC Support",
    copy: "Set up monitoring, review alerts, and create an ongoing rhythm of security checks instead of one-off fire drills.",
  },
];

const TIMELINE = [
  {
    key: "Assess",
    value:
      "We inspect devices, router settings, and network exposure so the security picture becomes concrete.",
  },
  {
    key: "Harden",
    value:
      "We remove weak settings, tighten access, and reduce the chance of avoidable compromise.",
  },
  {
    key: "Monitor",
    value:
      "We provide recurring review and guidance so the environment does not drift back into risk.",
  },
];

const BEST_FIT_LIST = [
  "Security health checks for early-stage setups",
  "Business assessments for growing teams",
  "Monthly support for ongoing protection",
  "Custom scopes for more complex requirements",
];

const WHY_US = [
  {
    title: "Practical service tiers",
    copy: "Each offer is designed to solve a real business need, from fast health checks to deeper assessments and ongoing support.",
  },
  {
    title: "Remote-first delivery",
    copy: "Most work is delivered remotely with concise reports and action-focused guidance, so it fits modern teams and lean budgets.",
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

export default function Home() {
  useEffect(() => {
    document.title = "Technostics Group | Cybersecurity Services";
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid gap-12 px-6 pt-16 pb-14 md:grid-cols-2 md:items-center">
          <div>
            <Reveal>
              <Eyebrow>
                Remote-first cybersecurity for real business risk
              </Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-text sm:text-5xl">
                Secure the <span className="text-gold-rich">network layer</span>{" "}
                before it becomes a problem.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-muted">
                Technostics Group helps businesses strengthen network security
                with router hardening, structured assessments, and ongoing
                support. The focus is simple: clear findings, precise reporting,
                and practical next steps.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/services">Explore Services</Button>
                <Button to="/contact" variant="secondary">
                  Start a Conversation
                </Button>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <div className="mt-5 flex flex-wrap gap-2">
                {HERO_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-xl border border-border-soft bg-surface p-4"
                  >
                    <div className="font-display text-xl font-semibold text-gold-deep">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="flex flex-col items-center gap-6">
              <div className="group relative flex h-72 w-72 items-center justify-center [perspective:800px] sm:h-80 sm:w-80">
                <div className="absolute inset-0 rounded-full bg-gold-pale/70 blur-2xl" />
                <div className="animate-float relative flex h-56 w-56 items-center justify-center rounded-full border border-gold/40 bg-surface-strong shadow-elevated transition-transform duration-500 ease-out group-hover:[transform:rotateY(12deg)_rotateX(6deg)] sm:h-64 sm:w-64">
                  <img
                    src={logo}
                    alt="Technostics Group"
                    className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-lg font-semibold text-text">
                  Technostics Group
                </div>
                <div className="mt-1 text-sm text-muted">
                  Router hardening · Network assessment · SOC support
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Free Scan CTA */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Reveal>
          <div className="rounded-2xl border border-border-soft bg-surface-raised p-6 shadow-elevated sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Free Scan</Eyebrow>
                <h2 className="font-display mt-4 max-w-xl text-2xl font-semibold text-text sm:text-3xl">
                  Start with a quick security check before you commit to a full
                  engagement.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button to="/free-scan">Open Free Scan</Button>
                <Button to="/contact" variant="secondary">
                  Talk to Us
                </Button>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-muted">
              Our Free Scan is designed for businesses that want a fast,
              practical look at their router setup, device posture, and common
              security gaps without a long sales process.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {FREE_SCAN_INFO.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border-soft bg-surface p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    {item.label}
                  </div>
                  <div className="mt-1 text-text">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="border-t border-border" />

      {/* Core services */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-text">
              Core services, one security language.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            A lean menu of strong offers, a consistent visual system, and a
            clear service ladder from one-time checks to ongoing support.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {CORE_SERVICES.map((card, i) => (
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

      {/* How we work */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border-soft bg-surface-raised p-6 shadow-elevated sm:p-8">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="font-display mt-4 text-2xl font-semibold text-text sm:text-3xl">
                Built for straightforward delivery.
              </h2>
              <p className="mt-3 text-muted">
                The brand stays calm, premium, and technically credible: fewer
                promises, better structure, and a visible path from assessment
                to action.
              </p>
              <div className="mt-6 flex flex-col gap-5">
                {TIMELINE.map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-4 border-l-2 border-gold/40 pl-4"
                  >
                    <div className="w-16 shrink-0 font-display text-lg font-semibold text-gold-deep">
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
              <Eyebrow>Best fit</Eyebrow>
              <h3 className="font-display mt-4 text-xl font-semibold text-text sm:text-2xl">
                Small teams, growing businesses, and security-conscious
                founders.
              </h3>
              <p className="mt-3 text-muted">
                Positioned for freelancers, small offices, and growing companies
                that want a clear starting point and a premium-feeling security
                partner without unnecessary complexity.
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {BEST_FIT_LIST.map((point) => (
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

      {/* Why us */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Why us</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-text">
              Security work that stays practical.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            We focus on the right first steps, clear delivery, and a service
            offering that is easy to understand and easy to act on.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {WHY_US.map((card, i) => (
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

      <Footer title="Cybersecurity services with a structured, practical approach." />
    </main>
  );
}
