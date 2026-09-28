"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_FORM_ENDPOINT, contactTopics } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error" | "not-connected";

const field =
  "w-full rounded-lg border border-brand-brown/25 bg-white px-4 py-3 text-base text-[#3b3226] outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30";
const label = "mb-1 block text-sm font-bold text-brand-brown";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot: bots fill this hidden field

    if (!CONTACT_FORM_ENDPOINT) {
      setStatus("not-connected");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name *</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email address *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="topic" className={label}>I&apos;d like to talk about</label>
          <select id="topic" name="topic" className={field} defaultValue={contactTopics[0]}>
            {contactTopics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message *</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>

      {/* Honeypot: hidden from people, visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <div id="form-status" role="status" aria-live="polite">
        {status === "sent" && (
          <p className="rounded-lg bg-brand-green/10 px-4 py-3 font-semibold text-brand-green">Thank you. Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="rounded-lg bg-red-100 px-4 py-3 font-semibold text-red-800">Sorry, something went wrong sending your message. Please try again later.</p>
        )}
        {status === "not-connected" && (
          <p className="rounded-lg bg-brand-orange/15 px-4 py-3 font-semibold text-brand-brown">
            This form is not connected to an inbox yet, so your message was not sent. Please check back soon.
          </p>
        )}
      </div>
    </form>
  );
}
