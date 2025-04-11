
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TryVisuWeaveSection = () => {
  const [isAppOpen, setIsAppOpen] = useState(false);

  return (
    <>
      <section id="try-visuweave" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Ideas?</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Experience the future of creative visualization. Start turning your spoken words into stunning visuals today.
            </p>
            <Button
              onClick={() => setIsAppOpen(true)}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium"
            >
              Try VisuWeave Now
            </Button>
            
            <div className="mt-12 p-6 bg-card rounded-xl border border-border shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Join the Waitlist</h3>
              <p className="text-foreground/80 mb-6">
                Be among the first to get full access when we launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-foreground"
                />
                <Button 
                  className="bg-primary text-primary-foreground"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </section>

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
    </>
  );
};

export default TryVisuWeaveSection;
