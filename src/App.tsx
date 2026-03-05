/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Mail, Globe, Cpu, Zap, Shield, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/5">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2"
    >
      <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
        <Cpu className="text-black w-5 h-5" />
      </div>
      <span className="text-white font-bold tracking-tighter text-xl uppercase italic">Hydraxa AI</span>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-white/50"
    >
      <a href="#" className="hover:text-emerald-400 transition-colors">Vision</a>
      <a href="#" className="hover:text-emerald-400 transition-colors">Tech</a>
      <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
    </motion.div>
  </nav>
);

const BackgroundEffect = () => (
  <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse delay-1000" />
    </div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
  </div>
);

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      <BackgroundEffect />
      <Navbar />

      <main className="relative pt-32 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-8"
          >
            <Zap className="w-3 h-3 fill-emerald-400" />
            Next Generation Intelligence
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none mb-8"
          >
            Hydraxa <span className="text-emerald-500">AI</span>
            <br />
            <span className="text-white/20">Pvt Ltd</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl text-white/60 text-lg md:text-xl leading-relaxed mb-12"
          >
            Architecting the future of autonomous systems and neural computation. 
            We are building the backbone of the next industrial revolution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-8 py-4 bg-emerald-500 text-black font-bold uppercase tracking-widest rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Notified <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </button>
          </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { icon: Cpu, title: "Neural Core", desc: "Proprietary architecture designed for massive parallel processing." },
            { icon: Shield, title: "Secure Ops", desc: "Encryption at the edge, ensuring data integrity in every node." },
            { icon: Globe, title: "Global Mesh", desc: "Decentralized intelligence network spanning continents." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors group"
            >
              <feature.icon className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="border-t border-white/10 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold uppercase italic mb-6">Contact Information</h2>
              <p className="text-white/50 mb-8 max-w-md">
                Our communication channels are currently undergoing neural synchronization. 
                Full access will be granted shortly.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
                    <Mail className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Email Status</p>
                    <p className="text-xl font-mono text-emerald-400 animate-pulse">SOON</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
                    <Globe className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">HQ Location</p>
                    <p className="text-xl font-mono text-emerald-400 animate-pulse uppercase tracking-tighter">Encrypted</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-blue-500/10 border border-white/10 flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-64 h-64 border-2 border-dashed border-emerald-500/30 rounded-full flex items-center justify-center"
                >
                   <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border border-emerald-500/50 rounded-full flex items-center justify-center bg-emerald-500/5 backdrop-blur-sm"
                  >
                    <Cpu className="w-16 h-16 text-emerald-500 animate-pulse" />
                  </motion.div>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-700" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
          &copy; {new Date().getFullYear()} Hydraxa AI Pvt Ltd. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
