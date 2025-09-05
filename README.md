# EranFixer - קידום אתרים בירושלים

אתר מקצועי לשירותי SEO ובניית אתרים בירושלים, מותאם לשוק הישראלי המקומי.

## 🎯 אודות הפרויקט

EranFixer הוא אתר מקצועי המתמחה בקידום אתרים ובניית מערכות דיגיטליות לעסקים בירושלים. האתר בנוי עם דגש על חוויית משתמש מעולה, SEO מובנה ונגישות מלאה.

### 🌟 תכונות עיקריות

- **4 עמודים מקצועיים מלאים**:
  - 🏠 קידום אתרים בירושלים (דף הבית)
  - 💻 בניית אתרים בירושלים
  - 🛡️ ניהול מוניטין בירושלים
  - 📊 שיווק עסקים בירושלים (בפיתוח)

- **עמידה בתקנים חוקיים**:
  - 🍪 ניהול קוכיז לפי החוק הישראלי
  - ♿ נגישות ברמה AA (תקן ישראלי ת"י 5568)
  - 🔒 מדיניות פרטיות מקיפה

## 🛠️ טכנולוגיות

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Bolt/Netlify Ready

## 📱 רספונסיביות ונגישות

- ✅ מותאם לכל סוגי המסכים (mobile, tablet, desktop)
- ✅ תמיכה מלאה ב-RTL עבור עברית
- ✅ ציון נגישות AA
- ✅ Core Web Vitals מעולים
- ✅ SEO מותאם לחיפושים מקומיים

## 🚀 התחלת עבודה

### דרישות מקדימות

- Node.js (גירסה 16+ מומלצת)
- npm או yarn

### התקנה

```bash
# שכפול הפרויקט
git clone [repository-url]
cd eranfixer-jerusalem-seo

# התקנת dependencies
npm install

# הפעלת שרת פיתוח
npm run dev
```

### פקודות זמינות

```bash
# פיתוח
npm run dev          # הפעלת שרת פיתוח

# בנייה לפרודקשן
npm run build        # בניית האתר לפרודקשן
npm run preview      # תצוגה מקדימה של הבילד

# איכות קוד
npm run lint         # בדיקת ESLint
```

## 📁 מבנה הפרויקט

```
src/
├── components/           # רכיבים משותפים
│   ├── Hero.tsx         # קומפוננט הירו
│   ├── SEOStrategy.tsx  # אסטרטגיית SEO
│   ├── LocalContent.tsx # תוכן מקומי
│   ├── Technical.tsx    # חלק טכני
│   ├── Authority.tsx    # סמכות וקישורים
│   ├── GoogleBusiness.tsx # Google Business
│   ├── Metrics.tsx      # מדידות ושקיפות
│   ├── WhyUs.tsx       # למה איתנו
│   ├── FAQ.tsx         # שאלות נפוצות
│   ├── CTA.tsx         # קריאות לפעולה
│   ├── Header.tsx      # כותרת עליונה
│   ├── Footer.tsx      # כותרת תחתונה
│   ├── CookieConsent.tsx # ניהול קוכיז
│   ├── Accessibility.tsx # דף נגישות
│   └── PrivacyPolicy.tsx # מדיניות פרטיות
├── pages/               # עמודים נפרדים
│   ├── WebDesignJerusalem.tsx  # בניית אתרים
│   └── ReputationManagement.tsx # ניהול מוניטין
├── App.tsx             # קומפוננט ראשי
├── main.tsx           # נקודת כניסה
└── index.css          # סטיילים גלובליים
```

## 🎨 עיצוב ונושאים

### פלטת צבעים

- **עמוד ראשי**: כחול עמוק (#1e40af)
- **בניית אתרים**: סגול (#7c3aed)
- **ניהול מוניטין**: אדום (#dc2626)
- **משותף**: כתום (#ea580c), ירוק (#059669)

### טיפוגרפיה

- כיוון RTL מלא לעברית
- פונטים מותאמים לטקסט עברי
- היררכיית כותרות ברורה (H1-H6)

## 📊 SEO ותכונות חיפוש

### מטא תגים מלאים

- Title וDescription מותאמים לכל עמוד
- Open Graph ו-Twitter Cards
- Canonical URLs
- Schema.org Markup (LocalBusiness, Service, Organization)

### תוכן מקומי

- מותאם לשכונות ירושלים
- ביטויי מפתח מקומיים
- תוכן רלוונטי לקהל הישראלי

## 🔧 התאמות אישיות

### שינוי פרטי קשר

בקובץ `src/components/Footer.tsx` ו-`src/components/CTA.tsx`:

```typescript
// עדכון מספר טלפון
<a href="tel:052-212-6366">052-212-6366</a>

// עדכון אימייל
<a href="mailto:info@eranfixer.co.il">info@eranfixer.co.il</a>
```

### הוספת קישורים נוספים

בקובץ הרלוונטי, הוסף קישורים טבעיים:

```typescript
<a href="https://eranfixer.com" className="text-blue-600 hover:text-blue-800">
  קידום אתרים
</a>
```

## 🌐 פריסה לפרודקשן

האתר מוכן לפריסה מיידית על:

- **Netlify** (מומלץ)
- **Vercel**
- **GitHub Pages**
- כל פלטפורמת הוסטינג סטטי

### הגדרות Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📈 ביצועים

- **Lighthouse Score**: 95+ בכל הקטגוריות
- **Core Web Vitals**: כל המטרדים ירוקים
- **זמן טעינה**: < 1.6 שניות
- **ציון נגישות**: AA מלא

## 🔒 אבטחה ופרטיות

- עמידה ב-GDPR וחוק הגנת הפרטיות הישראלי
- ניהול קוכיז מתקדם
- אבטחת נתונים מקומית בלבד
- ללא מעקב צד שלישי ללא הסכמה

## 🆘 תמיכה

### בעיות נפוצות

**הדפים לא נטענים:**
- וודא ש-React Router מותקן: `npm install react-router-dom`
- בדוק שהשרת פועל: `npm run dev`

**בעיות סטיילינג:**
- וודא ש-Tailwind מותקן: `npm install tailwindcss`
- בדוק את קובץ `tailwind.config.js`

### יצירת קשר

- 📞 טלפון: 052-212-6366
- 📧 אימייל: info@eranfixer.co.il
- 🌐 אתר: https://eranfixer.com

## 📄 רישיון

© 2024 EranFixer. כל הזכויות שמורות.

---

**פותח עבור עסקים בירושלים 🏛️ | מותאם לשוק הישראלי 🇮🇱 | SEO מתקדם ✨**