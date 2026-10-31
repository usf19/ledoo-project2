/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';

export interface PanelCanvasOptions {
  width: number;
  height: number;
  scaleS: number;
  isOpenStudioHovered?: boolean;
  isReadPaperHovered?: boolean;
  isPortrait?: boolean;
  lang?: 'en' | 'ar';
}

export interface NavCanvasOptions {
  width: number;
  height: number;
  scaleS: number;
  hoveredLink?: string | null;
  lang?: 'en' | 'ar';
}

/**
 * Draws the high-DPR panel image canvas containing all printed typography, pills, and links.
 * Fully supports English and Arabic.
 */
export function createPanelCanvas(
  options: PanelCanvasOptions,
  existingCanvas?: HTMLCanvasElement
): HTMLCanvasElement {
  const {
    width,
    height,
    scaleS,
    isOpenStudioHovered = false,
    isReadPaperHovered = false,
    isPortrait = false,
    lang = 'en',
  } = options;

  const canvas = existingCanvas || document.createElement('canvas');
  // High DPR for razor-sharp typography without blur
  const dpr = Math.max(window.devicePixelRatio || 1, 2.5);

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);

  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  ctx.save();
  ctx.scale(dpr, dpr);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.clearRect(0, 0, width, height);

  const isAr = lang === 'ar';
  const S = scaleS;
  const fontFamily = isAr ? '"Cairo", "Tajawal", "Inter", sans-serif' : '"Inter", sans-serif';

  const leftMargin = isPortrait ? width * 0.08 : width * 0.062;
  const rightMargin = width - leftMargin;

  // 1. Eyebrow
  const eyebrowY = height * 0.135;
  const eyebrowSize = Math.max(10, Math.round(11 * S));
  ctx.font = `600 ${eyebrowSize}px ${fontFamily}`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
  ctx.textBaseline = 'top';

  if (isAr) {
    ctx.textAlign = 'right';
    ctx.fillText('طالب نظم معلومات الأعمال • مطور ODOO ERP', rightMargin, eyebrowY);
  } else {
    ctx.textAlign = 'left';
    ctx.letterSpacing = `${eyebrowSize * 0.18}px`;
    ctx.fillText('BUSINESS INFORMATION SYSTEMS • ODOO ERP', leftMargin, eyebrowY);
    ctx.letterSpacing = '0px';
  }

  // 2. Headline
  const headlineSize = Math.max(
    22,
    Math.round(Math.min(width * (isPortrait ? 0.088 : 0.068), height * 0.16))
  );
  const headlineLeading = headlineSize * (isAr ? 1.25 : 1.05);
  const headlineStartY = eyebrowY + eyebrowSize + (isPortrait ? 14 : 22 * S);

  ctx.font = `700 ${headlineSize}px ${fontFamily}`;
  if (!isAr) {
    ctx.letterSpacing = `${-0.03 * headlineSize}px`;
  }

  // Gradient: #ffffff -> #93c5fd
  const grad = ctx.createLinearGradient(
    0,
    headlineStartY,
    0,
    headlineStartY + headlineLeading * 2
  );
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(1, '#93c5fd');
  ctx.fillStyle = grad;

  if (isAr) {
    ctx.textAlign = 'right';
    ctx.fillText('تحويل منطق الأعمال', rightMargin, headlineStartY);
    ctx.fillText('إلى حلول برمجية مؤتمتة.', rightMargin, headlineStartY + headlineLeading);
  } else {
    ctx.textAlign = 'left';
    ctx.fillText('Turning Business', leftMargin, headlineStartY);
    ctx.fillText('Logic into Code.', leftMargin, headlineStartY + headlineLeading);
    ctx.letterSpacing = '0px';
  }

  // 3. Subtitle
  const subSize = Math.max(11, Math.round(Math.min(14 * S, width * 0.034)));
  const subLeading = subSize * (isAr ? 1.55 : 1.45);
  const subStartY = headlineStartY + headlineLeading * 2 + (isPortrait ? 14 : 20 * S);

  ctx.font = `400 ${subSize}px ${fontFamily}`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.76)';

  if (isAr) {
    ctx.textAlign = 'right';
    if (isPortrait || width < 600) {
      ctx.fillText('تصميم نماذج بايثون وقواعد بيانات بوستجرس.', rightMargin, subStartY);
      ctx.fillText('أتمتة دورات الأعمال ومسارات Odoo المتكاملة.', rightMargin, subStartY + subLeading);
    } else {
      ctx.fillText(
        'بناء نماذج بايثون المؤسسية، مخططات PostgreSQL، ومسارات Odoo المؤتمتة.',
        rightMargin,
        subStartY
      );
      ctx.fillText('حلول عملية، ودورات عمل واقعية تحل مشكلات الشركات.', rightMargin, subStartY + subLeading);
    }
  } else {
    ctx.textAlign = 'left';
    if (isPortrait || width < 600) {
      ctx.fillText('Python OOP models & PostgreSQL schemas.', leftMargin, subStartY);
      ctx.fillText('Automating Odoo workflows & business logic.', leftMargin, subStartY + subLeading);
    } else {
      ctx.fillText(
        'Author Python business models, PostgreSQL schemas, and automated Odoo workflows.',
        leftMargin,
        subStartY
      );
      ctx.fillText('Practical solutions, real enterprise logic.', leftMargin, subStartY + subLeading);
    }
  }

  // 4. Buttons: "Explore My Work" pill + link
  const buttonStartY = subStartY + subLeading + (isPortrait ? 18 : 26 * S);
  const pillW = isAr ? Math.max(130, Math.min(170, 150 * S)) : Math.max(110, Math.min(150, 134 * S));
  const pillH = Math.max(34, Math.min(46, 40 * S));
  const pillRadius = Math.max(6, 6 * S);

  const pillX = isAr ? rightMargin - pillW : leftMargin;

  // Draw pill
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(pillX, buttonStartY, pillW, pillH, pillRadius);
  } else {
    ctx.rect(pillX, buttonStartY, pillW, pillH);
  }
  ctx.fillStyle = isOpenStudioHovered ? '#3b82f6' : 'rgba(255, 255, 255, 0.95)';
  ctx.fill();

  // Pill text
  const pillFontSize = Math.max(11, Math.round(12 * S));
  ctx.font = `600 ${pillFontSize}px ${fontFamily}`;
  ctx.fillStyle = isOpenStudioHovered ? '#ffffff' : '#050507';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(
    isAr ? 'استكشف أعمالي' : 'Explore My Work',
    pillX + pillW / 2,
    buttonStartY + pillH / 2 + 1
  );

  // Secondary Link
  const linkFontSize = Math.max(11, Math.round(13 * S));
  ctx.font = `500 ${linkFontSize}px ${fontFamily}`;
  ctx.fillStyle = isReadPaperHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.88)';
  const linkText = isAr ? '← نبذة عني والمعرض' : 'Portfolio & About →';

  if (isAr) {
    const linkX = pillX - (isPortrait ? 16 : 24 * S);
    ctx.textAlign = 'right';
    ctx.fillText(linkText, linkX, buttonStartY + pillH / 2);
    if (isReadPaperHovered) {
      const textMetrics = ctx.measureText(linkText);
      ctx.beginPath();
      ctx.moveTo(linkX - textMetrics.width, buttonStartY + pillH / 2 + linkFontSize * 0.6);
      ctx.lineTo(linkX, buttonStartY + pillH / 2 + linkFontSize * 0.6);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  } else {
    const linkX = pillX + pillW + (isPortrait ? 16 : 24 * S);
    ctx.textAlign = 'left';
    ctx.fillText(linkText, linkX, buttonStartY + pillH / 2);
    if (isReadPaperHovered) {
      const textMetrics = ctx.measureText(linkText);
      ctx.beginPath();
      ctx.moveTo(linkX, buttonStartY + pillH / 2 + linkFontSize * 0.6);
      ctx.lineTo(linkX + textMetrics.width, buttonStartY + pillH / 2 + linkFontSize * 0.6);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  // 5. Footers
  const footerSize = Math.max(9.5, Math.round(11 * S));
  const footerY = height - (isPortrait ? 14 : 24 * S);
  ctx.font = `400 ${footerSize}px ${fontFamily}`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.42)';
  ctx.textBaseline = 'bottom';

  if (isAr) {
    ctx.textAlign = 'right';
    ctx.fillText('© يوسف وليد — أشمون، مصر', rightMargin, footerY);
    ctx.textAlign = 'left';
    if (!isPortrait && width >= 640) {
      ctx.fillText('yousefwaleedelmasry@gmail.com', leftMargin, footerY);
    }
  } else {
    ctx.textAlign = 'left';
    ctx.fillText('© Yousef Waleed — Egypt', leftMargin, footerY);
    ctx.textAlign = 'right';
    if (!isPortrait && width >= 640) {
      ctx.fillText('yousefwaleedelmasry@gmail.com', rightMargin, footerY);
    }
  }

  ctx.restore();
  return canvas;
}

/**
 * Draws the high-DPR nav slab canvas with language support.
 */
export function createNavCanvas(
  options: NavCanvasOptions,
  existingCanvas?: HTMLCanvasElement
): HTMLCanvasElement {
  const { width, height, scaleS, hoveredLink = null, lang = 'en' } = options;

  const canvas = existingCanvas || document.createElement('canvas');
  const dpr = Math.max(window.devicePixelRatio || 1, 2.5);

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);

  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  ctx.save();
  ctx.scale(dpr, dpr);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.clearRect(0, 0, width, height);

  const isAr = lang === 'ar';
  const S = scaleS;
  const fontFamily = isAr ? '"Cairo", "Tajawal", "Inter", sans-serif' : '"Inter", sans-serif';
  const centerY = height / 2;
  const leftX = width * 0.045;
  const rightX = width * 0.955;

  // Logo mark
  const markSize = Math.max(13, Math.round(16 * S));
  ctx.save();
  ctx.translate(leftX + markSize / 2, centerY);
  ctx.rotate(Math.PI / 4);
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(-markSize / 2, -markSize / 2, markSize, markSize);

  ctx.fillStyle = '#070709';
  const innerCut = markSize * 0.44;
  ctx.fillRect(-innerCut / 2, -innerCut / 2, innerCut, innerCut);
  ctx.restore();

  // Brand Name
  const brandX = leftX + markSize + Math.max(8, 12 * S);
  const brandSize = Math.max(12, Math.round(14.5 * S));
  ctx.font = `600 ${brandSize}px ${fontFamily}`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(
    isAr ? (width < 480 ? 'يوسف و.' : 'يوسف وليد') : width < 480 ? 'Yousef W.' : 'Yousef Waleed',
    brandX,
    centerY
  );

  // Center navigation links
  if (width >= 640) {
    const linksSize = Math.max(11, Math.round(12.5 * S));
    ctx.font = `400 ${linksSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const centerX = width / 2;
    const aboutColor = hoveredLink === 'about' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)';
    const skillsColor = hoveredLink === 'skills' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)';
    const odooColor = hoveredLink === 'odoo' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)';
    const workColor = hoveredLink === 'projects' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)';

    const spacing = Math.min(22, 16 * S);
    if (isAr) {
      ctx.fillStyle = aboutColor;
      ctx.fillText('نبذة', centerX + spacing * 4.5, centerY);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText('·', centerX + spacing * 2.8, centerY);
      ctx.fillStyle = skillsColor;
      ctx.fillText('المهارات', centerX + spacing * 1.2, centerY);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText('·', centerX - spacing * 0.4, centerY);
      ctx.fillStyle = odooColor;
      ctx.fillText('Odoo ERP', centerX - spacing * 2.4, centerY);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText('·', centerX - spacing * 4.4, centerY);
      ctx.fillStyle = workColor;
      ctx.fillText('المشاريع', centerX - spacing * 6.0, centerY);
    } else {
      ctx.fillStyle = aboutColor;
      ctx.fillText('About', centerX - spacing * 4.5, centerY);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText('·', centerX - spacing * 2.8, centerY);
      ctx.fillStyle = skillsColor;
      ctx.fillText('Skills', centerX - spacing * 1.2, centerY);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText('·', centerX + spacing * 0.4, centerY);
      ctx.fillStyle = odooColor;
      ctx.fillText('Odoo ERP', centerX + spacing * 2.4, centerY);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText('·', centerX + spacing * 4.4, centerY);
      ctx.fillStyle = workColor;
      ctx.fillText('Projects', centerX + spacing * 6.0, centerY);
    }
  }

  // Right action
  const actionFontSize = Math.max(11, Math.round(13 * S));
  const signColor = hoveredLink === 'contact' ? '#60a5fa' : '#3b82f6';
  ctx.font = `600 ${actionFontSize}px ${fontFamily}`;
  ctx.textAlign = 'right';
  ctx.fillStyle = signColor;
  ctx.fillText(
    isAr
      ? width < 480
        ? 'المعرض ←'
        : 'تواصل معي'
      : width < 480
      ? 'Portfolio →'
      : 'Contact Me',
    rightX,
    centerY
  );

  ctx.restore();
  return canvas;
}
