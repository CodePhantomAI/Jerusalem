import React from 'react';
import { ArrowLeft, Palette, Zap, Code, Monitor, Smartphone, Globe, CheckCircle, Phone, Calendar } from 'lucide-react';

const WebDesignJerusalem = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                בניית אתרים בירושלים
                <span className="block text-purple-200 text-xl lg:text-2xl mt-2">
                  מהירים, יפים, ממירים
                </span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                אתר טוב בירושלים חייב להיות מהיר, נגיש ומכוון להמרה. אנחנו משלבים עיצוב נקי, חוויית משתמש חכמה ותשתית SEO-Ready עם <a href="https://eran-fixer.com" className="text-purple-200 hover:text-white underline">בניית אתרים</a> מקצועית – כך שהאתר שלך יעלה מהר, ייראה מצוין בכל מסך, ויתמוך בשיווק הלוקאלי שלך כבר מהיום הראשון.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  <ArrowLeft className="h-5 w-5 ml-2" />
                  קבלו דמו אתר ממותג לעסק הירושלמי שלכם
                </button>
                <button className="border-2 border-purple-300 text-purple-100 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors">
                  צפייה בתיק עבודות
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <Zap className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <p className="text-purple-200 font-medium">עד 1.6 שנ׳</p>
                  <p className="text-sm text-purple-300">זמן טעינה</p>
                </div>
                <div>
                  <CheckCircle className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <p className="text-purple-200 font-medium">7-14 יום</p>
                  <p className="text-sm text-purple-300">זמן פיתוח</p>
                </div>
                <div>
                  <Globe className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <p className="text-purple-200 font-medium">SEO-Ready</p>
                  <p className="text-sm text-purple-300">מהיום הראשון</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">מה תקבלו</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 ml-3" />
                    <span>אתר רספונסיבי מלא (מובייל + דסקטופ)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 ml-3" />
                    <span>אופטימיזציה למנועי חיפוש</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 ml-3" />
                    <span>תוכן מותאם לירושלים</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 ml-3" />
                    <span>אנליטיקס והגדרות המרה</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 ml-3" />
                    <span>תמיכה טכנית 3 חודשים</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-20 bg-white" id="website-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              איזה אתר העסק שלך צריך
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              כל עסק בירושלים הוא סיפור נפרד. אנחנו בונים את האתר המדויק לצרכים שלך ולקהל שלך עם <a href="https://eranfixer.co.il" className="text-purple-600 hover:text-purple-800">בניית אתרים זולים</a> איכותית ומקצועית
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-blue-800 text-white p-3 rounded-lg w-fit mb-6">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">דף נחיתה ממוקד שכונה</h3>
              <p className="text-gray-600 mb-6">
                דף אחד עוצמתי שמתמחה בשירות ספציפי לשכונה מסוימת. מושלם לקמפיינים וחיפושים מקומיים.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-blue-800">מתאים ל:</span> עסקי שירות מקומיים
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-blue-800">דוגמאות:</span> קבלן בקטמון, רופא בתלפיות
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-blue-800">זמן פיתוח:</span> 7-10 ימי עבודה
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-green-700 text-white p-3 rounded-lg w-fit mb-6">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">אתר תדמית לנותני שירות</h3>
              <p className="text-gray-600 mb-6">
                אתר מקיף עם עמודי שירות, תיק עבודות, צוות ויצירת קשר. בונה אמון ומציג מקצועיות.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-green-700">מתאים ל:</span> משרדי יעוץ, רופאים, עו"ד
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-green-700">כולל:</span> 5-8 עמודים + בלוג
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-green-700">זמן פיתוח:</span> 14-21 ימי עבודה
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-orange-600 text-white p-3 rounded-lg w-fit mb-6">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">חנות קטנה למכירות מקומיות</h3>
              <p className="text-gray-600 mb-6">
                חנות אונליין עם דגש על איסוף עצמי או משלוחים לירושלים. פשוטה לניהול וממוקדת המרות.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-orange-600">מתאים ל:</span> מוצרים מקומיים, אומנים
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-orange-600">כולל:</span> עד 50 מוצרים + תשלומים
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-medium text-orange-600">זמן פיתוח:</span> 10-18 ימי עבודה
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              מתודולוגיה
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              תהליך עבודה שקוף ומהיר שמתחיל באפיון מדויק ומסתיים באתר שעובד ומביא תוצאות
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 text-purple-800 p-3 rounded-lg w-fit mb-6">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">אפיון תמציתי לירושלים</h3>
              <p className="text-gray-600 mb-6">
                ישיבת אפיון של שעה שמתמקדת בקהל הירושלמי, המתחרים המקומיים והמסרים הנכונים.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>ניתוח קהל יעד לפי שכונות</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>מחקר מתחרים מקומיים</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>הגדרת מטרות ו-KPIs</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-lg w-fit mb-6">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">עיצוב קליל ונקי, RTL מלא</h3>
              <p className="text-gray-600 mb-6">
                עיצוב מותאם לתרבות הישראלית עם תמיכה מלאה בעברית, כיוון RTL ואסתטיקה מקומית.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>טיפוגרפיה עברית מותאמת</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>עיצוב רספונסיבי מלא</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>חוויית משתמש אינטואיטיבית</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 text-orange-800 p-3 rounded-lg w-fit mb-6">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">הטמעת אנליטיקס והגדרות המרה</h3>
              <p className="text-gray-600 mb-6">
                מעקב מדויק אחר ביצועים עם הגדרת יעדי המרה, מדידת ROI וניתוח התנהגות משתמשים.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>Google Analytics 4 מותקן</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>מעקב שיחות וטפסים</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  <span>דש מדידה פשוט</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed & Mobile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              מהירות ונייד
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אתרים שטוענים מהר, נראים מושלמים בכל מסך ומותאמים לכל סוגי הצרכים המיוחדים
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ציון CWV ו-Loading מתחת ל-2ש׳</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                כל אתר שאנחנו בונים עובר בדיקות מהירות חמורות לפני העלייה לאוויר. זמני טעינה מתחת לשתי שניות, Core Web Vitals מעולים ואופטימיזציה מלאה לכל סוגי הקישורים.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">95+</div>
                  <div className="text-sm text-green-700">ציון PageSpeed</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">1.6s</div>
                  <div className="text-sm text-blue-700">זמן טעינה ממוצע</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-sm text-purple-700">מובייל ידידותי</div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">AA</div>
                  <div className="text-sm text-orange-700">רמת נגישות</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">נגישות AA</h4>
              <p className="text-gray-600 mb-6">
                כל אתר עומד בדרישות הנגישות הישראליות ובתקן WCAG 2.1 ברמה AA. לא רק כי זה חוק - גם כי זה נכון.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-3" />
                  <span className="text-sm">ניגודיות גבוהה וצבעים נגישים</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-3" />
                  <span className="text-sm">תמיכה מלאה בקוראי מסך</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-3" />
                  <span className="text-sm">ניווט במקלדת בלבד</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-3" />
                  <span className="text-sm">טקסטים חלופיים לכל התמונות</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Ready Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SEO-Ready מהיום הראשון
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              כל אתר נבנה עם בסיס SEO חזק ומוכן לדירוגים גבוהים. לא צריך לחכות או לשלם נוסף.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">מפת אתר, מטא, כותרות</h3>
              <p className="text-gray-600 mb-6">
                כל העמודים מגיעים עם מטא תיאורים, כותרות H1-H6 מובנות, URL נקיים ומפת אתר אוטומטית למנועי חיפוש.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-900 mb-2">דוגמת URL מובנה:</div>
                  <code className="text-sm text-blue-600">/services/plumber-jerusalem-katamon</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-900 mb-2">כותרת מטא:</div>
                  <div className="text-sm text-gray-600">"שרברב בקטמון ירושלים | זמין 24/7 | אמין ומקצועי"</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-900 mb-2">מבנה כותרות:</div>
                  <div className="text-sm text-gray-600">H1 → H2 → H3 מסודר ולוגי</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">סכמות שירות/ארגון</h3>
              <p className="text-gray-600 mb-6">
                Schema markup מובנה שעוזר לגוגל להבין בדיוק מה העסק שלכם עושה ואיפה הוא פועל.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-blue-600 ml-3" />
                  <span className="text-sm">LocalBusiness Schema</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-600 ml-3" />
                  <span className="text-sm">Service Schema לכל שירות</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-purple-600 ml-3" />
                  <span className="text-sm">Review Schema לחוות דעת</span>
                </div>
                <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-orange-600 ml-3" />
                  <span className="text-sm">FAQ Schema למדור שאלות</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              דוגמאות ותיק עבודות
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              כמה מהפרויקטים שבנינו לעסקים בירושלים (פרטים זהים הוסרו לשמירה על פרטיות הלקוחות)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32"></div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">רופא שיניים - מרכז העיר</h3>
                <p className="text-sm text-gray-600 mb-4">אתר תדמית מקצועי עם מערכת קביעת תורים אינטגרטיבית</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>זמן פיתוח: 16 יום</span>
                  <span>ציון מהירות: 96</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-32"></div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">קבלן שיפוצים - בית הכרם</h3>
                <p className="text-sm text-gray-600 mb-4">דף נחיתה ממוקד עם גלריית עבודות וטופס פניה מהיר</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>זמן פיתוח: 9 ימים</span>
                  <span>ציון מהירות: 94</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-32"></div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">חנות מוצרי טבע - תלפיות</h3>
                <p className="text-sm text-gray-600 mb-4">חנות קטנה עם דגש על איסוף עצמי ומשלוחים מקומיים</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>זמן פיתוח: 14 יום</span>
                  <span>ציון מהירות: 91</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 h-32"></div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">משרד עורכי דין - רומה</h3>
                <p className="text-sm text-gray-600 mb-4">אתר מקצועי עם מאמרים משפטיים וטופסי יצירת קשר</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>זמן פיתוח: 21 יום</span>
                  <span>ציון מהירות: 98</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-32"></div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">מעצב פנים - גילה</h3>
                <p className="text-sm text-gray-600 mb-4">תיק עבודות חזותי עם גלריות אינטראקטיביות</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>זמן פיתוח: 18 יום</span>
                  <span>ציון מהירות: 93</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-32"></div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">מורה פרטי - פסגת זאב</h3>
                <p className="text-sm text-gray-600 mb-4">דף פשוט ויעיל עם לוח זמנים ואזור הורדת חומרים</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>זמן פיתוח: 7 ימים</span>
                  <span>ציון מהירות: 97</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              כל הפרויקטים הושלמו בזמן, עמדו בכל הדרישות הטכניות וקיבלו משוב חיובי מהלקוחות
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              לצפייה בתיק העבודות המלא
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              חבילות ומסלולים
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מחירים שקופים עם כל מה שאתם צריכים כדי להתחיל. ללא עלויות נסתרות או הפתעות
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">דף נחיתה</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">₪4,500</div>
                <p className="text-gray-600">עד ₪6,500 לפי מורכבות</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">דף אחד מקצועי וממוקד</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">עיצוב רספונסיבי מלא</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">SEO בסיסי מובנה</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">טופס יצירת קשר + אנליטיקס</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">זמן פיתוח: 7-10 ימי עבודה</span>
                </div>
              </div>

              <div className="text-center">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  התחלה מהירה
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-200">
              <div className="text-center mb-8">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                  הכי פופולרי
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">אתר תדמית</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">₪8,500</div>
                <p className="text-gray-600">עד ₪12,500 לפי היקף</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">5-8 עמודים מקצועיים</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">עיצוב מותאם אישית</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">SEO מתקדם + בלוג</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">גלריות ומערכת תוכן</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">זמן פיתוח: 14-21 ימי עבודה</span>
                </div>
              </div>

              <div className="text-center">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  הבחירה המומלצת
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">חנות מקומית</h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">₪11,500</div>
                <p className="text-gray-600">עד ₪18,500 לפי מורכבות</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">עד 50 מוצרים + חיפוש</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">מערכת תשלומים מובנית</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">ניהול מלאי בסיסי</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">איסוף עצמי + משלוחים</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-sm">זמן פיתוח: 10-18 ימי עבודה</span>
                </div>
              </div>

              <div className="text-center">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  בנייה מתקדמת
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">מה כלול בכל חבילה</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                  <span className="text-sm text-center">דומיין + אחסון שנה</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                  <span className="text-sm text-center">תמיכה טכנית 3 חודשים</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                  <span className="text-sm text-center">הדרכת ניהול תוכן</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                  <span className="text-sm text-center">אחריות טכנית מלאה</span>
                </div>
              </div>
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
              אנחנו לא עוד חברת פיתוח. אנחנו שותפים ארוכי טווח שמבינים את השוק הירושלמי והדרך שעסקים פה צריכים לעבוד עם <a href="https://jerusalem.eranfixer.co.il" className="text-purple-600 hover:text-purple-800">שיווק עסק בירושלים</a> מקצועי.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-purple-100 text-purple-800 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">גישה מודולרית</h3>
              <p className="text-gray-600 text-sm">
                כל פרויקט בנוי מרכיבים עצמאיים שאפשר להרחיב, לשנות או להתאים בקלות.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">50% אדם, 50% AI</h3>
              <p className="text-gray-600 text-sm">
                האסטרטגיה והיחסי אנוש - בני אדם. הקוד והאופטימיזציה - טכנולוגיה חכמה.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-800 p-4 rounded-2xl w-fit mx-auto mb-6">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">מקומיות אמיתית</h3>
              <p className="text-gray-600 text-sm">
                אנחנו מכירים כל שכונה בירושלים והמאפיינים הייחודיים של כל קהל.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 text-orange-800 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">שקיפות מלאה</h3>
              <p className="text-gray-600 text-sm">
                מחיר קבוע, לוח זמנים ברור, ותקשורת פתוחה לאורך כל הפרויקט.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">67+</div>
              <div className="text-sm text-purple-800 font-medium mb-2">אתרים שבנינו</div>
              <div className="text-xs text-purple-600">לעסקים בירושלים</div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">12.4</div>
              <div className="text-sm text-green-800 font-medium mb-2">ימי פיתוח ממוצעים</div>
              <div className="text-xs text-green-600">מקבלת משימה לעליה לאוויר</div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
              <div className="text-sm text-blue-800 font-medium mb-2">שביעות רצון לקוחות</div>
              <div className="text-xs text-blue-600">שממליצים עלינו למכרים</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              קבלו דמו אתר ממותג לעסק הירושלמי שלכם
              <span className="block text-purple-200 text-2xl lg:text-3xl mt-2">
                תוך 14 יום עבודה
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              אתר מותאם לירושלים עם התוכן הנכון, העיצוב הנכון וכל מה שצריך כדי להתחיל להביא לידים. לא תבנית גנרית - פתרון ייעודי שבנוי בדיוק בשבילכם.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-orange-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">שבוע 1</h3>
              <p className="text-purple-100 text-sm">אפיון, עיצוב ראשוני ובחירת פלטפורמה מתאימה</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-orange-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">שבוע 2</h3>
              <p className="text-purple-100 text-sm">פיתוח, הוספת תוכן ואינטגרציה של כלים נדרשים</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-green-500 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">סוף שבוע 2</h3>
              <p className="text-purple-100 text-sm">בדיקות, העלאה לאוויר והדרכה לשימוש</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-900">
                <h3 className="text-2xl font-semibold mb-4">מה תקבלו עכשיו (בחינם):</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span>ייעוץ והצעת מחיר מדויקת תוך 24 שעות</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span>מחקר מתחרים וניתוח שוק מקומי</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span>הצעה לעיצוב ומבנה אתר מותאם</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span>לוח זמנים ברור לכל השלבים</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">ללא התחייבות</div>
                  <div className="text-gray-600">ייעוץ + הצעה מפורטת</div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                    <ArrowLeft className="h-5 w-5 ml-2" />
                    בואו נתחיל לבנות
                  </button>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <span>או חייגו ישירות:</span>
                    <a href="tel:052-212-6366" className="font-semibold text-purple-600 hover:text-purple-700">
                      052-212-6366
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-purple-200 text-sm max-w-2xl mx-auto">
              כבר בנינו 67+ אתרים לעסקים בירושלים. תור שהאתר שלכם יתחיל להביא יותר לקוחות מהקהילה המקומית.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignJerusalem;