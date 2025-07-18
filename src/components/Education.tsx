
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    id: 1,
    degree: "B.Tech (Computer Science and Engineering)",
    institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    location: "Chennai, India",
    year: "2024",
    grade: "CGPA: 8.7",
    icon: GraduationCap,
    color: "text-primary"
  },
  {
    id: 2,
    degree: "Intermediate (MPC)",
    institution: "Deeksha College",
    location: "Telangana, India", 
    year: "2020",
    grade: "GPA: 8.9",
    icon: Award,
    color: "text-secondary"
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    institution: "Sri Chaitanya School",
    location: "Andhra Pradesh, India",
    year: "2018", 
    grade: "GPA: 9.3",
    icon: BookOpen,
    color: "text-accent"
  }
];

const Education = () => {
  useEffect(() => {
    // Animate section title
    gsap.fromTo(".education-title",
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
          trigger: ".education-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animated timeline line
    gsap.fromTo(".timeline-line",
      {
        height: "0%"
      },
      {
        height: "100%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stagger education cards animation
    gsap.fromTo(".education-card",
      {
        opacity: 0,
        x: -80,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate timeline dots
    gsap.fromTo(".timeline-dot",
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section className="education-section py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="education-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey through computer science and technology
          </p>
        </div>

        {/* Timeline container */}
        <div className="timeline-container relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 w-1 bg-gradient-primary timeline-line opacity-60"></div>

          {/* Education cards */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`education-card flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row gap-8`}
              >
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10"></div>

                {/* Card content */}
                <div className={`glass-card p-6 rounded-2xl w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'
                } ml-16 md:ml-8`}>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`${edu.color} p-3 glass-card rounded-xl`}>
                      <edu.icon size={24} className="skill-icon" />
                    </div>

                    {/* Education details */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      
                      <p className="text-foreground/90 font-medium mb-1">
                        {edu.institution}
                      </p>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {edu.location}
                      </p>

                      {/* Grade indicator */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${(parseFloat(edu.grade.split(':')[1]) / 10) * 100}%` 
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold gradient-text">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
