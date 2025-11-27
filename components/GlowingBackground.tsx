import React from 'react';

const GlowingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020410]">
      {/* Top Left Glow - Subtle Cyan */}
      <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]" />
      
      {/* Center Right Glow - Deep Royal Blue */}
      <div className="absolute top-[20%] -right-[5%] w-[45vw] h-[45vw] bg-blue-800/10 rounded-full blur-[140px] mix-blend-screen" />
      
      {/* Middle Left - Royal Purple Accent (New) */}
      <div className="absolute top-[40%] -left-[5%] w-[35vw] h-[35vw] bg-violet-900/15 rounded-full blur-[130px] mix-blend-screen animate-pulse duration-[7000ms]" />

      {/* Bottom Center Glow - Indigo/Purple Blend */}
      <div className="absolute -bottom-[15%] left-1/3 w-[70vw] h-[40vh] bg-indigo-950/30 rounded-full blur-[100px] mix-blend-overlay" />

      {/* Luxury Gold/Amber Glow - Top Right & Scattered */}
      <div className="absolute top-[5%] right-[15%] w-[25vw] h-[25vw] bg-amber-500/10 rounded-full blur-[90px] mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[10%] w-[15vw] h-[15vw] bg-amber-600/5 rounded-full blur-[80px] mix-blend-screen" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#020410]/40 to-[#020410] pointer-events-none" />
    </div>
  );
};

export default GlowingBackground;