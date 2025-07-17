import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Animate footer content
    gsap.fromTo(".footer-content",
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating particles animation
    gsap.to(".footer-particle", {
      y: -30,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section relative py-16 px-6 border-t border-primary/10">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="footer-particle absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="footer-content max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              K. Venkata Sai Manikanta
            </h3>
            <p className="text-muted-foreground">
              Transforming ideas into intelligent digital solutions with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="glass-card p-3 rounded-lg hover:scale-110 transition-transform duration-300 group"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="glass-card p-3 rounded-lg hover:scale-110 transition-transform duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="#"
                className="glass-card p-3 rounded-lg hover:scale-110 transition-transform duration-300 group"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} K. Venkata Sai Manikanta. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with React, GSAP & Modern Web Technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;