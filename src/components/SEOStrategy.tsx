import React from 'react';
import { Search, Target, FileText } from 'lucide-react';

const SEOStrategy = () => {
  return (
    <section className="py-20 bg-white" id="seo-strategy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            איך נראית תוכנית SEO לירושלים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל עסק בירושלים צריך אסטרטגיה <a href="https://eranfixer.com" className="text-blue-600 hover:text-blue-800">קידום אתרים</a> שמבינה את המפה המקומית, הקהלים השונים והתחרות הייחודית של העיר
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-blue-800 text-white p-3 rounded-lg w-fit mb-6">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">מחקר ביטויים לפי שכונות</h3>
            <p className="text-gray-600 mb-6">
              אנחנו חוקרים איך תושבי כל שכונה מחפשים שירותים. "עורך דין בקטמון" דורש גישה שונה מ"עורך דין ברמות".
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <span className="font-medium text-blue-800">ביטויים ראשיים:</span> השירות + העיר
              </div>
              <div className="bg-white rounded-lg p-3">
                <span className="font-medium text-blue-800">ביטויים משניים:</span> השירות + שכונה
              </div>
              <div className="bg-white rounded-lg p-3">
                <span className="font-medium text-blue-800">Long tail:</span> שאלות ספציפיות מקומיות
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-blue-800 text-white p-3 rounded-lg w-fit mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">מיפוי כוונת חיפוש</h3>
            <p className="text-gray-600 mb-6">
              לא כל חיפוש זהה. אנחנו מבחינים בין מי שמחפש מידע, מי שמחפש ספק, ומי שמוכן לקנות עכשיו.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border-r-4 border-green-500">
                <span className="font-medium text-green-700">מסחרי:</span> "עלות שיפוץ דירה ירושלים"
              </div>
              <div className="bg-white rounded-lg p-3 border-r-4 border-blue-500">
                <span className="font-medium text-blue-700">מידעי:</span> "איך לבחור קבלן בירושלים"
              </div>
              <div className="bg-white rounded-lg p-3 border-r-4 border-orange-500">
                <span className="font-medium text-orange-700">לוקאלי:</span> "קבלן קרוב למושבה הגרמנית"
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-blue-800 text-white p-3 rounded-lg w-fit mb-6">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">בניית היררכיית תוכן לעיר</h3>
            <p className="text-gray-600 mb-6">
              מבנה האתר צריך לשקף את המבנה הגיאוגרافי של ירושלים ואת צרכי הלקוחות הפוטנציאליים.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <span className="text-2xl font-bold text-blue-800">↙</span>
                <span className="mr-2 font-medium">דף ראשי:</span> השירות + ירושלים
              </div>
              <div className="bg-white rounded-lg p-3">
                <span className="text-2xl font-bold text-blue-800">↙</span>
                <span className="mr-2 font-medium">קטגוריות:</span> לפי סוגי שירות
              </div>
              <div className="bg-white rounded-lg p-3">
                <span className="text-2xl font-bold text-blue-800">↙</span>
                <span className="mr-2 font-medium">דפי שכונה:</span> התמחות גיאוגרפית
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOStrategy;