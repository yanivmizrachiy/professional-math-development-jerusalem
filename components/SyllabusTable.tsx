import React from 'react';
import { syllabusData } from '../types';
import { Calendar, Clock, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

const SyllabusTable: React.FC = () => {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-16 md:pb-24">
      
      <div className="text-center mb-8 md:mb-12 space-y-3">
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-violet-200 drop-shadow-sm inline-block pb-2">
          תוכנית המפגשים
        </h2>
        
        <div className="flex justify-center mt-2 md:mt-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-[#0f1c3f]/60 border border-violet-500/30 text-amber-100 font-medium text-xs md:text-lg backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.15)]">
             <MonitorPlay size={14} className="text-amber-400 md:w-[18px] md:h-[18px]" />
             <span>כל המפגשים מתקיימים בזום</span>
          </div>
        </div>
      </div>

      {/* Table Container with Gradient Border */}
      <div className="p-[1px] rounded-2xl bg-gradient-to-br from-amber-500/30 via-violet-500/20 to-cyan-500/30 shadow-[0_0_60px_rgba(8,145,178,0.1)]">
        <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-[#0a1025]/80">
          
          {/* Desktop View (Table) */}
          <div className="hidden md:block">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-[#0f1c3f]/90 text-amber-100 border-b border-white/5">
                  <th className="py-6 px-8 font-bold text-xl tracking-wide w-[12%] text-shadow">יום</th>
                  <th className="py-6 px-8 font-bold text-xl tracking-wide w-[15%] text-shadow">תאריך</th>
                  <th className="py-6 px-8 font-bold text-xl tracking-wide w-[15%] text-shadow">שעות</th>
                  <th className="py-6 px-8 font-bold text-xl tracking-wide w-[58%] text-shadow">נושא המפגש</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {syllabusData.map((session, index) => (
                  <tr 
                    key={session.id} 
                    className="group relative transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-900/20 hover:via-violet-900/10 hover:to-transparent"
                  >
                    <td className="py-6 px-8 text-white font-medium text-lg align-top pt-8 group-hover:text-amber-200 transition-colors">{session.day}</td>
                    <td className="py-6 px-8 text-slate-300 font-light text-lg tracking-wider align-top pt-8 group-hover:text-white transition-colors">{session.date}</td>
                    <td className="py-6 px-8 text-cyan-200/80 font-mono text-lg dir-ltr text-right align-top pt-8 group-hover:text-cyan-100 transition-colors" style={{ direction: 'ltr', textAlign: 'right' }}>
                      {session.time}
                    </td>
                    <td className="py-6 px-8 align-top">
                      <div className="flex flex-col gap-2">
                        <span className="text-white font-bold text-xl drop-shadow-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-100 transition-all">
                          {session.topic}
                        </span>
                        {session.description && (
                          <p className="text-indigo-100/70 text-base font-light leading-relaxed max-w-3xl group-hover:text-indigo-50/90 transition-colors">
                            {session.description}
                          </p>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View (Cards) */}
          <div className="md:hidden flex flex-col gap-4 p-4">
            {syllabusData.map((session, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                key={session.id}
                className="bg-[#131e42]/60 border border-white/10 rounded-xl p-5 shadow-lg relative overflow-hidden active:scale-[0.98] transition-transform duration-200"
              >
                {/* Decorative side accent with Gold/Purple Gradient */}
                <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-amber-400 via-purple-500 to-cyan-600 shadow-[0_0_15px_rgba(139,92,246,0.3)]"></div>

                <div className="flex flex-col gap-3 pr-3">
                  {/* Header Row: Date and Time */}
                  <div className="flex flex-wrap items-center justify-between gap-y-2 text-xs text-cyan-200/80">
                     <div className="flex items-center gap-1.5">
                       <Calendar size={14} className="text-amber-400" />
                       <span className="font-medium text-amber-50/90">{session.day}, {session.date}</span>
                     </div>
                     <div className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded-md border border-white/5">
                        <Clock size={14} className="text-violet-300" />
                        <span dir="ltr" className="font-mono text-indigo-100/90 tracking-wide">{session.time}</span>
                     </div>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-tight drop-shadow-md mt-1">
                    {session.topic}
                  </h3>
                  
                  {session.description && (
                    <p className="text-indigo-100/70 text-sm leading-relaxed border-t border-white/5 pt-3 mt-1">
                      {session.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SyllabusTable;