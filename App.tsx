import React from 'react';
import GlowingBackground from './components/GlowingBackground';
import Header from './components/Header';
import SyllabusTable from './components/SyllabusTable';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Ambient Background */}
      <GlowingBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <SyllabusTable />

        <footer className="mt-auto pb-8 pt-8 text-center relative z-10 flex flex-col items-center justify-center gap-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#000000]/60">
          
          {/* Instagram Link - Super Glowing & Prominent & Animated */}
          <a 
            href="https://www.instagram.com/yani__raz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 transition-all duration-500 hover:-translate-y-2 mt-4 md:mt-6"
          >
             <motion.div 
                className="relative p-4 md:p-5 rounded-2xl bg-[#0f1c3f]/80 border-2 border-pink-500/40 overflow-hidden mb-2"
                animate={{ 
                  boxShadow: ["0 0 30px rgba(236,72,153,0.4)", "0 0 70px rgba(236,72,153,0.7)", "0 0 30px rgba(236,72,153,0.4)"],
                  borderColor: ["rgba(236,72,153,0.4)", "rgba(236,72,153,0.8)", "rgba(236,72,153,0.4)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
             >
                {/* Intense Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/20 via-fuchsia-500/30 to-rose-500/20 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Super Glowing Pink Icon with Pulse Animation */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Instagram size={32} strokeWidth={2} className="relative z-10 text-pink-500 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_25px_rgba(236,72,153,1)] w-8 h-8 md:w-10 md:h-10" />
                </motion.div>
             </motion.div>
             
             <span className="text-sm md:text-base tracking-[0.2em] font-bold text-pink-400 group-hover:text-pink-200 transition-colors duration-300 uppercase font-sans drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">
               YANIV RAZ
             </span>
             <span className="text-[9px] md:text-[10px] tracking-widest font-medium text-pink-600/80 group-hover:text-pink-400 transition-colors duration-300 uppercase">
               INSTAGRAM
             </span>
          </a>

          {/* Developer Credit */}
          <span className="text-indigo-200/30 text-[10px] font-light tracking-wider hover:text-indigo-200/60 transition-colors cursor-default select-none">
            עיצוב ופיתוח: אוראל דואק
          </span>

          <p className="text-slate-700/60 text-[10px] tracking-wider mt-4 px-4">
            © {new Date().getFullYear()} פיתוח מקצועי מחוז ירושלים. כל הזכויות שמורות.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default App;