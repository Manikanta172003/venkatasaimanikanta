
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

  const downloadResume = () => {
    // Open Google Drive direct download link
    const driveDownloadUrl = 'https://drive.google.com/file/d/1Bz4PHDNct_mxItXqBlR1s1gda9cFqsZ2/view?usp=sharing';
    window.open(driveDownloadUrl, '_blank');
  };

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
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Enhanced Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass scrolled backdrop-blur-strong' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="nav-item">
              <h1 className="heading-secondary text-3xl font-bold gradient-text-rainbow font-poppins">
                KV.Manikanta
              </h1>
            </div>

            {/* Enhanced Menu Button */}
            <button
              onClick={toggleMenu}
              className="nav-item glass-card p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group border border-primary/20 hover:border-primary/50"
            >
              {isOpen ? (
                <X className="w-7 h-7 text-primary group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu fixed inset-0 z-40">
          <div className="absolute inset-0 bg-background/98 backdrop-blur-strong">
            <div className="flex flex-col items-center justify-center h-full space-y-10">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="mobile-nav-item heading-secondary text-3xl md:text-4xl font-semibold text-foreground hover:text-primary transition-all duration-500 hover:scale-110 font-poppins"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline"
                className="mobile-nav-item glass-card px-12 py-6 text-xl font-medium border-primary/40 hover:border-primary/80 hover-scale mt-8"
                onClick={() => {
                  downloadResume();
                  toggleMenu();
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
