
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const [isAppOpen, setIsAppOpen] = useState(false);

  const openVisuWeaveApp = () => {
    setIsAppOpen(true);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Transform Your Words Into
            <span className="gradient-text ml-2">Visual Wonders</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto">
            VisuWeave combines advanced speech recognition with AI-powered image generation,
            turning your spoken ideas into stunning visualizations in real-time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={openVisuWeaveApp} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
            >
              Try VisuWeave
            </Button>
            <Button 
              onClick={openVisuWeaveApp} 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="hidden md:block absolute top-1/4 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/4 -right-12 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      {/* External App Integration Component */}
      {isAppOpen && (
        <div className="fixed inset-0 bg-background z-50 overflow-hidden transition-all duration-300">
          <div className="absolute top-4 right-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsAppOpen(false)} 
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>
          </div>

          <iframe 
            src="https://visuweave.vercel.app/"
            className="w-full h-full border-0"
            title="VisuWeave Application"
            allow="microphone; camera"
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;

