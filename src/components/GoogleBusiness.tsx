import React from 'react';
import { MapPin, Camera, MessageCircle } from 'lucide-react';

const GoogleBusiness = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Google Business Profile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            הכלי הכי חשוב לעסק מקומי. פרופיל עסקי מוקפד ומעודכן מבטיח שתופיעו במיקומים הנכונים עם המידע הנכון.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8">
            <div className="bg-red-600 text-white p-3 rounded-lg w-fit mb-6">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">NAP אחיד + קטגוריות</h3>
            <p className="text-gray-600 mb-6">
              שם, כתובת וטלפון זהים בכל מקום ברשת. הקטגוריות מותאמות בדייקנות לשירותים שלך.
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-red-600 mb-2">כתובת מדויקת</div>
                <div className="text-sm text-gray-600">רמב"ן 15, ירושלים, 9458215</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-red-600 mb-2">קטגוריות ראשיות</div>
                <div className="text-sm text-gray-600">מומחה SEO, יועץ שיווק דיגיטלי</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-red-600 mb-2">שעות פעילות</div>
                <div className="text-sm text-gray-600">א'-ה' 09:00-18:00, ו' 09:00-13:00</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
            <div className="bg-blue-600 text-white p-3 rounded-lg w-fit mb-6">
              <Camera className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">פוסטים ותמונות</h3>
            <p className="text-gray-600 mb-6">
              תוכן עדכני וחזותי שמראה פעילות עסקית והתמקצעות. כל פוסט מותאם לירושלים.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm font-medium text-blue-600">פוסט אירוע</div>
                <div className="text-xs text-gray-600 mt-1">"סדנת SEO לעסקים קטנים - מרכז העיר"</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm font-medium text-blue-600">הצעה מיוחדת</div>
                <div className="text-xs text-gray-600 mt-1">"25% הנחה על ניתוח SEO - תושבי ירושלים בלבד"</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm font-medium text-blue-600">עדכון שירות</div>
                <div className="text-xs text-gray-600 mt-1">"השקנו שירות SEO מהיר לעסקים בקטמון"</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm font-medium text-blue-600">תמונות המשרד</div>
                <div className="text-xs text-gray-600 mt-1">8 תמונות איכות גבוהה + וירטואלי טור</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
            <div className="bg-green-600 text-white p-3 rounded-lg w-fit mb-6">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ניהול ביקורות</h3>
            <p className="text-gray-600 mb-6">
              מערכת מקצועית לעידוד ביקורות חיוביות ותגובה מהירה ומקצועית לכל פניה.
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-600">דירוג ממוצע</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-green-600">4.8</span>
                    <span className="text-yellow-400 mr-1">★★★★★</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">מבוסס על 47 ביקורות אמיתיות</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-green-600 mb-1">זמן תגובה</div>
                <div className="text-sm text-gray-600">תוך 2 שעות בממוצע</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-green-600 mb-1">תגובות מותאמות</div>
                <div className="text-sm text-gray-600">כל תגובה אישית ומקצועית</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-800 to-indigo-900 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">למה Google Business Profile כל כך חשוב</h3>
            <p className="text-indigo-200 text-lg mb-8 max-w-4xl mx-auto">
              85% מהחיפושים המקומיים מתרחשים דרך מפות גוגל. פרופיל מושלם הוא ההבדל בין להיות במקום הראשון או בעמוד השלישי.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">3x</div>
                <div className="text-sm text-indigo-200">יותר קליקים לאתר</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">70%</div>
                <div className="text-sm text-indigo-200">מהחיפושים מביאים לביקור</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">2.5x</div>
                <div className="text-sm text-indigo-200">יותר שיחות למשרד</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">92%</div>
                <div className="text-sm text-indigo-200">אמון בביקורות מקוונות</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleBusiness;