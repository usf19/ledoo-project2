/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  // Navigation & Controls
  nav: {
    backTo3D: string;
    brandSubtitle: string;
    about: string;
    skills: string;
    odoo: string;
    projects: string;
    education: string;
    contact: string;
    getInTouch: string;
    langToggle: string;
    soundOn: string;
    soundOff: string;
    atmosphereHolo: string;
    atmosphereClean: string;
    resume: string;
  };
  // Hero Section
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    headline: string;
    description: string;
    exploreBtn: string;
    contactBtn: string;
    interactiveSlabHint: string;
    stats: {
      field: string;
      fieldVal: string;
      specialization: string;
      specializationVal: string;
      status: string;
      statusVal: string;
    };
  };
  // About Section
  about: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    corePillarsTitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    bisAdvantageTitle: string;
    bisAdvantageDesc: string;
    viewCvBtn: string;
  };
  // Skills Section
  skills: {
    tag: string;
    title: string;
    desc: string;
    tabProgramming: string;
    tabDatabases: string;
    tabErp: string;
    terminalTitle: string;
    terminalRunBtn: string;
    terminalCopied: string;
    terminalCopy: string;
  };
  // Odoo Journey Section
  odoo: {
    tag: string;
    title: string;
    desc: string;
    pipelineHeading: string;
    pipelineHint: string;
    inspectCodeBtn: string;
    interactiveSimulationTitle: string;
    interactiveSimulationDesc: string;
    nextStepBtn: string;
    resetSimBtn: string;
    simActiveStep: string;
    simLiveStatus: string;
    whyOdooTitle: string;
    whyOdooDesc: string;
    learningMethodologyTitle: string;
    step1Name: string;
    step1Role: string;
    step2Name: string;
    step2Role: string;
    step3Name: string;
    step3Role: string;
    step4Name: string;
    step4Role: string;
    step5Name: string;
    step5Role: string;
  };
  // Featured Projects Section
  projects: {
    tag: string;
    title: string;
    desc: string;
    filterAll: string;
    filterOdoo: string;
    filterSoftware: string;
    filterDatabase: string;
    viewRepo: string;
    viewDetails: string;
    businessProblem: string;
    statusCompleted: string;
    statusInProgress: string;
    statusPlanned: string;
    upcomingTitle: string;
    upcomingDesc: string;
    upcomingDate: string;
  };
  // Education Section
  education: {
    tag: string;
    title: string;
    degree: string;
    institution: string;
    status: string;
    highlightsTitle: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
  };
  // Contact Section
  contact: {
    tag: string;
    title: string;
    desc: string;
    directEmail: string;
    fastResponse: string;
    copy: string;
    copied: string;
    launchMail: string;
    locationTitle: string;
    locationValue: string;
    whatsappTitle: string;
    whatsappAction: string;
    formTitle: string;
    formDesc: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSubmitted: string;
  };
  // Footer
  footer: {
    rights: string;
    designedFor: string;
    location: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      backTo3D: '3D Glass',
      brandSubtitle: 'BIS • Aspiring Odoo Dev',
      about: 'About',
      skills: 'Skills',
      odoo: 'Odoo ERP',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
      langToggle: 'العربية',
      soundOn: 'Audio FX On',
      soundOff: 'Audio FX Muted',
      atmosphereHolo: 'Code Watermark',
      atmosphereClean: 'Clean Glass',
      resume: 'View CV',
    },
    hero: {
      eyebrow: 'BUSINESS INFORMATION SYSTEMS • ODOO ERP DEVELOPER',
      titleLine1: 'Turning Business Logic',
      titleLine2: 'into Automated Solutions.',
      headline: 'Turning Business Logic into Automated Solutions.',
      description:
        "I'm a Business Information Systems student passionate about technology, software development, and business automation. I combine my understanding of business processes with programming skills to build practical solutions that improve workflows and solve real-world problems.",
      exploreBtn: 'Explore My Work',
      contactBtn: 'Contact Me',
      interactiveSlabHint: 'Interactive 3D Smoked-Glass • Move cursor or drag to inspect refraction',
      stats: {
        field: 'Academic Field',
        fieldVal: 'Business Info Systems (BIS)',
        specialization: 'Core Focus',
        specializationVal: 'Odoo ERP & Python OOP',
        status: 'Availability',
        statusVal: 'Open to Internships & Roles',
      },
    },
    about: {
      tag: 'Profile & Background',
      title: 'Bridging Business Operations and Software Engineering',
      p1: "I'm a Business Information Systems (BIS) student at the Higher Institute for Computers, Information and Management Technology in Tanta, residing in Ashmoun, Al Minufiyah, Egypt.",
      p2: 'My core strength lies in seeing both sides of the enterprise equation: analyzing business workflows (CRM, Sales, Inventory, Accounting) and engineering the Python and PostgreSQL software models needed to automate them.',
      p3: "I'm actively deepening my expertise in Odoo ERP, exploring modular architectures, ORM operations, automated server actions, and relational data modeling.",
      corePillarsTitle: 'Three Core Pillars',
      pillar1Title: 'Business Process Analysis',
      pillar1Desc: 'Understanding procurement lifecycles, ledger reconciliation, supply chain routing, and customer conversion pipelines.',
      pillar2Title: 'Object-Oriented Programming',
      pillar2Desc: 'Writing clean, modular Python OOP structures with domain separation, inheritance, and robust business constraints.',
      pillar3Title: 'Enterprise Integration',
      pillar3Desc: 'Unifying fragmented departments into real-time transactional systems using Odoo community frameworks and PostgreSQL.',
      bisAdvantageTitle: 'The BIS Advantage',
      bisAdvantageDesc: 'No communication disconnect: speaking both the business language of executives and the technical language of developers.',
      viewCvBtn: 'View Structured CV',
    },
    skills: {
      tag: 'Technical Repertoire',
      title: 'Skills Built for Modern Business Systems',
      desc: 'Organized into specialized domains that span full enterprise application stacks.',
      tabProgramming: 'Programming & Development',
      tabDatabases: 'Databases & Modeling',
      tabErp: 'ERP & Business Systems',
      terminalTitle: 'Interactive Code Inspector & Sandbox',
      terminalRunBtn: 'Simulate Code Execution',
      terminalCopied: 'Copied to Clipboard!',
      terminalCopy: 'Copy Code',
    },
    odoo: {
      tag: 'ERP Specialization',
      title: 'The Odoo ERP Learning Journey',
      desc: 'Understanding how individual business operations unify into an automated, cross-departmental ecosystem.',
      pipelineHeading: 'Interactive Enterprise Pipeline',
      pipelineHint: 'Click any step to inspect real-time data cascades and Odoo Python logic',
      inspectCodeBtn: 'View Module Code',
      interactiveSimulationTitle: 'Live Workflow Simulator',
      interactiveSimulationDesc: 'Step through an end-to-end commercial transaction from Lead to Invoicing:',
      nextStepBtn: 'Simulate Next Stage →',
      resetSimBtn: 'Reset Pipeline',
      simActiveStep: 'Current Stage',
      simLiveStatus: 'System Response',
      whyOdooTitle: 'Why Odoo for Enterprise',
      whyOdooDesc: 'Unlike fragmented tools, Odoo connects Sales, Warehouse, and Accounting into one single transactional source of truth.',
      learningMethodologyTitle: 'Hands-on Learning Methodology',
      step1Name: 'CRM & Lead Pipeline',
      step1Role: 'Conversion & Opportunity Scoring',
      step2Name: 'Sales Management',
      step2Role: 'Commercial Quotations & Margin Checks',
      step3Name: 'Inventory & Warehouse',
      step3Role: 'Stock Reservation & Picking Routes',
      step4Name: 'Invoicing & Accounting',
      step4Role: 'Double-Entry Reconciliation',
      step5Name: 'Process Automation Engine',
      step5Role: 'Custom Python Actions & Triggers',
    },
    projects: {
      tag: 'Practical Portfolio',
      title: 'Featured Academic & Engineering Projects',
      desc: 'Real, hands-on implementations applying Python, relational database design, and Odoo ERP modules to solve real business challenges.',
      filterAll: 'All Projects',
      filterOdoo: 'Odoo ERP',
      filterSoftware: 'Python OOP',
      filterDatabase: 'Databases',
      viewRepo: 'View GitHub Repo',
      viewDetails: 'Inspect Architecture',
      businessProblem: 'Business Problem Solved:',
      statusCompleted: 'Completed',
      statusInProgress: 'In Progress',
      statusPlanned: 'Planned Module',
      upcomingTitle: 'Custom Odoo Invoicing & Electronic Gateway Module',
      upcomingDesc: 'Planned project extending account.move for automated payment gateway reconciliation and Egyptian e-invoice compliance hooks.',
      upcomingDate: 'Scheduled 2026',
    },
    education: {
      tag: 'Academic Foundation',
      title: 'Higher Institute for Computers, Information and Management Technology – Tanta',
      degree: 'Bachelor of Business Information Systems (BIS)',
      institution: 'Higher Institute for Computers, Information and Management Technology – Tanta',
      status: 'Undergraduate Degree Candidate',
      highlightsTitle: 'Key Curriculum & Research Focus',
      h1: 'Enterprise Resource Planning (ERP) systems analysis & automated workflow mapping.',
      h2: 'Relational Database Management Systems (PostgreSQL / MySQL) & normalization theory.',
      h3: 'Applied Software Engineering in Python, data structures, and OOP architectural patterns.',
      h4: 'Business administration, financial accounting fundamentals, and operational supply chain logistics.',
    },
    contact: {
      tag: 'Contact & Opportunities',
      title: "Let's Connect & Build Together",
      desc: 'I am currently open to internships, junior developer roles in Odoo ERP, and software automation projects.',
      directEmail: 'Direct Email',
      fastResponse: 'Fast Response',
      copy: 'Copy',
      copied: 'Copied!',
      launchMail: 'Open Mail App',
      locationTitle: 'Primary Location',
      locationValue: 'Ashmoun, Al Minufiyah, Egypt',
      whatsappTitle: 'WhatsApp Quick Connect',
      whatsappAction: 'Open WhatsApp Chat',
      formTitle: 'Send a Direct Message',
      formDesc: 'Whether you have a junior Odoo role, summer internship opportunity, or want to discuss enterprise automation.',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Message Details',
      formSubmit: 'Send Message',
      formSubmitted: 'Message Sent Successfully!',
    },
    footer: {
      rights: 'All rights reserved.',
      designedFor: 'Engineered with Precision & Interactive 3D Smoked-Glass',
      location: 'Ashmoun, Al Minufiyah, Egypt',
    },
  },

  ar: {
    nav: {
      backTo3D: 'اللوح الزجاجي 3D',
      brandSubtitle: 'نظم معلومات الأعمال • مطور Odoo طموح',
      about: 'نبذة عني',
      skills: 'المهارات',
      odoo: 'رحلة Odoo ERP',
      projects: 'المشاريع',
      education: 'التعليم',
      contact: 'تواصل معي',
      getInTouch: 'ابدأ التواصل',
      langToggle: 'English',
      soundOn: 'المؤثرات الصوتية مفعلة',
      soundOff: 'المؤثرات الصوتية مكتومة',
      atmosphereHolo: 'خلفية كود تفاعلي',
      atmosphereClean: 'زجاج نقي',
      resume: 'السيرة الذاتية',
    },
    hero: {
      eyebrow: 'طالب نظم معلومات الأعمال • مطور ODOO ERP',
      titleLine1: 'تحويل منطق الأعمال',
      titleLine2: 'إلى حلول برمجية مؤتمتة.',
      headline: 'تحويل منطق الأعمال إلى حلول برمجية مؤتمتة.',
      description:
        'طالب نظم معلومات الأعمال (BIS) شغوف بالتكنولوجيا وتطوير البرمجيات وأتمتة العمليات الإدارية. أجمع بين فهمي العميق لدورات العمل المؤسسية والمهارات البرمجية لبناء حلول عملية تسهم في تطوير سير العمل وحل مشكلات الواقع.',
      exploreBtn: 'استكشف أعمالي',
      contactBtn: 'تواصل معي',
      interactiveSlabHint: 'لوح زجاجي ثلاثي الأبعاد تفاعلي • حرّك المؤشر أو اسحب باللمس لاختبار الانعكاس والفيزياء',
      stats: {
        field: 'المجال الأكاديمي',
        fieldVal: 'نظم معلومات الأعمال (BIS)',
        specialization: 'التخصص المستهدف',
        specializationVal: 'تطوير Odoo ERP وبايثون OOP',
        status: 'الحالة الحالية',
        statusVal: 'متاح للتدريب وفرص العمل المبتدئة',
      },
    },
    about: {
      tag: 'الملف والمسار الأكاديمي',
      title: 'جسر متين بين عمليات الأعمال وهندسة البرمجيات',
      p1: 'أنا يوسف وليد، طالب نظم معلومات الأعمال (BIS) بالمعهد العالي للحاسبات وتكنولوجيا المعلومات وإدارة الأعمال بطنطا، ومقيم في أشمون، محافظة المنوفية، مصر.',
      p2: 'تكمن قوتي المميزة في الجمع بين وجهي العملة المؤسسية: فهم وتحليل متطلبات الأعمال (إدارة العملاء، المبيعات، المخازن، الحسابات) وتطوير نماذج برمجية بلغة بايثون وقواعد بيانات بوستجرس لأتمتة هذه العمليات بدقة عالية.',
      p3: 'أركز حالياً على تعميق معرفتي بنظام Odoo ERP، واستكشاف كيف تترابط العمليات التشغيلية عبر الأنظمة المتكاملة، وتطوير مشاريع عملية لتحويل المنطق الإداري إلى برمجيات ذكية.',
      corePillarsTitle: 'ركائز المسار الثلاث',
      pillar1Title: 'تحليل دورات الأعمال',
      pillar1Desc: 'فهم مسارات التوريد، التسويات الدفترية المحاسبية، وتتبع الفرص البيعية وصولاً لأمر البيع.',
      pillar2Title: 'البرمجة كائنية التوجه (OOP)',
      pillar2Desc: 'كتابة نماذج بايثون متقدمة تفصل بين منطق العمل، وقيود التحقق، والوراثة البرمجية النظيفة.',
      pillar3Title: 'التكامل المؤسسي في Odoo',
      pillar3Desc: 'ربط الإدارات المتفرقة في قاعدة بيانات مركزية موحدة باستخدام Odoo Community وبوستجرس.',
      bisAdvantageTitle: 'ميزة خريج نظم معلومات الأعمال (BIS)',
      bisAdvantageDesc: 'لا فجوة في التواصل: أتحدث لغة المحاسب ومدير العمليات وأحولها فوراً إلى كود برمجي تنفيذي.',
      viewCvBtn: 'عرض السيرة الذاتية',
    },
    skills: {
      tag: 'المهارات التقنية',
      title: 'ترسانة تقنية مخصصة لبناء الأنظمة المؤسسية',
      desc: 'مقسمة في فئات متخصصة تغطي طبقات التطبيقات المؤسسية من قواعد البيانات حتى منطق ERP.',
      tabProgramming: 'البرمجة والتطوير',
      tabDatabases: 'قواعد البيانات والنمذجة',
      tabErp: 'أنظمة ERP والأعمال',
      terminalTitle: 'مستكشف الكود والترمينال التفاعلي',
      terminalRunBtn: 'تشغيل محاكاة الكود',
      terminalCopied: 'تم نسخ الكود للحافظة!',
      terminalCopy: 'نسخ الكود',
    },
    odoo: {
      tag: 'التخصص المستهدف',
      title: 'رحلة تعلم وتطوير Odoo ERP',
      desc: 'استيعاب كيف تتكامل العمليات الفردية للإدارات داخل منظومة موحدة مؤتمتة تلغي الأخطاء اليدوية.',
      pipelineHeading: 'محاكي المسار المؤسسي التفاعلي',
      pipelineHint: 'اضغط على أي مرحلة لاختبار تتابع البيانات التلقائي وكود بايثون المقابل لها في Odoo',
      inspectCodeBtn: 'معاينة كود الموديول',
      interactiveSimulationTitle: 'ورشة محاكاة دورة البيع والتوريد',
      interactiveSimulationDesc: 'تحرّك خطوة بخطوة في دورة تجارية كاملة من العميل المحتمل حتى الفاتورة:',
      nextStepBtn: 'محاكاة الخطوة التالية ←',
      resetSimBtn: 'إعادة تعيين المحاكاة',
      simActiveStep: 'المرحلة النشطة',
      simLiveStatus: 'استجابة النظام البرمجية',
      whyOdooTitle: 'لماذا Odoo للمؤسسات؟',
      whyOdooDesc: 'على عكس البرامج المنفصلة، يربط Odoo المبيعات والمخزن والحسابات بمصدر حقيقة واحد يمنع التكرار.',
      learningMethodologyTitle: 'منهجيتي في التعلم العملي',
      step1Name: 'إدارة علاقات العملاء (CRM)',
      step1Role: 'تأهيل الفرص البيعية واحتساب الاحتمالية',
      step2Name: 'إدارة المبيعات (Sales)',
      step2Role: 'عروض الأسعار والتحقق من هوامش الربح',
      step3Name: 'المخازن واللوجستيات (Inventory)',
      step3Role: 'حجز البضاعة تلقائياً وأوامر الصرف',
      step4Name: 'الفوترة والمحاسبة (Invoicing)',
      step4Role: 'إنشاء قيود اليومية الثنائية والتسوية',
      step5Name: 'محرك الأتمتة (Automation)',
      step5Role: 'كتابة إجراءات بايثون الذاتية والإنذارات',
    },
    projects: {
      tag: 'معرض الأعمال التطبيقية',
      title: 'المشاريع الأكاديمية والعملية المميزة',
      desc: 'مشاريع حقيقية تطبق لغة بايثون ونمذجة قواعد البيانات وموديولات Odoo لحل مشكلات واقعية.',
      filterAll: 'جميع المشاريع',
      filterOdoo: 'Odoo ERP',
      filterSoftware: 'بايثون OOP',
      filterDatabase: 'قواعد البيانات',
      viewRepo: 'عرض المستودع على GitHub',
      viewDetails: 'تفاصيل المعمارية والنظام',
      businessProblem: 'المشكلة المؤسسية المحلولة:',
      statusCompleted: 'مكتمل',
      statusInProgress: 'قيد التطوير',
      statusPlanned: 'موديول مخطط له',
      upcomingTitle: 'موديول فوترة Odoo مخصص والربط مع بوابات الدفع',
      upcomingDesc: 'مشروع قادم يوسع نموذج account.move لأتمتة تسوية المدفوعات وتوافق منظومة الفواتير الإلكترونية.',
      upcomingDate: 'مجدول 2026',
    },
    education: {
      tag: 'الأساس الأكاديمي',
      title: 'المعهد العالي للحاسبات وتكنولوجيا المعلومات وإدارة الأعمال – طنطا',
      degree: 'بكالوريوس نظم معلومات الأعمال (BIS)',
      institution: 'المعهد العالي للحاسبات وتكنولوجيا المعلومات وإدارة الأعمال – طنطا',
      status: 'طالب في المرحلة الجامعية',
      highlightsTitle: 'أبرز المحاور الأكاديمية والبحثية',
      h1: 'تحليل وتصميم نظم تخطيط موارد المؤسسات (ERP) وأتمتة مسارات العمل.',
      h2: 'إدارة وتصميم قواعد البيانات العلائقية (PostgreSQL / MySQL) ونظرية التطبيع.',
      h3: 'هندسة البرمجيات التطبيقية بلغة بايثون، هياكل البيانات، والأنماط المعمارية OOP.',
      h4: 'مبادئ إدارة الأعمال، المحاسبة المالية، وإدارة سلاسل الإمداد اللوجستية.',
    },
    contact: {
      tag: 'التواصل والفرص',
      title: 'لنتواصل ونبني حلولاً مؤتمتة سوياً',
      desc: 'مستعد ومتحمس لفرص التدريب الصيفي، ووظائف مطور Odoo ERP المبتدئ، ومشاريع أتمتة الأعمال.',
      directEmail: 'البريد الإلكتروني المباشر',
      fastResponse: 'رد سريع خلال اليوم',
      copy: 'نسخ',
      copied: 'تم النسخ!',
      launchMail: 'فتح تطبيق البريد',
      locationTitle: 'الموقع الجغرافي',
      locationValue: 'أشمون، المنوفية، جمهورية مصر العربية',
      whatsappTitle: 'محادثة سريعة عبر واتساب',
      whatsappAction: 'مراسلة يوسف عبر واتساب',
      formTitle: 'إرسال رسالة مباشرة',
      formDesc: 'سواء كان لديك استفسار عن موديول، أو فرصة تدريبية، أو رغبة في مناقشة حلول الأتمتة.',
      formName: 'الاسم الكريم',
      formEmail: 'بريدك الإلكتروني',
      formSubject: 'الموضوع',
      formMessage: 'تفاصيل الرسالة',
      formSubmit: 'إرسال الرسالة',
      formSubmitted: 'تم استلام رسالتك بنجاح!',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      designedFor: 'تم التطوير بهندسة فائقة وتجربة زجاجية تفاعلية ثلاثية الأبعاد',
      location: 'أشمون، المنوفية، مصر',
    },
  },
};

// Rich Interactive Code Samples for the Inspector
export interface CodeSample {
  id: string;
  filename: string;
  language: string;
  descriptionEn: string;
  descriptionAr: string;
  code: string;
  simulationOutputEn: string;
  simulationOutputAr: string;
}

export const CODE_INSPECTOR_SAMPLES: CodeSample[] = [
  {
    id: 'odoo-sale-automation',
    filename: 'sale_order_automation.py',
    language: 'python',
    descriptionEn: 'Odoo 17 Model Extension: Validating stock thresholds before quotation confirmation and triggering automated warehouse routes.',
    descriptionAr: 'تطوير موديول Odoo 17: التحقق التلقائي من توافر المخزون قبل تأكيد عرض السعر وإطلاق مسار الصرف الآلي.',
    code: `# -*- coding: utf-8 -*-
from odoo import models, fields, api
from odoo.exceptions import ValidationError

class SaleOrderAutomatedStock(models.Model):
    _inherit = 'sale.order'

    auto_stock_verified = fields.Boolean(
        string="Automated Stock Check",
        default=False,
        readonly=True,
        help="Flag indicating warehouse availability has been verified by custom business logic."
    )
    
    backorder_risk_level = fields.Selection([
        ('safe', 'In Stock & Ready'),
        ('warning', 'Low Threshold (<5 units)'),
        ('critical', 'Backorder Required')
    ], string="Fulfillment Risk", compute="_compute_fulfillment_risk", store=True)

    @api.depends('order_line.product_id', 'order_line.product_uom_qty')
    def _compute_fulfillment_risk(self):
        for order in self:
            risk = 'safe'
            for line in order.order_line:
                if line.product_id.type == 'product':
                    qty_available = line.product_id.qty_available
                    if qty_available <= 0:
                        risk = 'critical'
                        break
                    elif qty_available < line.product_uom_qty:
                        risk = 'warning'
            order.backorder_risk_level = risk

    def action_confirm(self):
        """Override standard confirmation with automated inventory check."""
        for order in self:
            if order.backorder_risk_level == 'critical':
                raise ValidationError(
                    f"Order {order.name} cannot be confirmed: One or more line items have zero warehouse stock."
                )
            order.auto_stock_verified = True
        return super(SaleOrderAutomatedStock, self).action_confirm()`,
    simulationOutputEn: `[Odoo 17 ORM Engine - Simulated Test Run]
> Compiling sale_order_automation.py ... OK
> Initializing SaleOrderAutomatedStock (inherits 'sale.order') ...
> Generating mock quotation SO-2026-089 for partner 'Delta Industrial Trading'
> Order line 1: 10x [PROD-01] Industrial Sensor (Warehouse stock: 45 units)
> Order line 2: 4x [PROD-02] Python Logic Controller (Warehouse stock: 12 units)
> Executing _compute_fulfillment_risk() ...
  -> Evaluated order lines: safe (All items in stock).
> Invoking order.action_confirm() ...
  -> Stock verified: True
  -> stock.picking record WH/OUT/00142 created automatically.
  -> Status: SALE CONFIRMED.`,
    simulationOutputAr: `[محرك Odoo 17 ORM - تشغيل الاختبار التجريبي]
> ترجمة ملف sale_order_automation.py ... تم بنجاح
> تهيئة SaleOrderAutomatedStock (وراثة من 'sale.order') ...
> إنشاء عرض سعر تجريبي SO-2026-089 للعميل 'شركة الدلتا للصناعة'
> بند 1: 10x [PROD-01] حساس صناعي (المخزون المتوفر: 45 وحدة)
> بند 2: 4x [PROD-02] وحدة تحكم بايثون (المخزون المتوفر: 12 وحدة)
> تنفيذ دالة _compute_fulfillment_risk() ...
  -> تقييم المخزون: آمن (جميع المنتجات متوفرة).
> استدعاء دالة order.action_confirm() ...
  -> تم تأكيد توفر المخزون: True
  -> إنشاء إذن الصرف المخزني WH/OUT/00142 تلقائياً.
  -> الحالة: تم تأكيد البيع وحجز البضاعة.`,
  },
  {
    id: 'python-oop-workflow',
    filename: 'business_workflow_engine.py',
    language: 'python',
    descriptionEn: 'Python OOP Enterprise Logic: Implementation of Observer & State patterns to coordinate cross-department approvals.',
    descriptionAr: 'منطق بايثون OOP المؤسسي: تطبيق نمطي المراقب (Observer) والحالة (State) لتنسيق اعتمادات الأقسام تلقائياً.',
    code: `from abc import ABC, abstractmethod
from typing import List

class WorkflowObserver(ABC):
    @abstractmethod
    def on_state_changed(self, order_id: str, old_state: str, new_state: str):
        pass

class InventoryDepartmentNotifier(WorkflowObserver):
    def on_state_changed(self, order_id: str, old_state: str, new_state: str):
        if new_state == "APPROVED":
            print(f"[Warehouse Service] Order {order_id} approved. Reserving stock immediately.")

class AccountingDepartmentNotifier(WorkflowObserver):
    def on_state_changed(self, order_id: str, old_state: str, new_state: str):
        if new_state == "APPROVED":
            print(f"[Accounting Service] Order {order_id} approved. Generating draft receivable entry.")

class CommercialOrderWorkflow:
    def __init__(self, order_id: str, total_amount: float):
        self.order_id = order_id
        self.total_amount = total_amount
        self.state = "DRAFT"
        self._observers: List[WorkflowObserver] = []

    def attach_observer(self, observer: WorkflowObserver):
        self._observers.append(observer)

    def transition_to(self, new_state: str):
        old_state = self.state
        self.state = new_state
        print(f"[Workflow Engine] Order {self.order_id}: {old_state} -> {new_state}")
        for obs in self._observers:
            obs.on_state_changed(self.order_id, old_state, new_state)

# Execution Sandbox
if __name__ == "__main__":
    order = CommercialOrderWorkflow("ORD-BIS-104", 12500.00)
    order.attach_observer(InventoryDepartmentNotifier())
    order.attach_observer(AccountingDepartmentNotifier())
    order.transition_to("PENDING_APPROVAL")
    order.transition_to("APPROVED")`,
    simulationOutputEn: `[Python 3.12 OOP Runtime Output]
> Instantiating CommercialOrderWorkflow for ORD-BIS-104 ($12,500.00)
> Attached 2 enterprise department observers.
[Workflow Engine] Order ORD-BIS-104: DRAFT -> PENDING_APPROVAL
[Workflow Engine] Order ORD-BIS-104: PENDING_APPROVAL -> APPROVED
[Warehouse Service] Order ORD-BIS-104 approved. Reserving stock immediately.
[Accounting Service] Order ORD-BIS-104 approved. Generating draft receivable entry.
> State transition finalized with ZERO data desync.`,
    simulationOutputAr: `[مخرجات بيئة تشغيل بايثون 3.12 OOP]
> إنشاء كائن CommercialOrderWorkflow للطلب ORD-BIS-104 (بمبلغ 12,500.00$)
> تسجيل 2 مراقبين مؤسسيين للأقسام.
[محرك المسار] الطلب ORD-BIS-104: مسودة -> قيد الاعتماد
[محرك المسار] الطلب ORD-BIS-104: قيد الاعتماد -> معتمد
[خدمة المخازن] تم اعتماد الطلب ORD-BIS-104. جاري حجز البضاعة فوراً.
[خدمة الحسابات] تم اعتماد الطلب ORD-BIS-104. جاري إنشاء قيد استحقاق مبدئي.
> اكتمل انتقال الحالة بدون أي تفاوت في البيانات بين الأقسام.`,
  },
  {
    id: 'postgres-schema',
    filename: 'enterprise_schema.sql',
    language: 'sql',
    descriptionEn: 'PostgreSQL Relational Schema: 3NF Normalized structure with foreign keys, index optimization, and audit logging triggers.',
    descriptionAr: 'تصميم قاعدة بيانات PostgreSQL: هيكل في الصورة الطبيعية الثالثة (3NF) مع فهارس ومحفزات مراقبة.',
    code: `-- Enterprise Retail & ERP Relational Schema
-- Designed for High-Throughput Consistency in PostgreSQL

CREATE TABLE erp_business_partners (
    id SERIAL PRIMARY KEY,
    partner_name VARCHAR(150) NOT NULL,
    partner_type VARCHAR(20) CHECK (partner_type IN ('customer', 'supplier', 'both')),
    vat_number VARCHAR(50) UNIQUE,
    credit_limit NUMERIC(14, 2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE erp_sale_orders (
    id SERIAL PRIMARY KEY,
    order_code VARCHAR(32) UNIQUE NOT NULL,
    partner_id INT NOT NULL REFERENCES erp_business_partners(id) ON DELETE RESTRICT,
    order_state VARCHAR(20) DEFAULT 'draft' CHECK (order_state IN ('draft', 'confirmed', 'done', 'cancelled')),
    total_untaxed NUMERIC(14, 2) DEFAULT 0.00,
    total_tax NUMERIC(14, 2) DEFAULT 0.00,
    total_amount NUMERIC(14, 2) GENERATED ALWAYS AS (total_untaxed + total_tax) STORED,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE INDEX idx_sale_orders_partner ON erp_sale_orders(partner_id);
CREATE INDEX idx_sale_orders_state ON erp_sale_orders(order_state);

-- View connecting Sales and Partner Credit Utilization
CREATE OR REPLACE VIEW v_customer_exposure AS
SELECT 
    p.id AS partner_id,
    p.partner_name,
    p.credit_limit,
    COALESCE(SUM(so.total_amount), 0) AS total_active_orders,
    (p.credit_limit - COALESCE(SUM(so.total_amount), 0)) AS remaining_credit
FROM erp_business_partners p
LEFT JOIN erp_sale_orders so ON p.id = so.partner_id AND so.order_state = 'confirmed'
GROUP BY p.id, p.partner_name, p.credit_limit;`,
    simulationOutputEn: `[PostgreSQL 16 Engine - Schema Validation]
> Executing enterprise_schema.sql ...
> CREATE TABLE erp_business_partners ... SUCCESS
> CREATE TABLE erp_sale_orders ... SUCCESS (Generated total_amount column linked)
> CREATE INDEX idx_sale_orders_partner ... SUCCESS
> CREATE INDEX idx_sale_orders_state ... SUCCESS
> CREATE VIEW v_customer_exposure ... SUCCESS
> Querying v_customer_exposure:
  partner_id | partner_name          | credit_limit | total_active_orders | remaining_credit
  1          | Delta Trading Co.     | 50000.00     | 12500.00            | 37500.00
> Query plan: Index Scan on idx_sale_orders_partner (Execution time: 0.12ms)`,
    simulationOutputAr: `[محرك PostgreSQL 16 - فحص صحة المخطط]
> تنفيذ ملف enterprise_schema.sql ...
> إنشاء جدول شركاء الأعمال erp_business_partners ... تم بنجاح
> إنشاء جدول أوامر البيع erp_sale_orders ... تم بنجاح (مع عمود الإجمالي المحسوب)
> بناء الفهارس المسرعة idx_sale_orders_partner ... تم بنجاح
> بناء العرض التحليلي v_customer_exposure ... تم بنجاح
> استعلام عرض الائتمان v_customer_exposure:
  رقم الشريك | اسم الشريك             | الحد الائتماني | الطلبات النشطة | المتبقي من الائتمان
  1          | شركة الدلتا للتجارة   | 50000.00       | 12500.00       | 37500.00
> خطة الاستعلام: مسح الفهرس (زمن التنفيذ: 0.12ms)`,
  },
];
