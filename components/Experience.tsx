import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';
import { SectionId } from '../types';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Work Experience */}
          <div>
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary-900/20 rounded-xl border border-primary-800/50">
                <Briefcase className="w-8 h-8 text-primary-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Expérience Pro.</h2>
            </motion.div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  className="relative pl-8 sm:pl-10 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-2 bottom-0 w-px bg-slate-700 group-last:bottom-auto group-last:h-full"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-slate-900 border-2 border-primary-500 group-hover:scale-125 group-hover:bg-primary-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  
                  <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all hover:bg-slate-800/80">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{exp.role}</h3>
                      <div className="flex items-center text-primary-300 text-sm font-semibold bg-primary-900/50 px-3 py-1 rounded-full border border-primary-900/50 mt-2 sm:mt-0 w-fit">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="text-lg text-slate-300 mb-4 font-medium">{exp.company}</div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 mr-3 flex-shrink-0 group-hover:bg-primary-500 transition-colors"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-indigo-900/20 rounded-xl border border-indigo-800/50">
                <GraduationCap className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Formation</h2>
            </motion.div>

            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  className="relative pl-8 sm:pl-10 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.2) }}
                >
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-2 bottom-0 w-px bg-slate-700 group-last:hidden"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-300"></div>
                  
                  <div className="bg-slate-800/20 p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all hover:bg-slate-800/60">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-700 text-indigo-300 text-xs font-bold mb-3 border border-slate-600">
                      {edu.period}
                    </span>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{edu.degree}</h3>
                    <div className="text-slate-400 flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-slate-500" />
                      {edu.school}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;