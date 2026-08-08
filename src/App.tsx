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

function App() {
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
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

export default App;
