import React from 'react';
import { Shield, Lock, Eye, Database, Phone, Mail, Cookie, User, FileText, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              מדיניות פרטיות
            </h1>
            <p className="text-xl text-gray-600">
              כך אנחנו שומרים על הפרטיות והמידע שלכם
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">
              התחייבות לפרטיות
            </h2>
            <p className="text-blue-800 leading-relaxed">
              EranFixer מחויבת להגן על הפרטיות שלכם ולהשתמש במידע האישי שלכם באופן אחראי ושקוף. 
              מדיניות זו מסבירה איך אנו אוספים, משתמשים ומגנים על המידע שלכם.
            </p>
          </div>
        </div>

        {/* Information Collection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Database className="h-6 w-6 text-purple-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">מידע שאנו אוספים</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <User className="h-5 w-5 text-blue-600 ml-2" />
                מידע אישי שאתם מספקים
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• שם מלא וכתובת אימייל (בטפסי יצירת קשר)</li>
                <li>• מספר טלפון (לשיחות ייעוץ)</li>
                <li>• שם העסק ותחום פעילות</li>
                <li>• פרטי פרויקט או שאילתות ספציפיות</li>
                <li>• כל מידע שתבחרו לשתף בתקשורת איתנו</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Eye className="h-5 w-5 text-green-600 ml-2" />
                מידע שנאסף אוטומטית
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• כתובת IP ומיקום גיאוגרפי כללי</li>
                <li>• סוג דפדפן ומערכת הפעלה</li>
                <li>• עמודים שביקרתם באתר ומשך הביקור</li>
                <li>• מקור הפנייה לאתר (מנוע חיפוש, קישור ישיר)</li>
                <li>• פעילות באתר (קליקים, גלילה)</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Cookie className="h-5 w-5 text-orange-600 ml-2" />
                עוגיות ומעקב
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• עוגיות חיוניות לתפקוד האתר</li>
                <li>• עוגיות אנליטיות (Google Analytics)</li>
                <li>• עוגיות שיווק ופרסום ממוקד</li>
                <li>• עוגיות העדפות משתמש</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-blue-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">כיצד אנו משתמשים במידע</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-700">שימושים עיקריים</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• מתן שירותי SEO ובניית אתרים</li>
                <li>• תקשורת ומתן מענה לפניותיכם</li>
                <li>• יצירת הצעות מחיר מותאמות</li>
                <li>• ניהול פרויקטים ושירות לקוחות</li>
                <li>• שליחת חומרי עזר ומידע מקצועי</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-700">שיפור ופיתוח</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ניתוח ביצועי האתר ושיפורו</li>
                <li>• הבנת צרכי הלקוחות ועדכון השירותים</li>
                <li>• מחקר שוק ופיתוח שירותים חדשים</li>
                <li>• אבטחת מידע ומניעת הונאות</li>
                <li>• עמידה בדרישות חוק ורגולציה</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-red-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">הגנה על המידע</h2>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-900 mb-3">אמצעי האבטחה שלנו</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-green-800">
                <li>• הצפנת SSL מלאה לכל התקשורת</li>
                <li>• שרתים מאובטחים ומעודכנים</li>
                <li>• גיבויים יומיים של כל המידע</li>
                <li>• הגבלות גישה למידע רגיש</li>
              </ul>
              <ul className="space-y-2 text-green-800">
                <li>• ניטור אבטחה 24/7</li>
                <li>• עדכוני אבטחה שוטפים</li>
                <li>• הכשרת צוות בנושאי אבטחה</li>
                <li>• אימות דו-שלבי למערכות פנימיות</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-5 w-5 text-red-600 ml-2" />
              <h3 className="font-semibold text-red-900">חשוב לדעת</h3>
            </div>
            <p className="text-red-800">
              למרות כל אמצעי האבטחה, אף מערכת אינה חסינה ב-100%. אנו פועלים ללא הפסקה לשמירה על המידע, 
              אך ממליצים גם לכם לנהוג בזהירות בשיתוף מידע רגיש באינטרנט.
            </p>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <User className="h-6 w-6 text-purple-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">שיתוף מידע עם צדדים שלישיים</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3">אנו לא מוכרים או מעבירים מידע אישי</h3>
              <p className="text-green-800">
                המידע האישי שלכם נשמר אצלנו ולא נמכר, נושכר או נמסר לצדדים שלישיים למטרות שיווקיות.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-900 mb-3">שיתוף מוגבל בלבד</h3>
              <p className="text-yellow-800 mb-3">אנו עשויים לשתף מידע במקרים הבאים בלבד:</p>
              <ul className="space-y-1 text-yellow-700">
                <li>• ספקי שירות טכניים (אחסון, אנליטיקס)</li>
                <li>• דרישה חוקית מרשויות מוסמכות</li>
                <li>• הגנה על זכויותינו החוקיות</li>
                <li>• עם הסכמתכם המפורשת בלבד</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lock className="h-6 w-6 text-indigo-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">הזכויות שלכם</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="font-semibold text-indigo-900 mb-3">זכויות בסיסיות</h3>
              <ul className="space-y-2 text-indigo-800">
                <li>• עיון במידע השמור עליכם</li>
                <li>• תיקון מידע שגוי או לא מדויק</li>
                <li>• מחיקת המידע שלכם</li>
                <li>• הפסקת עיבוד המידע</li>
                <li>• העברת המידע לספק אחר</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-semibold text-purple-900 mb-3">בקרת פרטיות</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• ביטול הסכמה לעיבוד מידע</li>
                <li>• הגדרת העדפות עוגיות</li>
                <li>• הסרה מרשימות תפוצה</li>
                <li>• הגבלת שימושים ספציפיים</li>
                <li>• תלונה לרשות הגנת הפרטיות</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">איך להפעיל את הזכויות</h3>
            <p className="text-gray-700 mb-4">
              לכל פנייה בנושא פרטיות או להפעלת זכויותיכם, פנו אלינו:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-600 ml-2" />
                <span>052-212-6366</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-600 ml-2" />
                <span>privacy@eranfixer.co.il</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Phone className="h-6 w-6 text-blue-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">יצירת קשר לעניני פרטיות</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">פרטי קשר</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 ml-3" />
                  <span className="text-gray-700">052-212-6366</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 ml-3" />
                  <span className="text-gray-700">privacy@eranfixer.co.il</span>
                </div>
                <div className="text-gray-600 text-sm">
                  <strong>כתובת:</strong> רמב"ן 15, ירושלים
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">זמני מענה</h3>
              <div className="space-y-2 text-gray-700">
                <div>א'-ה': 09:00-18:00</div>
                <div>ו': 09:00-13:00</div>
                <div className="text-blue-600 font-medium">מענה לפניות פרטיות תוך 48 שעות</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              מדיניות פרטיות זו עודכנה לאחרונה: ינואר 2024 | 
              <a href="/accessibility" className="text-blue-600 hover:text-blue-700 mr-1">הצהרת נגישות</a> | 
              <a href="/terms-of-service" className="text-blue-600 hover:text-blue-700 mr-1">תנאי שירות</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;