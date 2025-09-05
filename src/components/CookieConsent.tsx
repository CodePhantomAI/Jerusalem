import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Eye } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-enabled', 'true');
    localStorage.setItem('marketing-enabled', 'true');
    setShowConsent(false);
    // Enable analytics and marketing cookies
    enableAnalytics();
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary-only');
    localStorage.setItem('analytics-enabled', 'false');
    localStorage.setItem('marketing-enabled', 'false');
    setShowConsent(false);
  };

  const acceptCustom = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem('cookie-consent', 'custom');
    localStorage.setItem('analytics-enabled', analytics.toString());
    localStorage.setItem('marketing-enabled', marketing.toString());
    setShowConsent(false);
    if (analytics) enableAnalytics();
  };

  const enableAnalytics = () => {
    // Add Google Analytics or other analytics code here
    console.log('Analytics enabled');
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Cookie className="h-6 w-6 text-blue-600 ml-3" />
              <div className="text-right">
                <p className="text-gray-800 font-medium">
                  אתר זה משתמש בעוגיות
                </p>
                <p className="text-sm text-gray-600">
                  אנחנו משתמשים בעוגיות כדי לשפר את החוויה שלכם באתר ולמטרות אנליטיות
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowDetails(true)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                הגדרות מפורטות
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
              >
                רק נחוצות
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
              >
                קבלת כל העוגיות
              </button>
            </div>
          </div>
        ) : (
          <CookieDetails 
            onAcceptCustom={acceptCustom} 
            onBack={() => setShowDetails(false)}
            onAcceptAll={acceptAll}
            onAcceptNecessary={acceptNecessary}
          />
        )}
      </div>
    </div>
  );
};

const CookieDetails = ({ 
  onAcceptCustom, 
  onBack, 
  onAcceptAll, 
  onAcceptNecessary 
}: {
  onAcceptCustom: (analytics: boolean, marketing: boolean) => void;
  onBack: () => void;
  onAcceptAll: () => void;
  onAcceptNecessary: () => void;
}) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">הגדרות עוגיות מפורטות</h3>
        <button onClick={onBack} className="text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">עוגיות חיוניות</h4>
            <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">חובה</span>
          </div>
          <p className="text-sm text-gray-600">
            עוגיות הכרחיות לפעולה בסיסית של האתר, כולל אבטחה ונגישות. לא ניתן לבטל.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900 flex items-center">
              <Eye className="h-4 w-4 ml-2" />
              עוגיות אנליטיות
            </h4>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="mr-2 text-sm">אפשר</span>
            </label>
          </div>
          <p className="text-sm text-gray-600">
            עוגיות למעקב ביצועים, שימוש באתר וניתוח התנהגות משתמשים לשיפור השירות.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">עוגיות שיווק</h4>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={marketingEnabled}
                onChange={(e) => setMarketingEnabled(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="mr-2 text-sm">אפשר</span>
            </label>
          </div>
          <p className="text-sm text-gray-600">
            עוגיות למעקב פעילות לצורך פרסום ממוקד ומדידת יעילות קמפיינים.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-end">
        <button
          onClick={onAcceptNecessary}
          className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
        >
          רק חיוניות
        </button>
        <button
          onClick={() => onAcceptCustom(analyticsEnabled, marketingEnabled)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
        >
          שמור הגדרות
        </button>
        <button
          onClick={onAcceptAll}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
        >
          קבל הכל
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          המידע נשמר מקומית במכשיר שלכם. לפרטים נוספים: 
          <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 mr-1">מדיניות הפרטיות</a>
        </p>
      </div>
    </div>
  );
};

export default CookieConsent;