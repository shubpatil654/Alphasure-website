import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountryFlagsSection from './components/CountryFlagsSection';
import ServicesSection from './components/ServicesSection';
import PuzzleSection from './components/PuzzleSection';
import LeaderSection from './components/LeaderSection';
import WhatSetsUsApartSection from './components/WhatSetsUsApartSection';
import SoftwareNetworkSection from './components/SoftwareNetworkSection';
import GettingStartedSection from './components/GettingStartedSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import RequestCallModal from './components/RequestCallModal';
import PrivateLimitedPage from './components/PrivateLimitedPage';
import OnePersonCompanyPage from './components/OnePersonCompanyPage';
import LimitedLiabilityPartnershipPage from './components/LimitedLiabilityPartnershipPage';
import SecretarialCompliancePage from './components/SecretarialCompliancePage';
import PeriodicAccountingPage from './components/PeriodicAccountingPage';
import RealTimeAccountingPage from './components/RealTimeAccountingPage';
import ControllerServicesPage from './components/ControllerServicesPage';
import GstTdsCompliancePage from './components/GstTdsCompliancePage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';
import EverythingElsePage from './components/EverythingElsePage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full relative bg-[#0e1726] text-white flex flex-col justify-between selection:bg-[#FA5A16] selection:text-white overflow-x-hidden">
      {/* Top Navbar */}
      <div className="absolute top-0 left-0 right-0 z-40">
        <Navbar 
          onOpenModal={() => setModalOpen(true)} 
          activePage={activePage}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Main Content */}
      <main className="relative flex-1">
        {activePage === 'pvt-ltd' ? (
          <PrivateLimitedPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'opc' ? (
          <OnePersonCompanyPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'llp' ? (
          <LimitedLiabilityPartnershipPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'secretarial' ? (
          <SecretarialCompliancePage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'periodic-accounting' ? (
          <PeriodicAccountingPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'real-time-accounting' ? (
          <RealTimeAccountingPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'controller-services' ? (
          <ControllerServicesPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'gst-tds-compliance' ? (
          <GstTdsCompliancePage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'pricing' ? (
          <PricingPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'about' ? (
          <AboutPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'careers' ? (
          <CareersPage onOpenModal={() => setModalOpen(true)} />
        ) : activePage === 'everything-else' ? (
          <EverythingElsePage onOpenModal={() => setModalOpen(true)} />
        ) : (
          <>
            <Hero onOpenModal={() => setModalOpen(true)} />
            <CountryFlagsSection />
            <ServicesSection />
            <PuzzleSection />
            <LeaderSection />
            <WhatSetsUsApartSection />
            <SoftwareNetworkSection />
            <GettingStartedSection onOpenModal={() => setModalOpen(true)} />
            <ReviewsSection />
            <FaqSection onOpenModal={() => setModalOpen(true)} />
          </>
        )}
      </main>

      {/* Website Footer */}
      <Footer onOpenModal={() => setModalOpen(true)} />

      {/* Interactive Request Call Modal */}
      <RequestCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
