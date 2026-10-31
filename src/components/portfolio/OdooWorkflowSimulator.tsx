/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Users,
  FileCheck2,
  PackageCheck,
  Receipt,
  Play,
  RotateCcw,
  CheckCircle2,
  Building2,
  Clock,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { GlassCard } from './GlassCard';
import { soundManager } from '../../utils/soundEffects';

interface OdooWorkflowSimulatorProps {
  lang: Language;
}

interface WorkflowStep {
  id: number;
  key: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  docCode: string;
  statusBadgeEn: string;
  statusBadgeAr: string;
  kpiLabelEn: string;
  kpiLabelAr: string;
  kpiValue: string;
  summaryEn: string;
  summaryAr: string;
  detailsEn: { label: string; value: string }[];
  detailsAr: { label: string; value: string }[];
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    key: 'lead',
    nameEn: '1. CRM Lead & Customer Qualification',
    nameAr: '1. استقطاب وتأهيل العميل المحتمل (CRM)',
    roleEn: 'Capturing business inquiry, assessing potential value, and logging company records.',
    roleAr: 'تسجيل استفسار الشركة، تقييم القيمة المتوقعة، وربط جهات الاتصال التجارية.',
    docCode: 'CRM/LEAD/2026/041',
    statusBadgeEn: 'Qualified Opportunity',
    statusBadgeAr: 'فرصة مؤهلة تجارياً',
    kpiLabelEn: 'Estimated Pipeline Value',
    kpiLabelAr: 'القيمة المتوقعة للصفقة',
    kpiValue: '125,000 EGP',
    summaryEn: 'Client inquiry validated by sales rep. Expected closing probability is 85%.',
    summaryAr: 'تم مراجعة استفسار العميل والتأكد من ملاءمة المتطلبات بنسبة إغلاق متوقعة 85%.',
    detailsEn: [
      { label: 'Partner', value: 'Al-Nour Enterprise Solutions Ltd.' },
      { label: 'Salesperson', value: 'Yousef Waleed (Account Executive)' },
      { label: 'Probability', value: '85% Won Confidence' },
      { label: 'Location', value: 'Cairo / Al Minufiyah Region' },
    ],
    detailsAr: [
      { label: 'اسم العميل', value: 'شركة النور للحلول المتكاملة' },
      { label: 'مسؤول المبيعات', value: 'يوسف وليد (مهندس نظم Odoo)' },
      { label: 'نسبة النجاح', value: '85% احتمالية إغلاق' },
      { label: 'المنطقة', value: 'القاهرة / الدلتا' },
    ],
  },
  {
    id: 2,
    key: 'quotation',
    nameEn: '2. Quotation Drafting & Commercial Approval',
    nameAr: '2. إعداد عرض السعر والموافقة المالية (Quotation)',
    roleEn: 'Applying automated price lists, volume tier discounts, and calculating taxes.',
    roleAr: 'تطبيق قوائم الأسعار المبرمجة، خصومات الكمية، واحتساب ضرائب القيمة المضافة.',
    docCode: 'SO/QUOT/2026/089',
    statusBadgeEn: 'Quotation Sent',
    statusBadgeAr: 'عرض سعر مرسل للعميل',
    kpiLabelEn: 'Net Quotation Total',
    kpiLabelAr: 'إجمالي عرض السعر الصافي',
    kpiValue: '118,500 EGP',
    summaryEn: 'Commercial quotation sent via automated email with official validity period.',
    summaryAr: 'تم إرسال عرض السعر المعتمد إلكترونياً مع شروط الدفع والخصم التجاري المعتمد.',
    detailsEn: [
      { label: 'Pricelist', value: 'Tier-A Commercial Retail (EGP)' },
      { label: 'Line Items', value: '4 Enterprise Hardware / Software Lines' },
      { label: 'Payment Terms', value: '30 Days Net on Confirmation' },
      { label: 'Discount', value: '5.2% Corporate Margin Discount' },
    ],
    detailsAr: [
      { label: 'قائمة الأسعار', value: 'قائمة الشركات الفئة أ (بالجنيه)' },
      { label: 'بنود العرض', value: '4 بنود برمجية وتجهيزات مكتبية' },
      { label: 'شروط السداد', value: 'سداد خلال 30 يوم من التأكيد' },
      { label: 'الخصم المطبق', value: '5.2% خصم تجاري معتمد' },
    ],
  },
  {
    id: 3,
    key: 'order',
    nameEn: '3. Sales Order Confirmation & Stock Allocation',
    nameAr: '3. اعتماد أمر البيع وحجز المخزون (Sales Order)',
    roleEn: 'Transitioning to confirmed order. Automatic real-time inventory reservation in database.',
    roleAr: 'تحويل العرض لأمر بيع نافذ مع حجز فوري للأصناف داخل قاعدة بيانات المخازن.',
    docCode: 'SO/2026/089 [CONFIRMED]',
    statusBadgeEn: 'Order Confirmed',
    statusBadgeAr: 'أمر بيع مؤكد ونافذ',
    kpiLabelEn: 'Stock Reserved Status',
    kpiLabelAr: 'حالة حجز البضاعة في المستودع',
    kpiValue: '100% Reserved',
    summaryEn: 'Automated Python logic checks on-hand stock and places reserve holds instantly.',
    summaryAr: 'تم فحص الرصيد الفعلي في مستودع الدلتا وحجز الكميات المطلوبة لمنع الازدواجية.',
    detailsEn: [
      { label: 'Warehouse', value: 'Delta Central Logistics Center' },
      { label: 'Stock Verification', value: 'All 4 SKUs In-Stock (Zero Shortage)' },
      { label: 'Auto Trigger', value: 'Created Delivery Order #WH/OUT/00142' },
      { label: 'Timestamp', value: 'Real-time atomic transaction committed' },
    ],
    detailsAr: [
      { label: 'المستودع الرئيسي', value: 'مركز لوجستيات الدلتا الرئيسي' },
      { label: 'فحص الأرصدة', value: 'جميع الأصناف متوفرة (بدون نواقص)' },
      { label: 'التوليد الآلي', value: 'تم إنشاء إذن الصرف WH/OUT/00142' },
      { label: 'حالة العملية', value: 'معاملة برمجية مكتملة ومحفوظة بنجاح' },
    ],
  },
  {
    id: 4,
    key: 'delivery',
    nameEn: '4. Warehouse Picking, Packing & Delivery',
    nameAr: '4. تجهيز الشحنة وإذن صرف المستودع (Delivery Order)',
    roleEn: 'Warehouse staff validates physical items. Real-time deduction from inventory on-hand balance.',
    roleAr: 'تأكيد فرز وتغليف المنتجات وخروجها، مع خصم الأرصدة فوراً من جدول المستودع.',
    docCode: 'WH/OUT/2026/00142',
    statusBadgeEn: 'Delivered & Validated',
    statusBadgeAr: 'تم الصرف والتسليم بنجاح',
    kpiLabelEn: 'Inventory Deduction',
    kpiLabelAr: 'حالة التحديث المخزني',
    kpiValue: 'Completed / Balanced',
    summaryEn: 'Delivery slip validated. Stock movements booked in PostgreSQL stock valuation tables.',
    summaryAr: 'تم اعتماد إذن الصرف وتحديث رصيد الجرد الفعلي وقيد حركات الأصناف المخزنية.',
    detailsEn: [
      { label: 'Carrier', value: 'Direct Enterprise Transport Fleet' },
      { label: 'Tracking Ref', value: 'WAYBILL-EGP-984021' },
      { label: 'Stock Move', value: 'Physical Locations/Stock → Partner Locations/Customers' },
      { label: 'Delivery State', value: 'Received & Signed by Client Representative' },
    ],
    detailsAr: [
      { label: 'أسطول الشحن', value: 'شحن مباشر إلى مقر العميل' },
      { label: 'رقم البوليصة', value: 'WAYBILL-EGP-984021' },
      { label: 'حركة المخزون', value: 'من المستودع الفعلي إلى موقع العميل' },
      { label: 'استلام العميل', value: 'تم التوقيع والاستلام في الموعد' },
    ],
  },
  {
    id: 5,
    key: 'invoice',
    nameEn: '5. Customer Invoice & Accounting Reconciliation',
    nameAr: '5. الفاتورة الإلكترونية والترحيل المحاسبي (Invoicing)',
    roleEn: 'Generating certified invoice, posting double-entry journal items, and recording settlement.',
    roleAr: 'إصدار الفاتورة الضريبية، توليد قيود اليومية المزدوجة، وتسوية المدفوعات البنكية.',
    docCode: 'INV/2026/00021 [POSTED]',
    statusBadgeEn: 'Paid & Reconciled',
    statusBadgeAr: 'مسددة ومرحلة دفترياً',
    kpiLabelEn: 'Ledger Settlement',
    kpiLabelAr: 'حالة الإقفال المحاسبي',
    kpiValue: 'Balanced & Paid',
    summaryEn: 'Automatic journal entries posted to Accounts Receivable & Sales Revenue.',
    summaryAr: 'تم ترحيل قيود الحسابات المدينة والإيرادات تلقائياً مع مطابقة التحويل البنكي.',
    detailsEn: [
      { label: 'Journal', value: 'Customer Invoices (INV-JRN-2026)' },
      { label: 'Debit Account', value: '11000 Accounts Receivable: 118,500 EGP' },
      { label: 'Credit Account', value: '40000 Product Sales: 118,500 EGP' },
      { label: 'Payment Method', value: 'Electronic Bank Transfer (Settled)' },
    ],
    detailsAr: [
      { label: 'دفتر اليومية', value: 'دفتر فواتير المبيعات التجارية' },
      { label: 'الطرف المدين', value: 'حساب العملاء والذمم المدينة: 118,500 ج.م' },
      { label: 'الطرف الدائن', value: 'حساب إيرادات المبيعات: 118,500 ج.م' },
      { label: 'طريقة السداد', value: 'تحويل بنكي إلكتروني معتمد' },
    ],
  },
];

export const OdooWorkflowSimulator: React.FC<OdooWorkflowSimulatorProps> = ({ lang }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const isAr = lang === 'ar';
  const t = TRANSLATIONS[lang];

  const currentStep = WORKFLOW_STEPS[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / WORKFLOW_STEPS.length) * 100);

  // Auto-play interval
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < WORKFLOW_STEPS.length - 1) {
          soundManager.playStepChime(prev + 1);
          return prev + 1;
        } else {
          soundManager.playTechBlip(900);
          return 0;
        }
      });
    }, 3200);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleNextStep = () => {
    soundManager.playStepChime((currentStepIndex % 5) + 1);
    setCurrentStepIndex((prev) => (prev < WORKFLOW_STEPS.length - 1 ? prev + 1 : 0));
  };

  const handleReset = () => {
    soundManager.playTechBlip(600);
    setAutoPlay(false);
    setCurrentStepIndex(0);
  };

  const handleStepClick = (idx: number) => {
    soundManager.playStepChime(idx + 1);
    setCurrentStepIndex(idx);
  };

  return (
    <GlassCard
      tiltIntensity={5}
      elevation={14}
      glowColor="rgba(59, 130, 246, 0.18)"
      className="p-6 sm:p-8 space-y-6 text-left"
    >
      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>{isAr ? 'محاكي دورة الأعمال المرئي' : 'Interactive ERP Workflow Simulator'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isAr
              ? 'سريان دورة البيع والمخازن المتكاملة (Odoo Process)'
              : 'End-to-End Enterprise Sales & Logistics Pipeline'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {isAr
              ? 'تتبع عملي لكيفية تحول استفسار العميل إلى فاتورة مسددة مع حجز المخزون آلياً'
              : 'Interactive walkthrough demonstrating how customer demand triggers automated stock reservation and accounting reconciliation.'}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            type="button"
            onClick={() => {
              soundManager.playTechBlip(750);
              setAutoPlay(!autoPlay);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              autoPlay
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/40'
                : 'bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 border border-white/[0.08]'
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${autoPlay ? 'animate-spin' : ''}`} />
            <span>{autoPlay ? (isAr ? 'إيقاف التشغيل' : 'Pause Demo') : (isAr ? 'تشغيل تلقائي' : 'Auto-Play')}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            title={isAr ? 'إعادة البدء' : 'Reset Simulator'}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual Stepper & Progress Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-medium text-slate-300">
            {isAr ? 'مستوى تقدم المعاملة:' : 'Transaction Progress:'} {progressPercent}%
          </span>
          <span className="font-mono text-blue-400">
            {isAr ? `المرحلة ${currentStepIndex + 1} من 5` : `Phase ${currentStepIndex + 1} of 5`}
          </span>
        </div>

        {/* Progress bar line */}
        <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Clickable Step Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => handleStepClick(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10 ring-1 ring-blue-500/40'
                    : isCompleted
                    ? 'bg-white/[0.03] border-emerald-500/30 text-slate-300 hover:bg-white/[0.06]'
                    : 'bg-white/[0.02] border-white/[0.06] text-slate-500 hover:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold">
                    0{idx + 1}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : isActive ? (
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  ) : null}
                </div>
                <div className="text-[11px] font-semibold truncate">
                  {isAr ? step.nameAr.split('.')[1] || step.nameAr : step.nameEn.split('.')[1] || step.nameEn}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Business Card & Live Document Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        {/* Document Status & Overview */}
        <div className="lg:col-span-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] p-5 sm:p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30">
                {currentStep.docCode}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {isAr ? currentStep.statusBadgeAr : currentStep.statusBadgeEn}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white">
              {isAr ? currentStep.nameAr : currentStep.nameEn}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr ? currentStep.roleAr : currentStep.roleEn}
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300">
              <span className="font-semibold text-blue-400 block mb-1">
                {isAr ? 'الأثر التشغيلي في النظام:' : 'System Operational Impact:'}
              </span>
              <span>{isAr ? currentStep.summaryAr : currentStep.summaryEn}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <div className="text-xs text-slate-400">
              <span className="block text-[10px] uppercase font-mono text-slate-500">
                {isAr ? currentStep.kpiLabelAr : currentStep.kpiLabelEn}
              </span>
              <span className="text-base font-bold text-white font-mono">
                {currentStep.kpiValue}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextStep}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/30 active:scale-95 cursor-pointer"
            >
              <span>{isAr ? 'الخطوة التالية ←' : 'Next Step →'}</span>
            </button>
          </div>
        </div>

        {/* Live Document Fields / Data Model representation */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0e0f17] border border-white/[0.08] p-5 sm:p-6 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
              <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>{isAr ? 'بيانات المستند بالسيستم' : 'ERP Document Snapshot'}</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                Odoo 17/18 Ready
              </span>
            </div>

            <div className="space-y-3">
              {(isAr ? currentStep.detailsAr : currentStep.detailsEn).map((d, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs py-1.5 border-b border-white/[0.04] last:border-none"
                >
                  <span className="text-slate-400 font-medium">{d.label}</span>
                  <span className="font-mono text-slate-200 text-right">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 text-[11px] text-blue-300 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span>
              {isAr
                ? 'العملية مؤتمتة ومطابقة لأفضل ممارسات إدارة دورات الأعمال (BPM)'
                : 'Fully integrated transaction adhering to ERP best practices.'}
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
