import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer, FloatWhatsApp, Nav, StickyBar } from './components/Shell';
import { EnquiryModal, EnquiryProvider } from './components/Enquiry';
import { Home } from './pages/Home';
import { DestinationDetail, DestinationsIndex } from './pages/Destinations';
import { PackageDetail, PackagesIndex } from './pages/Packages';
import { About, Blogs, ChannelPartnerPage, Contact } from './pages/Pages';
import './styles/tokens.css';
import './styles/app.css';
import './styles/nav.css';
import './styles/cards.css';
import './styles/mobile.css';

export const App: React.FC = () => (
  <EnquiryProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsIndex />} />
          <Route path="/destination/:slug" element={<DestinationDetail />} />
          <Route path="/packages" element={<PackagesIndex />} />
          <Route path="/package/:slug" element={<PackageDetail />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/channel-partner" element={<ChannelPartnerPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <StickyBar />
      <FloatWhatsApp />
      <EnquiryModal />
    </BrowserRouter>
  </EnquiryProvider>
);
