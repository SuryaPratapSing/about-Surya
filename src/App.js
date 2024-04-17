import './App.css';
import Contact from './Components/Contact/Contact';
import Experiance from './Components/Experiance/Experiance';
import Footer from './Components/Footer/Footer';
import Hero from './Components/HeroSection/Hero';
import Knowladge from './Components/Knowladge/Knowladge';
import Nav from './Components/Navbar/Nav';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import Section from './Components/Section/Section';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ProgressBar />
      <Knowladge />
      <Experiance />
      <Section />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
