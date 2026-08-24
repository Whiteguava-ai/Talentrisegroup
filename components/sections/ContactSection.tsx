"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const infoCards = [
  {
    title: "Call Us",
    lines: ["+1-202-555-0172", "+1-382-666-2652"],
    icon: <PhoneIcon />,
  },
  {
    title: "Visit Office",
    lines: ["1446 Stoney Lane, KAMPSVILLE, IL"],
    icon: <PinIcon />,
  },
  {
    title: "Office Hours",
    lines: ["Mon-Fri: 9am-5pm", "Sat-Sun: Closed"],
    icon: <ClockIcon />,
  },
  {
    title: "Email Us",
    lines: ["hr@talentrisegroup.in"],
    icon: <MailIcon />,
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="rounded-[32px] border border-line bg-white p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-ink">Send us a message</h2>
            <p className="mt-2 text-sm text-muted">
              Fill out the form and our team will get back to you within one business day.
            </p>

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 flex flex-col items-center rounded-2xl bg-paper py-14 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink">
                    <CheckIcon />
                  </span>
                  <p className="mt-5 font-display text-lg font-bold text-ink">
                    Message sent successfully
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    Thanks for reaching out — one of our recruiters will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <Field label="Full Name" name="name" placeholder="Jane Doe" />
                  <Field label="Your Email" name="email" type="email" placeholder="you@example.com" />
                  <div className="flex flex-col gap-2 sm:col-span-1">
                    <label className="text-sm font-medium text-ink" htmlFor="location">
                      Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      defaultValue=""
                      className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option>Amsterdam</option>
                      <option>Barcelona</option>
                    </select>
                  </div>
                  <Field label="Subject" name="subject" placeholder="How can we help?" />
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-sm font-medium text-ink" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us a little about your hiring needs…"
                      className="resize-none rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" className="w-full sm:w-auto">
                      {status === "submitting" ? "Sending…" : "Submit"}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {infoCards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-line bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-lime">
                {card.icon}
              </span>
              <p className="mt-5 font-display text-lg font-bold text-ink">{card.title}</p>
              <div className="mt-2 space-y-1">
                {card.lines.map((line) => {
                  const href = line.includes("@")
                    ? `mailto:${line}`
                    : /^\+?[\d\s-]+$/.test(line)
                      ? `tel:${line.replace(/[\s-]/g, "")}`
                      : null;
                  return href ? (
                    <a
                      key={line}
                      href={href}
                      className="block text-sm text-muted transition-colors hover:text-ink"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm text-muted">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
      />
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2A16 16 0 012 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
