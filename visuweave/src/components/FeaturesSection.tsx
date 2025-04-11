
import { useEffect, useRef } from 'react';

const features = [
  {
    title: "Real-time Speech-to-Image",
    description: "VisuWeave converts your spoken words into stunning visuals in real-time, making creative visualization effortless.",
    iconClass: "bg-blue-100 dark:bg-blue-900/30",
    iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6"
  },
  {
    title: "Multi-style Generation",
    description: "Choose from dozens of artistic styles or create custom style combinations to match your vision perfectly.",
    iconClass: "bg-purple-100 dark:bg-purple-900/30",
    iconPath: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  },
  {
    title: "Collaborative Canvas",
    description: "Invite team members to contribute to shared visualization projects with real-time editing and feedback.",
    iconClass: "bg-green-100 dark:bg-green-900/30",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "Cross-platform Integration",
    description: "Seamlessly export your visualizations to design tools, presentation software, and content management systems.",
    iconClass: "bg-yellow-100 dark:bg-yellow-900/30",
    iconPath: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Version History",
    description: "Track the evolution of your visualizations with comprehensive version history and easy rollback options.",
    iconClass: "bg-red-100 dark:bg-red-900/30",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Advanced Voice Commands",
    description: "Control your creative process with specialized voice commands for editing, zooming, and refining your visuals.",
    iconClass: "bg-indigo-100 dark:bg-indigo-900/30",
    iconPath: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const features = entry.target.querySelectorAll('.feature-card');
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add('animate-fade-in');
                feature.classList.remove('opacity-0');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover how VisuWeave empowers you to create stunning visualizations with your voice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 bg-card border border-border rounded-xl p-6 card-hover relative"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-5 ${feature.iconClass}`}>
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
