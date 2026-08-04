import { Link } from "react-router-dom";

type FooterLink = { label: string; path: string };

const DEFAULT_LINKS: FooterLink[] = [
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
];

export default function Footer({
  title = "A direct path to a cleaner security posture.",
  links = DEFAULT_LINKS,
}: {
  title?: string;
  links?: FooterLink[];
}) {
  return (
    <footer className="border-t border-border bg-bg-mid transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-display text-lg font-semibold text-text">Technostics Group</div>
          <div className="text-sm text-muted">{title}</div>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="transition-colors hover:text-text">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}