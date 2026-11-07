// --- تطبيق الوضع الليلي فوراً لمنع الوميض الأبيض عند التحميل ---
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
        page_title: "مبيعات الموردين - الموسى التجارية",
        header_title: "الموسى التجارية",
        header_subtitle: "إدارة مبيعات الموردين",
        sales_group_title: "مبيعات المجموعات - الموسى التجارية",
        sales_group_subtitle: "تقرير مبيعات المجموعات الاحترافي",
        kpi_total_sales: "إجمالي المبيعات",
        kpi_without_vat: "بدون ضريبة (Excl. VAT)",
        kpi_total_cost: "إجمالي التكلفة (Cost)",
        kpi_margin: "هامش الربح (Margin)",
        kpi_total_qty: "إجمالي القطع",
        card_total_sales: "إجمالي المبيعات",
        card_without_vat: "بدون ضريبة",
        card_cost: "التكلفة",
        card_margin: "Margin",
        section_groups_summary: "تفصيل المبيعات حسب المجموعات والموردين",
        section_supplier_summary: "تقرير مبيعات الموردين الشجري (Supplier Sales Tree)",
        btn_back: "⬅ رجوع",
        btn_home: "🏠 الرئيسية",
        chip_today: "اليوم",
        chip_yesterday: "أمس",
        chip_week: "الأسبوع",
        chip_month: "الشهر",
        chip_year: "السنة",
        chip_custom: "📅 مخصص",
        label_time_range: "النطاق الزمني:",
        btn_choose_range: "اختر النطاق...",
        label_branch: "الفرع (Branch):",
        label_gender: "الجنس (Gender):",
        label_category: "الفئة (Category):",
        label_group: "المجموعة (Group):",
        label_product_year: "سنة المنتج (Product Year):",
        label_brand: "الماركة (Brand Filter):",
        text_all_selected: "الكل مختار",
        text_selected_count: "مختار",
        text_select_all: "تحديد الكل",
        opt_all_branches: "جميع الفروع",
        btn_refresh: "تحديث",
        status_loading: "جاري تحضير البيانات...",
        status_no_data: "لا توجد مبيعات مسجلة في هذه الفترة",
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
        under_construction: "قريباً",
        footer_text: "نظام الموسى التجارية الاحترافي © 2026"
    },
    en: {
        main_title: "Professional Dashboard - Almoosa Trading",
        dash_header: "Dashboard",
        dash_subheader: "Unified Admin System",
        page_title: "Supplier Sales - Almoosa Trading",
        header_title: "Almoosa Trading",
        header_subtitle: "Supplier Sales Management",
        sales_group_title: "Sales Groups - Almoosa Trading",
        sales_group_subtitle: "Professional Group Sales Report",
        kpi_total_sales: "Total Sales",
        kpi_without_vat: "Excl. VAT",
        kpi_total_cost: "Total Cost",
        kpi_margin: "Profit Margin",
        kpi_total_qty: "Total Pcs",
        card_total_sales: "Total Sales",
        card_without_vat: "Excl. VAT",
        card_cost: "Cost",
        card_margin: "Margin",
        section_groups_summary: "Sales Breakdown by Groups & Suppliers",
        section_supplier_summary: "Supplier Sales Tree",
        btn_back: "⬅ Back",
        btn_home: "🏠 Home",
        chip_today: "Today",
        chip_yesterday: "Yesterday",
        chip_week: "Week",
        chip_month: "Month",
        chip_year: "Year",
        chip_custom: "📅 Custom",
        label_time_range: "Time Range:",
        btn_choose_range: "Select range...",
        label_branch: "Branch:",
        label_gender: "Gender:",
        label_category: "Category:",
        label_group: "Group:",
        label_product_year: "Product Year:",
        label_brand: "Brand Filter:",
        text_all_selected: "All Selected",
        text_selected_count: "Selected",
        text_select_all: "Select All",
        opt_all_branches: "All Branches",
        btn_refresh: "Refresh",
        status_loading: "Preparing data...",
        status_no_data: "No sales recorded in this period",
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
        page_title: "आपूर्तिकर्ता बिक्री - अलमूसा ट्रेडिंग",
        header_title: "अलमूसा ट्रेडिंग",
        header_subtitle: "आपूर्तिकर्ता बिक्री प्रबंधन",
        sales_group_title: "बिक्री समूह - अलमूसा ट्रेडिंग",
        sales_group_subtitle: "पेशेवर समूह बिक्री रिपोर्ट",
        kpi_total_sales: "कुल बिक्री",
        kpi_without_vat: "वैट के बिना (Excl. VAT)",
        kpi_total_cost: "कुल लागत (Cost)",
        kpi_margin: "लाभ मार्जिन (Margin)",
        kpi_total_qty: "कुल पीस",
        card_total_sales: "कुल बिक्री",
        card_without_vat: "वैट के बिना",
        card_cost: "लागत",
        card_margin: "Margin",
        section_groups_summary: "समूहों और आपूर्तिकर्ताओं द्वारा बिक्री",
        section_supplier_summary: "Supplier Sales Tree",
        btn_back: "⬅ पीछे",
        btn_home: "🏠 होम",
        chip_today: "आज",
        chip_yesterday: "कल",
        chip_week: "सप्ताह",
        chip_month: "महीना",
        chip_year: "वर्ष",
        chip_custom: "📅 कस्टम",
        label_time_range: "समय सीमा:",
        btn_choose_range: "रेंज चुनें...",
        label_branch: "शाखा (Branch):",
        label_gender: "Gender:",
        label_category: "Category:",
        label_group: "Group:",
        label_product_year: "उत्पाद वर्ष (Product Year):",
        label_brand: "ब्रांड फ़िल्टर (Brand Filter):",
        text_all_selected: "सभी चयनित",
        text_selected_count: "चयनित",
        text_select_all: "सभी चुनें",
        opt_all_branches: "सभी शाखाएं",
        btn_refresh: "रीफ्रेश",
        status_loading: "डेटा तैयार किया जा रहा है...",
        status_no_data: "इस अवधि में कोई बिक्री दर्ज नहीं की गई",
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
        page_title: "سپلائر سیلز - الموسی ٹریڈنگ",
        header_title: "الموسی ٹریڈنگ",
        header_subtitle: "سپلائر سیلز مینجمنٹ",
        sales_group_title: "سیلز گروپس - الموسی ٹریڈنگ",
        sales_group_subtitle: "پروفیشنل گروپ سیلز رپورٹ",
        kpi_total_sales: "کل فروخت",
        kpi_without_vat: "بغیر ٹیکس (Excl. VAT)",
        kpi_total_cost: "کل لاگت (Cost)",
        kpi_margin: "منافع کا مارجن (Margin)",
        kpi_total_qty: "کل پیس",
        card_total_sales: "کل فروخت",
        card_without_vat: "بغیر ٹیکس",
        card_cost: "لاگت",
        card_margin: "Margin",
        section_groups_summary: "گروپس اور سپلائرز کے لحاظ سے فروخت",
        section_supplier_summary: "سپلائر سیلز ٹری",
        btn_back: "⬅ واپس",
        btn_home: "🏠 ہوم",
        chip_today: "آج",
        chip_yesterday: "گزشتہ کل",
        chip_week: "ہفتہ",
        chip_month: "مہینہ",
        chip_year: "سال",
        chip_custom: "📅 کسٹم",
        label_time_range: "وقت کا دائرہ:",
        btn_choose_range: "رینج منتخب کریں...",
        label_branch: "برانچ (Branch):",
        label_gender: "Gender:",
        label_category: "Category:",
        label_group: "Group:",
        label_product_year: "پروڈکٹ کا سال (Product Year):",
        label_brand: "برانڈ فلٹر (Brand Filter):",
        text_all_selected: "سب منتخب",
        text_selected_count: "منتخب",
        text_select_all: "سب منتخب کریں",
        opt_all_branches: "تمام برانچز",
        btn_refresh: "ریشریف",
        status_loading: "ڈیٹا تیار کیا جا رہا ہے...",
        status_no_data: "اس مدت میں کوئی فروخت درج نہیں ہے",
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
        menu_contracts: "کرایه کے معاہدے",
        desc_contracts: "معاہدوں کی نگرانی اور تجدید",
        menu_water: "پانی کے بل",
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

    if (typeof updateAllButtonTexts === 'function') {
        updateAllButtonTexts();
    }
    if (typeof renderReports === 'function') {
        renderReports();
    }
}

function changeLanguage(selectedLang) {
    setLanguage(selectedLang);
    if (typeof loadPOSData === 'function') loadPOSData();
    if (typeof loadGroupSalesData === 'function') loadGroupSalesData();
    if (typeof loadSupplierSalesData === 'function') loadSupplierSalesData();
}

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
        themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

async function checkForUpdates(btn) {
    let icon = null;
    if (btn) {
        icon = btn.querySelector('i');
        if (icon) icon.classList.add('fa-spin');
    }
    
    try {
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
        }

        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                await registration.update();
                await registration.unregister();
            }
        }

        const timestamp = new Date().getTime();
        const currentUrl = window.location.href.split('?')[0];

        setTimeout(() => {
            window.location.href = `${currentUrl}?v=${timestamp}`;
        }, 500);

    } catch (err) {
        console.error("Update failed:", err);
        window.location.reload(true);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    const currentTheme = localStorage.getItem('app_theme') || 'light';
    updateThemeIcon(currentTheme);
});