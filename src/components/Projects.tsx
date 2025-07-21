import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

// Import project images
import stockDashboardImg from '@/assets/project-stock-dashboard.jpg';
import railwayManagementImg from '@/assets/project-railway-management.jpg';
import todoListImg from '@/assets/project-todo-list.jpg';
import bankManagementImg from '@/assets/project-bank-management.jpg';
import supermarketBillingImg from '@/assets/project-supermarket-billing.jpg';
import cryptoPredictionImg from '@/assets/project-crypto-prediction.jpg';
import fakeNewsDetectionImg from '@/assets/project-fake-news-detection.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Real Time Stock Dashboard",
    description: "Interactive dashboard displaying live stock prices with advanced analytics and real-time data visualization.",
    tech: ["Python", "React", "WebSocket", "API"],
    github: "https://github.com/Manikanta172003/real-time-stock-dashboard",
    image: stockDashboardImg
  },
  {
    id: 2,
    title: "Railway Ticket Management",
    description: "Comprehensive railway ticket booking and management system with user authentication and booking tracking.",
    tech: ["Java", "Database", "GUI", "Management"],
    github: "https://github.com/Manikanta172003/Railwayticketmanagement",
    image: railwayManagementImg
  },
  {
    id: 3,
    title: "To Do List",
    description: "Feature-rich task management application with priority settings, deadlines, and progress tracking.",
    tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com/Manikanta172003/ToDolsit",
    image: todoListImg
  },
  {
    id: 4,
    title: "Bank Management System",
    description: "Secure banking system with transaction management, account handling, and comprehensive reporting features.",
    tech: ["C++", "Database", "Security", "Management"],
    github: "https://github.com/Manikanta172003/Bankmangementsystem",
    image: bankManagementImg
  },
  {
    id: 5,
    title: "Supermarket Billing",
    description: "Point-of-sale system for supermarket billing with inventory management and receipt generation.",
    tech: ["Python", "GUI", "Database", "Billing"],
    github: "https://github.com/Manikanta172003/Super-market-billing",
    image: supermarketBillingImg
  },
  {
    id: 6,
    title: "Crypto Currency Price Prediction",
    description: "Machine learning model for predicting cryptocurrency prices using historical data and market analysis.",
    tech: ["Python", "ML", "Data Analysis", "Prediction"],
    github: "https://github.com/Manikanta172003/Crypto-currency",
    image: cryptoPredictionImg
  },
  {
    id: 7,
    title: "Predicting Fake News Using ML",
    description: "Machine learning application to detect and classify fake news articles using NLP and classification algorithms.",
    tech: ["Python", "ML", "NLP", "Classification"],
    github: "https://github.com/Manikanta172003/Predicting-fake-news-using-Machine-learning",
    image: fakeNewsDetectionImg
  }
];

const Projects = () => {
  useEffect(() => {
    // Animate section title
    gsap.fromTo(".projects-title",
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
          trigger: ".projects-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate project cards with stagger
    gsap.fromTo(".project-card",
      {
        opacity: 0,
        y: 80,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section id="projects" className="projects-section py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="projects-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card p-6 rounded-2xl group cursor-pointer"
            >
              {/* Project image */}
              <div className="w-full h-48 rounded-xl mb-6 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Project content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full glass-card border-primary/30 hover:border-primary group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="neon-button px-8 py-6 text-lg bg-gradient-primary border-0 text-background hover:text-background"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;