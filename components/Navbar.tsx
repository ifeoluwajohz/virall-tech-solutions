"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fingerprint, KanbanIcon, SquareX } from "lucide-react";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsSolid(true);
      return;
    }

    const sentinel = document.getElementById("page1-end-sentinel");
    if (!sentinel) {
      // Fallback: solid on scroll if sentinel is missing
      const onScroll = () => setIsSolid(window.scrollY > 10);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel is visible, we are still within/near Page1 → transparent
        // When it leaves view (page scrolled past Page1), make navbar solid
        setIsSolid(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -80px 0px", // trigger slightly before fully passing
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isHome]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={`${isSolid ? "bg-primary text-white shadow-md" : "bg-transparent text-white shadow-none"} z-50 fixed top-0 left-0 right-0`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center h-15 ">
          <Link className="font-medium flex text-xs justify-center items-center gap-x-2 text-md hover:underline transition-all" href="/">
            <Fingerprint />
            Virall  

          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="duration-200 text-xs"
              >
                {label}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none hover:cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <SquareX className="w-5 h-5" />
            ) : (
              <KanbanIcon className="w-5 h-5 rotate-90" />
            )}
          </button>
          <div className="auth md:flex hidden items-center">
        <Button  className="bg-rose-800 rounded-sm text-xs font-semibold hover:bg-rose-700 transition-colors cursor-pointer">
          Login
          <Fingerprint className="w-3 h-3 " />
        </Button>
      </div>
        </div>
        
      </div>
      <div
        className={`md:hidden bg-transparent backdrop-blur-sm shadow-none transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 py-2" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 bg-black/10">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className=" text-sm text-white  py-2 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Button  className="bg-rose-800 rounded-sm text-xs font-semibold hover:bg-rose-700 transition-colors cursor-pointer w-full flex justify-center items-center gap-x-2">
          Login
          <Fingerprint className="w-3 h-3 " />
        </Button>
        </div>
        <div className="h-2 bg-transparent mt-2">
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
