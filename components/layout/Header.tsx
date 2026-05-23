"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "@/content/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="font-heading text-lg tracking-widest uppercase">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-caption text-sm tracking-wider uppercase text-fg-secondary transition-colors hover:text-fg-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fg-primary px-6 py-2.5 font-caption text-xs tracking-widest uppercase text-fg-inverse transition-colors hover:bg-fg-secondary"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-fg-primary/10 bg-surface px-6 pb-8 pt-4 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-caption text-sm tracking-wider uppercase text-fg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fg-primary px-6 py-3 text-center font-caption text-xs tracking-widest uppercase text-fg-inverse"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
