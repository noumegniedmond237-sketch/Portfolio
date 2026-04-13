import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, ChevronDown, ArrowRight, Network, Code, Brain, MessageSquareCode, Award } from 'lucide-react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profilePhoto from './photo.jpeg';

const Hero: React.FC = () => {
  const satellites = [
    { 
      icon: Network, 
      label: "Réseaux & Sécurité", 
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      position: "top-0 -left-12",
      delay: 0
    },
    { 
      icon: Code, 
      label: "Développement Web", 
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      position: "top-0 -right-12",
      delay: 1
    },
    { 
      icon: Brain, 
      label: "Machine Learning", 
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      position: "bottom-8 -right-12",
      delay: 2
    },
    { 
      icon: MessageSquareCode, 
      label: "Prompt Engineering", 
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
      position: "bottom-8 -left-12",
      delay: 3
    }
  ];

  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 pt-16">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-primary-300 bg-primary-900/50 rounded-full border border-primary-800/50 backdrop-blur-sm"
            >
              <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span>
              Disponible pour de nouveaux projets
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Bonjour, je suis <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-indigo-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-medium flex flex-wrap justify-center md:justify-start gap-2">
              <span className="opacity-80">Je suis</span>
              <span className="text-white font-semibold">{PERSONAL_INFO.title}</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {PERSONAL_INFO.tagline}. Je transforme des problèmes complexes en solutions technologiques élégantes et performantes.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a 
                href={`#${SectionId.CONTACT}`}
                className="group relative px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-900/40 hover:shadow-primary-600/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Me contacter <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <button 
                className="px-8 py-3.5 bg-slate-800/50 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700 hover:border-slate-500 flex items-center justify-center gap-2 backdrop-blur-sm group"
                onClick={() => alert('Fonctionnalité de téléchargement CV à implémenter')}
              >
                <Download size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                Télécharger CV
              </button>

              <Link 
                to="/certifications"
                className="px-8 py-3.5 bg-slate-800/50 hover:bg-slate-700 text-primary-400 font-semibold rounded-xl transition-all border border-primary-500/30 hover:border-primary-500 flex items-center justify-center gap-2 backdrop-blur-sm group"
              >
                <Award size={18} className="text-primary-400 group-hover:text-primary-300 transition-colors" />
                Certifications
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center md:justify-center relative py-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Main Image with Morphing Blob Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-indigo-600 animate-morph blur-2xl opacity-40"></div>
              <div className="relative w-full h-full animate-morph overflow-hidden border-2 border-slate-700/50 shadow-2xl bg-slate-800 z-10">
                <img 
                  src={profilePhoto} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Orbiting Satellite Badges - Icons Only */}
              {satellites.map((sat, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${sat.position} z-20 hidden md:flex items-center justify-center bg-slate-900/90 backdrop-blur-xl p-2 rounded-2xl border border-slate-700/50 shadow-lg shadow-black/20`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    opacity: { delay: 0.8 + (index * 0.1), duration: 0.5 },
                    y: { 
                      repeat: Infinity, 
                      duration: 4, 
                      delay: sat.delay, 
                      ease: "easeInOut" 
                    }
                  }}
                  whileHover={{ scale: 1.1, borderColor: "rgba(96, 165, 250, 0.5)" }}
                  title={sat.label}
                >
                  <div className={`p-3 rounded-xl ${sat.bgColor}`}>
                    <sat.icon size={24} className={sat.color} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a 
        href={`#${SectionId.ABOUT}`} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-white transition-colors cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;