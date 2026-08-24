"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-white/10 bg-ink/95 backdrop-blur-xl"
          : "border-white/10 bg-ink"
      )}
    >
      <div className="container-px mx-auto flex w-full max-w-[1350px] items-center justify-between py-3.5">
        {/* Logo — far left */}
        <Link href="/" aria-label="TalentRiseGroup home">
          <Logo dark />
        </Link>

        {/* Right group: hamburger + Contact Sales + Get Started */}
        <div className="flex items-center gap-3">
          {/* Hamburger — rounded square like Recruitify */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:border-lime hover:text-lime"
            aria-label="Toggle menu"
            aria-expanded={open}
            id="nav-toggle"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <motion.rect
                x="0" y="0" width="18" height="2" rx="1" fill="currentColor"
                animate={open ? { rotate: 45, y: 5, x: 0 } : { rotate: 0, y: 0 }}
                style={{ originX: "50%", originY: "50%" }}
              />
              <motion.rect
                x="0" y="5" width="18" height="2" rx="1" fill="currentColor"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.rect
                x="0" y="10" width="18" height="2" rx="1" fill="currentColor"
                animate={open ? { rotate: -45, y: -5, x: 0 } : { rotate: 0, y: 0 }}
                style={{ originX: "50%", originY: "50%" }}
              />
            </svg>
          </button>

          {/* Contact Sales — lime filled */}
          <Button href="/contact" variant="primary" className="!py-2.5 !text-sm">
            Contact Sales
          </Button>

          {/* Get Started — outlined ghost */}
          <Button
            href="/pricing"
            variant="ghost"
            className="hidden border border-white/20 !py-2.5 !text-sm sm:inline-flex"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile / dropdown nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/10 bg-ink"
          >
            <div className="container-px mx-auto flex w-full max-w-[1350px] flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-white/10 text-lime"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
