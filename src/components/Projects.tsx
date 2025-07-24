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
    tech: ["Python", "NumPy", "Pandas", "Tkinter", "yfinance", "Matplotlib", "Real-Time Data Processing", "Data Visualization", "Git & GitHub"],
    github: "https://github.com/Manikanta172003/real-time-stock-dashboard",
    image: stockDashboardImg
  },
  {
    id: 2,
    title: "Enhanced Cryptocurrency Price Prediction Using XGBoost Algorithm in Machine Learning: A Comparative Analysis",
    description: "Advanced machine learning model developed during internship at Shiash Info Solutions using XGBoost algorithm with GridSearchCV optimization and comprehensive feature engineering for enhanced cryptocurrency price forecasting.",
    tech: ["Python", "XGBoost", "GridSearchCV", "Feature Engineering", "Machine Learning", "Data Analysis", "Model Evaluation", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/Manikanta172003/Crypto-currency",
    image: cryptoPredictionImg,
    featured: true
  },
  {
    id: 3,
    title: "Predicting Fake News Using ML",
    description: "Machine learning application to detect and classify fake news articles using NLP and classification algorithms.",
    tech: ["Python", "ML(Logistic Regression)", "pandas", "numpy", "matplotlib", "TensorFlow"],
    github: "https://github.com/Manikanta172003/Predicting-fake-news-using-Machine-learning",
    image: fakeNewsDetectionImg
  },
  {
    id: 4,
    title: "Railway Ticket Management",
    description: "Comprehensive railway ticket booking and management system with user authentication and booking tracking.",
    tech: ["Python"],
    github: "https://github.com/Manikanta172003/Railwayticketmanagement",
    image: railwayManagementImg
  },
  {
    id: 5,
    title: "Bank Management System",
    description: "Secure banking system with transaction management, account handling, and comprehensive reporting features.",
    tech: ["Python"],
    github: "https://github.com/Manikanta172003/Bankmangementsystem",
    image: bankManagementImg
  },
  {
    id: 6,
    title: "Supermarket Billing",
    description: "Point-of-sale system for supermarket billing with inventory management and receipt generation.",
    tech: ["Python"],
    github: "https://github.com/Manikanta172003/Super-market-billing",
    image: supermarketBillingImg
  },
  {
    id: 7,
    title: "To Do List",
    description: "Feature-rich task management application with priority settings, deadlines, and progress tracking.",
    tech: ["Python"],
    github: "https://github.com/Manikanta172003/ToDolsit",
    image: todoListImg
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
        <div className="projects-title text-center mb-20">
          <h2 className="heading-primary text-5xl md:text-6xl font-bold gradient-text-rainbow mb-6 font-poppins">
            Featured Projects
          </h2>
          <p className="text-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card glass-card p-6 rounded-2xl group cursor-pointer ${
                project.featured ? 'ring-2 ring-primary/50 bg-gradient-to-br from-primary/5 to-transparent' : ''
              }`}
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
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary text-background rounded-full">
                      Internship
                    </span>
                  )}
                </div>
                
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

      </div>
    </section>
  );
};

export default Projects;