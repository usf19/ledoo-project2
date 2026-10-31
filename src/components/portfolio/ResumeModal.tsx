/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { YOUSEF_PROFILE } from '../../data/yousefData';
import { Language } from '../../data/translations';
import { soundManager } from '../../utils/soundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const handlePrint = () => {
    soundManager.playTechBlip(900);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0e0f17] border border-blue-500/30 shadow-2xl p-6 sm:p-10 text-left">
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              {isAr ? 'السيرة الذاتية المهنية — يوسف وليد' : 'Professional CV — Yousef Waleed'}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isAr ? 'طباعة / حفظ PDF' : 'Print / Save PDF'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundManager.playTechBlip(500);
                onClose();
              }}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div className="space-y-6 text-slate-200" id="printable-cv">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {isAr ? 'يوسف وليد' : 'Yousef Waleed'}
              </h1>
              <p className="text-sm text-blue-400 font-medium mt-1">
                {isAr
                  ? 'طالب نظم معلومات الأعمال (BIS) | مطور Odoo ERP طموح'
                  : 'Business Information Systems Student | Aspiring Odoo ERP Developer'}
              </p>
            </div>

            <div className="text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{isAr ? 'أشمون، المنوفية، مصر' : 'Ashmoun, Al Minufiyah, Egypt'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>yousefwaleedelmasry@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-400 text-xs">WA/Tel:</span>
                <a
                  href="https://wa.me/201098056474"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline font-mono"
                >
                  01098056474 (+20)
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider mb-2">
              {isAr ? 'الملخص المهني' : 'Professional Summary'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#13141f] p-4 rounded-2xl border border-white/[0.06]">
              {isAr
                ? 'طالب نظم معلومات الأعمال (BIS) شغوف بالتكنولوجيا وتطوير البرمجيات وأتمتة العمليات الإدارية. أجمع بين فهمي العميق لدورات العمل المؤسسية والمهارات البرمجية لبناء حلول عملية تسهم في تطوير سير العمل وحل مشكلات الواقع. أركز حالياً على تعميق معرفتي بنظام Odoo ERP وبناء موديولات متكاملة بلغة بايثون وقواعد بيانات بوستجرس.'
                : "Business Information Systems (BIS) student passionate about enterprise technology, software development, and business automation. Combines deep understanding of corporate workflows with robust Python OOP and relational database engineering to build practical automated solutions."}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider mb-3">
              {isAr ? 'التعليم الأكاديمي' : 'Education'}
            </h4>
            <div className="p-4 rounded-2xl bg-[#13141f] border border-white/[0.06] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <strong className="text-white">
                  {isAr
                    ? 'المعهد العالي للحاسبات وتكنولوجيا المعلومات وإدارة الأعمال – طنطا'
                    : 'Higher Institute for Computers, Information and Management Technology – Tanta'}
                </strong>
                <span className="text-blue-400 font-mono text-xs">
                  {isAr ? 'طالب جامعي' : 'Undergraduate Student'}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {isAr
                  ? 'بكالوريوس نظم معلومات الأعمال (Business Information Systems - BIS)'
                  : 'Bachelor of Business Information Systems (BIS)'}
              </p>
            </div>
          </div>

          {/* Technical Skills Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider mb-3">
              {isAr ? 'المهارات التقنية والأنظمة' : 'Technical Competencies'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white block mb-2">
                  {isAr ? 'البرمجة والتطوير' : 'Programming'}
                </strong>
                <span className="text-slate-400 leading-relaxed block">
                  Python, Python OOP, JavaScript, HTML5, CSS3
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white block mb-2">
                  {isAr ? 'قواعد البيانات' : 'Databases'}
                </strong>
                <span className="text-slate-400 leading-relaxed block">
                  PostgreSQL, MySQL, Relational SQL, 3NF Normalization
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white block mb-2">
                  {isAr ? 'أنظمة ERP والأعمال' : 'ERP & Systems'}
                </strong>
                <span className="text-slate-400 leading-relaxed block">
                  Odoo ERP Community, CRM, Sales, Inventory, Workflow Automation
                </span>
              </div>
            </div>
          </div>

          {/* Key Practical Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider mb-3">
              {isAr ? 'المشاريع العملية المميزة' : 'Selected Practical Projects'}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#13141f] border border-white/[0.06]">
                <strong className="text-white block mb-1">
                  {isAr
                    ? 'موديول أتمتة مبيعات ومخازن مخصص في Odoo (Odoo Sales & Inventory Automation)'
                    : 'Odoo Sales & Inventory Custom Automation Module'}
                </strong>
                <p className="text-slate-400">
                  {isAr
                    ? 'موديول مخصص مكتوب بلغة بايثون يربط بين أوامر البيع وحجز المخزون الفوري مع إرسال إشعارات التوريد تلقائياً.'
                    : 'Custom Python Odoo module automating real-time warehouse stock reservation and automated picking creation.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#13141f] border border-white/[0.06]">
                <strong className="text-white block mb-1">
                  {isAr
                    ? 'محاكي دورات المعاملات المؤسسية بلغة بايثون OOP'
                    : 'Business Workflow & Transaction Simulator (Python OOP)'}
                </strong>
                <p className="text-slate-400">
                  {isAr
                    ? 'تطبيق أنماط التصميم البرمجية (Factory, Observer, State) لنمذجة حركة العمليات التجارية والمالية.'
                    : 'Engineered Python OOP design patterns modeling multi-department commercial transactions.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Close Button */}
        <div className="mt-6 pt-5 border-t border-white/[0.08] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-xs font-medium text-white transition-colors cursor-pointer"
          >
            {isAr ? 'إغلاق النافذة' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
