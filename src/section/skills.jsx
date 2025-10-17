"use client";

import React from "react";
import dynamic from "next/dynamic";

// Lazy load DomeGallery for better performance
const DomeGallery = dynamic(() => import("../components/DomeGallery"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-xl text-gray-400">Loading Skills...</div>
    </div>
  ),
});

function skills() {
  return (
    <div
      id="Skills"
      className="grid lg:grid-cols-1 w-full min-h-screen relative bg-gray-900"
    >
      <DomeGallery />
    </div>
  );
}

export default skills;
