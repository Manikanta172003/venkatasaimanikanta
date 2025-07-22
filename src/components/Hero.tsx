import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate hero content
    tl.fromTo(".hero-title", 
      {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out"
      }
    )
    .fromTo(".hero-subtitle",
      {
        opacity: 0,
        y: 30,
        filter: "blur(5px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .fromTo(".hero-cta",
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      },
      "-=0.2"
    );

    // Floating orbs animation
    gsap.to(".floating-orb", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewResume = () => {
    // Open Google Drive view link
    const driveViewUrl = 'https://drive.google.com/file/d/1XyWhtZ8AoTEOOEzMYQcSGNneRn-4XrES/view';
    window.open(driveViewUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-card/90" />
      </div>

      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-10">
        <iframe 
          src='https://my.spline.design/orb-rzbouKEUO8DuMKWPyCA4Dgpb/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="opacity-60"
        />
      </div>

      {/* Enhanced Floating orbs */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="floating-orb absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-primary rounded-full opacity-20 blur-xl float-gentle" />
        <div className="floating-orb absolute top-3/4 right-1/4 w-32 h-32 bg-gradient-secondary rounded-full opacity-25 blur-lg float-delayed" />
        <div className="floating-orb absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-accent rounded-full opacity-30 blur-md float-slow" />
        <div className="floating-orb absolute top-1/3 left-1/2 w-20 h-20 bg-gradient-rainbow rounded-full opacity-20 blur-lg animate-pulse-glow" />
      </div>

      {/* Enhanced Hero content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="hero-title mb-8">
          <h1 className="heading-primary text-4xl md:text-6xl lg:text-7xl mb-6 font-poppins">
            Hi, I'm{' '}
            <span className="gradient-text-rainbow block md:inline">
              K. Venkata Sai Manikanta
            </span>
          </h1>
          <h2 className="heading-secondary text-3xl md:text-4xl font-light text-foreground/90 font-inter">
            Software Developer
          </h2>
        </div>

        <div className="hero-subtitle mb-10">
          <p className="text-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming data into intelligent solutions with expertise in 
            <span className="text-primary font-semibold"> Python</span>,
            <span className="text-secondary font-semibold"> AWS</span>, and
            <span className="text-accent font-semibold"> DevOps</span>
          </p>
        </div>

        <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            onClick={viewResume}
            className="neon-button px-10 py-7 text-xl font-semibold bg-gradient-primary border-0 text-background hover:text-background hover-scale-lg shadow-glow-primary"
          >
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToProjects}
            className="glass-card px-10 py-7 text-xl font-medium border-primary/40 hover:border-primary/80 hover-scale"
          >
            View Projects
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={scrollToContact}
            className="neon-button-secondary px-10 py-7 text-xl font-medium border-0 text-background hover:text-background hover-scale"
          >
            Hire Me
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center glass-card">
          <div className="w-2 h-4 bg-gradient-primary rounded-full mt-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;