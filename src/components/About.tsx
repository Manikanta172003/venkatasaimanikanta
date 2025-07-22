import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import icons from lucide-react
import { Code2, Database, Cloud, GitBranch, Settings, BarChart3, PieChart, Monitor, FileText } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const skills = [{
  name: 'Python',
  icon: Code2,
  color: 'text-yellow-400'
}, {
  name: 'Data Analytics',
  icon: BarChart3,
  color: 'text-cyan-400'
}, {
  name: 'SQL',
  icon: Database,
  color: 'text-blue-400'
}, {
  name: 'Data Visualization',
  icon: PieChart,
  color: 'text-green-400'
}, {
  name: 'AWS',
  icon: Cloud,
  color: 'text-orange-400'
}, {
  name: 'Power BI',
  icon: Monitor,
  color: 'text-yellow-500'
}, {
  name: 'DevOps',
  icon: Settings,
  color: 'text-purple-400'
}, {
  name: 'Git',
  icon: GitBranch,
  color: 'text-red-400'
}, {
  name: 'HTML5',
  icon: FileText,
  color: 'text-orange-500'
}, {
  name: 'CSS',
  icon: FileText,
  color: 'text-blue-500'
}];
const About = () => {
  useEffect(() => {
    // Animate profile image
    gsap.fromTo(".profile-image", {
      opacity: 0,
      x: -100,
      scale: 0.8
    }, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate bio text
    gsap.fromTo(".bio-text", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Stagger skill icons animation
    gsap.fromTo(".skill-item", {
      opacity: 0,
      y: 30,
      scale: 0.8
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);
  return <section className="about-section py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="profile-image flex justify-center md:justify-start">
            <div className="relative rounded-sm mx-[48px] my-[28px] px-[2px] py-[2px]">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Profile image */}
              <img src="/lovable-uploads/7dec3bda-d9d2-4b89-9787-6f246188fbf9.png" alt="K. Venkata Sai Manikanta" className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-primary/20 hover:scale-105 transition-transform duration-500" />
              
              {/* Floating particles around image */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-primary rounded-full opacity-60 animate-float" style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.5}s`
              }} />)}
              </div>
            </div>
          </div>

          {/* Bio and Skills */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="bio-text">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Passionate Computer Science graduate with expertise in{' '}
                <span className="text-primary font-medium">Python</span>,{' '}
                <span className="text-secondary font-medium">SQL</span>,{' '}
                <span className="text-accent font-medium">AWS</span>, and{' '}
                <span className="text-primary font-medium">DevOps</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced in building real-time dashboards, automating pipelines, 
                and creating scalable cloud-native applications. I transform complex 
                data into actionable insights and love crafting elegant solutions 
                to challenging problems.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Technical Skills
              </h3>
              <div className="grid grid-cols-4 gap-6">
                {skills.map((skill, index) => <div key={skill.name} className="skill-item glass-card p-4 rounded-xl text-center group cursor-pointer">
                    <skill.icon size={40} className={`${skill.color} mx-auto mb-2 skill-icon group-hover:scale-110 transition-transform duration-300`} />
                    <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      {skill.name}
                    </p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;