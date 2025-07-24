import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, CheckCircle, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    // Animate section title
    gsap.fromTo(".experience-title",
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
          trigger: ".experience-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate experience card
    gsap.fromTo(".experience-card",
      {
        opacity: 0,
        x: -100,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-content",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate achievements with stagger
    gsap.fromTo(".achievement-item",
      {
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".achievements-list",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section className="experience-section py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="experience-title text-center mb-16">
          <h2 className="heading-primary text-5xl md:text-6xl font-bold gradient-text-rainbow mb-6 font-poppins">
            Professional Experience
          </h2>
          <p className="text-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Applying academic knowledge to real-world challenges in data science and machine learning
          </p>
        </div>

        {/* Experience content */}
        <div className="experience-content">
          <div className="experience-card glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {/* Company header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h3 className="heading-secondary text-3xl md:text-4xl font-bold text-foreground mb-2 font-poppins">
                    Data Science Intern
                  </h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="text-xl md:text-2xl font-semibold text-primary">
                      Shiash Info Solutions
                    </span>
                  </div>
                </div>
                
                {/* Duration and location */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Mar 2024 – Jun 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="font-medium">4 Months</span>
                  </div>
                </div>
              </div>

              {/* Key achievements */}
              <div className="achievements-list">
                <h4 className="text-xl font-semibold text-foreground mb-6 font-poppins">
                  Key Achievements & Responsibilities
                </h4>
                
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="achievement-item flex items-start space-x-4 p-6 glass-card rounded-2xl hover:bg-primary/5 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Predictive Model Development</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        Created a predictive model for cryptocurrency pricing using XGBoost, achieving significant accuracy in price forecasting
                      </p>
                    </div>
                  </div>

                  <div className="achievement-item flex items-start space-x-4 p-6 glass-card rounded-2xl hover:bg-primary/5 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Performance Optimization</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        Optimized model performance with GridSearchCV and advanced feature engineering techniques to enhance prediction accuracy
                      </p>
                    </div>
                  </div>

                  <div className="achievement-item flex items-start space-x-4 p-6 glass-card rounded-2xl hover:bg-primary/5 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Data Analysis & Evaluation</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        Contributed to comprehensive exploratory data analysis and model evaluation, providing insights for strategic decision-making
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project link */}
              <div className="mt-8 pt-8 border-t border-primary/20">
                <h5 className="text-lg font-semibold text-foreground mb-4 font-poppins">
                  Project Delivered
                </h5>
                <div className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <div>
                    <h6 className="font-semibold text-foreground">Enhanced Cryptocurrency Price Prediction</h6>
                    <p className="text-sm text-muted-foreground">XGBoost Algorithm with Comparative Analysis</p>
                  </div>
                  <button
                    onClick={() => {
                      const projectsSection = document.getElementById('projects');
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="ml-auto px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    View Project
                  </button>
                </div>
              </div>

              {/* Skills gained section */}
              <div className="mt-8 pt-8 border-t border-primary/20">
                <h5 className="text-lg font-semibold text-foreground mb-4 font-poppins">
                  Technologies & Skills Applied
                </h5>
                <div className="flex flex-wrap gap-3">
                  {[
                    'XGBoost', 'GridSearchCV', 'Feature Engineering', 
                    'Exploratory Data Analysis', 'Model Evaluation', 
                    'Python', 'Machine Learning', 'Data Visualization',
                    'Cryptocurrency Analysis', 'Predictive Modeling'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-gradient-primary/10 text-primary rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;