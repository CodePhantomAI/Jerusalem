import React from 'react';
import { ArrowLeft, MapPin, TrendingUp, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              קידום אתרים בירושלים
              <span className="block text-blue-200 text-xl lg:text-2xl mt-2">
                לוקאלי, מדויק, מביא פניות
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              עסקים בירושלים צריכים נוכחות דיגיטלית שמדברת מקומי. אנחנו בונים עבורך תכנית <a href="https://eranfixer.com/jerusalem-seo" className="text-blue-200 hover:text-white underline">קידום אתרים בירושלים</a> שמתחילה במחקר ביטויים לפי שכונות, ממשיכה בתוכן מדויק ובקישורים חכמים, ומסתיימת בלידים אמיתיים.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                <ArrowLeft className="h-5 w-5 ml-2" />
                בואו נבנה מסלול לידים לוקאלי
              </button>
              <button className="border-2 border-blue-300 text-blue-100 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors">
                קבלו ניתוח חינמי
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <MapPin className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <p className="text-blue-200 font-medium">16 שכונות</p>
                <p className="text-sm text-blue-300">כיסוי מלא</p>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <p className="text-blue-200 font-medium">עד 300%</p>
                <p className="text-sm text-blue-300">עלייה בפניות</p>
              </div>
              <div>
                <Clock className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <p className="text-blue-200 font-medium">1.6 שניות</p>
                <p className="text-sm text-blue-300">מהירות טעינה ממוצעת</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">שירות בכל רחבי ירושלים</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/20 rounded-lg p-3">מרכז העיר</div>
                <div className="bg-white/20 rounded-lg p-3">תלפיות</div>
                <div className="bg-white/20 rounded-lg p-3">בית הכרם</div>
                <div className="bg-white/20 rounded-lg p-3">פסגת זאב</div>
                <div className="bg-white/20 rounded-lg p-3">רמות</div>
                <div className="bg-white/20 rounded-lg p-3">קריית יובל</div>
                <div className="bg-white/20 rounded-lg p-3">גילה</div>
                <div className="bg-white/20 rounded-lg p-3">הר חומה</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;