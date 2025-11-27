import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-8 md:pt-20 pb-10 md:pb-16 px-4 space-y-6 md:space-y-10">
      
      {/* Top Label */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-3 md:space-y-6 max-w-5xl"
      >
        <h2 className="text-amber-100/80 text-sm md:text-2xl font-medium tracking-wide border-b border-amber-500/30 pb-2 md:pb-4 inline-block drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">
          צוות הדרכה במחוז ירושלים והעיר ירושלים מנח״י – בהובלת איילת קריספין
        </h2>
        
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.15)] tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-amber-50 via-white to-cyan-100">
            תקשוב, בינה מלאכותית
          </span>
          <br className="hidden md:block" />
          <span className="block md:inline mt-2 md:mt-0 bg-clip-text text-transparent bg-gradient-to-tr from-cyan-100 via-white to-violet-200">
             וחדשנות בהוראת המתמטיקה
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-3xl font-light text-cyan-50/90 tracking-wide mt-1 md:mt-2">
          עם יניב רז
        </p>
      </motion.div>

      {/* 3D Luxury Button with Gold/Purple Accents and Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 md:mt-8 flex flex-col items-center gap-4 w-full max-w-sm md:max-w-none"
      >
        <div className="relative group w-full md:w-auto px-2">
          {/* Backlight Glow (Purple + Gold) */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/40 via-purple-600/40 to-cyan-500/40 blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          
          <a 
            href="https://poh.education.gov.il/professional-development/compass-system/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-3 md:gap-4 px-6 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-xl text-white font-bold text-lg md:text-xl transition-all duration-300
                       hover:-translate-y-1 active:translate-y-0.5
                       shadow-[0_6px_0_rgb(30,58,138),0_15px_20px_rgba(0,0,0,0.4)]
                       hover:shadow-[0_8px_0_rgb(30,58,138),0_20px_25px_rgba(0,0,0,0.5),0_0_30px_rgba(139,92,246,0.3)]
                       active:shadow-[0_0px_0_rgb(30,58,138),0_0px_0px_rgba(0,0,0,0.4)]
                       border border-white/10 overflow-hidden w-full md:w-auto"
          >
            {/* Continuous Shimmer Effect */}
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent skew-x-[-20deg] translate-x-[-200%] animate-[shimmer_3s_infinite]" />
            </div>

            {/* Static Shine/Gloss */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />
            
            <span className="relative z-10 flex items-center gap-2 md:gap-3 tracking-wide text-white text-shadow-sm text-center">
              כניסה מהירה למערכת מצפן
              <ExternalLink size={20} className="text-amber-300 group-hover:rotate-12 transition-transform duration-300 hidden sm:block" />
            </span>
          </a>
        </div>
        
        {/* Course Number */}
        <span className="text-amber-200/80 font-mono text-sm md:text-lg tracking-widest border border-amber-500/20 px-4 py-1 rounded-full bg-amber-900/10 backdrop-blur-sm">
           מספר השתלמות: 204706
        </span>
      </motion.div>
      
      {/* Inline styles for custom shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-20deg); }
          20% { transform: translateX(200%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
      `}</style>

    </header>
  );
};

export default Header;