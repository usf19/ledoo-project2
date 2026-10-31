/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Users,
  BadgePercent,
  Package,
  Receipt,
  Cpu,
  ArrowRight,
  Workflow,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { ODOO_MODULES, OdooModuleItem } from '../../data/yousefData';
import { Language, TRANSLATIONS } from '../../data/translations';
import { GlassCard } from './GlassCard';
import { OdooWorkflowSimulator } from './OdooWorkflowSimulator';
import { soundManager } from '../../utils/soundEffects';

interface PortfolioOdooJourneyProps {
  lang: Language;
}

export const PortfolioOdooJourney: React.FC<PortfolioOdooJourneyProps> = ({ lang }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('crm');
  const isAr = lang === 'ar';
  const t = TRANSLATIONS[lang];

  const selectedModule =
    ODOO_MODULES.find((m) => m.id === selectedModuleId) || ODOO_MODULES[0];

  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'crm':
        return <Users className="w-5 h-5 text-blue-400" />;
      case 'sales':
        return <BadgePercent className="w-5 h-5 text-blue-400" />;
      case 'inventory':
        return <Package className="w-5 h-5 text-blue-400" />;
      case 'invoicing':
        return <Receipt className="w-5 h-5 text-blue-400" />;
      case 'automation':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Workflow className="w-5 h-5 text-blue-400" />;
    }
  };

  const getTranslatedModuleName = (id: string) => {
    switch (id) {
      case 'crm':
        return t.odoo.step1Name;
      case 'sales':
        return t.odoo.step2Name;
      case 'inventory':
        return t.odoo.step3Name;
      case 'invoicing':
        return t.odoo.step4Name;
      case 'automation':
        return t.odoo.step5Name;
      default:
        return id;
    }
  };

  const getTranslatedRole = (id: string) => {
    switch (id) {
      case 'crm':
        return t.odoo.step1Role;
      case 'sales':
        return t.odoo.step2Role;
      case 'inventory':
        return t.odoo.step3Role;
      case 'invoicing':
        return t.odoo.step4Role;
      case 'automation':
        return t.odoo.step5Role;
      default:
        return '';
    }
  };

  return (
    <section id="odoo" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.odoo.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.odoo.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            {t.odoo.desc}
          </p>
        </div>

        {/* The Department Connection Pipeline Overview */}
        <div className="mb-12 p-6 rounded-3xl bg-[#0f1017] border border-white/[0.08] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 text-left">
            <div>
              <span className="text-xs font-mono uppercase text-blue-400">
                {t.odoo.pipelineHeading}
              </span>
              <h3 className="text-base font-semibold text-white">
                {isAr ? 'كيف تترابط أقسام المؤسسة في Odoo' : 'How Departments Connect in Odoo'}
              </h3>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {t.odoo.pipelineHint}
            </span>
          </div>

          {/* Module Nodes in Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {ODOO_MODULES.map((mod, index) => {
              const isSelected = mod.id === selectedModuleId;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => {
                    soundManager.playTechBlip(600 + index * 80);
                    setSelectedModuleId(mod.id);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative group ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500/60 shadow-lg shadow-blue-500/10'
                      : 'bg-[#14151e] border-white/[0.06] hover:border-white/20 hover:bg-[#181924]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                      {getModuleIcon(mod.id)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">0{index + 1}</span>
                  </div>

                  <h4
                    className={`text-xs font-semibold tracking-tight transition-colors ${
                      isSelected ? 'text-blue-400' : 'text-slate-200 group-hover:text-white'
                    }`}
                  >
                    {getTranslatedModuleName(mod.id)}
                  </h4>
                  <span className="block text-[10px] text-slate-400 mt-1 line-clamp-1">
                    {getTranslatedRole(mod.id)}
                  </span>

                  {index < ODOO_MODULES.length - 1 && (
                    <div className={`hidden lg:block absolute ${isAr ? '-left-2 rotate-180' : '-right-2'} top-1/2 -translate-y-1/2 z-10 text-slate-600`}>
                      →
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Module Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <GlassCard
            tiltIntensity={6}
            elevation={14}
            glowColor="rgba(59, 130, 246, 0.2)"
            className="lg:col-span-8 p-8 text-left space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  {getModuleIcon(selectedModule.id)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {getTranslatedModuleName(selectedModule.id)}
                  </h3>
                  <span className="text-xs text-blue-400 font-mono">
                    {getTranslatedRole(selectedModule.id)}
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {isAr ? 'موديول أساسي' : 'Core Module'}
              </span>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                {isAr ? 'الدور التشغيلي والتكامل مع الإدارات' : 'Operational Purpose & Department Integration'}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? selectedModule.id === 'crm'
                    ? 'تتبع العملاء المحتملين عبر لوحات كانبان البصرية، احتساب احتمالية التحويل، ونقل الفرص المؤهلة تلقائياً إلى عروض أسعار تجارية.'
                    : selectedModule.id === 'sales'
                    ? 'إدارة طلبيات العملاء بقواعد تسعير مرنة، والتحقق الآلي من الائتمان وهوامش الربح مع التسليم الفوري لإدارة المخازن.'
                    : selectedModule.id === 'inventory'
                    ? 'تقييم المخزون لحظياً، قواعد إعادة الطلب التلقائية عند الحدود الدنيا، وإدارة مسارات الصرف والتوزيع بدقة متناهية.'
                    : selectedModule.id === 'invoicing'
                    ? 'إنشاء فواتير إلكترونية متطابقة مع القيود المزدوجة، وأتمتة دورات التحصيل ومطابقة المدفوعات البنكية مع العملاء.'
                    : 'كتابة إجراءات برمجية مخصصة بلغة بايثون، ورسائل تنبيه بريدية آلية، وقواعد اعتماد لتجريد الأعمال من الإدخال اليدوي.'
                  : selectedModule.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#14151e] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-2">
                <GitBranch className="w-4 h-4 text-blue-400" />
                <span>{isAr ? 'تسلسل المسار المؤتمت' : 'Automated Workflow Cascade'}</span>
              </div>
              <div className="text-xs text-blue-300 font-mono bg-[#0c0d12] p-3 rounded-xl border border-white/[0.06]">
                {selectedModule.workflow}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-slate-200 block mb-1">
                  {isAr ? 'الفهم المؤسسي (Business Logic):' : 'Business Understanding:'}
                </strong>
                <span className="text-slate-400">
                  {isAr
                    ? 'تطبيق سياسات العمل الواقعية مثل حدود الائتمان، فحص الأرصدة، واعتمادات المشرفين.'
                    : 'Maps real enterprise validation policies (credit checks, stock thresholds, supervisor approvals).'}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-slate-200 block mb-1">
                  {isAr ? 'التنفيذ البرمجي (Technical Implementation):' : 'Technical Implementation:'}
                </strong>
                <span className="text-slate-400">
                  {isAr
                    ? 'نماذج بايثون ORM، واجهات XML Form & Kanban، الحقول المحسوبة والدوال المقيّدة (@api.constrains).'
                    : 'Python ORM models (models.Model), XML Form & Kanban views, computed fields, and constraint decorators.'}
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Right Summary Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <GlassCard
              tiltIntensity={6}
              elevation={14}
              glowColor="rgba(16, 185, 129, 0.18)"
              className="p-6 space-y-4"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.odoo.whyOdooTitle}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.odoo.whyOdooDesc}
              </p>
              <div className="pt-2 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-2">
                  {t.odoo.learningMethodologyTitle}
                </span>
                <ul className="text-xs text-slate-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>{isAr ? 'دراسة موديولات مجتمع Odoo القياسية' : 'Studying standard Odoo community modules'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>{isAr ? 'تطوير وتخصيص الموديولات من الصفر' : 'Authoring custom modules from scratch'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>{isAr ? 'تصميم مخططات PostgreSQL العلائقية' : 'Designing PostgreSQL relational schemas'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>{isAr ? 'بناء منطق بايثون لأتمتة سير العمل' : 'Building automated Python business logic'}</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Interactive Odoo Enterprise Business Process Simulator */}
        <div className="mt-12">
          <OdooWorkflowSimulator lang={lang} />
        </div>
      </div>
    </section>
  );
};
