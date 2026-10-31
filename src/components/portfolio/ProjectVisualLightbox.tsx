/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  X,
  Github,
  CheckCircle,
  Layers,
  ArrowUpRight,
  Database,
  BarChart3,
  Boxes,
  Workflow,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { PortfolioProject } from '../../data/yousefData';
import { Language } from '../../data/translations';
import { soundManager } from '../../utils/soundEffects';

interface ProjectVisualLightboxProps {
  project: PortfolioProject | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectVisualLightbox: React.FC<ProjectVisualLightboxProps> = ({
  project,
  onClose,
  lang,
}) => {
  if (!project) return null;
  const isAr = lang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0d0e16] border border-blue-500/30 shadow-2xl p-6 sm:p-8 text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            soundManager.playTechBlip(500);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
          title={isAr ? 'إغلاق' : 'Close'}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {project.subtitle} • {project.date}
          </p>
        </div>

        {/* Visual Mockup Window */}
        <div className="rounded-2xl bg-[#090a10] border border-white/[0.1] overflow-hidden mb-6 shadow-xl">
          {/* Window Header */}
          <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-[11px] font-mono text-slate-400">
                {project.id}.view.screen_preview
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase text-blue-400">
              {isAr ? 'معاينة شاشة النظام' : 'Interactive System Mockup'}
            </span>
          </div>

          {/* Visual Mockup Content based on project type */}
          <div className="p-6 bg-gradient-to-b from-[#0e0f17] to-[#090a10]">
            {project.id === 'odoo-sales-inventory' ? (
              // Odoo Form & Kanban Mockup
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-white">SO-2026-089</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Confirmed & Reserved
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-blue-600/30 text-blue-300 font-medium border border-blue-500/40">
                      Check Stock (Auto-Trigger)
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-slate-400">
                      Create Invoice
                    </span>
                  </div>
                </div>

                {/* Simulated Order Lines */}
                <div className="rounded-xl border border-white/[0.06] overflow-hidden text-xs">
                  <div className="grid grid-cols-4 p-2.5 bg-white/[0.04] font-medium text-slate-400">
                    <span>Product Description</span>
                    <span className="text-center">Ordered Qty</span>
                    <span className="text-center">Stock Reserved</span>
                    <span className="text-right">Unit Price</span>
                  </div>
                  {[
                    { name: 'Enterprise Server Node X1', qty: '4 Units', res: '4 Reserved (Delta WH)', price: '24,500 EGP' },
                    { name: 'Odoo Custom Module License', qty: '1 Site', res: 'Immediate Provision', price: '18,000 EGP' },
                    { name: 'PostgreSQL Failover Setup', qty: '1 Cluster', res: 'Configured', price: '12,500 EGP' },
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-4 p-2.5 border-t border-white/[0.04] text-slate-300">
                      <span className="font-medium text-white">{row.name}</span>
                      <span className="text-center font-mono">{row.qty}</span>
                      <span className="text-center text-emerald-400 font-mono flex items-center justify-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>{row.res}</span>
                      </span>
                      <span className="text-right font-mono text-slate-200">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : project.id === 'erp-database-schema' ? (
              // Relational Schema Diagram Mockup
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-blue-500/30">
                  <div className="font-bold text-blue-400 border-b border-white/[0.08] pb-1.5 mb-2 flex items-center justify-between">
                    <span>res_partner</span>
                    <span className="text-[10px] text-slate-500">Table</span>
                  </div>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <div>🔑 id (PK, int)</div>
                    <div>name (varchar)</div>
                    <div>is_company (bool)</div>
                    <div>commercial_reg (varchar)</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-cyan-500/30">
                  <div className="font-bold text-cyan-400 border-b border-white/[0.08] pb-1.5 mb-2 flex items-center justify-between">
                    <span>sale_order</span>
                    <span className="text-[10px] text-slate-500">Table</span>
                  </div>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <div>🔑 id (PK, int)</div>
                    <div>🔗 partner_id (FK → res_partner)</div>
                    <div>order_date (timestamp)</div>
                    <div>amount_total (numeric)</div>
                    <div>state ('draft'|'confirmed')</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/30">
                  <div className="font-bold text-emerald-400 border-b border-white/[0.08] pb-1.5 mb-2 flex items-center justify-between">
                    <span>stock_quant</span>
                    <span className="text-[10px] text-slate-500">Table</span>
                  </div>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <div>🔑 id (PK, int)</div>
                    <div>🔗 product_id (FK)</div>
                    <div>🔗 location_id (FK)</div>
                    <div>quantity (float)</div>
                    <div>reserved_quantity (float)</div>
                  </div>
                </div>
              </div>
            ) : (
              // Process / Dashboard Mockup
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Throughput Rate</span>
                    <span className="text-xl font-bold text-white font-mono">99.4%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Processing Time</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">-65%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Architecture</span>
                    <span className="text-xl font-bold text-blue-400 font-mono">Modular</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300">
                  <span className="font-medium text-slate-200 block mb-1">
                    {isAr ? 'مخطط سير العمل وسجل العمليات:' : 'Workflow State Machine & Audit Pipeline:'}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 overflow-x-auto py-1">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">Draft Req</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Manager Sign-off</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">PO Dispatched</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Business Highlights & Impact Grid */}
        {project.mockupHighlights && project.mockupHighlights.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {project.mockupHighlights.map((hl, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-left"
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-400 font-mono mb-1">
                  {hl.metric}
                </div>
                <div className="text-xs text-slate-400 leading-snug">
                  {hl.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Architecture & Problem Solved */}
        <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-300">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <span className="font-semibold text-white block mb-1">
              {isAr ? 'المشكلة المؤسسية وكيف تم حلها:' : 'Business Problem & Automated Solution:'}
            </span>
            <p className="text-slate-400 leading-relaxed">{project.problemSolved}</p>
          </div>

          {project.architectureSummary && (
            <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20">
              <span className="font-semibold text-blue-300 block mb-1">
                {isAr ? 'الهندسة التقنية والمعمارية:' : 'Technical Architecture & Models:'}
              </span>
              <p className="text-slate-300 leading-relaxed">{project.architectureSummary}</p>
            </div>
          )}
        </div>

        {/* Technologies Badges & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] text-slate-300 border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => soundManager.playGlassTap()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>{isAr ? 'فتح الكود على GitHub' : 'View Code on GitHub'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
