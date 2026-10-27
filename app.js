// --- تطبيق الوضع الليلي فوراً لمنع الوميض الأبيض ---
(function applyInitialTheme() {
    const savedTheme = localStorage.getItem('app_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// --- قاموس الترجمات الشامل لجميع صفحات التطبيق ---
const translations = {
    ar: {
        main_title: "لوحة التحكم الاحترافية - الموسى التجارية",
        dash_header: "لوحة التحكم",
        dash_subheader: "النظام الإداري الموحد",
        page_title: "مبيعات الفروع - الموسى التجارية",
        header_title: "الموسى التجارية",
        header_subtitle: "متابعة مبيعات نقاط البيع",
        btn_back: "⬅ رجوع",
        btn_home: "🏠 الرئيسية",
        chip_today: "اليوم",
        chip_yesterday: "أمس",
        chip_week: "هذا الأسبوع",
        chip_month: "هذا الشهر",
        chip_year: "هذه السنة",
        chip_custom: "📅 مخصص",
        label_date: "التاريخ:",
        btn_choose_range: "اختر النطاق...",
        label_branch: "الفرع:",
        opt_all_branches: "جميع الفروع",
        btn_comprehensive_report: "📊 عرض التقرير الشامل",
        btn_dashboard: "📈 لوحة المؤشرات",
        btn_supplier_sales: "🏢 مبيعات الموردين (Supplier Sales)",
        hero_total_sales: "إجمالي المبيعات",
        hero_cost: "إجمالي التكلفة (Cost):",
        hero_margin: "هامش الربح (Margin):",
        chart_hourly_title: "📈 مقارنة المبيعات بالساعات (9ص - 12م)",
        chart_sub_label: "مقارنة بالفترة السابقة",
        section_branches_sales: "المبيعات حسب الفروع / نقاط البيع",
        status_loading: "جاري تحميل البيانات...",
        btn_close: "✕ إغلاق",
        btn_share_report: "مشاركة التقرير",
        share_whatsapp: "💬 إرسال عبر WhatsApp",
        share_email: "✉️ إرسال عبر البريد الإلكتروني",
        share_pdf: "📄 تحميل التقرير (PDF)",
        pdf_brand_title: "الموسى التجارية",
        pdf_main_title: "Daily Sales Summary Report with Chart",
        pdf_data_range: "Data range",
        pdf_total_qty_chart: "TOTAL SOLD QTY of ALL SHOP",
        pdf_grand_qty_header: "Grand Total Sold Qty",
        pdf_total_sales_chart: "TOTAL SALES of ALL SHOP",
        pdf_grand_sales_header: "Grand Total Sales",
        modal_sales_dashboard: "📊 لوحة تحليلات ومؤشرات المبيعات (Sales Dashboard)",
        dash_card_sales_store: "🏪 قيمة المبيعات حسب الفروع (Sales by Stores)",
        dash_card_qty_store: "📦 كميات المبيعات حسب الفروع (Sales Qty by Stores)",
        dash_card_region: "📍 المبيعات حسب المناطق (Sales by Region)",
        dash_card_gender: "👥 المبيعات حسب النوع/الفئة (Sales by Gender)",
        dash_card_category: "🏷️ المبيعات حسب التصنيفات (Sales by Category)",
        menu_sales: "المبيعات",
        desc_sales: "الفواتير والتقارير",
        menu_purchases_analysis: "تحليل المشتريات",
        desc_purchases_analysis: "مؤشرات وتقارير الشراء",
        menu_warehouse: "إدارة المستودع",
        desc_warehouse: "إدارة المساحات والمرافق",
        menu_stock: "المخزون",
        desc_stock: "الأصناف والأرصدة",
        menu_purchases: "المشتريات",
        desc_purchases: "أوامر الشراء والموردين",
        menu_transfers: "التحويلات",
        desc_transfers: "النقل بين الفروع",
        menu_receipts: "الاستلامات",
        desc_receipts: "استلام البضائع والواردات",
        menu_contracts: "عقود الإيجار",
        desc_contracts: "متابعة وتجديد العقود",
        menu_water: "فواتير المياه",
        desc_water: "الاستهلاك والمدفوعات",
        menu_electricity: "فواتير الكهرباء",
        desc_electricity: "العدادات والسدادات",
        under_construction: "جاري الإنشاء",
        footer_text: "نظام الموسى التجارية الاحترافي © 2026"
    },
    en: {
        main_title: "Professional Dashboard - Almoosa Trading",
        dash_header: "Dashboard",
        dash_subheader: "Unified Admin System",
        page_title: "Branch Sales - Almoosa Trading",
        header_title: "Almoosa Trading",
        header_subtitle: "POS Sales Monitoring",
        btn_back: "⬅ Back",
        btn_home: "🏠 Home",
        chip_today: "Today",
        chip_yesterday: "Yesterday",
        chip_week: "This Week",
        chip_month: "This Month",
        chip_year: "This Year",
        chip_custom: "📅 Custom",
        label_date: "Date:",
        btn_choose_range: "Select range...",
        label_branch: "Branch:",
        opt_all_branches: "All Branches",
        btn_comprehensive_report: "📊 Comprehensive Report",
        btn_dashboard: "📈 Dashboard",
        btn_supplier_sales: "🏢 Supplier Sales",
        hero_total_sales: "Total Sales",
        hero_cost: "Total Cost:",
        hero_margin: "Profit Margin:",
        chart_hourly_title: "📈 Hourly Sales Comparison (9AM - 12AM)",
        chart_sub_label: "Compared to previous period",
        section_branches_sales: "Sales by Branches / POS",
        status_loading: "Loading data...",
        btn_close: "✕ Close",
        btn_share_report: "Share Report",
        share_whatsapp: "💬 Send via WhatsApp",
        share_email: "✉️ Send via Email",
        share_pdf: "📄 Download Report (PDF)",
        pdf_brand_title: "Almoosa Trading",
        pdf_main_title: "Daily Sales Summary Report with Chart",
        pdf_data_range: "Data range",
        pdf_total_qty_chart: "TOTAL SOLD QTY of ALL SHOP",
        pdf_grand_qty_header: "Grand Total Sold Qty",
        pdf_total_sales_chart: "TOTAL SALES of ALL SHOP",
        pdf_grand_sales_header: "Grand Total Sales",
        modal_sales_dashboard: "📊 Sales Analytics & KPIs Dashboard",
        dash_card_sales_store: "🏪 Sales Value by Stores",
        dash_card_qty_store: "📦 Sales Qty by Stores",
        dash_card_region: "📍 Sales by Region",
        dash_card_gender: "👥 Sales by Gender/Category",
        dash_card_category: "🏷️ Sales by Categories",
        menu_sales: "Sales",
        desc_sales: "Invoices & Reports",
        menu_purchases_analysis: "Purchase Analysis",
        desc_purchases_analysis: "KPIs & Purchase Reports",
        menu_warehouse: "Warehouse",
        desc_warehouse: "Space & Facilities",
        menu_stock: "Inventory",
        desc_stock: "Items & Balances",
        menu_purchases: "Purchases",
        desc_purchases: "Orders & Suppliers",
        menu_transfers: "Transfers",
        desc_transfers: "Inter-branch Transfers",
        menu_receipts: "Receipts",
        desc_receipts: "Goods & Imports",
        menu_contracts: "Lease Contracts",
        desc_contracts: "Tracking & Renewal",
        menu_water: "Water Bills",
        desc_water: "Consumption & Bills",
        menu_electricity: "Electricity Bills",
        desc_electricity: "Meters & Payments",
        under_construction: "Under Construction",
        footer_text: "Almoosa Trading Professional System © 2026"
    },
    hi: {
        main_title: "पेशेवर डैशबोर्ड - अलमूसा ट्रेडिंग",
        dash_header: "डैशबोर्ड",
        dash_subheader: "एकीकृत प्रशासनिक प्रणाली",
        page_title: "शाखा बिक्री - अलमूसा ट्रेडिंग",
        header_title: "अलमूसा ट्रेडिंग",
        header_subtitle: "POS बिक्री निगरानी",
        btn_back: "⬅ पीछे",
        btn_home: "🏠 होम",
        chip_today: "आज",
        chip_yesterday: "कल",
        chip_week: "इस सप्ताह",
        chip_month: "इस महीने",
        chip_year: "इस वर्ष",
        chip_custom: "📅 कस्टम",
        label_date: "दिनांक:",
        btn_choose_range: "रेंज चुनें...",
        label_branch: "शाखा:",
        opt_all_branches: "सभी शाखाएं",
        btn_comprehensive_report: "📊 व्यापक रिपोर्ट",
        btn_dashboard: "📈 डैशबोर्ड",
        btn_supplier_sales: "🏢 आपूर्तिकर्ता बिक्री",
        hero_total_sales: "कुल बिक्री",
        hero_cost: "कुल लागत (Cost):",
        hero_margin: "लाभ मार्जिन (Margin):",
        chart_hourly_title: "📈 प्रति घंटा बिक्री तुलना (9AM - 12AM)",
        chart_sub_label: "पिछली अवधि की तुलना में",
        section_branches_sales: "शाखाओं / POS द्वारा बिक्री",
        status_loading: "डेटा लोड हो रहा है...",
        btn_close: "✕ बंद करें",
        btn_share_report: "रिपोर्ट साझा करें",
        share_whatsapp: "💬 व्हाट्सएप के माध्यम से भेजें",
        share_email: "✉️ ईमेल के माध्यम से भेजें",
        share_pdf: "📄 रिपोर्ट डाउनलोड करें (PDF)",
        pdf_brand_title: "Almoosa Trading",
        pdf_main_title: "Daily Sales Summary Report with Chart",
        pdf_data_range: "Data range",
        pdf_total_qty_chart: "TOTAL SOLD QTY of ALL SHOP",
        pdf_grand_qty_header: "Grand Total Sold Qty",
        pdf_total_sales_chart: "TOTAL SALES of ALL SHOP",
        pdf_grand_sales_header: "Grand Total Sales",
        modal_sales_dashboard: "📊 बिक्री विश्लेषण और KPI डैशबोर्ड",
        dash_card_sales_store: "🏪 स्टोर के अनुसार बिक्री मूल्य",
        dash_card_qty_store: "📦 स्टोर के अनुसार बिक्री मात्रा",
        dash_card_region: "📍 क्षेत्र के अनुसार बिक्री",
        dash_card_gender: "👥 लिंग/श्रेणी के अनुसार बिक्री",
        dash_card_category: "🏷️ श्रेणियों के अनुसार बिक्री",
        menu_sales: "बिक्री",
        desc_sales: "चालान और रिपोर्ट",
        menu_purchases_analysis: "खरीद विश्लेषण",
        desc_purchases_analysis: "KPIs और खरीद रिपोर्ट",
        menu_warehouse: "गोडाउन (वेयरहाउस)",
        desc_warehouse: "स्थान और सुविधाएं",
        menu_stock: "इन्वेंटरी (स्टॉक)",
        desc_stock: "आइटम और शेष राशि",
        menu_purchases: "खरीद (परचेज)",
        desc_purchases: "ऑर्डर और आपूर्तिकर्ता",
        menu_transfers: "स्थानांतरण (ट्रांसफर)",
        desc_transfers: "शाखाओं के बीच ट्रांसफर",
        menu_receipts: "रसीदें (प्राप्तियां)",
        desc_receipts: "माल और आयात",
        menu_contracts: "लीज अनुबंध",
        desc_contracts: "ट्रैकिंग और नवीनीकरण",
        menu_water: "पानी के बिल",
        desc_water: "खपत और भुगतान",
        menu_electricity: "बिजली के बिल",
        desc_electricity: "मीटर और भुगतान",
        under_construction: "निर्माणधीन",
        footer_text: "अलमूसा ट्रेडिंग प्रोफेशनल सिस्टम © 2026"
    },
    ur: {
        main_title: "پروفیشنل ڈیش بورڈ - الموسی ٹریڈنگ",
        dash_header: "ڈیش بورڈ",
        dash_subheader: "متحدہ انتظامی نظام",
        page_title: "برانچ سیلز - الموسی ٹریڈنگ",
        header_title: "الموسی ٹریڈنگ",
        header_subtitle: "POS سیلز مانیٹرنگ",
        btn_back: "⬅ واپس",
        btn_home: "🏠 ہوم",
        chip_today: "آج",
        chip_yesterday: "گزشتہ کل",
        chip_week: "اس ہفتے",
        chip_month: "اس ماہ",
        chip_year: "اس سال",
        chip_custom: "📅 کسٹم",
        label_date: "تاریخ:",
        btn_choose_range: "رینج منتخب کریں...",
        label_branch: "برانچ:",
        opt_all_branches: "تمام برانچز",
        btn_comprehensive_report: "📊 جامع رپورٹ",
        btn_dashboard: "📈 ڈیش بورڈ",
        btn_supplier_sales: "🏢 سپلائر سیلز",
        hero_total_sales: "کل فروخت",
        hero_cost: "کل لاگت (Cost):",
        hero_margin: "منافع کا مارجن (Margin):",
        chart_hourly_title: "📈 فی گھنٹہ فروخت کا موازنہ (9AM - 12AM)",
        chart_sub_label: "پچھلی مدت کے مقابلے میں",
        section_branches_sales: "برانچز / POS کے لحاظ سے فروخت",
        status_loading: "ڈیٹا لوڈ ہو رہا ہے...",
        btn_close: "✕ بند کریں",
        btn_share_report: "رپورٹ شیئر کریں",
        share_whatsapp: "💬 واٹس ایپ کے ذریعے بھیجیں",
        share_email: "✉️ ای میل کے ذریعے بھیجیں",
        share_pdf: "📄 رپورٹ ڈاؤن لوڈ کریں (PDF)",
        pdf_brand_title: "الموسی ٹریڈنگ",
        pdf_main_title: "Daily Sales Summary Report with Chart",
        pdf_data_range: "Data range",
        pdf_total_qty_chart: "TOTAL SOLD QTY of ALL SHOP",
        pdf_grand_qty_header: "Grand Total Sold Qty",
        pdf_total_sales_chart: "TOTAL SALES of ALL SHOP",
        pdf_grand_sales_header: "Grand Total Sales",
        modal_sales_dashboard: "📊 سیلز اینالیٹکس اور کے پی آئی ڈیش بورڈ",
        dash_card_sales_store: "🏪 اسٹورز کے لحاظ سے سیلز ویلیو",
        dash_card_qty_store: "📦 اسٹورز کے لحاظ سے سیلز کی مقدار",
        dash_card_region: "📍 خطے کے لحاظ سے فروخت",
        dash_card_gender: "👥 جنس / زمرہ کے لحاظ سے فروخت",
        dash_card_category: "🏷️ کیٹیگریز کے لحاظ سے فروخت",
        menu_sales: "فروخت (سیلز)",
        desc_sales: "انوائسز اور رپورٹس",
        menu_purchases_analysis: "خریداری کا تجزیہ",
        desc_purchases_analysis: "کیو پی آئیز اور پرچیز رپورٹس",
        menu_warehouse: "گودام (ویئر ہاؤس)",
        desc_warehouse: "جگہ اور سہولیات کا انتظام",
        menu_stock: "اسٹاک",
        desc_stock: "آئٹمز اور بیلنس",
        menu_purchases: "خریداری (پرچیز)",
        desc_purchases: "آرڈرز اور سپلائرز",
        menu_transfers: "منتقلی (ٹرانسفرز)",
        desc_transfers: "برانچز کے درمیان منتقلی",
        menu_receipts: "وصولیاں (رسیٹس)",
        desc_receipts: "سامان اور درآمدات کی وصولی",
        menu_contracts: "کرایہ کے معاہدے",
        desc_contracts: "معاہدوں کی نگرانی اور تجدید",
        menu_water: "فواتير المياه",
        desc_water: "استعمال اور ادائیگی",
        menu_electricity: "بجلی کے بل",
        desc_electricity: "میٹرز اور ادائگیاں",
        under_construction: "زیر تعمیر",
        footer_text: "الموسی ٹریڈنگ پروفیشنل سسٹم © 2026"
    }
};

let currentLang = localStorage.getItem('app_lang') || 'ar';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('app_lang', lang);
    
    const root = document.getElementById('htmlRoot');
    if (root) {
        root.setAttribute('lang', lang);
        if (lang === 'ar' || lang === 'ur') {
            root.setAttribute('dir', 'rtl');
        } else {
            root.setAttribute('dir', 'ltr');
        }
    }
    
    const selectEl = document.getElementById('langSelect');
    if (selectEl) {
        selectEl.value = lang;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function changeLanguage(selectedLang) {
    setLanguage(selectedLang);
    if (typeof loadPOSData === 'function') {
        loadPOSData();
    }
}

// --- إدارة الوضع الليلي (Dark Mode) ---
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('app_theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }
}

function checkForUpdates(btn) {
    const icon = btn.querySelector('i');
    if (icon) icon.classList.add('fa-spin');
    
    setTimeout(() => {
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
        }
        window.location.reload(true);
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    const currentTheme = localStorage.getItem('app_theme') || 'light';
    updateThemeIcon(currentTheme);
});