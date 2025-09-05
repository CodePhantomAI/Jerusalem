import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "כמה זמן לוקח לראות תוצאות מ-SEO בירושלים?",
      answer: "בדרך כלל נתחיל לראות תוצאות ראשוניות תוך 6-8 שבועות - עלייה בדירוגים לביטויים פחות תחרותיים ותנועה מ-Google Business Profile. תוצאות משמעותיות (דירוגים גבוהים לביטויים עיקריים ועלייה במכירות) מגיעות תוך 3-4 חודשים. בירושלים התחרות משתנה לפי תחום - שירותי בית יכולים לראות תוצאות מהר יותר מעורכי דין למשל."
    },
    {
      question: "מה ההבדל בין קידום בירושלים לבין SEO כללי?",
      answer: "קידום בירושלים דורש הבנה עמוקה של השוק המקומי - השכונות השונות, הקהלים, התחרות המיוחדת והדרך שאנשים מחפשים שירותים בעיר. אנחנו משתמשים בביטויים מקומיים, בונים רשת קישורים ירושלמית ומיטבים את Google Business Profile יחד עם בניית אתרים בירושלים מותאמת. בנוסף, אנחנו מכירים את העונתיות המיוחדת (חגים, תיירות) והצרכים הספציפיים של כל שכונה."
    },
    {
      question: "איך אתם עובדים עם עסקים בשכונות שונות?",
      answer: "כל שכונה בירושלים היא שוק נפרד. למשל, מרכז העיר זה תיירות ועסקים, קטמון זה משפחות צעירות, ורמות זה קהילה הדוסה. אנחנו יוצרים תוכן מותאם לכל שכונה, משתמשים בביטויים רלוונטיים ('רופא ילדים בקטמון' vs 'פלסטיקאי במרכז העיר') ובונים קישורים עם עסקים מקומיים באותו אזור."
    },
    {
      question: "כמה עולה קידום אתרים בירושלים?",
      answer: "המחירים תלויים בהיקף העבודה, גודל האתר והתחרותיות בתחום. חבילה בסיסית מתחילה מ-3,500₪ לחודש (עסק קטן, תחרות נמוכה). חבילה מקצועית 5,500-8,500₪ לחודש (עסק בינוני, כמה שירותים). חבילה מתקדמת מ-9,500₪ לחודש (עסק גדול, תחרות גבוהה). אנחנו תמיד נותנים הצעת מחיר מדויקת אחרי ניתוח ראשוני חינמי."
    },
    {
      question: "מה כלול בשירות SEO הירושלמי שלכם?",
      answer: "מחקר ביטויים מקומי מעמיק, יצירת תוכן איכותי לכל שכונה, אופטימיזציה טכנית מלאה של האתר, בניית קישורים מעסקים ירושלמיים, ניהול Google Business Profile, ניטור דירוגים 24/7, דו'ח חודשי מפורט וזמינות לתמיכה. בנוסף, אנחנו כוללים התאמות חינמיות למגמות עונתיות (חגים, תיירות, אירועי עיר)."
    },
    {
      question: "איך אני יודע שה-SEO עובד?",
      answer: "אתם מקבלים גישה למערכת ניטור שמראה את הדירוגים בזמן אמת, כמות החיפושים האורגניים והשיחות שמגיעות דרך האתר. בנוסף, דו'ח חודשי עם הנתונים החשובים - כמה שיחות נוספות, כמה לקוחות חדשים, איזה ביטויים עלו בדירוגים ומה התוכנית לחודש הבא. הכל שקוף ומדיד."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            שאלות נפוצות על SEO בירושלים
          </h2>
          <p className="text-xl text-gray-600">
            הכל מה שעסקים ירושלמיים רוצים לדעת על קידום אתרים מקומי
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-right flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex items-center">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-right flex-1 mr-4">
                  {faq.question}
                </h3>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="text-gray-600 leading-relaxed text-right border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-semibold mb-4">עוד שאלות על SEO בירושלים?</h3>
          <p className="text-blue-100 mb-6">
            שיחת ייעוץ חינמית של 15 דקות כדי לענות על השאלות שלכם ולראות איך אפשר לעזור
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            לקביעת שיחת ייעוץ חינמית
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;