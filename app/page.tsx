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
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
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
    if (typeof window === 'undefined') return 'light';
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) return savedTheme;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
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
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-black dark:text-white">
                Digital Helper <span className="text-blue-600">AM</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {(['services', 'pricing', 'whyUs', 'contact'] as const).map((item) => (
                <motion.a
                  key={item}
                  href={`#${item === 'whyUs' ? 'why-us' : item}`}
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-colors text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.nav[item]}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Desktop Theme & Lang (Hidden on mobile menu) */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-90"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>

                <div className="flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 border border-gray-200/50 dark:border-gray-700/50">
                  <Languages className="w-3.5 h-3.5 text-gray-400 ml-2 mr-1" />
                  <div className="flex items-center">
                    {(['en', 'am', 'ru'] as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLangChange(l)}
                        className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider ${
                          lang === l 
                            ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                        }`}
                      >
                        {l === 'en' ? 'EN' : l === 'am' ? 'AM' : 'RU'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="https://t.me/digitalhelperam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                {t.nav.getHelp}
              </a>

              {/* Mobile Settings Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                aria-label="Toggle settings"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Settings className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Settings Overlay */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto", display: "block" },
            closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
          }}
          className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 overflow-hidden"
        >
          <div className="px-4 py-6 space-y-6">
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
              </span>
              <button
                onClick={toggleTheme}
                className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all active:scale-90 shadow-sm"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex flex-col space-y-3 px-2">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Language</span>
              <div className="flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-2xl p-1.5 border border-gray-200/50 dark:border-gray-700/50">
                {(['en', 'am', 'ru'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLangChange(l)}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all uppercase tracking-wider ${
                      lang === l 
                        ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md' 
                        : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 uppercase tracking-wider">
              {t.hero.badge}
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-black dark:text-white">
              {t.hero.headline.split(/[.:]\s/).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}{i < arr.length - 1 ? (t.hero.headline.includes(': ') ? ': ' : '. ') : ''}
                  {i === 1 && <br className="hidden md:block" />}
                </React.Fragment>
              ))}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t.hero.subheadline}
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center justify-center group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://t.me/digitalhelperam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 text-black dark:text-white rounded-full font-semibold text-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center"
              >
                <Send className="mr-2 w-5 h-5" />
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-50/50 dark:bg-orange-900/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden transition-colors">
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">{t.services.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t.services.cv.title,
                icon: <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                items: t.services.cv.items
              },
              {
                title: t.services.business.title,
                icon: <Instagram className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
                items: t.services.business.items
              },
              {
                title: t.services.website.title,
                icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                items: t.services.website.items
              },
              {
                title: t.services.tech.title,
                icon: <Cpu className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
                items: t.services.tech.items
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all"
              >
                <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-900 rounded-2xl inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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
      <section id="pricing" className="py-24 overflow-hidden transition-colors">
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">{t.pricing.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.pricing.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                className={`p-8 rounded-3xl border-2 transition-all flex flex-col ${
                  plan.highlight 
                    ? 'border-blue-600 bg-white dark:bg-gray-800 shadow-xl scale-105 z-10' 
                    : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-200 dark:hover:border-gray-700'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full self-start mb-4 uppercase tracking-wider">
                    {t.pricing.mostPopular}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{plan.name}</h3>
                <div className="text-3xl font-extrabold mb-6 text-black dark:text-white">{plan.price}</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact"
                  className={`w-full py-3 rounded-full font-bold text-center transition-all ${
                    plan.highlight 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{t.pricing.business.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{t.pricing.business.desc}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-2 text-black dark:text-white">{t.pricing.starting} {t.pricing.business.price}</div>
                <a href="#contact" className="text-orange-600 dark:text-orange-400 font-bold flex items-center hover:underline">
                  {t.pricing.inquire} <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{t.pricing.webDev.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{t.pricing.webDev.desc}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-2 text-black dark:text-white">{t.pricing.starting} {t.pricing.webDev.price}</div>
                <a href="#contact" className="text-blue-600 dark:text-blue-400 font-bold flex items-center hover:underline">
                  {t.pricing.inquire} <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-gray-50 dark:bg-gray-950 text-black dark:text-white overflow-hidden transition-colors">
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-white">{t.whyUs.title}</h2>
              <div className="space-y-6">
                {t.whyUs.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 relative z-10 shadow-sm"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl text-white">DH</div>
                  <div>
                    <div className="font-bold text-black dark:text-white">Digital Helper AM</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.whyUs.chat.status}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm text-gray-800 dark:text-gray-200"
                  >
                    {t.whyUs.chat.msg1}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="bg-blue-600 p-4 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-sm text-white"
                  >
                    {t.whyUs.chat.msg2}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm text-gray-800 dark:text-gray-200"
                  >
                    {t.whyUs.chat.msg3}
                  </motion.div>
                </div>
              </motion.div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-blue-600/10 dark:bg-blue-600/20 rounded-3xl -z-10 blur-2xl" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-24 overflow-hidden transition-colors">
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">{t.howItWorks.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t.howItWorks.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -z-10" />
            {t.howItWorks.steps.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white dark:bg-gray-950 p-6"
              >
                <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-bold mb-2 text-black dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden transition-colors">
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">{t.testimonials.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.testimonials.items.map((testimonial, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
                  <div>
                    <div className="font-bold text-sm text-black dark:text-white">{testimonial.author}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 overflow-hidden transition-colors">
        <motion.div 
          {...scrollReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-blue-600 dark:bg-blue-700 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
                <p className="text-blue-100 text-lg mb-10">{t.contact.subtitle}</p>
                
                <div className="flex flex-col items-center space-y-4">
                  <a 
                    href="https://t.me/digitalhelperam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full max-w-md inline-flex items-center justify-center px-6 py-4 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 rounded-2xl font-bold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all active:scale-95"
                  >
                    <Send className="mr-3 w-6 h-6" />
                    {t.contact.telegram}
                  </a>
                  <a 
                    href="https://instagram.com/digitalhelperam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full max-w-md inline-flex items-center justify-center px-6 py-4 bg-blue-500 dark:bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-400 dark:hover:bg-blue-500 transition-all border border-blue-400 dark:border-blue-500 active:scale-95"
                  >
                    <Instagram className="mr-3 w-6 h-6" />
                    {t.contact.instagram}
                  </a>
                  <a 
                    href="#" 
                    className="w-full max-w-md inline-flex items-center justify-center px-6 py-4 bg-green-500 dark:bg-green-600 text-white rounded-2xl font-bold hover:bg-green-400 dark:hover:bg-green-500 transition-all active:scale-95"
                  >
                    <MessageCircle className="mr-3 w-6 h-6" />
                    {t.contact.whatsapp}
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Background circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50" />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl font-bold mb-4 text-black dark:text-white">
            Digital Helper <span className="text-blue-600">AM</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">&quot;{t.footer.tagline}&quot;</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Send className="w-5 h-5" /></a>
          </div>
          <div className="text-gray-400 dark:text-gray-500 text-xs">
            © {new Date().getFullYear()} Digital Helper AM. {t.footer.rights}
          </div>
        </div>
      </footer>
    </main>
  );
}
