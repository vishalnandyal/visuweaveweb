
const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About VisuWeave</h2>
          <p className="text-lg text-foreground/80 mb-6">
            VisuWeave was born from a simple vision: to bridge the gap between spoken language and visual creation. 
            We believe that everyone deserves the power to visualize their ideas instantly, without technical barriers.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            Our team of AI researchers, design enthusiasts, and accessibility advocates have created a platform that makes
            visual creation as natural as having a conversation.
          </p>
          <p className="text-lg text-foreground/80">
            Whether you're a designer seeking inspiration, a presenter needing quick visuals, or someone who struggles with 
            traditional design tools, VisuWeave empowers you to create with just your voice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
