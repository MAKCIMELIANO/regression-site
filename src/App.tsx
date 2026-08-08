import { useEffect, useRef, useState } from 'react';
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
  const prevPageRef = useRef(page);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const prevPage = prevPageRef.current;
    prevPageRef.current = page;

    // Якорі всередині лендингу (#contact тощо) — не чіпаємо, скролить браузер
    if (prevPage === page) return;

    if (page === 'privacy') {
      window.scrollTo(0, 0);
      return;
    }

    const { hash } = window.location;
    if (hash && hash !== '#privacy') {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [page]);

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
