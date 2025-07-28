import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Code, Lightbulb, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "About Me";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Code, number: "3+", label: "Years Experience", gradient: "from-neon-blue to-neon-cyan" },
    { icon: Users, number: "50+", label: "Projects Completed", gradient: "from-neon-green to-neon-blue" },
    { icon: Lightbulb, number: "100+", label: "Creative Solutions", gradient: "from-neon-purple to-neon-green" },
    { icon: TrendingUp, number: "99%", label: "Client Satisfaction", gradient: "from-neon-cyan to-neon-purple" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-neon-green/10 text-neon-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-in">
                <Users className="h-4 w-4" />
                <span>About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[4rem]">
                <span className="gradient-text-animate">
                  {displayedText}
                  <span className="typewriter"></span>
                </span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground animate-fade-in-up">
                <p className="leading-relaxed">
                  I'm a passionate <span className="text-neon-blue font-semibold">Web Developer & Innovator</span> with over 3 years of experience creating digital solutions that make a difference. My journey in technology is driven by curiosity and a desire to build applications that solve real-world problems.
                </p>
                <p className="leading-relaxed">
                  I specialize in modern web technologies including <span className="text-neon-green font-semibold">React, TypeScript, Node.js</span>, and cloud platforms. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring fellow developers. I believe in continuous learning and staying ahead of industry trends.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-neon-blue to-neon-cyan hover:shadow-neon transition-all duration-300"
                onClick={() => {
                  window.open('https://pdf.ac/1x7vba', '_blank');
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-green text-neon-green hover:bg-neon-green/10 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`modern-card p-6 bg-gradient-to-br ${stat.gradient} rounded-xl animate-scale-in floating`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationDuration: `${3 + index * 0.5}s`
                }}
              >
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-background/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;