import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import FreedomSection from './components/FreedomSection/FreedomSection';
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
import WeCanHelpYouWith from './components/WeCanHelpYouWith/WeCanHelpYouWith';

function App() {
  return (
    <>
      <HeroSection />
      <FreedomSection />
      <AboutUs />
      <WeCanHelpYouWith />
      <Services />
    </>
  );
}

export default App;
