"use client";

import React from "react";
import { Fingerprint } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-2 text-white">
        <Fingerprint className="w-5 h-5 text-white/90" />
        <span className="text-sm font-semibold tracking-wide">Lienxify</span>
      </div>
      <div className="flex items-center gap-3 text-white/90">
        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        <span className="text-sm">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;


