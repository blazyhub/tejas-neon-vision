import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, Cloud, Brain, MessageSquare, Clock, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML", "CSS", "WordPress"],
      color: "neon-blue"
    },
    {
      title: "Programming Languages",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Python", "Java", "C"],
      color: "neon-green"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Figma", "Tosca", "Solid Edge"],
      color: "neon-purple"
    },
    {
      title: "Cloud & AI",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Microsoft Azure", "OCR", "Eye-Control Interfaces", "Basic ML Concepts"],
      color: "neon-cyan"
    }
  ];

  const softSkills = [
    { name: "Communication", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Time Management", icon: <Clock className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-neon bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const colorClasses = {
              'neon-blue': {
                icon: 'text-neon-blue',
                bg: 'bg-neon-blue/10 group-hover:bg-neon-blue/20',
                badge: 'border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10'
              },
              'neon-green': {
                icon: 'text-neon-green',
                bg: 'bg-neon-green/10 group-hover:bg-neon-green/20',
                badge: 'border-neon-green/30 text-neon-green hover:bg-neon-green/10'
              },
              'neon-purple': {
                icon: 'text-neon-purple',
                bg: 'bg-neon-purple/10 group-hover:bg-neon-purple/20',
                badge: 'border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10'
              },
              'neon-cyan': {
                icon: 'text-neon-cyan',
                bg: 'bg-neon-cyan/10 group-hover:bg-neon-cyan/20',
                badge: 'border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10'
              }
            };
            
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-300 hover:shadow-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 ${colors.bg} rounded-lg transition-colors duration-300`}>
                      <div className={colors.icon}>
                        {category.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className={`${colors.badge} transition-colors duration-300 text-xs`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-center mb-6">
            Soft <span className="text-neon-green">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 hover:bg-neon-green/10 hover:border-neon-green/30 border border-transparent transition-all duration-300"
              >
                <div className="text-neon-green">
                  {skill.icon}
                </div>
                <span className="text-foreground font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;