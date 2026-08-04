import { Link } from "react-router-dom";

interface FooterProps{
    title : string
}

export default function Footer({title = "A direct path to a cleaner security posture."} : FooterProps) {
  return (
    <footer className="border-t border-border bg-bg-mid transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-display text-lg font-semibold text-text">Technostics Group</div>
          <div className="text-sm text-muted">{title}</div>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <Link to="/privacy-policy" className="transition-colors hover:text-text">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="transition-colors hover:text-text">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}