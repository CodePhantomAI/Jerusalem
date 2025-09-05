import React from 'react';
import { ArrowLeft, Phone, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            בואו נבנה מסלול לידים לוקאלי
            <span className="block text-blue-200 text-2xl lg:text-3xl mt-2">
              ל-30 הימים הקרובים
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            תוך חודש נביא את העסק שלכם למיקומים המובילים בחיפושי ירושלים עם <a href="https://eranfixer.com/jerusalem-seo" className="text-blue-200 hover:text-white underline">בניית אתרים בירושלים</a> מותאמת SEO. 
            לא הבטחות ריקות - תוכנית ברורה עם יעדים מדידים ולוח זמנים מדויק.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="bg-orange-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">שבוע 1-2</h3>
            <p className="text-blue-100 text-sm">מחקר מקומי מעמיק, אופטימיזציה טכנית, ייעול Google Business Profile</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="bg-orange-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">שבוע 3-4</h3>
            <p className="text-blue-100 text-sm">תוכן מותאם שכונות, תחילת דירוגים לביטויים פחות תחרותיים</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="bg-green-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">שבוע 4+</h3>
            <p className="text-blue-100 text-sm">עלייה ראשונה בשיחות וביקורים, תחילת מדידת ROI</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-900">
              <h3 className="text-2xl font-semibold mb-4">מה תקבלו עכשיו (בחינם):</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                  <span>ניתוח מצב SEO נוכחי + פערים מול המתחרים</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                  <span>מיפוי הזדמנויות לידים בירושלים</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                  <span>תוכנית פעולה מדויקת ל-90 הימים הראשונים</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                  <span>הערכת עלות-תועלת מדויקת</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">ללא התחייבות</div>
                <div className="text-gray-600">שיחת ייעוץ + ניתוח ראשוני</div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  <ArrowLeft className="h-5 w-5 ml-2" />
                  קביעת פגישת ייעוץ חינמית
                </button>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <span>או חייגו ישירות:</span>
                  <a href="tel:052-212-6366" className="font-semibold text-blue-600 hover:text-blue-700">
                    052-212-6366
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-200 text-sm max-w-2xl mx-auto">
            כבר עזרנו ל-150+ עסקים בירושלים להכפיל את מספר הלקוחות דרך חיפוש אורגני. 
            תור שהעסק שלכם יתחיל לקבל יותר פניות מלקוחות מקומיים.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;