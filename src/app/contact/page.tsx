"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  MessageSquare, 
  Calendar,
  Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    service: "Photography",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your inquiry has been sent.");
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <Navbar />

      <div className="container mx-auto px-6 mb-32">
        <Reveal>
          <div className="max-w-3xl mb-20">
            <h4 className="text-gold uppercase tracking-[0.3em] font-medium mb-4">
              Get In Touch
            </h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Let's Create <br /> Something <span className="text-gold">Iconic</span>
            </h1>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <Reveal>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Email Us</h4>
                  <p className="text-white/50 text-xl">hello@studio.com</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Call Us</h4>
                  <p className="text-white/50 text-xl">+1 (555) 000-0000</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Visit Us</h4>
                  <p className="text-white/50 text-xl">123 Creative Lane, <br /> New York, NY 10001</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="pt-12 border-t border-white/10">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Connect</h4>
                <div className="flex gap-4">
                  <Link href="https://wa.me/1234567890" className="flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                    <MessageSquare size={20} />
                    WhatsApp
                  </Link>
                  <Link href="#" className="flex items-center gap-3 px-6 py-4 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    <Camera size={20} />
                    Instagram
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="h-[300px] w-full bg-white/5 border border-white/10 grayscale overflow-hidden">
                {/* Mock Map */}
                <div className="w-full h-full flex items-center justify-center text-white/20 uppercase tracking-[0.5em] font-bold text-sm">
                  Google Maps View
                </div>
              </div>
            </Reveal>
          </div>

          {/* Inquiry Form */}
          <Reveal>
            <div className="bg-white/[0.03] border border-white/5 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
              
              <h3 className="text-3xl font-bold uppercase tracking-widest mb-10">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-colors"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/50 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-colors"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute right-4 top-4 text-white/30" size={18} />
                      <input 
                        type="date" 
                        required
                        className="w-full bg-black/50 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-colors"
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Service</label>
                    <select 
                      className="w-full bg-black/50 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-colors appearance-none"
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>Photography</option>
                      <option>Videography</option>
                      <option>Drone Shoot</option>
                      <option>Live Streaming</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-black/50 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-colors"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </main>
  );
}
