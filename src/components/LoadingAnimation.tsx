import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the progress bar from 0% to 100%
    tl.to({}, {
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        const prog = Math.round(this.progress() * 100);
        setProgress(prog);
      }
    })
    // Fade out the preloader
    .to(".preloader", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    });

    // Animate the logo/name with glow effect
    gsap.fromTo(".loading-logo", 
      {
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "back.out(1.7)"
      }
    );

    // Animate progress bar fill
    gsap.fromTo(".progress-fill",
      { width: "0%" },
      {
        width: "100%",
        duration: 2.5,
        ease: "power2.out"
      }
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Name/Logo */}
        <div className="loading-logo mb-8">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text tracking-wider">
            K. Venkata Sai
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-secondary mt-2">
            Manikanta
          </h2>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-1 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
          <div className="progress-fill h-full bg-gradient-primary rounded-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Progress percentage */}
        <div className="text-xl font-light text-muted-foreground">
          {progress}%
        </div>

        {/* Loading text */}
        <div className="mt-6 text-sm text-muted-foreground animate-pulse">
          Initializing Portfolio Experience...
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;