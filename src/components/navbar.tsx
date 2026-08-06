import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/favicon.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Free Scan", path: "/free-scan" },
  { label: "About", path: "/about" },
  { label: "Contacts", path: "/contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm text-text transition-colors ${
    isActive ? "bg-gold-pale" : "hover:bg-gold-dim"
  }`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-bg border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Technostics Group"
            className="h-11 w-11 shrink-0 rounded-full border border-gold bg-white object-cover"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-wide text-text">
              TECHNOSTICS GROUP
            </span>
            <span className="text-xs text-muted">
              Cyber defense with clarity
            </span>
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkClass}
              >
                {link.label}
              </NavLink>
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
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMobileOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}