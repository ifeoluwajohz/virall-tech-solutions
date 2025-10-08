"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-x-2 text-lg font-semibold">
              <Fingerprint className="w-5 h-5" />
              Virall Tech Solutions
            </div>
            <p className="text-sm mt-4 leading-6 text-white/80">
              We design, build, and scale modern web applications. From strategy to delivery, our team brings your digital vision to life.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Link href="#" aria-label="Facebook" className="hover:opacity-80">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:opacity-80">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-80">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><Link href="/about" className="hover:underline">About us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Web App Development</li>
              <li>UI/UX Design</li>
              <li>SEO & Performance</li>
              <li>Maintenance & Support</li>
              <li>Training & Academy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase">Newsletter</h4>
            <p className="text-sm text-white/80 mt-4">Subscribe for updates, case studies, and insights.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md px-3 py-2 text-sm text-black bg-white placeholder:text-black/70"
              />
              <Button type="submit" className="bg-rose-800 rounded-sm text-xs font-semibold hover:bg-rose-700">
                Subscribe
              </Button>
            </form>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hello@viralltech.dev
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +234 000 000 0000
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" /> Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Virall Tech Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
