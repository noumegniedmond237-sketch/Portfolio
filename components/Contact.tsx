import React from 'react';
import { CONTACT_INFO } from '../constants';
import { SectionId } from '../types';
import { Phone, Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Me Contacter</h2>
          <p className="text-slate-400 text-lg">Prêt à donner vie à vos projets ? Discutons-en.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Coordonnées</h3>
                <div className="space-y-8">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start group">
                    <div className="flex-shrink-0 bg-slate-700 p-4 rounded-xl group-hover:bg-primary-600 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-primary-400 group-hover:text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Téléphone</h3>
                      <p className="mt-1 text-white font-medium text-lg">{CONTACT_INFO.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start group">
                    <div className="flex-shrink-0 bg-slate-700 p-4 rounded-xl group-hover:bg-primary-600 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-primary-400 group-hover:text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Email</h3>
                      <p className="mt-1 text-white font-medium text-lg break-all">{CONTACT_INFO.email}</p>
                    </div>
                  </a>

                  <a 
                    href={`https://${CONTACT_INFO.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 bg-slate-700 p-4 rounded-xl group-hover:bg-primary-600 transition-colors duration-300">
                      <Linkedin className="w-6 h-6 text-primary-400 group-hover:text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">LinkedIn</h3>
                      <p className="mt-1 text-white font-medium text-lg break-all">linkedin.com/in/edmond-noumegni</p>
                    </div>
                  </a>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-slate-700 p-4 rounded-xl group-hover:bg-primary-600 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-primary-400 group-hover:text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Localisation</h3>
                      <p className="mt-1 text-white font-medium text-lg">{CONTACT_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-700">
                 <p className="text-slate-500 text-sm">Disponible sur Douala et en télétravail.</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-700 shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-primary-400 transition-colors">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-primary-400 transition-colors">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6 group">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-primary-400 transition-colors">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  placeholder="Proposition de projet"
                />
              </div>
              <div className="mb-8 group">
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-primary-400 transition-colors">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none"
                  placeholder="Décrivez votre projet ou vos besoins..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/50 flex items-center justify-center gap-3 text-lg"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <footer className="mt-24 border-t border-slate-800 pt-12 pb-8 text-center bg-slate-900">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
           <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
           <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
           <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
        </div>
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Edmond Noumegni. Conçu avec passion et précision.
        </p>
      </footer>
    </section>
  );
};

export default Contact;