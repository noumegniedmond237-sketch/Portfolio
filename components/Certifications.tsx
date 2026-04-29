import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown, ExternalLink, Brain, Code, Network, ArrowLeft, Eye, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import awsPdf from '../assets/AWS.pdf';
import ibmPdf from '../assets/IBM.pdf';
import claudeActionPdf from '../assets/Claude Code in Action.pdf';
import claudeVertexPdf from '../assets/Claude with Google Vrtex AI.pdf';
import mcpIntroPdf from '../assets/Introduction to Model Context Protocol.pdf';
import mcpAdvancedPdf from '../assets/Model Context Protocol Advanced Topics.pdf';

const certificationsData = [
  {
    discipline: "Prompt Engineering & IA",
    icon: Brain,
    color: "text-pink-400",
    bgColor: "bg-pink-500/20",
    certifications: [
      {
        title: "Prompt Engineering with Amazon Q Developer",
        issuer: "AWS Training & Certification",
        date: "2026",
        description: "Utilisation d'Amazon Q Developer pour optimiser l'ingénierie de prompts.",
        link: "#",
        pdfUrl: awsPdf
      },
      {
        title: "Prompt Engineering for Everyone",
        issuer: "IBM / Cognitive Class",
        date: "2026",
        description: "Fondamentaux de l'ingénierie de prompts pour tous les niveaux.",
        link: "#",
        pdfUrl: ibmPdf
      },
      {
        title: "Claude Code in Action",
        issuer: "Anthropic",
        date: "2026",
        description: "Mise en pratique du développement avec Claude et l'écosystème Anthropic.",
        link: "#",
        pdfUrl: claudeActionPdf
      },
      {
        title: "Claude with Google Vertex AI",
        issuer: "Anthropic",
        date: "2026",
        description: "Intégration et utilisation de Claude via la plateforme Google Vertex AI.",
        link: "#",
        pdfUrl: claudeVertexPdf
      },
      {
        title: "Introduction to Model Context Protocol",
        issuer: "Anthropic",
        date: "2026",
        description: "Introduction au protocole Model Context Protocol (MCP).",
        link: "#",
        pdfUrl: mcpIntroPdf
      },
      {
        title: "MCP Advanced Topics",
        issuer: "Anthropic",
        date: "2026",
        description: "Sujets avancés et implémentations complexes avec le Model Context Protocol.",
        link: "#",
        pdfUrl: mcpAdvancedPdf
      },
      {
        title: "Advanced Prompt Engineering",
        issuer: "OpenAI / DeepLearning.AI",
        date: "2023",
        description: "Maîtrise des techniques avancées de prompting pour les LLMs.",
        link: "#",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      {
        title: "Generative AI Fundamentals",
        issuer: "Google Cloud",
        date: "2023",
        description: "Compréhension des concepts fondamentaux de l'IA générative.",
        link: "#",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },
  {
    discipline: "Développement Web",
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    certifications: [
      {
        title: "React Developer Certification",
        issuer: "Meta",
        date: "2022",
        description: "Développement d'applications web modernes avec React.",
        link: "#",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      {
        title: "Full-Stack Web Development",
        issuer: "FreeCodeCamp",
        date: "2021",
        description: "Création d'applications web complètes (MERN stack).",
        link: "#",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },
  {
    discipline: "Réseaux & Sécurité",
    icon: Network,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    certifications: [
      {
        title: "Cisco CCNA",
        issuer: "Cisco",
        date: "2021",
        description: "Fondamentaux des réseaux et routage/commutation.",
        link: "#",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      {
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2022",
        description: "Principes de base de la cybersécurité et gestion des risques.",
        link: "#",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  }
];

const Certifications: React.FC = () => {
  const [expandedDiscipline, setExpandedDiscipline] = useState<string | null>(certificationsData[0].discipline);
  const [previewPdf, setPreviewPdf] = useState<{url: string, title: string} | null>(null);

  const toggleDiscipline = (discipline: string) => {
    if (expandedDiscipline === discipline) {
      setExpandedDiscipline(null);
    } else {
      setExpandedDiscipline(discipline);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-primary-400 transition-colors mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
            <Award className="text-primary-500 h-10 w-10" />
            Mes Certifications
          </h1>
          <p className="text-slate-400 text-lg">
            Découvrez mes certifications professionnelles classées par domaine d'expertise.
          </p>
        </div>

        <div className="space-y-6">
          {certificationsData.map((category, index) => {
            const isExpanded = expandedDiscipline === category.discipline;
            const Icon = category.icon;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleDiscipline(category.discipline)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${category.bgColor}`}>
                      <Icon size={24} className={category.color} />
                    </div>
                    <h2 className="text-2xl font-semibold text-white text-left">
                      {category.discipline}
                    </h2>
                  </div>
                  <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} className="text-slate-400" />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-700/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {category.certifications.map((cert, certIndex) => (
                            <div 
                              key={certIndex}
                              className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 hover:border-primary-500/50 transition-colors group flex flex-col"
                            >
                              <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-medium text-white group-hover:text-primary-400 transition-colors">
                                  {cert.title}
                                </h3>
                                <div className="flex gap-2">
                                  {cert.pdfUrl && (
                                    <button 
                                      onClick={() => setPreviewPdf({ url: cert.pdfUrl, title: cert.title })}
                                      className="text-slate-500 hover:text-primary-400 transition-colors"
                                      title="Prévisualiser le PDF"
                                    >
                                      <Eye size={18} />
                                    </button>
                                  )}
                                  <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-primary-400 transition-colors"
                                    title="Lien externe"
                                  >
                                    <ExternalLink size={18} />
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-sm font-medium text-slate-300">{cert.issuer}</span>
                                <span className="text-slate-600">•</span>
                                <span className="text-sm text-slate-400">{cert.date}</span>
                              </div>
                              <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                                {cert.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {previewPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setPreviewPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Award className="text-primary-500 h-5 w-5" />
                  {previewPdf.title}
                </h3>
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-grow w-full bg-slate-950 relative flex flex-col">
                <div className="bg-blue-900/20 border-b border-blue-500/20 p-3 flex flex-col sm:flex-row items-center justify-between px-4 gap-3">
                  <p className="text-blue-200/70 text-sm text-center sm:text-left">
                    Si le PDF ne s'affiche pas (bloqué par le navigateur), vous pouvez l'ouvrir directement.
                  </p>
                  <a
                    href={previewPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-4 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 border border-blue-500/30"
                  >
                    <ExternalLink size={14} />
                    Ouvrir dans un nouvel onglet
                  </a>
                </div>
                <div className="flex-grow relative">
                  <iframe
                    src={`${previewPdf.url}#toolbar=0`}
                    className="absolute inset-0 w-full h-full border-0"
                    title={`Prévisualisation de ${previewPdf.title}`}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;