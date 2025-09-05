import React from 'react';
import { Link, Users, Newspaper } from 'lucide-react';

const Authority = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            סמכות וקישורים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            גוגל רוצה לראות שאחרים מכירים אותך וממליצים עליך. אנחנו בונים רשת קישורים איכותית ומקומית שמחזקת את המעמד שלך בירושלים.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="bg-purple-100 text-purple-800 p-3 rounded-lg w-fit mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">שיתופי פעולה מקומיים</h3>
            <p className="text-gray-600 mb-6">
              יצירת קשרים עם עסקים משלימים בירושלים. קישור מאתר של עסק מקומי מכובד שווה יותר מ-10 קישורים מחול. זה חלק מ<a href="https://jerusalem.eranfixer.co.il" className="text-purple-600 hover:text-purple-800">שיווק עסק בירושלים</a> מקצועי.
            </p>
            <div className="space-y-3">
              <div className="border-r-4 border-purple-500 bg-purple-50 p-3 rounded">
                <div className="font-semibold text-purple-800">עסקים משלימים</div>
                <div className="text-sm text-purple-600">רשת הפניות הדדיות מקצועית</div>
              </div>
              <div className="border-r-4 border-purple-500 bg-purple-50 p-3 rounded">
                <div className="font-semibold text-purple-800">ארגונים מקומיים</div>
                <div className="text-sm text-purple-600">לשכות מסחר, איגודים מקצועיים</div>
              </div>
              <div className="border-r-4 border-purple-500 bg-purple-50 p-3 rounded">
                <div className="font-semibold text-purple-800">ספקים ולקוחות</div>
                <div className="text-sm text-purple-600">המלצות דו-כיווניות</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="bg-teal-100 text-teal-800 p-3 rounded-lg w-fit mb-6">
              <Link className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ציטוטים מקומיים</h3>
            <p className="text-gray-600 mb-6">
              רישום מקצועי במדריכים הישראליים החשובים ובאתרי המקומיים. NAP אחיד בכל המקומות.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">WallaSHopping</span>
                <span className="text-sm text-green-600 font-medium">רשום ✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">דפי זהב</span>
                <span className="text-sm text-green-600 font-medium">רשום ✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">הדף הצהוב</span>
                <span className="text-sm text-green-600 font-medium">רשום ✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">אתרי שכונה</span>
                <span className="text-sm text-orange-600 font-medium">בתהליך</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="bg-indigo-100 text-indigo-800 p-3 rounded-lg w-fit mb-6">
              <Newspaper className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">PR דיגיטלי</h3>
            <p className="text-gray-600 mb-6">
              פרסום מאמרים מקצועיים, ראיונות ותוכן איכותי שמעמיד אותך כמומחה בתחום ומביא קישורים טבעיים.
            </p>
            <div className="space-y-3">
              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                <div className="font-semibold text-indigo-800 mb-1">מאמרי חומר</div>
                <div className="text-sm text-indigo-600">
                  "5 טיפים לבחירת קבלן בירושלים" - כלכליסט מקומי
                </div>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                <div className="font-semibold text-indigo-800 mb-1">ראיונות מדיה</div>
                <div className="text-sm text-indigo-600">
                  רדיו ירושלים, עיתוני השכונות
                </div>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                <div className="font-semibold text-indigo-800 mb-1">פודקאסטים</div>
                <div className="text-sm text-indigo-600">
                  השתתפות כאורח מומחה
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-l from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">בניית סמכות מקומית</h3>
              <p className="text-gray-300 mb-6">
                קישורים איכותיים לא קונים - הם נבנים. אנחנו משקיעים בקשרים ארוכי טווח עם הקהילה העסקית הירושלמית.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">25+</div>
                  <div className="text-sm text-gray-400">שותפויות פעילות</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">180+</div>
                  <div className="text-sm text-gray-400">קישורים איכותיים</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">95%</div>
                  <div className="text-sm text-gray-400">מקישורים מקומיים</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold mb-4">אסטרטגיית קישורים מקצועית</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full ml-3"></span>
                  בדיקת פרופיל קישורים קיים
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full ml-3"></span>
                  מיפוי הזדמנויות מקומיות
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full ml-3"></span>
                  יצירת תוכן שמפנה קישורים
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full ml-3"></span>
                  ניטור ומדידה מתמשכת
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;