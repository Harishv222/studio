"use client";

import React from "react";
import Link from "next/link";
import { Camera, Mail, Lock, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[120px] animate-pulse delay-700" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <Camera className="w-10 h-10 text-gold group-hover:scale-110 transition-transform" />
            <span className="text-3xl font-bold tracking-tighter uppercase">
              Studio<span className="text-gold">.</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold uppercase tracking-widest mb-2">Create Account</h1>
          <p className="text-white/50 text-sm">Join the creative community</p>
        </div>

        <div className="glass p-8 md:p-10 rounded-sm border-white/10 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-full h-[2px] bg-gold opacity-50" />
          
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-4 text-white/30" size={18} />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 pl-12 pr-4 py-4 focus:border-gold outline-none transition-colors rounded-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-white/30" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-black/40 border border-white/10 pl-12 pr-4 py-4 focus:border-gold outline-none transition-colors rounded-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-4 text-white/30" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black/40 border border-white/10 pl-12 pr-4 py-4 focus:border-gold outline-none transition-colors rounded-sm"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full py-5 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg shadow-gold/20"
              >
                Create Account <ArrowRight size={18} />
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-sm">
            <p className="text-white/40">
              Already have an account?{" "}
              <Link href="/login" className="text-gold font-bold uppercase tracking-widest hover:text-white transition-colors">
                Login
              </Link>
            </p>
          </div>
        </div>
        
        <Link href="/" className="flex items-center justify-center gap-2 mt-8 text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest">
          ← Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
