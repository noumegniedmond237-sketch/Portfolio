import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Award } from 'lucide-react';
import { SectionId } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: `/#${SectionId.HOME}` },
    { label: 'À propos', href: `/#${SectionId.ABOUT}` },
    { label: 'Compétences', href: `/#${SectionId.SKILLS}` },
    { label: 'Expérience', href: `/#${SectionId.EXPERIENCE}` },
    { label: 'Contact', href: `/#${SectionId.CONTACT}` },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-800/50 py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-gradient-to-tr from-primary-600 to-indigo-600 p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                <Terminal className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary-400 transition-colors">
              E. NOUMEGNI
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-1 items-center">
            {isHomePage && navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-slate-800/50 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            ))}
            
            <Link
              to="/certifications"
              className="ml-4 flex items-center gap-2 text-primary-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all border border-primary-500/30 hover:bg-primary-500/20"
            >
              <Award size={16} />
              Certifications
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-slate-800/50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-xl border-b border-slate-700 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {isHomePage && navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white hover:bg-slate-700 block px-3 py-3 rounded-lg text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/certifications"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-primary-400 hover:text-white hover:bg-slate-700 w-full px-3 py-3 rounded-lg text-base font-medium transition-colors"
              >
                <Award size={18} />
                Certifications
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;