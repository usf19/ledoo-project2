/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../../data/translations';
import { soundManager } from '../../utils/soundEffects';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const phoneNumber = '201098056474';

  const defaultMessage = isAr
    ? encodeURIComponent('السلام عليكم أخي يوسف، اطلعت على موقعك الشخصي وحابب نتواصل بخصوص فرصة عمل / استشارة في Odoo ERP.')
    : encodeURIComponent('Hello Yousef, I viewed your portfolio and would like to connect regarding an Odoo ERP / BIS opportunity.');

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label={isAr ? 'زر التواصل عبر واتساب' : 'WhatsApp Contact Button'}
      className={`fixed bottom-20 ${isAr ? 'left-6' : 'right-6'} z-40 group`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() => soundManager.playGlassTap()}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 border border-emerald-400/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        title={isAr ? 'تواصل عبر واتساب: 01098056474' : 'Chat on WhatsApp: 01098056474'}
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping opacity-75" />
        </div>
        <span className="text-xs font-bold tracking-wide hidden xs:inline sm:inline">
          {isAr ? 'واتساب مباشر' : 'WhatsApp'}
        </span>
      </a>
    </aside>
  );
};
