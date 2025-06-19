import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import FreedomSection from './components/FreedomSection/FreedomSection';
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
import ShouldAlsoKnow from './components/ShouldAlsoKnow/ShouldAlsoKnow';
import WeCanHelpYouWith from './components/WeCanHelpYouWith/WeCanHelpYouWith';

function App() {
  return (
    <>
      <HeroSection />
      <FreedomSection />
      <AboutUs />
      <WeCanHelpYouWith />
      <Services />
      <ShouldAlsoKnow />
    </>
  );
}

export default App;
