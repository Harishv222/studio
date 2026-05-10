"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Camera, Send, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const services = [
  "Wedding Photography",
  "Fashion Shoot",
  "Product Photography",
  "Cinematic Reel",
  "Drone Videography",
  "Event Coverage"
];

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: services[0],
    date: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert("Please login to book a session.");
        router.push("/login");
      }
      setUser(user);
      if (user?.email) {
        setFormData(prev => ({ ...prev, email: user.email }));
      }
    };
    checkUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("bookings").insert([
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          booking_date: formData.date,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      alert("Success! Your booking request has been submitted.");
      router.push("/");
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h4 className="text-gold uppercase tracking-[0.3em] font-medium mb-4">
                Reservation
              </h4>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
                BOOK YOUR <span className="text-gold">SESSION</span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Secure your date for a premium cinematic experience. Our team will contact you within 24 hours to confirm details.
              </p>
            </div>
          </Reveal>

          <div className="glass p-8 md:p-12 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold opacity-50" />
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 px-6 py-4 focus:border-gold outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Email Address</label>
                <input 
                  type="email" 
                  required
                  disabled
                  value={formData.email}
                  className="w-full bg-black/10 border border-white/5 px-6 py-4 text-white/40 outline-none cursor-not-allowed"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Service Type</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 px-6 py-4 focus:border-gold outline-none transition-colors appearance-none"
                >
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute right-4 top-4 text-white/30" size={18} />
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 px-6 py-4 focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Project Details / Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 px-6 py-4 focus:border-gold outline-none transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg shadow-gold/20 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <>Confirm Booking <Send size={18} /></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
