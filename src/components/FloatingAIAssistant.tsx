import { useState } from 'react';
import { X, Home, User, Briefcase, Code, FolderOpen, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingAIAssistantProps {
  onNavigate?: (sectionId: string) => void;
}

const FloatingAIAssistant = ({ onNavigate }: FloatingAIAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, description: 'Go to homepage' },
    { id: 'about', label: 'About', icon: User, description: 'Learn about me' },
    { id: 'experience', label: 'Experience', icon: Briefcase, description: 'My work history' },
    { id: 'skills', label: 'Skills', icon: Code, description: 'Technical skills' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, description: 'View my work' },
    { id: 'contact', label: 'Contact', icon: Mail, description: 'Get in touch' },
  ];

  const handleRobotClick = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Navigation Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 mb-2 animate-fade-in-up">
          <div className="bg-background/95 backdrop-blur-md border border-neon-blue/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(59,130,246,0.3)] min-w-[280px]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-neon-cyan">AI Navigation Assistant</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 hover:bg-neon-blue/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Where would you like to go?</p>
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-neon-blue/10 transition-all duration-200 text-left group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors">
                      <IconComponent className="h-4 w-4 text-neon-blue" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating Robot */}
      <button
        onClick={handleRobotClick}
        className={`relative w-16 h-16 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 ${
          isAnimating ? 'scale-95' : 'scale-100'
        }`}
        aria-label="AI Navigation Assistant"
      >
        {/* Robot Container */}
        <div className="w-full h-full relative animate-float">
          {/* Robot Head */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full border-2 border-neon-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            {/* Head glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent rounded-full animate-pulse"></div>
            
            {/* Eyes */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
            </div>

            {/* Mouth/Speaker */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1.5">
              <div className="w-full h-full bg-neon-blue/30 rounded-full flex items-center justify-center">
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-0.5 bg-neon-cyan animate-pulse"></div>
                  <div className="w-0.5 h-1 bg-neon-cyan animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-0.5 h-0.5 bg-neon-cyan animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>

            {/* Antenna */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-2 bg-gradient-to-t from-neon-blue to-neon-cyan rounded-full">
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neon-cyan rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Circuit pattern */}
            <div className="absolute inset-1 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" className="text-neon-blue animate-pulse" />
                <circle cx="35" cy="35" r="1" fill="currentColor" className="text-neon-cyan animate-pulse" />
                <circle cx="65" cy="65" r="1" fill="currentColor" className="text-neon-cyan animate-pulse" style={{ animationDelay: '0.5s' }} />
              </svg>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute -inset-2">
            <div className="absolute top-1 right-1 w-1 h-1 bg-neon-cyan rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-2 left-1 w-1 h-1 bg-neon-blue rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-0 w-1 h-1 bg-neon-purple rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Help indicator */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center animate-pulse">
            <ChevronDown className="h-3 w-3 text-background transform rotate-180" />
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingAIAssistant;