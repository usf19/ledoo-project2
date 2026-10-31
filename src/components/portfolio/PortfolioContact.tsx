/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { YOUSEF_PROFILE } from '../../data/yousefData';
import { Language, TRANSLATIONS } from '../../data/translations';
import { GlassCard } from './GlassCard';
import { soundManager } from '../../utils/soundEffects';

interface PortfolioContactProps {
  lang: Language;
}

export const PortfolioContact: React.FC<PortfolioContactProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const isAr = lang === 'ar';
  const t = TRANSLATIONS[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(YOUSEF_PROFILE.contact.email);
    soundManager.playTechBlip(950);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('01098056474');
    soundManager.playTechBlip(950);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    soundManager.playStepChime(3);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3500);
  };

  const whatsappMessage = isAr
    ? encodeURIComponent('السلام عليكم أخي يوسف، اطلعت على موقعك الشخصي وأرغب في مناقشة فرصة تدريب / عمل في Odoo ERP.')
    : encodeURIComponent('Hello Yousef, I reviewed your portfolio and would like to discuss an Odoo ERP development / internship opportunity.');

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.contact.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email & Phone Card with 1-click copy */}
            <GlassCard
              tiltIntensity={6}
              elevation={14}
              glowColor="rgba(59, 130, 246, 0.22)"
              className="p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">
                  {t.contact.directEmail} & {isAr ? 'الهاتف' : 'Phone'}
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  {t.contact.fastResponse}
                </span>
              </div>

              {/* Email Row */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {YOUSEF_PROFILE.contact.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs font-medium transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone & WhatsApp Row */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white">
                    01098056474 <span className="text-[10px] text-slate-400 font-sans">(+20)</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-medium transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                  title="Copy phone number"
                >
                  {phoneCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{isAr ? 'تم النسخ' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`mailto:${YOUSEF_PROFILE.contact.email}?subject=Opportunity%20Inquiry%20for%20Yousef%20Waleed`}
                  onClick={() => soundManager.playGlassTap()}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-600/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.contact.launchMail}</span>
                </a>

                <a
                  href={`https://wa.me/201098056474?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playGlassTap()}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md shadow-emerald-700/30"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isAr ? 'مراسلة واتساب فورية' : 'Direct WhatsApp'}</span>
                </a>
              </div>
            </GlassCard>

            {/* Location & Presence Card */}
            <GlassCard
              tiltIntensity={6}
              elevation={14}
              glowColor="rgba(34, 211, 238, 0.2)"
              className="p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.contact.locationTitle}</h4>
                  <span className="text-xs text-slate-400">{t.contact.locationValue}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <a
                  href={YOUSEF_PROFILE.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playGlassTap()}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href={YOUSEF_PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playGlassTap()}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Interactive Message Form */}
          <GlassCard
            tiltIntensity={5}
            elevation={12}
            glowColor="rgba(59, 130, 246, 0.18)"
            className="lg:col-span-7 p-8"
          >
            <h3 className="text-lg font-bold text-white mb-2">{t.contact.formTitle}</h3>
            <p className="text-xs text-slate-400 mb-6">{t.contact.formDesc}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? 'مثال: م. أحمد عبد الله' : 'e.g. Sarah Miller'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {t.contact.formSubject}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={
                    isAr
                      ? 'مثال: فرصة تدريب Odoo ERP / استفسار عن مشروع'
                      : 'e.g. Odoo ERP Internship / Project Inquiry'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {t.contact.formMessage}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isAr
                      ? 'اكتب تفاصيل الفرصة، الاستفسار، أو متطلبات العمل...'
                      : 'Tell me about the role, project, or topic...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500">
                  {isAr ? 'إرسال مباشر إلى' : 'Direct inquiry to'} {YOUSEF_PROFILE.contact.email}
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>{t.contact.formSubmitted}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{t.contact.formSubmit}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
