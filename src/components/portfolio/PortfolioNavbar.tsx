/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  Menu,
  X,
  Mail,
  Languages,
  Volume2,
  VolumeX,
  Sparkles,
  FileText,
  Layers,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { soundManager } from '../../utils/soundEffects';

interface PortfolioNavbarProps {
  onBackToGlassHero: () => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenResume: () => void;
}

export const PortfolioNavbar: React.FC<PortfolioNavbarProps> = ({
  onBackToGlassHero,
  lang,
  onLanguageChange,
  soundEnabled,
  onToggleSound,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';
  const t = TRANSLATIONS[lang];

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#odoo', label: t.nav.odoo },
    { href: '#projects', label: t.nav.projects },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLangToggle = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    onLanguageChange(nextLang);
    soundManager.playTechBlip(880);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#0a0b12]/85 border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Back to 3D Glass Slab */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <button
            type="button"
            onClick={() => {
              soundManager.playGlassTap();
              onBackToGlassHero();
            }}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 text-xs font-medium transition-all group cursor-pointer"
            title={t.nav.backTo3D}
          >
            <ArrowLeft className={`w-3.5 h-3.5 transition-transform ${isAr ? 'group-hover:translate-x-1 rotate-180' : 'group-hover:-translate-x-1'}`} />
            <span>{t.nav.backTo3D}</span>
          </button>

          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400/30 flex items-center justify-center font-bold text-white text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105">
              YW
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {isAr ? 'يوسف وليد' : 'Yousef Waleed'}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden xs:inline sm:inline">
                {t.nav.brandSubtitle}
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#12131a]/70 border border-white/[0.08] rounded-full px-3 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => soundManager.playGlassTap()}
              className="text-xs font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Top Control Bar: Language, Audio, Atmosphere, CV, Contact */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Switch Button */}
          <button
            type="button"
            onClick={handleLangToggle}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-white transition-all cursor-pointer hover:border-blue-500/40"
            title={lang === 'en' ? 'التحويل للغة العربية' : 'Switch to English'}
          >
            <Languages className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold">{t.nav.langToggle}</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            type="button"
            onClick={() => {
              onToggleSound();
              soundManager.playTechBlip(650);
            }}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={soundEnabled ? t.nav.soundOn : t.nav.soundOff}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Resume Modal Trigger */}
          <button
            type="button"
            onClick={() => {
              soundManager.playTechBlip(900);
              onOpenResume();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-slate-200 hover:text-white transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.nav.resume}</span>
          </button>

          {/* Contact Action */}
          <a
            href="#contact"
            onClick={() => soundManager.playGlassTap()}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-lg shadow-blue-600/25 active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.nav.getInTouch}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#0c0d12] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
                soundManager.playGlassTap();
              }}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors text-left"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.05] text-xs font-medium text-slate-200"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>{t.nav.resume}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
