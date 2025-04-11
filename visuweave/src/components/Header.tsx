
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppOpen, setIsAppOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openVisuWeaveApp = () => {
    setIsAppOpen(true);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary">
                  VisuWeave
                </span>
              </a>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </a>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <Button 
                  className="bg-primary text-primary-foreground rounded-full px-6"
                  onClick={openVisuWeaveApp}
                >
                  Try VisuWeave
                </Button>
              </div>
            </nav>

            {/* Mobile navigation trigger */}
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu />
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <nav className="flex flex-col space-y-4 pb-4">
                <a
                  href="#features"
                  className="text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#about"
                  className="text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <Button 
                  className="bg-primary text-primary-foreground rounded-full mx-4"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openVisuWeaveApp();
                  }}
                >
                  Try VisuWeave
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

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

export default Header;
