"use client";
import UseInView from "@/components/UseInView";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center"></div>
      <div className="w-full h-screen flex justify-center items-center">
        <UseInView />
      </div>
      <div className="w-full h-screen flex justify-center items-center"></div>
    </div>
  );
}
