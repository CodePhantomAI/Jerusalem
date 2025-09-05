import React from 'react';
import { Zap, Smartphone, Code } from 'lucide-react';

const Technical = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            טכני ומהירות
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            גוגל אוהב אתרים מהירים, והמשתמשים אוהבים אותם עוד יותר. האתר שלך יהיה מהיר, נגיש ומובנה בצורה מושלמת עם <a href="https://eranfixer.co.il" className="text-blue-600 hover:text-blue-800">בניית אתרים זולים</a> איכותית.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">אינדקס נקי ב-Bolt/Netlify</h3>
            <p className="text-gray-600 mb-6">
              פלטפורמות מודרניות שמבטיחות זמני טעינה מהירים ויציבות גבוהה. הקוד נכתב נקי ומוכן למנועי חיפוש.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>זמן טעינה ממוצע</span>
                <span className="font-semibold text-green-600">1.6 שניות</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>זמינות שרת</span>
                <span className="font-semibold text-green-600">99.9%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>אבטחה</span>
                <span className="font-semibold text-green-600">SSL מובנה</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-green-100 text-green-800 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Smartphone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Web Vitals</h3>
            <p className="text-gray-600 mb-6">
              המדדים החשובים של גוגל לחוויית משתמש - LCP, FID ו-CLS. נוודא שהאתר יקבל ציון מעולה בכל הפרמטרים.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">LCP</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">מעולה</span>
                </div>
                <p className="text-xs text-green-700 mt-1">תוכן עיקרי טוען תוך 1.8 שניות</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">FID</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">מעולה</span>
                </div>
                <p className="text-xs text-green-700 mt-1">תגובה לקליקים תוך 45ms</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">CLS</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">מעולה</span>
                </div>
                <p className="text-xs text-green-700 mt-1">יציבות חזותית מלאה</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 text-blue-800 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">מבנה URL ותוויות כותרת</h3>
            <p className="text-gray-600 mb-6">
              כל דף מקבל URL ברור וכותרות מובנות שגוגל יכול לקרוא בקלות. זה הבסיס לדירוג טוב.
            </p>
            <div className="text-right space-y-3 text-sm">
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="font-medium text-blue-800">URL דוגמה:</span>
                <div className="text-gray-600 mt-1 font-mono">
                  /seo-jerusalem/katamon
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="font-medium text-blue-800">מטא כותרת:</span>
                <div className="text-gray-600 mt-1">
                  קידום אתרים בקטמון - מומחה SEO מקומי
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="font-medium text-blue-800">Schema Markup:</span>
                <div className="text-gray-600 mt-1">
                  LocalBusiness + Service מובנה
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">הבטחה טכנית</h3>
            <p className="text-slate-200 text-lg mb-6 max-w-3xl mx-auto">
              כל אתר שאנחנו בונים עובר בדיקות מהירות ונגישות לפני העלייה לאוויר. אם הציון נופל מתחת ל-90 בכלי הבדיקה של גוגל, אנחנו מתקנים בחינם.
            </p>
            <div className="flex justify-center items-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">95+</div>
                <div className="text-sm text-slate-300">ציון PageSpeed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">AA</div>
                <div className="text-sm text-slate-300">נגישות</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-sm text-slate-300">מובייל ידידותי</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;