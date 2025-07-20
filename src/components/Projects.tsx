import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Real-Time Stock Dashboard",
    description: "Interactive dashboard displaying live stock prices with advanced analytics and predictions using Python and AWS.",
    tech: ["Python", "AWS", "React", "WebSocket"],
    image: "project-1"
  },
  {
    id: 2,
    title: "Fake News Detection",
    description: "Machine learning model to detect fake news articles using NLP techniques and neural networks.",
    tech: ["Python", "TensorFlow", "NLP", "Pandas"],
    image: "project-2"
  },
  {
    id: 3,
    title: "Sentiment Analysis Engine",
    description: "Advanced sentiment analysis tool for social media data with real-time processing capabilities.",
    tech: ["Python", "NLTK", "MongoDB", "API"],
    image: "project-3"
  },
  {
    id: 4,
    title: "Cryptocurrency Price Prediction",
    description: "AI-powered cryptocurrency price prediction system with time-series analysis and forecasting.",
    tech: ["Python", "Scikit-learn", "Time Series", "API"],
    image: "project-4"
  },
  {
    id: 5,
    title: "EBook Audio Reader",
    description: "Text-to-speech application that converts eBooks to audio with customizable voice settings.",
    tech: ["Python", "TTS", "GUI", "Audio Processing"],
    image: "project-5"
  },
  {
    id: 6,
    title: "Bank Management System",
    description: "Comprehensive banking system with secure transactions, user management, and real-time reporting.",
    tech: ["C++", "SQL", "Database", "Security"],
    image: "project-6"
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
              {/* Project image placeholder */}
              <div className="w-full h-48 bg-gradient-primary rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {project.id}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
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
                    className="flex-1 glass-card border-primary/30 hover:border-primary group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-card border-secondary/30 hover:border-secondary group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Demo
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