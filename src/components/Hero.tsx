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

  const downloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Assumes resume.pdf is in public folder
    link.download = 'KV_Manikanta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-card/80" />
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

      {/* Floating orbs */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="floating-orb absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-xl" />
        <div className="floating-orb absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-primary rounded-full opacity-30 blur-lg" />
        <div className="floating-orb absolute top-1/2 right-1/3 w-16 h-16 bg-secondary rounded-full opacity-25 blur-md" />
      </div>

      {/* Hero content */}
      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        <div className="hero-title mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">
              K. Venkata Sai Manikanta
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-foreground/80">
            Software Developer
          </h2>
        </div>

        <div className="hero-subtitle mb-8">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming data into intelligent solutions with expertise in 
            <span className="text-primary"> Python</span>,
            <span className="text-secondary"> AWS</span>, and
            <span className="text-accent"> DevOps</span>
          </p>
        </div>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="neon-button px-8 py-6 text-lg font-medium bg-gradient-primary border-0 text-background hover:text-background"
          >
            Hire Me
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToProjects}
            className="glass-card px-8 py-6 text-lg font-medium border-primary/30 hover:border-primary"
          >
            View Projects
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={downloadResume}
            className="glass-card px-8 py-6 text-lg font-medium bg-secondary/20 hover:bg-secondary/30"
          >
            Download Resume
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;