"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const team = [
  {
    name: "Alex Thorne",
    role: "Lead Photographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Elena Vance",
    role: "Cinematographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Marcus Wright",
    role: "Creative Editor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <Navbar />

      <div className="container mx-auto px-6 mb-32">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <Reveal>
            <div>
              <h4 className="text-gold uppercase tracking-[0.3em] font-medium mb-4">
                Our Story
              </h4>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
                CRAFTING VISUAL <span className="text-gold">LEGACIES</span>
              </h1>
              <div className="space-y-6 text-xl text-white/60 leading-relaxed">
                <p>
                  Founded in 2021, Studio emerged from a shared passion for cinematic storytelling. We believe that every moment, no matter how brief, holds a story worth telling.
                </p>
                <p>
                  Our team of dedicated artists combines technical mastery with creative intuition to deliver visuals that resonate emotionally and stand the test of time.
                </p>
                <p>
                  Based in the heart of the city, we travel worldwide to capture the beauty of the human experience through our lenses.
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80"
                alt="Studio Life"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Team Section */}
        <div className="mb-40">
          <Reveal>
            <div className="text-center mb-20">
              <h4 className="text-gold uppercase tracking-[0.2em] font-medium mb-4 text-sm">
                The Creative Minds
              </h4>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                MEET THE TEAM
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <Reveal key={i}>
                <div className="group text-center">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-white/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-1 group-hover:text-gold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-medium">
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Experience Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Founded", value: "2021" },
            { label: "Global Shoots", value: "24+" },
            { label: "Awards Won", value: "12" },
            { label: "Cinematic Gear", value: "RED / ARRI" },
          ].map((item, i) => (
            <Reveal key={i}>
              <div className="p-8 border border-white/5 bg-white/[0.02] text-center">
                <h4 className="text-4xl font-bold text-gold mb-2">{item.value}</h4>
                <p className="text-white/40 uppercase tracking-widest text-xs">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
