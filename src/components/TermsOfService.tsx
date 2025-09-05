import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle, Phone, Mail, Clock, DollarSign, Users, Lock } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              תנאי השירות
            </h1>
            <p className="text-xl text-gray-600">
              התנאים וההגבלות לשימוש בשירותי EranFixer
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">
              הסכמה לתנאים
            </h2>
            <p className="text-blue-800 leading-relaxed">
              השימוש באתר ובשירותי EranFixer מהווה הסכמה מלאה לתנאי השירות הבאים. 
              אנא קרא בעיון את התנאים לפני השימוש בשירותינו.
            </p>
            <div className="mt-4 text-sm text-blue-700">
              <strong>עדכון אחרון:</strong> ינואר 2024
            </div>
          </div>
        </div>

        {/* Service Definition */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-green-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">הגדרת השירותים</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">השירותים שאנו מספקים</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>קידום אתרים (SEO)</strong> - אופטימיזציה למנועי חיפוש</li>
                <li>• <strong>בניית אתרים</strong> - פיתוח ועיצוב אתרי אינטרנט</li>
                <li>• <strong>ניהול מוניטין</strong> - שיפור נוכחות דיגיטלית</li>
                <li>• <strong>שיווק דיגיטלי</strong> - קמפיינים והגברת נראות</li>
                <li>• <strong>יעוץ וליווי</strong> - הדרכה ותמיכה שוטפת</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 ml-2" />
                <h3 className="font-semibold text-yellow-900">חשוב להבין</h3>
              </div>
              <p className="text-yellow-800">
                השירותים שלנו מבוססים על שיטות עבודה מקצועיות וכלים מתקדמים, אך אינם מבטיחים תוצאות ספציפיות. 
                תוצאות בתחום השיווק הדיגיטלי תלויות במגוון גורמים חיצוניים.
              </p>
            </div>
          </div>
        </div>

        {/* Client Obligations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-purple-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">התחייבויות הלקוח</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">מידע ושיתוף פעולה</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• מתן מידע מדויק ומלא על העסק</li>
                <li>• שיתוף פעולה בתהליכי העבודה</li>
                <li>• מתן גישה לכלים נדרשים (אתר, חשבונות)</li>
                <li>• תגובה לפניות תוך זמן סביר</li>
                <li>• עמידה בלוחות הזמנים המוסכמים</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">איסורים ומגבלות</h3>
              <ul className="space-y-2 text-red-800">
                <li>• איסור שימוש בשירותים לפעילות בלתי חוקית</li>
                <li>• איסור פגיעה במוניטין או בזכויות צד שלישי</li>
                <li>• איסור העברת גישה לצדדים לא מורשים</li>
                <li>• איסור ניסיון פיצוח או פגיעה במערכות</li>
                <li>• איסור שימוש בתכנים המוגנים בזכויות יוצרים</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <DollarSign className="h-6 w-6 text-green-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">תנאי תשלום</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3">מדיניות התשלומים</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-green-800">
                  <li>• תשלום מראש לכל התקופה המוסכמת</li>
                  <li>• אפשרות לחלוקה לתשלומים (בתיאום)</li>
                  <li>• קבלות על כל התשלומים</li>
                  <li>• מע"מ כחוק לפי הדרישה</li>
                </ul>
                <ul className="space-y-2 text-green-800">
                  <li>• אין החזרים על עבודה שבוצעה</li>
                  <li>• ביטול פרויקט עד 48 שעות מההתחלה</li>
                  <li>• עמלות עבור שינויים מהותיים במהלך</li>
                  <li>• הפסקת עבודה במקרה של איחור בתשלום</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-900 mb-3">מקרי החזר כספי</h3>
              <p className="text-yellow-800 mb-3">
                החזר כספי יתאפשר במקרים הבאים בלבד:
              </p>
              <ul className="space-y-1 text-yellow-700">
                <li>• ביטול הפרויקט על ידי הלקוח תוך 48 שעות מתחילת העבודה</li>
                <li>• אי מתן השירות עקב כוח עליון או מחלה</li>
                <li>• הפרת התנאים על ידי EranFixer</li>
                <li>• החזר יהיה יחסי לעבודה שלא בוצעה בלבד</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warranties and Limitations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-blue-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">אחריות ומגבלות</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">מה אנחנו מבטיחים</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• ביצוע העבודה בהתאם למפורט בהצעת המחיר</li>
                <li>• שימוש בכלים ושיטות עבודה מקצועיות</li>
                <li>• שקיפות ודיווח שוטף על ההתקדמות</li>
                <li>• זמינות לתמיכה בשעות העבודה המוסכמות</li>
                <li>• שמירה על סודיות מידע הלקוח</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">מגבלות אחריות</h3>
              <ul className="space-y-2 text-red-800">
                <li>• אין ביצוע תוצאות ספציפיות (דירוגים, מכירות)</li>
                <li>• אין אחריות לנזקים עקיפים או אובדן רווחים</li>
                <li>• אחריות מוגבלת לשווי הפרויקט בלבד</li>
                <li>• אין אחריות לשינויים באלגוריתמים של גוגל</li>
                <li>• אין אחריות לפעילות מתחרים או צדדים שלישיים</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lock className="h-6 w-6 text-orange-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">קניין רוחני וזכויות יוצרים</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">זכויות הלקוח</h3>
              <ul className="space-y-2 text-orange-800">
                <li>• בעלות מלאה על התוכן שיוצר עבורכם</li>
                <li>• זכות שימוש בכל הקבצים והקודים</li>
                <li>• אין תלות טכנולוגית - קבלת כל הקבצים</li>
                <li>• זכות לעדכן ולשנות לאחר מסירת הפרויקט</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">זכויות EranFixer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• שמירת זכויות על שיטות העבודה והידע המקצועי</li>
                <li>• זכות להציג את הפרויקט בתיק העבודות</li>
                <li>• זכות להשתמש בלקחים מהפרויקט לפרויקטים עתידיים</li>
                <li>• שמירת זכויות על כלים פנימיים ותהליכים</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Level Agreement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-indigo-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">רמת שירות (SLA)</h2>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="font-semibold text-indigo-900 mb-4">התחייבויות זמן ותגובה</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-indigo-600 mb-2">4 שעות</div>
                <div className="text-sm text-indigo-800">תגובה לפניות דחופות</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-indigo-600 mb-2">24 שעות</div>
                <div className="text-sm text-indigo-800">תגובה לפניות רגילות</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-indigo-600 mb-2">5 ימים</div>
                <div className="text-sm text-indigo-800">דו"ח התקדמות חודשי</div>
              </div>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-6 w-6 text-red-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">סיום ההסכם</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-red-900 mb-3">מקרים לסיום מיידי</h3>
              <ul className="space-y-2 text-red-800">
                <li>• הפרת התנאים על ידי אחד הצדדים</li>
                <li>• אי תשלום למשך מעל 30 יום</li>
                <li>• שימוש בשירותים למטרות בלתי חוקיות</li>
                <li>• פגיעה במוניטין או איומים על הצוות</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3">סיום בהסכמה</h3>
              <p className="text-green-800 mb-3">
                כל צד יכול לסיים את ההסכם בהודעה מוקדמת של 30 יום. במקרה כזה:
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• מסירת כל החומרים שהוכנו עד למועד הסיום</li>
                <li>• התחשבנות פיננסית יחסית לעבודה שבוצעה</li>
                <li>• סיוע במעבר לספק אחר (במידת הצורך)</li>
                <li>• שמירה על סודיות גם לאחר סיום ההסכם</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact and Legal */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Phone className="h-6 w-6 text-blue-600 ml-3" />
            <h2 className="text-2xl font-semibold text-gray-900">פרטי קשר וסמכות שיפוט</h2>
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
                  <span className="text-gray-700">info@eranfixer.co.il</span>
                </div>
                <div className="text-gray-600 text-sm">
                  <strong>כתובת:</strong> רמב"ן 15, ירושלים
                </div>
                <div className="text-gray-600 text-sm">
                  <strong>ח.פ:</strong> 123456789 (למטרות הדגמה)
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">מידע משפטי</h3>
              <div className="space-y-2 text-gray-700">
                <div><strong>דין החל:</strong> חוקי מדינת ישראל</div>
                <div><strong>סמכות שיפוט:</strong> בתי המשפט בירושלים</div>
                <div><strong>שפת החוזה:</strong> עברית</div>
                <div><strong>גרסה:</strong> 2024.1</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              תנאי שירות אלה עודכנו לאחרונה: ינואר 2024 | 
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 mr-1">מדיניות פרטיות</a> | 
              <a href="/accessibility" className="text-blue-600 hover:text-blue-700 mr-1">הצהרת נגישות</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;