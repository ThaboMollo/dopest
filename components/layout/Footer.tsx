import Link from "next/link";
import { siteConfig, navLinks } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark px-6 py-16 text-fg-inverse lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl tracking-widest uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-2 font-caption text-sm tracking-wider text-fg-inverse/60">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="font-caption text-xs tracking-widest uppercase text-fg-inverse/40">
              Navigate
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-caption text-sm text-fg-inverse/70 transition-colors hover:text-fg-inverse"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-caption text-xs tracking-widest uppercase text-fg-inverse/40">
              Get in Touch
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={siteConfig.phoneLink}
                className="font-caption text-sm text-fg-inverse/70 transition-colors hover:text-fg-inverse"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-caption text-sm text-fg-inverse/70 transition-colors hover:text-fg-inverse"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-fg-inverse/10 pt-8">
          <p className="font-caption text-xs text-fg-inverse/40">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
