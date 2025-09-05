import React from 'react';
import { ArrowLeft, Search, Shield, AlertTriangle, Eye, TrendingUp, Users, MessageCircle, CheckCircle, Phone, Calendar } from 'lucide-react';

const ReputationManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                ניהול מוניטין בירושלים
                <span className="block text-red-200 text-xl lg:text-2xl mt-2">
                  שליטה בסיפור הדיגיטלי
                </span>
              </h1>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                המוניטין שלך נקבע לפי מה שרואים בדף הראשון. אנחנו מאתרים אזכורים בעייתיים, בונים נכסים חיוביים ודוחפים אותם למעלה. במקביל אנחנו מנהלים ביקורות ותגובות בצורה אחראית עם <a href="https://jerusalem.eranfixer.co.il" className="text-red-200 hover:text-white underline">שיווק עסק בירושלים</a> מקצועי, כדי להחזיר שליטה בסיפור הדיגיטלי ולבנות אמון מול לקוחות בירושלים.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  <ArrowLeft className="h-5 w-5 ml-2" />
                  בדיקת מצב מוניטין חינמית
                </button>
                <button className="border-2 border-red-300 text-red-100 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold transition-colors">
                  קבלו מפת דרכים
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <Shield className="h-8 w-8 text-red-300 mx-auto mb-2" />
                  <p className="text-red-200 font-medium">72 שעות</p>
                  <p className="text-sm text-red-300">לאבחון מלא</p>
                </div>
                <div>
                  <TrendingUp className="h-8 w-8 text-red-300 mx-auto mb-2" />
                  <p className="text-red-200 font-medium">30-60 יום</p>
                  <p className="text-sm text-red-300">לתוצאות ראשוניות</p>
                </div>
                <div>
                  <Eye className="h-8 w-8 text-red-300 mx-auto mb-2" />
                  <p className="text-red-200 font-medium">24/7</p>
                  <p className="text-sm text-red-300">ניטור מתמשך</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">סימני אזהרה מקומיים</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 ml-3" />
                    <span>תוצאות שליליות בחיפוש השם + "ירושלים"</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 ml-3" />
                    <span>ביקורות נמוכות ב-Google Business</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 ml-3" />
                    <span>אזכורים בפורומים מקומיים</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 ml-3" />
                    <span>חדשות או מאמרים בעייתיים</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 ml-3" />
                    <span>תלונות ברשתות החברתיות</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Diagnosis Section */}
      <section className="py-20 bg-white" id="diagnosis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              אבחון מצב ראשוני
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              לפני שמתחילים לטפל, חשוב להבין את המצב הנוכחי. אנחנו עורכים סריקה מעמיקה של כל מה שקשור לשם שלכם ברשת
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-red-800 text-white p-3 rounded-lg w-fit mb-6">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">מיפוי SERP ושאילתות לוקאליות</h3>
              <p className="text-gray-600 mb-6">
                אנחנו בודקים מה מופיע בעמוד הראשון של גוגל כשמחפשים את השם שלכם + מילות מפתח ירושלמיות.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-red-800">חיפושים נפוצים:</span> "שם העסק + ירושלים"
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-red-800">חיפושים משניים:</span> "שם העסק + ביקורות/תלונות"
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-red-800">חיפושים שכונתיים:</span> עם כל השכונות הרלוונטיות
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-blue-700 text-white p-3 rounded-lg w-fit mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">ניתוח נכסים קיימים</h3>
              <p className="text-gray-600 mb-6">
                רישום וניתוח של כל הנכסים הדיגיטליים שלכם - אתרים, פרופילים, אזכורים חיוביים ושליליים.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border-r-4 border-green-500">
                  <span className="font-medium text-green-700">חיוביים:</span> אתר רשמי, ביקורות טובות
                </div>
                <div className="bg-white rounded-lg p-3 border-r-4 border-yellow-500">
                  <span className="font-medium text-yellow-700">נייטרלים:</span> רישומים בקטלוגים
                </div>
                <div className="bg-white rounded-lg p-3 border-r-4 border-red-500">
                  <span className="font-medium text-red-700">שליליים:</span> תלונות, ביקורות רעות
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              אסטרטגיית דחיקה ובנייה
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנחנו לא מוחקים תוכן שלילי (זה בדרך כלל לא אפשרי וגם לא חוקי). במקום זה אנחנו בונים נכסים חזקים ודוחפים אותם למעלה
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 text-green-800 p-3 rounded-lg w-fit mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">יצירת תכנים חיוביים</h3>
              <p className="text-gray-600 mb-6">
                בנייה של נכסים דיגיטליים חדשים שמציגים אותכם באור חיובי ומקצועי.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>מיקרו-אתרים עם <a href="https://eran-fixer.com" className="text-green-600 hover:text-green-800">בניית אתרים</a> מותאמת</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>פרופילים מקצועיים ברשתות שונות</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>מאמרים מקצועיים ותוכן איכותי</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>דפי נוכחות בפלטפורמות רלוונטיות</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-lg w-fit mb-6">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">קידום נכסים חזקים</h3>
              <p className="text-gray-600 mb-6">
                השימוש בטכניקות <a href="https://eranfixer.com" className="text-blue-600 hover:text-blue-800">קידום אתרים</a> מתקדמות כדי לדחוף את התוכן החיובי למקומות הגבוהים ביותר.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 ml-2" />
                  <span>אופטימיזציה לביטויים רלוונטיים</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 ml-2" />
                  <span>בניית קישורים איכותיים</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 ml-2" />
                  <span>שיפור ה-DA של נכסים קיימים</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 ml-2" />
                  <span>מיקוד בחיפושים מקומיים</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Local Visibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ביקורות ונראות מקומית
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ניהול מקצועי של ביקורות ודירוג ברשתות החברתיות ופלטפורמות מקומיות בירושלים
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-orange-600 text-white p-3 rounded-lg w-fit mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">רכבת ביקורות חיוביות מתועדת</h3>
              <p className="text-gray-600 mb-6">
                מערכת מובנית לעידוד לקוחות מרוצים לכתוב ביקורות חיוביות, תוך שמירה על כללי הפלטפורמות השונות.
              </p>
              <div className="space-y-4">
                <div className="bg-white border border-orange-200 rounded-lg p-4">
                  <div className="font-semibold text-orange-800 mb-2">Google Business Profile</div>
                  <div className="text-sm text-orange-600">יעד: 4.5+ כוכבים, 25+ ביקורות חדשות</div>
                </div>
                <div className="bg-white border border-orange-200 rounded-lg p-4">
                  <div className="font-semibold text-orange-800 mb-2">פלטפורמות מקצועיות</div>
                  <div className="text-sm text-orange-600">רישום ותחזוקה בדפי זהב, הדף הצהוב</div>
                </div>
                <div className="bg-white border border-orange-200 rounded-lg p-4">
                  <div className="font-semibold text-orange-800 mb-2">רשתות חברתיות</div>
                  <div className="text-sm text-orange-600">פיידבק חיובי בפייסבוק, אינסטגרם</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-purple-600 text-white p-3 rounded-lg w-fit mb-6">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">נוהל תגובה מקצועי</h3>
              <p className="text-gray-600 mb-6">
                תגובות מהירות ומקצועיות לכל ביקורת, גם חיובית וגם שלילית. כל תגובה מכוונת לפתרון ושיפור המוניטין.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-purple-800">זמן תגובה יעד</span>
                    <span className="text-2xl font-bold text-purple-600">4 שעות</span>
                  </div>
                  <div className="text-sm text-purple-600">בשעות עבודה רגילות</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-purple-800 mb-1">גישה אחראית</div>
                  <div className="text-sm text-purple-600">לא התכחשות - פתרון בונה ואמפתי</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-purple-800 mb-1">שפה מותאמת</div>
                  <div className="text-sm text-purple-600">תרבותית ומקצועית לקהל הירושלמי</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local PR & Partnerships */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              שיתופי פעולה ו-PR מקומי
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              בניית נוכחות חיובית דרך שותפויות מקומיות ויחסי ציבור ממוקדים בקהילה הירושלמית
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">מדיה מקומית</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• כתבות בעיתוני השכונות</li>
                <li>• ראיונות ברדיו ירושלים</li>
                <li>• פרסומים בבלוגים מקומיים</li>
                <li>• סיפורי הצלחה בקהילה</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">אירועים ונוכחות</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• השתתפות בכנסים מקצועיים</li>
                <li>• חסות לאירועי קהילה</li>
                <li>• הרצאות ומפגשים מקצועיים</li>
                <li>• פעילות חברתית מקומית</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">שותפויות עסקיות</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• שיתופי פעולה עם עסקים משלימים</li>
                <li>• חברות בלשכות מסחר</li>
                <li>• איגודים מקצועיים</li>
                <li>• רשתות עסקים מקומיות</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ניטור מתמשך והתראות
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מערכת ניטור חכמה שעוקבת אחר השינויים במוניטין שלכם ומתריעה על בעיות פוטנציאליות
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">מה אנחנו עוקבים אחרי</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full ml-3"></div>
                    <span>דירוגי חיפוש לשם שלכם + מילות מפתח</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full ml-3"></div>
                    <span>ביקורות חדשות בכל הפלטפורמות</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full ml-3"></div>
                    <span>אזכורים ברשתות החברתיות</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3"></div>
                    <span>תוכן חדש באתרי חדשות ובלוגים</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full ml-3"></div>
                    <span>דירוג ביקורות ושינויים במטדדים</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-4">התראות חכמות</h4>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-white/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">15 דקות</div>
                    <div className="text-sm">התראה על ביקורת חדשה</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-1">יומי</div>
                    <div className="text-sm">דוח מצב מוניטין</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">שבועי</div>
                    <div className="text-sm">ניתוח מעמיק + המלצות</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              אתיקה ושקיפות
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מה אנחנו כן עושים, מה אנחנו לא עושים, ואיך אנחנו שומרים על עבודה אתית וחוקית
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="bg-green-600 text-white p-3 rounded-lg w-fit mb-6">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">מה אנחנו כן עושים</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>בנייה של תוכן חיובי ואמיתי</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>עידוד ביקורות מלקוחות אמיתיים</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>תגובות מקצועיות ובונות</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>פנייה לפלטפורמות להסרת תוכן פוגעני</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>שקיפות מלאה בתהליכים</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="bg-red-600 text-white p-3 rounded-lg w-fit mb-6">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-4">מה אנחנו לא עושים</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>יצירת ביקורות מזויפות</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>מחיקה בלתי חוקית של תוכן</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>השתלטות על פרופילים של אחרים</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>הבטחות לא מוחשיות</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 ml-2 mt-0.5 flex-shrink-0" />
                  <span>שימוש בטקטיקות "כובע שחור"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              למה איתנו בירושלים
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ניהול מוניטין זה לא רק טכנולוגיה - זה גישה אנושית שמבינה את התרבות המקומית ודרך העבודה הירושלמית עם <a href="https://jerusalem.eranfixer.co.il" className="text-red-600 hover:text-red-800">קידום בעיר ירושלים</a> מקצועי.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-red-100 text-red-800 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">הבנה מקומית</h3>
              <p className="text-gray-600 text-sm">
                אנחנו מכירים את הקהילות השונות בירושלים והדרך שכל קהל מגיב לתוכן.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibront text-gray-900 mb-3">גישה הוליסטית</h3>
              <p className="text-gray-600 text-sm">
                לא רק טיפול בנזק - בניית מוניטין חזק לטווח ארוך עם כלים דיגיטליים מתקדמים.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-800 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">רגישות תרבותית</h3>
              <p className="text-gray-600 text-sm">
                עבודה שמתחשבת בנורמות המקומיות ובדרך שעסקים בירושלים מתנהלים.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 text-orange-800 p-4 rounded-2xl w-fit mx-auto mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">תקשורת שקופה</h3>
              <p className="text-gray-600 text-sm">
                דיווח שוטף על ההתקדמות, ללא הפתעות או הבטחות מוגזמות.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-red-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">47+</div>
              <div className="text-sm text-red-800 font-medium mb-2">פרויקטי ORM</div>
              <div className="text-xs text-red-600">שהושלמו בהצלחה בירושלים</div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">2.3</div>
              <div className="text-sm text-green-800 font-medium mb-2">חודשים ממוצע</div>
              <div className="text-xs text-green-600">לתוצאות משמעותיות</div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">91%</div>
              <div className="text-sm text-blue-800 font-medium mb-2">שיפור ממוצע</div>
              <div className="text-xs text-blue-600">בדירוג חיפוש לשם העסק</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              בדיקת מצב מוניטין חינמית
              <span className="block text-red-200 text-2xl lg:text-3xl mt-2">
                קבלו מפת דרכים ל-30 הימים הקרובים
              </span>
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              אבחון מלא של המצב הנוכחי, זיהוי הבעיות הדחופות ותוכנית פעולה מדויקת להחזרת השליטה במוניטין הדיגיטלי שלכם בירושלים.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-orange-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">שלב 1: סריקה</h3>
              <p className="text-red-100 text-sm">איתור כל התוכן הרלוונטי ברשת + ניתוח SERP</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-orange-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">שלב 2: אסטרטגיה</h3>
              <p className="text-red-100 text-sm">תוכנית מפורטת לשיפור המצב תוך 30-60 יום</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-green-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">שלב 3: יישום</h3>
              <p className="text-red-100 text-sm">התחלת עבודה עם ניטור והתראות מתמידים</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-900">
                <h3 className="text-2xl font-semibold mb-4">מה מקבלים בבדיקה החינמית:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span>מיפוי מלא של המוניטין הנוכחי</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span>זיהוי נקודות כאב ובעיות דחופות</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span>הערכת עלות ותוחלת זמן לטיפול</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span>המלצות לפעולות מיידיות</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">ללא עלות</div>
                  <div className="text-gray-600">אבחון מלא + ייעוץ ראשוני</div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                    <ArrowLeft className="h-5 w-5 ml-2" />
                    בואו נתחיל בבדיקה החינמית
                  </button>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <span>או חייגו ישירות:</span>
                    <a href="tel:052-212-6366" className="font-semibold text-red-600 hover:text-red-700">
                      052-212-6366
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-red-200 text-sm max-w-2xl mx-auto">
              כבר טיפלנו ב-47+ מקרי מוניטין בירושלים. זה הזמן לקחת שליטה על הסיפור הדיגיטלי שלכם.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReputationManagement;