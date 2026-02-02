import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Skills from '@/react-app/components/Skills';
import Experience from '@/react-app/components/Experience';
import Projects from '@/react-app/components/Projects';
import Education from '@/react-app/components/Education';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
