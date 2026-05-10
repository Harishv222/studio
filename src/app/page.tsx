"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image / Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
            alt="Hero Background"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold uppercase tracking-[0.3em] font-medium mb-6">
              Cinematic Excellence
            </h4>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto leading-none">
              TURNING <span className="text-gold">MOMENTS</span> INTO ART
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              We capture the essence of your story through high-end photography and videography, creating visuals that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                Book Now
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gold" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Projects completed", value: "500+" },
              { label: "Happy Clients", value: "100+" },
              { label: "Years Experience", value: "5" },
            ].map((stat, i) => (
              <Reveal key={i}>
                <div className="group">
                  <h2 className="text-6xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </h2>
                  <p className="text-white/40 uppercase tracking-widest text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h4 className="text-gold uppercase tracking-[0.2em] font-medium mb-4 text-sm">
                Our Expertise
              </h4>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                PREMIUM SERVICES FOR YOUR UNIQUE VISION
              </h2>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-2 text-gold font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              See All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
                desc: "Cinematic wedding stories told with heart.",
              },
              {
                title: "Fashion",
                image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
                desc: "Editorial and runway photography.",
              },
              {
                title: "Products",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80",
                desc: "Elevating brands with crisp product visuals.",
              },
            ].map((service, i) => (
              <Reveal key={i}>
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 p-8">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest">
                      {service.title}
                    </h3>
                    <p className="text-white/60 mb-4">{service.desc}</p>
                    <Link href="/services" className="text-gold font-bold text-sm uppercase tracking-widest">
                      Learn More
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <h4 className="text-gold uppercase tracking-[0.2em] font-medium mb-4 text-sm">
                Reviews
              </h4>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                What Our Clients Say
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Bride",
                text: "The best cinematic wedding shoot experience! They captured every emotion so perfectly.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Brand Director",
                text: "Professional, creative, and fast. Our product visuals never looked better.",
                rating: 5,
              },
              {
                name: "Emily Davis",
                role: "Fashion Designer",
                text: "Incredible eye for detail. The fashion shoot was handled with such elegance.",
                rating: 5,
              },
            ].map((review, i) => (
              <Reveal key={i}>
                <div className="bg-black/40 border border-white/5 p-10 relative group">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-lg text-white/70 italic mb-8 relative z-10">
                    "{review.text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-sm">
                      {review.name}
                    </h4>
                    <p className="text-gold text-[10px] uppercase tracking-[0.2em]">
                      {review.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] font-medium mb-4 text-sm">
              Follow Our Journey
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
              Instagram @Studio
            </h2>
          </div>
          <Link href="#" className="hidden md:block px-8 py-3 border border-white/10 hover:border-gold hover:text-gold transition-all uppercase tracking-widest text-xs font-bold">
            Follow Us
          </Link>
        </div>

        <div className="flex gap-4 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 shrink-0"
          >
            {[
              "1519741497674-611481863552",
              "1515886657613-9f3515b0c78f",
              "1523275335684-37898b6baf30",
              "1507525428034-b723cf961d3e",
              "1509631179647-0177331693ae",
              "1511795409834-ef04bbd61622",
              "1539109136881-3be0616acf4b",
              "1492691527719-9d1e07e534b4",
              "1516035069371-29a1b244cc32",
              "1500648767791-00dcc994a43e",
            ].map((id, i) => (
              <div key={i} className="relative w-[300px] aspect-square overflow-hidden group">
                <Image
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=60&w=600`}
                  alt="Insta"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
