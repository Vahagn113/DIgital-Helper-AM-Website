'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Briefcase, 
  Instagram, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  MessageCircle,
  Star,
  ChevronRight,
  Languages,
  Sun,
  Moon,
  Settings,
  X
} from 'lucide-react';
import { translations, Language } from '@/lib/translations';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const scrollReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

type Theme = 'light' | 'dark';

export default function LandingPage() {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) return savedTheme;
    return 'dark';
  });

  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const savedLang = localStorage.getItem('lang') as Language;
    return (savedLang && ['en', 'am', 'ru'].includes(savedLang)) ? savedLang : 'en';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'theme' && e.newValue && ['light', 'dark'].includes(e.newValue)) {
        setTheme(e.newValue as Theme);
      }
      if (e.key === 'lang' && e.newValue && ['en', 'am', 'ru'].includes(e.newValue)) {
        setLang(e.newValue as Language);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.lang = lang;
      localStorage.setItem('lang', lang);
    }
  }, [lang, isMounted]);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return null;

  const t = translations[lang];

  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-blue-500/30 selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-5xl z-50">
        <div className="glass-card rounded-[2rem] px-4 sm:px-8 py-2.5 flex justify-between items-center shadow-2xl">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-lg lg:text-xl font-black tracking-tighter text-gray-900 dark:text-white"
            >
              Digital<span className="text-blue-600 dark:text-blue-500">Helper</span>.AM
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center gap-1 lg:gap-2">
              {(['services', 'pricing', 'whyUs', 'contact'] as const).map((item) => (
                <motion.a
                  key={item}
                  href={`#${item === 'whyUs' ? 'why-us' : item}`}
                  whileHover={{ backgroundColor: "rgba(128,128,128,0.1)" }}
                  className="px-3 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold transition-all text-gray-500 hover:text-blue-500 whitespace-nowrap"
                >
                  {t.nav[item]}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={toggleTheme}
              className="hidden md:flex p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <div className="hidden sm:flex items-center bg-black/5 dark:bg-white/5 rounded-full p-1 border border-black/10 dark:border-white/10">
              {(['en', 'am', 'ru'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`px-3 py-1 text-[10px] font-black rounded-full transition-all uppercase tracking-wider ${
                    lang === l 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                      : 'text-gray-500 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {l === 'en' ? 'EN' : l === 'am' ? 'AM' : 'RU'}
                </button>
              ))}
            </div>

            <a 
              href="https://t.me/digitalhelperam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 text-[10px] lg:text-xs font-black rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-blue-500/20"
            >
              {t.nav.getHelp}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all text-gray-500 dark:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Settings className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu logic simplified for Umbrel feel */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, scale: 1, y: 12, display: "block" },
            closed: { opacity: 0, scale: 0.95, y: -20, transitionEnd: { display: "none" } }
          }}
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-[2rem] mt-2 overflow-hidden overflow-y-auto max-h-[70vh] border border-black/10 dark:border-white/10 shadow-2xl"
        >
          <div className="p-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] px-2 block">{t.settings.theme}</span>
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl shadow-sm"
              >
                <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider">
                  {theme === 'light' ? t.settings.light : t.settings.dark}
                </span>
                {theme === 'light' ? <Moon className="w-5 h-5 text-blue-600" /> : <Sun className="w-5 h-5 text-orange-500" />}
              </button>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] px-2 block">{t.settings.language}</span>
              <div className="grid grid-cols-3 gap-2">
                {(['en', 'am', 'ru'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLangChange(l)}
                    className={`py-4 text-[10px] font-black rounded-xl transition-all uppercase tracking-[0.2em] shadow-sm ${
                      lang === l 
                        ? 'bg-blue-600 text-white shadow-blue-500/30' 
                        : 'text-gray-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-black/5 dark:border-white/5'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {t.hero.badge}
                </motion.span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] text-gray-900 dark:text-white will-change-transform">
              {t.hero.headline.split(' ').map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%", rotate: 2 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3 + (i * 0.05), 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto font-medium"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-blue-700 transition-all flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_60px_-10px_rgba(37,99,235,0.5)] active:scale-95"
              >
                {t.hero.ctaPrimary}
              </a>
              <a 
                href="https://t.me/digitalhelperam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 glass-card rounded-full font-black text-xl text-gray-900 dark:text-white flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95 border-2 border-black/5 dark:border-white/5"
              >
                <Send className="mr-3 w-6 h-6" />
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow-blue opacity-10 -z-10" />
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">{t.services.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-bold">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t.services.cv.title,
                icon: <FileText className="w-6 h-6 text-blue-500" />,
                items: t.services.cv.items
              },
              {
                title: t.services.business.title,
                icon: <Instagram className="w-6 h-6 text-orange-500" />,
                items: t.services.business.items
              },
              {
                title: t.services.website.title,
                icon: <Globe className="w-6 h-6 text-blue-500" />,
                items: t.services.website.items
              },
              {
                title: t.services.tech.title,
                icon: <Cpu className="w-6 h-6 text-orange-500" />,
                items: t.services.tech.items
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card p-10 rounded-[2.5rem] flex flex-col h-full"
              >
                <div className="mb-8 p-4 bg-black/5 dark:bg-white/5 rounded-2xl w-fit border border-black/5 dark:border-white/5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black mb-6 text-gray-900 dark:text-white leading-tight uppercase tracking-tighter">{service.title}</h3>
                <ul className="space-y-4 mt-auto">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mt-1.5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-glow-orange opacity-10 -z-10" />
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">{t.pricing.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-bold">{t.pricing.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: t.pricing.plans.basic.name,
                price: t.pricing.plans.basic.price,
                features: t.pricing.plans.basic.features,
                cta: t.pricing.plans.basic.cta,
                highlight: false
              },
              {
                name: t.pricing.plans.standard.name,
                price: t.pricing.plans.standard.price,
                features: t.pricing.plans.standard.features,
                cta: t.pricing.plans.standard.cta,
                highlight: true
              },
              {
                name: t.pricing.plans.premium.name,
                price: t.pricing.plans.premium.price,
                features: t.pricing.plans.premium.features,
                cta: t.pricing.plans.premium.cta,
                highlight: false
              }
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-[2.5rem] transition-all flex flex-col relative overflow-hidden ${
                  plan.highlight 
                    ? 'border-2 border-blue-500/50 bg-blue-500/[0.05] shadow-[0_0_80px_-20px_rgba(37,99,235,0.3)] scale-105 z-10 backdrop-blur-xl' 
                    : 'glass-card'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-blue-600 text-white text-[10px] font-black py-1 px-4 rounded-full self-start mb-6 uppercase tracking-[0.2em]">
                    {t.pricing.mostPopular}
                  </div>
                )}
                <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-tighter">{plan.name}</h3>
                <div className="text-3xl font-black mb-10 text-gray-900 dark:text-white">{plan.price}</div>
                <ul className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact"
                  className={`w-full py-4 rounded-full font-black text-center text-xs uppercase tracking-widest transition-all ${
                    plan.highlight 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20' 
                      : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-10 rounded-[2.5rem] glass-card flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-tighter">{t.pricing.business.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-bold">{t.pricing.business.desc}</p>
              </div>
              <div className="text-right flex flex-col items-center sm:items-end">
                <div className="text-2xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter">{t.pricing.starting} {t.pricing.business.price}</div>
                <a href="#contact" className="px-6 py-2.5 rounded-full glass-card text-xs font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-all">
                  {t.pricing.inquire}
                </a>
              </div>
            </div>
            <div className="p-10 rounded-[2.5rem] glass-card flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-tighter">{t.pricing.webDev.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-bold">{t.pricing.webDev.desc}</p>
              </div>
              <div className="text-right flex flex-col items-center sm:items-end">
                <div className="text-2xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter">{t.pricing.starting} {t.pricing.webDev.price}</div>
                <a href="#contact" className="px-6 py-2.5 rounded-full glass-card text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-500 hover:text-blue-400 transition-all">
                  {t.pricing.inquire}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-glow-purple opacity-5 -z-10" />
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 text-gray-900 dark:text-white leading-tight uppercase tracking-tighter">{t.whyUs.title}</h2>
              <div className="space-y-6">
                {t.whyUs.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-5 px-6 py-4 glass-card rounded-[1.5rem]"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300 font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[3rem] relative z-10 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-10 pb-6 border-b border-black/5 dark:border-white/5">
                  <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-xl shadow-blue-500/20">DH</div>
                  <div>
                    <div className="font-black text-gray-900 dark:text-white text-lg leading-tight uppercase tracking-tighter">Digital Helper AM</div>
                    <div className="text-[10px] text-green-600 dark:text-green-500 font-black uppercase tracking-widest mt-1 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-500 mr-2 animate-pulse" />
                      {t.whyUs.chat.status}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-5 rounded-[1.5rem] rounded-tl-none max-w-[85%] text-sm text-gray-700 dark:text-gray-300 font-bold"
                  >
                    {t.whyUs.chat.msg1}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="bg-blue-600 p-5 rounded-[1.5rem] rounded-tr-none max-w-[85%] ml-auto text-sm text-white font-black shadow-lg shadow-blue-500/20"
                  >
                    {t.whyUs.chat.msg2}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                    className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-5 rounded-[1.5rem] rounded-tl-none max-w-[85%] text-sm text-gray-700 dark:text-gray-300 font-bold"
                  >
                    {t.whyUs.chat.msg3}
                  </motion.div>
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-full h-full bg-blue-500/10 rounded-[3rem] -z-10 blur-3xl" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow-blue opacity-5 -z-10" />
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">{t.howItWorks.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-bold">{t.howItWorks.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {t.howItWorks.steps.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center glass-card p-10 rounded-[2.5rem]"
              >
                <div className="w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center mx-auto mb-8 font-black text-xl shadow-xl shadow-blue-500/10">
                  {`0${i + 1}`}
                </div>
                <h3 className="text-lg font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-bold leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-glow-orange opacity-5 -z-10" />
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">{t.testimonials.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.testimonials.items.map((testimonial, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[3rem] shadow-2xl"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500 mr-1" />
                  ))}
                </div>
                <p className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-10 leading-relaxed italic text-center">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center space-x-4 border-t border-black/5 dark:border-white/5 pt-8">
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/10 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white font-black">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-blue opacity-10 -z-10" />
        <motion.div 
          {...scrollReveal}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="glass-card rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_100px_-20px_rgba(37,99,235,0.2)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white leading-none uppercase tracking-tighter">{t.contact.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-16 font-bold max-w-xl mx-auto">{t.contact.subtitle}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <a 
                  href="https://t.me/digitalhelperam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-500/20"
                >
                  <Send className="mr-3 w-5 h-5" />
                  Telegram
                </a>
                <a 
                  href="https://instagram.com/digitalhelperam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 glass-card text-gray-900 dark:text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95"
                >
                  <Instagram className="mr-3 w-5 h-5" />
                  Instagram
                </a>
              </div>
            </motion.div>
            
            {/* Background highlights */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">
            Digital<span className="text-blue-600 dark:text-blue-500">Helper</span>.AM
          </div>
          <p className="text-gray-500 text-sm font-medium mb-12 max-w-sm mx-auto">&quot;{t.footer.tagline}&quot;</p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://instagram.com/digitalhelperam" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl glass-card text-gray-400 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
            <a href="https://t.me/digitalhelperam" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl glass-card text-gray-400 hover:text-white transition-all"><Send className="w-5 h-5" /></a>
          </div>
          <div className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Digital Helper AM • {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Global Background Ambient Glows & Animated Loop (CSS Optimized) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-glow-blue opacity-[0.3] dark:opacity-[0.4] blur-[180px] float-blue" />
        <div className="absolute top-[10%] right-[-20%] w-[80%] h-[80%] bg-glow-orange opacity-[0.2] dark:opacity-[0.25] blur-[180px] float-orange" />
        <div className="absolute bottom-[-20%] left-[10%] w-[70%] h-[70%] bg-glow-purple opacity-[0.15] dark:opacity-[0.2] blur-[180px] float-purple" />
        
        {/* Subtle Grid / Texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#808080 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
    </main>
  );
}
