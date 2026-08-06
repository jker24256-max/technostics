import { useEffect } from "react";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const SECTIONS = [
  {
    title: "Service scope",
    copy: "Each engagement is defined by the selected service tier or a written custom scope agreed during discovery.",
  },
  {
    title: "Client responsibilities",
    copy: "Clients should provide accurate information, timely access, and written approval before any assessment or configuration work begins.",
  },
  {
    title: "Limitations",
    copy: "We do not guarantee the elimination of all risk, and outcomes depend on the condition of the environment and the scope of work.",
  },
  {
    title: "Payments and delivery",
    copy: "Pricing, timelines, and delivery expectations follow the service description or the written proposal shared with the client.",
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

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Terms & Conditions | Technostics Group";
  }, []);

  return (
    <main>
      {/* Page hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <Reveal>
            <Eyebrow>Terms &amp; Conditions</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-text sm:text-5xl">
              The rules for using this site and our services.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-muted">
              These terms outline how Technostics Group works, what is included
              in our services, and the expectations for clients engaging us.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {SECTIONS.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className={cardClass}>
                <h2 className="font-display text-xl font-semibold text-text">
                  {item.title}
                </h2>
                <p className="mt-2 text-muted">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div className="mt-6 rounded-2xl border border-border-soft bg-surface-raised p-6 shadow-elevated sm:p-8">
            <Eyebrow>Usage</Eyebrow>
            <p className="mt-4 text-muted">
              By using this website or submitting the contact form, you agree to
              these terms and to the use of the contact information you provide
              for response and service administration.
            </p>
            <p className="mt-3 text-muted">
              For questions about these terms, contact us through the website
              and mention "terms" in your message.
            </p>
          </div>
        </Reveal>
      </section>
      <Footer
        title="Clear terms, clear expectations."
        links={[
          { label: "Contacts", path: "/contact" },
          { label: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
    </main>
  );
}
