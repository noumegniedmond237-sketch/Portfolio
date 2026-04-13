import React from 'react';
import { SKILLS } from '../constants';
import { SectionId } from '../types';
import { Server, Code, Database, CheckCircle2, Brain } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Systèmes')) return <Server className="w-6 h-6" />;
    if (category.includes('Développement')) return <Code className="w-6 h-6" />;
    if (category.includes('Intelligence')) return <Brain className="w-6 h-6" />;
    return <Database className="w-6 h-6" />;
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnim: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id={SectionId.SKILLS} className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Compétences Techniques
          </motion.h2>
          <motion.p 
            className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Un arsenal technologique complet incluant l'administration système, le développement moderne et l'intelligence artificielle.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILLS.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={itemAnim}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-1 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary-900/20 h-full"
            >
              <div className="bg-slate-800 rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-700">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 text-primary-400 group-hover:text-white group-hover:from-primary-600 group-hover:to-indigo-600 transition-all duration-300 shadow-lg">
                    {getIcon(skillGroup.category)}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-col gap-2 flex-grow">
                  {skillGroup.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="flex items-center justify-between group/item p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 w-full">
                        {item.iconClass ? (
                          <i className={`${item.iconClass} text-xl w-6 text-center flex-shrink-0`} aria-hidden="true"></i>
                        ) : item.icon ? (
                          <item.icon className="w-5 h-5 text-primary-500 group-hover/item:text-white transition-colors flex-shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-slate-600 group-hover/item:text-primary-500 transition-colors flex-shrink-0" />
                        )}
                        <span className="text-slate-300 text-sm font-medium group-hover/item:text-white transition-colors truncate">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;