import React from 'react';
import { Eye, Ear, Hand, Monitor, Phone, Mail } from 'lucide-react';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              הצהרת נגישות
            </h1>
            <p className="text-xl text-gray-600">
              EranFixer מחויבת לספק שירות נגיש לכל המשתמשים
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">
              המחויבות שלנו לנגישות
            </h2>
            <p className="text-blue-800 leading-relaxed">
              אתר EranFixer מתוכנן ומפותח בהתאם לתקן הישראלי ת"י 5568 ולהנחיות WCAG 2.1 ברמה AA. 
              אנו פועלים ברציפות לשיפור הנגישות ומחויבים לספק חוויית גלישה מיטבית לכלל המשתמשים.
            </p>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            תכונות נגישות באתר
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-blue-600 ml-3" />
                <h3 className="text-lg font-semibold text-gray-900">נגישות חזותית</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• ניגודיות גבוהה בין טקסט לרקע</li>
                <li>• תמיכה בהגדלת טקסט עד 200%</li>
                <li>• שימוש בצבעים עם תיאור טקסטואלי</li>
                <li>• תמיכה בקוראי מסך</li>
                <li>• חלופות טקסט לכל התמונות</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Hand className="h-6 w-6 text-green-600 ml-3" />
                <h3 className="text-lg font-semibold text-gray-900">נגישות מוטורית</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• ניווט מלא במקלדת</li>
                <li>• אזורי קליק מוגדלים</li>
                <li>• זמן תגובה מתכוונן</li>
                <li>• ביטול פעולות לא רצויות</li>
                <li>• תמיכה בטכנולוגיות עזר</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Ear className="h-6 w-6 text-purple-600 ml-3" />
                <h3 className="text-lg font-semibold text-gray-900">נגישות שמיעתית</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• כתוביות לכל תוכן וידאו</li>
                <li>• תמלילים למהות שמע</li>
                <li>• ביטול השמעה אוטומטית</li>
                <li>• פקדי עצמה נגישים</li>
                <li>• חלופות טקסט למהות שמע</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Monitor className="h-6 w-6 text-orange-600 ml-3" />
                <h3 className="text-lg font-semibold text-gray-900">נגישות קוגניטיבית</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• מבנה עמוד ברור ועקבי</li>
                <li>• ניווט פשוט ואינטואיטיבי</li>
                <li>• הודעות שגיאה ברורות</li>
                <li>• זמן מספיק לקריאה</li>
                <li>• הנחיות ברורות לפעולות</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Standards Compliance */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            תקנים ותאימות
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">תקן ישראלי</h3>
              <p className="text-sm text-blue-700">ת"י 5568 - נגישות תכנים באינטרנט</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-green-900 mb-2">WCAG 2.1</h3>
              <p className="text-sm text-green-700">רמת AA - תאימות בינלאומית</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-600 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                <Hand className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">נגישות מלאה</h3>
              <p className="text-sm text-purple-700">תמיכה בכל סוגי המוגבלויות</p>
            </div>
          </div>
        </div>

        {/* Known Issues */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            בעיות ידועות ופתרונות
          </h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="font-semibold text-orange-900 mb-3">אזורים הדורשים שיפור</h3>
            <ul className="space-y-2 text-orange-800">
              <li>• מפות אינטראקטיביות - חלופה טקסטואלית זמינה</li>
              <li>• תוכן וידאו מצד שלישי - בתהליך הוספת כתוביות</li>
              <li>• טפסי יצירת קשר - שיפור הודעות שגיאה</li>
            </ul>
            <p className="text-sm text-orange-700 mt-4">
              אנו עובדים באופן מתמיד על שיפור האזורים הללו ומעדכנים באופן שוטף.
            </p>
          </div>
        </div>

        {/* Feedback and Contact */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            משב ושיפור מתמיד
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">נתקלתם בבעיית נגישות?</h3>
              <p className="text-gray-600 mb-4">
                אנו מעוניינים לשמוע על כל בעיה או הצעה לשיפור הנגישות באתר. 
                המשוב שלכם חשוב לנו ועוזר לנו להמשיך ולשפר.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 ml-3" />
                  <span className="text-gray-700">052-212-6366</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 ml-3" />
                  <span className="text-gray-700">accessibility@eranfixer.co.il</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">התחייבות לשיפור</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• בדיקות נגישות רבעוניות</li>
                <li>• עדכוני תוכן בהתאם לסטנדרטים</li>
                <li>• הכשרת צוות מתמידה</li>
                <li>• שיתוף פעולה עם ארגוני נגישות</li>
                <li>• מעקב אחר טכנולוגיות חדשות</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            הצהרת נגישות זו עודכנה לאחרונה: ינואר 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;