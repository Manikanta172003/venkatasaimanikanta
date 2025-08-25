import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    // Animate contact title
    gsap.fromTo(".contact-title",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate social icons
    gsap.fromTo(".social-icon",
      {
        opacity: 0,
        scale: 0.5,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".social-icons",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);


  return (
    <section className="contact-section py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section title */}
        <div className="contact-title mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities together
          </p>
        </div>

        {/* Social Icons */}
        <div className="social-icons flex justify-center items-center gap-8 md:gap-12">
          <a 
            href="https://github.com/Manikanta172003" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon group"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <Github className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/venkata-sai-manikanta-kamboji-864b95210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon group"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <Linkedin className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
          </a>

          <a 
            href="mailto:kambojimanikanta000@gmail.com"
            className="social-icon group"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <Mail className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
          </a>

          <a 
            href="tel:+917993590886"
            className="social-icon group"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <Phone className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;