import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Initialize smooth scrolling and other global animations
    gsap.to("body", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    // Hide scrollbar during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
