import React from "react";
import Link from "next/link";
import { Camera, Send, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Camera className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold tracking-tighter uppercase">
                Studio<span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-6">
              Turning moments into art. We specialize in cinematic photography and videography that tells your unique story.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Camera size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Send size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Globe size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/portfolio" className="text-white/50 hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-white/50 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-white/50 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-white/50 hover:text-gold transition-colors">Wedding Shoots</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-gold transition-colors">Fashion Photography</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-gold transition-colors">Product Shoots</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-gold transition-colors">Drone Shoots</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Newsletter</h4>
            <p className="text-white/50 mb-4 text-sm">Subscribe to get updates on our latest work and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none w-full"
              />
              <button className="bg-gold text-black px-4 py-3 hover:bg-gold/90 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30 uppercase tracking-widest">
          <p>© 2026 Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
