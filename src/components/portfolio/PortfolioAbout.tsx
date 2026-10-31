/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, Layers, Cpu, Award, BookOpen, MapPin, ArrowUpRight, FileText } from 'lucide-react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { GlassCard } from './GlassCard';
import { soundManager } from '../../utils/soundEffects';

interface PortfolioAboutProps {
  lang: Language;
  onOpenResume: () => void;
}

export const PortfolioAbout: React.FC<PortfolioAboutProps> = ({ lang, onOpenResume }) => {
  const isAr = lang === 'ar';
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.about.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            {isAr
              ? 'نقطة الالتقاء حيث يجتمع الذكاء المؤسسي ودورات الأعمال مع كود بايثون البرمجي النظيف.'
              : 'The intersection where business intelligence meets clean, object-oriented code.'}
          </p>
        </div>

        {/* Grid: Story + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <GlassCard
              tiltIntensity={5}
              elevation={12}
              glowColor="rgba(59, 130, 246, 0.18)"
              className="p-7 sm:p-8 space-y-4"
            >
              <div className="prose prose-invert max-w-none text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playTechBlip(900);
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/30 active:scale-95 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.about.viewCvBtn}</span>
                </button>

                <span className="text-xs font-mono text-slate-400">
                  {isAr ? 'المعهد العالي بطنطا' : 'Higher Institute Tanta'}
                </span>
              </div>
            </GlassCard>

            {/* Quick Fact Badges */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <GlassCard
                tiltIntensity={8}
                elevation={10}
                glowColor="rgba(59, 130, 246, 0.15)"
                className="p-4"
              >
                <div className="text-2xl font-bold text-blue-400 font-mono">BIS</div>
                <div className="text-xs text-slate-400 mt-1">
                  {isAr ? 'تخصص نظم المعلومات' : 'Specialization Degree'}
                </div>
              </GlassCard>

              <GlassCard
                tiltIntensity={8}
                elevation={10}
                glowColor="rgba(59, 130, 246, 0.15)"
                className="p-4"
              >
                <div className="text-2xl font-bold text-white font-mono">Python</div>
                <div className="text-xs text-slate-400 mt-1">
                  {isAr ? 'البرمجة كائنية التوجه' : 'OOP & Automation'}
                </div>
              </GlassCard>

              <GlassCard
                tiltIntensity={8}
                elevation={10}
                glowColor="rgba(59, 130, 246, 0.15)"
                className="p-4"
              >
                <div className="text-2xl font-bold text-blue-300 font-mono">Odoo</div>
                <div className="text-xs text-slate-400 mt-1">
                  {isAr ? 'تطوير وتخصيص ERP' : 'ERP Specialization'}
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Right Cards: Pillars of Value */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard
              tiltIntensity={6}
              elevation={14}
              glowColor="rgba(59, 130, 246, 0.15)"
              className="p-6 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {t.about.pillar1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.about.pillar1Desc}
              </p>
            </GlassCard>

            <GlassCard
              tiltIntensity={6}
              elevation={14}
              glowColor="rgba(59, 130, 246, 0.15)"
              className="p-6 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {t.about.pillar2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.about.pillar2Desc}
              </p>
            </GlassCard>

            <GlassCard
              tiltIntensity={6}
              elevation={14}
              glowColor="rgba(59, 130, 246, 0.15)"
              className="p-6 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {t.about.pillar3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.about.pillar3Desc}
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
