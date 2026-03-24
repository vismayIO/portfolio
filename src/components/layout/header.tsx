"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "works", href: "#works" },
  { label: "about-me", href: "#about-me" },
  { label: "contacts", href: "#contacts" },
];

function PixelLogo({ className }: { className?: string }) {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"
        fill="white"
      />
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-foreground"
        >
          <PixelLogo className="text-primary" />
          <span>Elias</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-primary">#</span>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            EN
            <ChevronDown className="size-3.5" />
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile navigation */}
      <nav
        className={cn(
          "overflow-hidden border-t border-border transition-all md:hidden",
          mobileMenuOpen ? "max-h-64 py-4" : "max-h-0 border-t-0 py-0",
        )}
        aria-label="Mobile"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-primary">#</span>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            EN
            <ChevronDown className="size-3.5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
