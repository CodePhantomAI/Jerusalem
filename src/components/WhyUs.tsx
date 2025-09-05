import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            למה איתנו בירושלים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו לא עוד חברת SEO. אנחנו מומחים שמבינים את השוק הירושלמי, החגים, התרבות והדרך שעסקים פה עובדים. המתמחות שלנו ב<a href="https://jerusalem.eranfixer.co.il" className="text-blue-600 hover:text-blue-800">קידום בעיר ירושלים</a> נותנת לנו יתרון משמעותי.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 text-blue-800 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">מומחיות ירושלמית</h3>
            <p className="text-gray-600 text-sm">
              8 שנות התמחות בשוק הירושלמי. אנחנו מכירים כל שכונה, קהל וסטארט-אפ בעיר.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 text-green-800 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">תוצאות מדידות</h3>
            <p className="text-gray-600 text-sm">
              עבדנו עם 150+ עסקים ירושלמיים. ממוצע עלייה של 180% בפניות איכותיות תוך 6 חודשים.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 text-purple-800 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">50% אנושי, 50% AI</h3>
            <p className="text-gray-600 text-sm">
              אסטרטגיה ויחסי אנוש - בני אדם. ניתוח נתונים ואופטימיזציה - בינה מלאכותית.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 text-orange-800 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">מודולרית וגמישות</h3>
            <p className="text-gray-600 text-sm">
              כל פתרון בנוי מרכיבים עצמאיים שאפשר להרחיב, לשנות או להתאים בקלות לצרכים משתנים.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-l from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">הגישה של EranFixer</h3>
              <p className="text-slate-200 mb-6 leading-relaxed">
                אנחנו לא מאמינים ב"פתרון אחד שמתאים לכולם". כל עסק בירושלים הוא סיפור נפרד, עם קהל ייחודי, תחרות ספציפית ויעדים שונים. 
              </p>
              <p className="text-slate-200 leading-relaxed">
                הגישה המודולרית שלנו מאפשרת לבנות פתרון SEO שמתחיל קטן, גדל איתכם ומתאים את עצמו לשינויים בשוק.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold mb-4">למה עסקים בירושלים בוחרים בנו</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-teal-400 rounded-full ml-3"></div>
                  <span>הבנת השוק המקומי והתחרות</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-teal-400 rounded-full ml-3"></div>
                  <span>טכנולוגיה מתקדמת עם טאצ' אנושי</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-teal-400 rounded-full ml-3"></div>
                  <span>שקיפות מלאה בעבודה ובמחירים</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-teal-400 rounded-full ml-3"></div>
                  <span>זמינות ותמיכה מקצועית</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-teal-400 rounded-full ml-3"></div>
                  <span>תוצאות שאפשר למדוד ולקשור לעסק</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-sm text-blue-800 font-medium mb-2">עסקים ירושלמיים</div>
            <div className="text-xs text-blue-600">שעבדנו איתם בהצלחה</div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">280%</div>
            <div className="text-sm text-green-800 font-medium mb-2">עלייה ממוצעת</div>
            <div className="text-xs text-green-600">בלידים איכותיים תוך שנה</div>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-sm text-orange-800 font-medium mb-2">שביעות רצון</div>
            <div className="text-xs text-orange-600">לקוחות ממליצים עלינו</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;