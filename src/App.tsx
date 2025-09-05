import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from './components/CookieConsent';
import Header from './components/Header';
import Hero from './components/Hero';
import SEOStrategy from './components/SEOStrategy';
import LocalContent from './components/LocalContent';
import Technical from './components/Technical';
import Authority from './components/Authority';
import GoogleBusiness from './components/GoogleBusiness';
import Metrics from './components/Metrics';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WebDesignJerusalem from './pages/WebDesignJerusalem';
import ReputationManagement from './pages/ReputationManagement';
import Accessibility from './components/Accessibility';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SEOStrategy />
              <LocalContent />
              <Technical />
              <Authority />
              <GoogleBusiness />
              <Metrics />
              <WhyUs />
              <FAQ />
              <CTA />
            </>
          } />
          <Route path="/web-design-jerusalem" element={<WebDesignJerusalem />} />
          <Route path="/בניית-אתרים-ירושלים" element={<WebDesignJerusalem />} />
          <Route path="/jerusalem-orm" element={<ReputationManagement />} />
          <Route path="/ניהול-מוניטין-בירושלים" element={<ReputationManagement />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;