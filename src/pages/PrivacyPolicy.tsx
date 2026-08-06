import { useEffect } from "react";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const SECTIONS = [
  {
    title: "Information we collect",
    copy: "We may collect your name, email address, company name, service choice, and the message you submit through the contact form.",
  },
  {
    title: "How we use it",
    copy: "We use submitted details only to respond to inquiries, prepare proposals, and manage service discussions.",
  },
  {
    title: "How we store it",
    copy: "Messages may be stored in Formspree and in our email inbox for follow-up. We do not sell personal information.",
  },
  {
    title: "Third parties",
    copy: "The site uses Formspree to receive form submissions. Their handling of data is subject to their own policies and controls.",
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

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Technostics Group";
  }, []);

  return (
    <main>
      {/* Page hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <Reveal>
            <Eyebrow>Privacy Policy</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-text sm:text-5xl">
              How we handle information.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-muted">
              This policy explains what Technostics Group collects through the
              website and contact form, why it is collected, and how it is used.
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
            <Eyebrow>Your choices</Eyebrow>
            <p className="mt-4 text-muted">
              You can request that we delete information you have submitted,
              except where we need to retain it for legal, accounting, or
              security reasons.
            </p>
            <p className="mt-3 text-muted">
              If you have questions about this policy, use the contact page and
              include "privacy" in the subject or message.
            </p>
          </div>
        </Reveal>
      </section>
      <Footer
        title="Privacy and transparency, kept simple."
        links={[
          { label: "Contacts", path: "/contact" },
          { label: "Terms & Conditions", path: "/terms-and-conditions" },
        ]}
      />
    </main>
  );
}
