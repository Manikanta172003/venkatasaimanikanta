import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate navigation on load
    gsap.fromTo(".nav-item",
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.5
      }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      // Open animation
      gsap.to(".mobile-menu", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.fromTo(".mobile-nav-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.1
        }
      );
    } else {
      // Close animation
      gsap.to(".mobile-menu", {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card backdrop-blur-glass' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="nav-item">
              <h1 className="text-2xl font-bold gradient-text">
                KV.Manikanta
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-item text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button className="nav-item neon-button bg-gradient-primary border-0 text-background hover:text-background">
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden nav-item glass-card p-2 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-glass">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="mobile-nav-item text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="mobile-nav-item neon-button bg-gradient-primary border-0 text-background hover:text-background px-8 py-3 text-lg"
                onClick={toggleMenu}
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;