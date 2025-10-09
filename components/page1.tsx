"use client";

import React from "react";
import Link from "next/link";
import { CirclePlay } from "lucide-react";

const Page1 = () => {
  const text = "Reimagine Your Digital Future, Elevated by \n Lienxify";

  return (
    <>
      <div className=" md:max-w-7xl max-w-4xl mx-auto text-center text-white pt-44 pb-24" id="page1-section">
        <div className="flex flex-col items-center">
          <p className="text-[10px] md:text-xs tracking-widest text-white/80 uppercase">Lienxify</p>
          <h1 className="mt-3 text-xl md:text-4xl md:max-w-5xl font-semibold leading-tight">
            {text.toUpperCase()}
          </h1>
          <p className="mt-5 md:text-sm text-xs text-white/85 md:max-w-2xl px-10 md:px-0">
            We build web applications that engage users and rank high on search. Our team delivers expert design, development, and long-term maintenance solutions — plus an academy to help you master modern technologies.
          </p>
          <div className="mt-7 flex gap-4 text-sm md:justify-start items-center justify-center">
            <Link
              href="/about"
              className="bg-green-700 text-xs text-white py-2.5 font-semibold px-8 rounded-sm hover:bg-green-600 transition-colors"
            >
              About us
            </Link>
            <Link href="/services" className="text-xs font-semibold underline underline-offset-4">
              Explore services
            </Link>
          </div>
          <div className="mt-10 h-px w-24 bg-white/20" />
          <div className="mt-3 flex items-center text-xs text-white/80 gap-2">
            <CirclePlay className="w-4 h-4 text-green-600" />
            <span>Let’s talk about your next project</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
