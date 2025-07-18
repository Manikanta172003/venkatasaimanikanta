import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

    // Animate form inputs from left
    gsap.fromTo(".form-input",
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".contact-form",
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
        scale: 0.5
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".social-links",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    gsap.to(".submit-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="contact-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="contact-form glass-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-input">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass-card border-primary/20 focus:border-primary bg-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass-card border-primary/20 focus:border-primary bg-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass-card border-primary/20 focus:border-primary bg-transparent min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="submit-btn w-full neon-button bg-gradient-primary border-0 text-background hover:text-background py-6 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info and social links */}
          <div className="space-y-8">
            {/* Contact info */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">kambojimanikantaooo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary animate-pulse-glow" />
                  <span className="text-muted-foreground">Available for freelance work</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="social-links glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Manikanta172003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon glass-card p-4 rounded-xl hover:scale-110 transition-transform duration-300 group"
                >
                  <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="social-icon glass-card p-4 rounded-xl hover:scale-110 transition-transform duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-foreground group-hover:text-secondary transition-colors" />
                </a>
                <a
                  href="#"
                  className="social-icon glass-card p-4 rounded-xl hover:scale-110 transition-transform duration-300 group"
                >
                  <Mail className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;