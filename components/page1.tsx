'use client';

import React from 'react';
import Link from 'next/link';
import { CirclePlay } from 'lucide-react';

const Page1 = () => {
  const text = "Reimagine Your Digital Future, Elevated by \n Virall";


  return (
    <>
    <div className=" md:px-12 px-2 text-center text-white" id="page1-section">
      <div className="flex flex-col items-center">
      <h1 className="lg:text-4xl text-2xl md:px-10 px-2 font-normal">{text.toUpperCase()}</h1>
        <p className="md:my-10 my-7 md:mx-20 mx-1 md:text-sm text-xs">We build <span className="text-green-400">webapps</span> that engage users and rank high on search. Our team delivers expert design, development, maintenance solutions, and offers an <span className="text-orange-400">academy</span> to help you master modern web development....</p>
        <div className="flex gap-5 text-sm mt-2 md:justify-start justify-center">
          <Link href="/about" className="bg-green-950 text-xs text-white py-2 font-bold px-8 ">About us</Link>
          <div className="flex items-center hover:underline">
            <CirclePlay className="w-5 h-5 mr-2 text-black"/>
            <button className="px-2 font-bold ">Let Talk</button>
          </div>
        </div> 
      </div>
    </div>
    
    
    </>
  );
};

export default Page1;

