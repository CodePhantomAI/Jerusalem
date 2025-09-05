import React from 'react';
import { Users, BookOpen, Star } from 'lucide-react';

const LocalContent = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            תוכן שמנצח לוקאלית
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            התוכן שלך צריך להיות רלוונטי, מועיל ומחובר לקהילה הירושלמית. כל עמוד מבוסס על מחקר מדויק של צרכים מקומיים ומשולב עם <a href="https://eran-fixer.com" className="text-blue-600 hover:text-blue-800">בניית אתרים</a> מקצועית.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 text-green-800 p-3 rounded-lg w-fit mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">עמודי שירות לפי שכונות</h3>
            <p className="text-gray-600 mb-4">
              כל שכונה בירושלים היא עולם בפני עתמו. אנחנו יוצרים עמודים ייעודיים שמדברים על הצרכים הספציפיים של כל אזור.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span>מרכז העיר</span>
                <span className="text-green-600 font-medium">עסקי + תיירות</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>בית הכרם</span>
                <span className="text-blue-600 font-medium">מגורי איכות</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>גילה</span>
                <span className="text-purple-600 font-medium">פיתוח חדש</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-lg w-fit mb-6">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">מדריכים "איך לבחור ספק בירושלים"</h3>
            <p className="text-gray-600 mb-4">
              מדריכים מקיפים שעוזרים ללקוחות להבין מה חשוב בבחירת ספק בירושלים, תוך הדגשת המומחיות שלך.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
                איך לבדוק אמינות ספק בירושלים
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
                מה ההבדל בין ספקי שכונות שונות
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
                טיפים לעבודה עם מקצוענים מקומיים
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 text-orange-800 p-3 rounded-lg w-fit mb-6">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">עדויות לקוחות מקומיות</h3>
            <p className="text-gray-600 mb-4">
              עדויות אמיתיות מלקוחות ירושלמים, עם פרטים גיאוגרפיים שמחזקים את האמינות המקומית.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 mr-2">דוד מ. - קטמון</span>
              </div>
              <p className="text-sm text-gray-700 italic">
                "תוך חודשיים הטלפון לא מפסיק לצלצל. הם הבינו בדיוק מה הלקוחות בירושלים מחפשים."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-l from-blue-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">כל התוכן מותאם לירושלים</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            אנחנו לא פשוט מעתיקים תוכן. כל מילה נכתבת בהתחשבות בתרבות המקומית, הצרכים הספציפיים והשפה שהירושלמים מבינים.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-blue-700 px-4 py-2 rounded-full text-sm">שפה מקומית</span>
            <span className="bg-blue-700 px-4 py-2 rounded-full text-sm">הקשר תרבותי</span>
            <span className="bg-blue-700 px-4 py-2 rounded-full text-sm">דוגמאות רלוונטיות</span>
            <span className="bg-blue-700 px-4 py-2 rounded-full text-sm">פתרונות ירושלמיים</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalContent;