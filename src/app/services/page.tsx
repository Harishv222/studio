"use client";

import React from "react";
import { 
  Camera, 
  Video, 
  Scissors, 
  Plane, 
  Radio, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const services = [
  {
    icon: <Camera className="w-12 h-12" />,
    title: "Photography",
    desc: "Professional high-end photography for weddings, fashion, and corporate events.",
    price: "$299",
    features: ["High-res images", "Color grading", "Online gallery", "Print rights"],
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: "Videography",
    desc: "Cinematic story-driven videos that capture the atmosphere and emotion.",
    price: "$499",
    features: ["4K Resolution", "Sound design", "Drone shots", "Highlight reel"],
  },
  {
    icon: <Scissors className="w-12 h-12" />,
    title: "Post-Production",
    desc: "Expert editing and retouching services to bring out the best in your visuals.",
    price: "$149",
    features: ["Skin retouching", "Object removal", "LUTs / Presets", "Fast turnaround"],
  },
  {
    icon: <Plane className="w-12 h-12" />,
    title: "Drone Shoot",
    desc: "Breathtaking aerial perspectives captured with the latest drone technology.",
    price: "$199",
    features: ["4K Aerial video", "Raw photos", "Licensed pilot", "All-angle coverage"],
  },
  {
    icon: <Radio className="w-12 h-12" />,
    title: "Live Streaming",
    desc: "Professional multi-camera live streaming for weddings and corporate events.",
    price: "$399",
    features: ["Multi-cam setup", "Direct social feed", "Live graphics", "Recording included"],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <Navbar />

      <div className="container mx-auto px-6 mb-24">
        <Reveal>
          <div className="max-w-3xl mb-20">
            <h4 className="text-gold uppercase tracking-[0.3em] font-medium mb-4">
              Our Expertise
            </h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Services Tailored <br /> To Your <span className="text-gold">Needs</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              We offer a wide range of creative services designed to elevate your brand and preserve your most precious moments.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Reveal key={i}>
              <div className="group bg-white/[0.03] border border-white/5 p-10 hover:border-gold/50 transition-all duration-500 flex flex-col h-full">
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform origin-left duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-col gap-3 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 size={16} className="text-gold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-white">{service.price}</p>
                    </div>
                    <Link 
                      href="/contact" 
                      className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Booking CTA */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
              Ready to create <span className="text-gold">Art</span>?
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
              Book your session today and let's capture something extraordinary together.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-10 py-5 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105"
            >
              Check Availability
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
