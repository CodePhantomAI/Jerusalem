import React from 'react';
import { Search, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg ml-3">
                <Search className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold">EranFixer</h2>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              מומחים ב<a href="https://eranfixer.com" className="text-gray-300 hover:text-white">קידום אתרים</a> ובניית מערכות דיגיטליות לעסקים בירושלים. 
              אנחנו משלבים מודולריות, חדשנות וגישה אישית.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">השירותים שלנו</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#seo" className="hover:text-white transition-colors">קידום אתרים SEO</a></li>
              <li><a href="/web-design-jerusalem" className="hover:text-white transition-colors">בניית אתרים</a></li>
              <li><a href="#marketing" className="hover:text-white transition-colors">שיווק דיגיטלי</a></li>
              <li><a href="/jerusalem-orm" className="hover:text-white transition-colors">ניהול מוניטין</a></li>
              <li><a href="#automation" className="hover:text-white transition-colors">אוטומציה עסקית</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">אזורי שירות בירושלים</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>מרכז העיר</li>
              <li>קטמון ושכונות הדרום</li>
              <li>בית הכרם ועין כרם</li>
              <li>תלפיות וגילה</li>
              <li>פסגת זאב ורמות</li>
              <li>קריית יובל והמושבה הגרמנית</li>
              <li>רוממה ועיר גנים</li>
              <li>הר חומה ואזור התיירות</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">צור קשר</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 ml-3 text-blue-400" />
                <a href="tel:052-212-6366" className="hover:text-white transition-colors">052-212-6366</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 ml-3 text-blue-400" />
                <a href="mailto:info@eranfixer.co.il" className="hover:text-white transition-colors">info@eranfixer.co.il</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 ml-3 mt-1 text-blue-400" />
                <span>רמב"ן 15, ירושלים<br />זמינים לפגישות בכל רחבי העיר</span>
              </div>
            </div>

            <div className="mt-6 bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-sm mb-2">שעות פעילות</h4>
              <div className="text-sm text-gray-400">
                <div>א'-ה': 09:00-18:00</div>
                <div>ו': 09:00-13:00</div>
                <div className="mt-1 text-blue-400">תמיכה דחופה 24/7</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 EranFixer. כל הזכויות שמורות.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/terms-of-service" className="hover:text-white transition-colors">תנאי שירות</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">מדיניות פרטיות</a>
              <a href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;