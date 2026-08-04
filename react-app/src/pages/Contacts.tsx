import { useEffect } from "react";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const INFO = [
  {
    label: "Best fit",
    value:
      "Security health checks, business assessments, monthly support, and custom enterprise scopes.",
  },
  {
    label: "Delivery model",
    value:
      "Remote-first for most work. Site-specific planning is handled through the discovery process.",
  },
  {
    label: "Response window",
    value: "Typical first response within 1 business day.",
  },
  {
    label: "What to include",
    value:
      "Your company size, current setup, timeline, and which service tier you think fits best.",
  },
];

const SERVICE_OPTIONS = [
  { value: "security-health-check", label: "Security Health Check" },
  {
    value: "business-security-assessment",
    label: "Business Security Assessment",
  },
  { value: "monthly-security-support", label: "Monthly Security Support" },
  { value: "custom-enterprise", label: "Custom / Enterprise" },
];

const QUICK_PATHS = [
  {
    title: "Need a quick baseline?",
    copy: "Start with the Security Health Check if you want a fast, affordable, remote-first security review.",
  },
  {
    title: "Need a deeper plan?",
    copy: "Use the Business Security Assessment when the network is larger or when you need a clear remediation roadmap.",
  },
  {
    title: "Need ongoing support?",
    copy: "Monthly Security Support is the fit when you want regular review, monitoring guidance, and consistency.",
  },
];

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text placeholder:text-muted-soft transition-all focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20";

const labelClass =
  "mb-1 block text-xs font-semibold uppercase tracking-wide text-gold-deep";

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

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Technostics Group";
  }, []);

  return (
    <main>
      {/* Page hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-text sm:text-5xl">
              Start with the service that fits your current risk.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-muted">
              Use this form to request a discovery call, book a service tier, or
              ask about a custom scope. Keep your message focused on your
              current risks, team size, and timeline.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Contact grid */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            {INFO.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className={cardClass}>
                  <div className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    {item.label}
                  </div>
                  <div className="mt-1 text-text">{item.value}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-border-soft bg-surface-raised p-6 shadow-elevated sm:p-8">
              <Eyebrow>Form</Eyebrow>
              <h2 className="font-display mt-4 text-2xl font-semibold text-text sm:text-3xl">
                Tell us what you need.
              </h2>

              <form
                className="mt-6 flex flex-col gap-4"
                action="https://formspree.io/f/mbdnkpkb"
                method="POST"
              >
                <input
                  type="hidden"
                  name="subject"
                  value="Technostics Group inquiry"
                />
                <input type="hidden" name="page" value="contact" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company / team name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Service
                    </label>
                    <select id="service" name="service" className={inputClass}>
                      <option value="">Choose a service</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you want to secure, how many users or devices are involved, and what timeline you're working with."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="rounded-full bg-gold-rich px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-glow-hover"
                  >
                    Send Inquiry
                  </button>
                  <span className="text-xs text-muted-soft">
                    The form submits directly to Formspree using the provided
                    endpoint.
                  </span>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Quick paths */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Quick paths</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-text">
              Boxes you can use to choose the right start.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            Pick the path that matches your current need and get a clear
            recommendation quickly.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_PATHS.map((card, i) => (
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

      <Footer title="A direct path to a cleaner security posture." />
    </main>
  );
}
