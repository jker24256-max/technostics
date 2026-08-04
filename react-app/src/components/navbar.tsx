import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/favicon.png";

const NAV_LINKS = [
  "Home",
  "Services",
  "Free Scan",
  "About",
  "Contact",
] as const;
type NavLink = (typeof NAV_LINKS)[number];

export default function Navbar() {
  const [active, setActive] = useState<NavLink>("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-bg border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold bg-white">
            <img
              src={logo}
              alt="Technostics Group"
              className="h-11 w-11 shrink-0 rounded-full border border-gold bg-white object-cover"
            />
            <ShieldCheck className="h-5 w-5 text-text" strokeWidth={1.75} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-wide text-text">
              TECHNOSTICS GROUP
            </span>
            <span className="text-xs text-muted">
              Cyber defense with clarity
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => setActive(link)}
                className={`rounded-full px-4 py-2 text-sm text-text transition-colors ${
                  active === link ? "bg-gold-pale" : "hover:bg-gold-dim"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-text"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActive(link);
                setMobileOpen(false);
              }}
              className={`rounded-full px-4 py-2 text-left text-sm text-text ${
                active === link ? "bg-gold-pale" : ""
              }`}
            >
              {link}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
