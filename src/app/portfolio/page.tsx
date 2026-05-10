"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const categories = ["All", "Weddings", "Fashion", "Product Shoots", "Reels"];

const portfolioItems = [
  {
    id: 1,
    title: "The Royal Wedding",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Urban Style",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Luxury Watch",
    category: "Product Shoots",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Summer Vibes",
    category: "Reels",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Classic Portrait",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Elegant Reception",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <Navbar />

      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <h4 className="text-gold uppercase tracking-[0.3em] font-medium mb-4">
              Our Gallery
            </h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Work That <span className="text-gold">Inspires</span>
            </h1>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4 md:gap-8 border-b border-white/10 pb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest transition-all relative py-2",
                    filter === cat ? "text-gold" : "text-white/40 hover:text-white"
                  )}
                >
                  {cat}
                  {filter === cat && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden bg-white/5 cursor-pointer"
                onClick={() => setSelectedImg(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                  <Maximize2 className="text-gold mb-4 w-8 h-8" />
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{item.title}</h3>
                  <p className="text-gold text-xs uppercase tracking-widest font-medium">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-gold transition-colors">
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full h-full max-w-5xl"
            >
              <Image
                src={selectedImg}
                alt="Full View"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
