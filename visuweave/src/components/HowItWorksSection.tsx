
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    title: "Speak Your Vision",
    description: "Simply speak into your device's microphone to describe the image you want to create. VisuWeave's advanced speech recognition captures your words with high accuracy.",
    icon: "🎤"
  },
  {
    title: "Real-time Processing",
    description: "Our AI engine processes your spoken description, breaking it down into key visual elements, style information, and compositional guidance.",
    icon: "⚙️"
  },
  {
    title: "Visual Generation",
    description: "Watch as VisuWeave transforms your words into stunning imagery right before your eyes, rendering complex scenes based purely on your verbal descriptions.",
    icon: "🖼️"
  },
  {
    title: "Refine & Perfect",
    description: "Use additional voice commands to refine, adjust, or transform your creation until it perfectly matches your vision.",
    icon: "✨"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Experience the seamless process of turning your spoken words into visual masterpieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
