/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { YOUSEF_PROFILE } from '../../data/yousefData';
import { Language, TRANSLATIONS } from '../../data/translations';
import { soundManager } from '../../utils/soundEffects';

interface PortfolioFooterProps {
  lang: Language;
}

export const PortfolioFooter: React.FC<PortfolioFooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    soundManager.playTechBlip(700);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050608] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
              YW
            </div>
            <div className="text-left">
              <span className="font-semibold text-white block">
                {isAr ? 'يوسف وليد' : 'Yousef Waleed'}
              </span>
              <span className="text-[11px] text-slate-500">
                {t.nav.brandSubtitle}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t.nav.skills}</a>
            <a href="#odoo" className="hover:text-white transition-colors">{t.nav.odoo}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
            <a href="#education" className="hover:text-white transition-colors">{t.nav.education}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Scroll to top"
          >
            <span>{isAr ? 'للأعلى' : 'Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>
            © 2026 {isAr ? 'يوسف وليد' : 'Yousef Waleed'}. {t.footer.rights}
          </span>
          <span>{t.footer.location}</span>
        </div>
      </div>
    </footer>
  );
};
