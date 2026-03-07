import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Situations from './components/Situations';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Situations/>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
