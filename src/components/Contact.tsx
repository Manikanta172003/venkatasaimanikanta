import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    gsap.to(".submit-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_d3tsu1a', // Service ID
        'template_o96owqs', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'M0GLBlQXksEuojx3W' // Public Key
      );
      
      alert('Message sent successfully!');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };


  return (
    <section className="contact-section py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="contact-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project or just say hello.
          </p>
        </div>

        {/* Centered Contact Form */}
        <div className="flex justify-center mb-16">
          <div className="contact-form glass-card p-8 rounded-2xl w-full max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Contact me</h3>
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
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass-card border-primary/20 focus:border-primary bg-transparent"
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
        </div>

        {/* Social Icons Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">Let's Connect</h3>
          <div className="social-icons flex justify-center gap-6">
            <a 
              href="https://github.com/Manikanta172003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon group"
            >
              <div className="glass-card p-4 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/venkata-sai-manikanta-kamboji-864b95210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon group"
            >
              <div className="glass-card p-4 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </a>

            <a 
              href="mailto:kambojimanikanta000@gmail.com"
              className="social-icon group"
            >
              <div className="glass-card p-4 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <Mail className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </a>

            <a 
              href="tel:+917993590886"
              className="social-icon group"
            >
              <div className="glass-card p-4 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <Phone className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;