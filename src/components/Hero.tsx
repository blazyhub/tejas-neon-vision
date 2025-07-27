import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';
import webDeveloperGif from '@/assets/web-developer-animated.gif';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-neon-blue shadow-glow animate-glow-pulse">
                <img 
                  src={webDeveloperGif} 
                  alt="Tejas M - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-inter">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-neon bg-clip-text text-transparent">Tejas M</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
              <span className="block">Web Developer & </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent font-semibold">Innovator</span>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I build efficient digital solutions blending UI/UX, automation, and AI to create meaningful user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="font-poppins text-lg px-8 py-3"
            >
              View My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="neon-outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="font-poppins text-lg px-8 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex justify-center space-x-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="mailto:tejas200412@gmail.com"
              className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              📧 tejas200412@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-neon-blue" />
      </div>
    </section>
  );
};

export default Hero;