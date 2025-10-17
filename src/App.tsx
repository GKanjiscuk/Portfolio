import { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { AnimatedCode } from './components/AnimatedCode';
function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatedCode />
      <Navigation />
      <MobileNav />
      <main className="relative z-10 bg-transparent text-white lg:mr-24">
        <Hero />
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;