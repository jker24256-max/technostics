import { useEffect } from "react";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

type Tier = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  note?: string;
  price: string;
  priceSuffix?: string;
  priceNote: string;
  ctaLabel: string;
  ctaHref: string;
};

const TIERS: Tier[] = [
  {
    eyebrow: "Tier 1",
    title: "Security Health Check",
    description:
      "Best for freelancers, home offices, and small teams. A concise, high-signal remote review.",
    features: [
      "Remote-only external security check.",
      "We scan what's visible from outside your nerwork - exposed data, weak email security, outdated software, leaked employee credentials - and hand you a plain-language report ranking what to fix first.",
      "No on-site visit.",
      "2-3 day turnaround",
    ],
    price: "INR 2,999",
    priceNote:
      "Delivery in 48-72 hours from start.",
    ctaLabel: "Book This Service",
    ctaHref: "/contact?service=tier-1",
  },
  {
    eyebrow: "Tier 2",
    title: "Business Security Assessment",
    description:
      "Built for growing teams with real infrastructure and a need for deeper reporting.",
    features: [
      "Everything in Starter, plus an on-site internal assessment - we check your office Wi-Fi, connected devices, employee access controls, and physical security gaps.",
      "We then sit with your team and fix the top critical issues live, on the spot, instead of handing just a report.",
      "5-7 day turnaround",
    ],
    price: "INR 6,999",
    priceNote:
      "Delivery in 5-7 business days.",
    ctaLabel: "Book This Service",
    ctaHref: "/contact?service=tier-2",
  },
  {
    eyebrow: "Tier 3",
    title: "Monthly Security Support",
    description:
      "For businesses that want continuous protection without hiring a full security team.",
    features: [
      "Ongoing coverage after an assessment.",
      "Quarterly re-scans to catch new exposures, checks that earlier fixes haven't quietly slipped, on-call support if something looks suspicious (phishing email, ransomware scare), and a basic incident response plan on file so you're not improvising if something goes wrong.",
    ],
    price: "INR 1,999",
    priceSuffix: "/ month",
    priceNote: "Minimum 6 months. Paid yearly at INR 19,999.",
    ctaLabel: "Talk to Us",
    ctaHref: "/contact?service=tier-3",
  },
  {
    eyebrow: "Custom",
    title: "Custom / Enterprise Scope",
    description:
      "For 50+ employee teams, regulated environments, or more complex network work.",
    features: [
      "New office secure network setup",
      "ISO 27001 or DPDP Act compliance preparation",
      "Post-incident cleanup and hardening",
      "Managed security operations center setup",
    ],
    note: "Starting at INR 49,999. Scope and price are fixed after the discovery call.",
    price: "Custom",
    priceNote:
      "Designed after discovery so the scope matches the business and the risk profile.",
    ctaLabel: "Request a Discovery Call",
    ctaHref: "/contact?service=custom",
  },
];

const COMPARISON = [
  {
    capability: "Network scan",
    healthCheck: "Included",
    assessment: "Included",
    support: "Quarterly",
  },
  {
    capability: "Device mapping",
    healthCheck: "Basic",
    assessment: "Full",
    support: "Updated regularly",
  },
  {
    capability: "Vulnerability scan",
    healthCheck: "Basic",
    assessment: "Deep",
    support: "Quarterly",
  },
  {
    capability: "Firewall review",
    healthCheck: "No",
    assessment: "Yes",
    support: "Yes",
  },
  {
    capability: "Report depth",
    healthCheck: "1 page",
    assessment: "10 to 15 pages",
    support: "Recurring roadmap",
  },
  {
    capability: "Support",
    healthCheck: "30-minute walkthrough",
    assessment: "30 days email support",
    support: "Ongoing monthly support",
  },
];

const ADD_ONS = [
  "Router hardening: INR 2,999",
  "VPN setup: INR 2,999",
  "Wi-Fi security review: INR 2,499",
  "Phishing awareness guidance: INR 2,999",
  "Basic threat review: INR 2,499",
  "Emergency incident response: INR 1,999/hour for existing clients only",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-deep">
      <span className="h-1.5 w-1.5 rounded-full bg-gold-rich" />
      {children}
    </span>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div className="grid gap-6 rounded-2xl border border-border-soft bg-surface p-6 shadow-soft transition-all duration-300 hover:shadow-glow-hover sm:p-8 md:grid-cols-[1.5fr_1fr]">
      <div>
        <Eyebrow>{tier.eyebrow}</Eyebrow>
        <h2 className="font-display mt-4 text-2xl font-semibold text-text">
          {tier.title}
        </h2>
        <p className="mt-2 text-muted">{tier.description}</p>
        <ul className="mt-5 flex flex-col gap-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-rich" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {tier.note && (
          <p className="mt-4 text-sm text-muted-soft">{tier.note}</p>
        )}
      </div>

      <aside className="flex flex-col justify-center rounded-xl border border-border-soft bg-surface-raised p-6">
        <div className="font-display text-3xl font-semibold text-gold-deep">
          {tier.price}
          {tier.priceSuffix && (
            <span className="ml-1 text-base font-normal text-muted">
              {tier.priceSuffix}
            </span>
          )}
        </div>
        <div className="mt-2 text-sm text-muted">{tier.priceNote}</div>
        <Button to={tier.ctaHref} className="mt-5 w-full">
          {tier.ctaLabel}
        </Button>
      </aside>
    </div>
  );
}

export default function Services() {
  useEffect(() => {
    document.title = "Services | Technostics Group";
  }, []);

  return (
    <main>
      {/* Page hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-text sm:text-5xl">
              Security services that scale with your business.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-muted">
              Choose the service tier that matches your current security needs:
              a baseline health check, a deeper business assessment, recurring
              monthly support, or a custom scope for more complex work.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact?service=tier-1">Book Tier 1</Button>
              <Button to="/contact?service=tier-2" variant="secondary">
                Book Tier 2
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Service tiers */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-6">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.title} delay={i * 80}>
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Comparison table */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Comparison</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-text">
              Service ladder at a glance.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            This table keeps the pricing structure simple and easy to compare at
            a glance.
          </p>
        </div>

        <Reveal delay={150}>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border-soft bg-surface shadow-soft">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    Capability
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    Health Check
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    Business Assessment
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    Monthly Support
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr
                    key={row.capability}
                    className="border-b border-border-soft last:border-0"
                  >
                    <td className="p-4 font-medium text-text">
                      {row.capability}
                    </td>
                    <td className="p-4 text-muted">{row.healthCheck}</td>
                    <td className="p-4 text-muted">{row.assessment}</td>
                    <td className="p-4 text-muted">{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <div className="border-t border-border" />

      {/* Add-ons + delivery */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border-soft bg-surface-raised p-6 shadow-elevated sm:p-8">
              <Eyebrow>Optional</Eyebrow>
              <h2 className="font-display mt-4 text-2xl font-semibold text-text sm:text-3xl">
                Optional add-ons.
              </h2>
              <p className="mt-3 text-muted">
                Choose these focused upgrades when you want to strengthen your
                protection without adding complexity to the main service tiers.
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {ADD_ONS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-rich" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface/60 p-6 shadow-soft backdrop-blur-sm sm:p-8">
              <Eyebrow>Delivery style</Eyebrow>
              <h3 className="font-display mt-4 text-xl font-semibold text-text sm:text-2xl">
                Remote, measured, and easy to follow.
              </h3>
              <p className="mt-3 text-muted">
                Work is delivered remotely wherever possible, with concise
                reports, prioritized next steps, and a simple service structure.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact?service=tier-2">Start Tier 2</Button>
                <Button to="/about" variant="secondary">
                  Read the Approach
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer title="From health checks to ongoing support, with one cohesive visual language." />
    </main>
  );
}
