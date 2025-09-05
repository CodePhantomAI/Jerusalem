import React from 'react';
import { BarChart3, PhoneCall, TrendingUp } from 'lucide-react';

const Metrics = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            מדידות ושקיפות
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו מאמינים בשקיפות מלאה. כל חודש תקבלו דו"ח ברור עם המדדים החשובים ותוכנית פעולה לחודש הבא.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 text-orange-800 p-3 rounded-lg w-fit mb-6">
              <PhoneCall className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">KPI: שיחות/לידים/דירוגים</h3>
            <p className="text-gray-600 mb-6">
              המדדים שבאמת חשובים לעסק שלך. לא תנועה רלוונטית - פניות שהופכות ללקוחות.
            </p>
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-orange-800">שיחות חודשיות</span>
                  <span className="text-2xl font-bold text-orange-600">+127%</span>
                </div>
                <div className="text-sm text-orange-600">מ-18 ל-41 שיחות בממוצע</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-orange-800">לידים איכותיים</span>
                  <span className="text-2xl font-bold text-orange-600">+85%</span>
                </div>
                <div className="text-sm text-orange-600">פניות רלוונטיות שהופכות ללקוחות</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-orange-800">דירוגים עמוד ראשון</span>
                  <span className="text-2xl font-bold text-orange-600">12</span>
                </div>
                <div className="text-sm text-orange-600">מילות מפתח רלוונטיות בירושלים</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-lg w-fit mb-6">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">דו"ח חודשי קצר וברור</h3>
            <p className="text-gray-600 mb-6">
              לא 50 עמודי נתונים. דף אחד עם התוצאות החשובות, הסברים פשוטים ותוכנית לחודש הבא.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">דירוגים חדשים</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">+8</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">תנועה אורגנית</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">+32%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">המרות מהאתר</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">+45%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">ביקורות חדשות</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">+6</span>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-800 mb-1">יעדים לחודש הבא:</div>
                <div className="text-xs text-gray-600">דירוג "עורך דין ירושלים" למקום 1-3</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 text-green-800 p-3 rounded-lg w-fit mb-6">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">מדידות בזמן אמת</h3>
            <p className="text-gray-600 mb-6">
              גישה למערכת ניטור שמראה את התקדמות הקמפיין 24/7. תראו איך האתר שלך מטפס בדירוגים.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">89</div>
                  <div className="text-sm text-green-700 font-medium">מילות מפתח במעקב</div>
                  <div className="text-xs text-green-600 mt-1">עדכון יומי אוטומטי</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-gray-800">Top 3</div>
                  <div className="text-xs text-gray-600">23 ביטויים</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-gray-800">Top 10</div>
                  <div className="text-xs text-gray-600">67 ביטויים</div>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="text-sm font-medium text-yellow-800">התראות חכמות</div>
                <div className="text-xs text-yellow-700 mt-1">הודעה על שינויים חשובים בדירוגים</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">SLA - התחייבות לשקיפות</h3>
              <p className="text-gray-300 mb-6">
                אנחנו מתחייבים לזמני תגובה מהירים, דיווח שוטף וזמינות מלאה. העסק שלך משקיע ב-SEO - מגיע לכם לדעת בדיוק מה קורה.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full ml-4"></div>
                  <span>תגובה לפניות תוך 4 שעות עבודה</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full ml-4"></div>
                  <span>דו"ח חודשי עד ה-5 לכל חודש</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full ml-4"></div>
                  <span>פגישת סטטוס חודשית (אופציונלי)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full ml-4"></div>
                  <span>גישה למערכת הניטור 24/7</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold mb-4 text-center">מה שלא תמצאו אצל אחרים</h4>
              <div className="space-y-4">
                <div className="text-center p-4 bg-white/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">0</div>
                  <div className="text-sm">עלויות נסתרות</div>
                </div>
                <div className="text-center p-4 bg-white/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                  <div className="text-sm">שקיפות מחירים</div>
                </div>
                <div className="text-center p-4 bg-white/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24</div>
                  <div className="text-sm">שעות לעדכון דחוף</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;