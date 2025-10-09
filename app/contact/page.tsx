"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Placeholder submit; wire to API/email provider next
      await new Promise((r) => setTimeout(r, 800));
      alert("Thanks! We'll be in touch shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-white my-24 md:my-32">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-semibold">Contact us</h1>
        <p className="mt-4 text-white/80 md:max-w-2xl">
          Tell us about your project and we will respond within 1 business day.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 rounded-lg border border-white/10 p-6 bg-white/5">
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="text-xs text-white/80">Full name</label>
              <input
                className="mt-1 w-full rounded-md border border-white/10 px-3 py-2 text-sm text-white/100 placeholder:text-white/40"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="text-xs text-white/80">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-white/10 px-3 py-2 text-sm text-white/100 placeholder:text-white/40"
                placeholder="jane@company.com"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-white/80">
                Company (optional)
              </label>
              <input
                className="mt-1 w-full rounded-md border border-white/10 px-3 py-2 text-sm text-white/100 placeholder:text-white/40"
                placeholder="Company name"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-white/80">Message</label>
              <textarea
                className="mt-1 w-full rounded-md border border-white/10 px-3 py-2 text-sm text-white/100 placeholder:text-white/40 min-h-32"
                placeholder="Tell us about your goals and timeline"
                required
              />
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-rose-800 hover:bg-rose-700 rounded-sm text-xs font-semibold inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />    
                {isSubmitting ? "Sending…" : "Send message"}
              </Button>
            </div>
          </form>
        </div>
        <aside className="rounded-lg border border-white/10 p-6 bg-white/5 space-y-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-green-400" />
            <Link
              href="mailto:Lienxify@gmail.com"
            //   target="_blank"
              className="underline underline-offset-4"
            >
              Lienxify@gmail.com
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-green-400" /> +234 802 614 4324
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-green-400" />
            <Link
              href="https://wa.me/2348026144324"
              target="_blank"
              className="underline underline-offset-4"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ContactPage;
