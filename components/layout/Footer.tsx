import Link from "next/link";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { footerLinks } from "@/data/nav";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{title}</h4>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-lime"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 text-white">
      <div className="container-px mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo dark />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Driving Success by Connecting Talent and Opportunity
            </p>
            <SocialIcons className="mt-6" />
          </div>
          <FooterColumn title="Links" links={footerLinks.links} />
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Other" links={footerLinks.other} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/50 sm:flex-row">
          <p>Copyright © 2026 – All Right Reserved</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-lime">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-lime">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
