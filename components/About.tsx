import React from 'react';
import { PERSONAL_INFO, INTERESTS, LANGUAGES } from '../constants';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">À Propos de Moi</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-sm backdrop-blur-sm relative overflow-hidden group hover:border-slate-600 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-600"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Profil Professionnel</h3>
              <p className="text-slate-300 text-lg leading-relaxed text-justify relative z-10">
                {PERSONAL_INFO.profile}
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-600/5 rounded-full blur-3xl group-hover:bg-primary-600/10 transition-colors"></div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-indigo-500">Centres d'Intérêt</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {INTERESTS.map((interest, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col items-center justify-center p-6 bg-slate-800/80 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-all hover:bg-slate-700 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    <div className="p-3 bg-slate-900 rounded-lg mb-3 group-hover:bg-primary-900/20 transition-colors ring-1 ring-slate-700 group-hover:ring-primary-500/30">
                      <interest.icon className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium text-center">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="bg-gradient-to-br from-slate-800 to-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-xl h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Langues</h3>
                <div className="space-y-8">
                  {LANGUAGES.map((lang, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-slate-200 font-medium text-lg">{lang.name}</span>
                        <span className="text-primary-400 text-sm bg-primary-900/30 px-2 py-0.5 rounded border border-primary-800">{lang.level}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className="bg-gradient-to-r from-primary-600 to-indigo-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: lang.level === 'Courant' ? '100%' : '70%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (idx * 0.2) }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-slate-700/80 hover:border-primary-500/30 transition-colors">
                   <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                     Pourquoi moi ?
                   </h4>
                   <ul className="space-y-3">
                     {[
                       "Double compétence Admin Sys & Dev",
                       "Adaptabilité rapide",
                       "Sens de l'innovation",
                       "Rigueur professionnelle"
                     ].map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start group">
                          <span className="text-primary-500 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                          {item}
                        </li>
                     ))}
                   </ul>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;