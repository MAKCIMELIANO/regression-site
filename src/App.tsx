import { useEffect, useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Disclaimer from './components/Disclaimer/Disclaimer';
import Footer from './components/Footer/Footer';
import FreedomSection from './components/FreedomSection/FreedomSection';
import HeroSection from './components/HeroSection/HeroSection';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import SessionDetails from './components/SessionDetails/SessionDetails';
import ShouldAlsoKnow from './components/ShouldAlsoKnow/ShouldAlsoKnow';
import Testimonials from './components/Testimonials/Testimonials';
import WeCanHelpYouWith from './components/WeCanHelpYouWith/WeCanHelpYouWith';

function getPageFromHash() {
  return window.location.hash === '#privacy' ? 'privacy' : 'home';
}

function App() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (page === 'privacy') {
    return (
      <div className="app">
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <HeroSection />
      <FreedomSection />
      <AboutUs />
      <SessionDetails />
      <WeCanHelpYouWith />
      <Testimonials />
      <ShouldAlsoKnow />
      <Disclaimer />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
