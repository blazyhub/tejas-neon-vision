import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Database, 
  Palette, 
  Cloud, 
  Smartphone, 
  Globe,
  Zap,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Skills & Expertise";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    
    return () => clearInterval(timer);
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "JavaScript", level: 95, color: "from-yellow-500 to-orange-500" },
        { name: "Next.js", level: 85, color: "from-gray-800 to-gray-600" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-green-500" },
      ],
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-600 to-green-400" },
        { name: "Express.js", level: 85, color: "from-gray-700 to-gray-500" },
        { name: "PostgreSQL", level: 82, color: "from-blue-700 to-blue-500" },
        { name: "MongoDB", level: 80, color: "from-green-700 to-green-500" },
        { name: "Redis", level: 75, color: "from-red-600 to-red-400" },
      ],
      gradient: "from-neon-green to-neon-blue"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 80, color: "from-orange-500 to-yellow-500" },
        { name: "Docker", level: 78, color: "from-blue-600 to-blue-400" },
        { name: "Git/GitHub", level: 92, color: "from-gray-800 to-gray-600" },
        { name: "CI/CD", level: 75, color: "from-purple-600 to-purple-400" },
        { name: "Vercel", level: 88, color: "from-gray-900 to-gray-700" },
      ],
      gradient: "from-neon-purple to-neon-green"
    },
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", 
    "AWS", "Docker", "Git", "Redux", "GraphQL", "REST APIs",
    "Tailwind CSS", "Material-UI", "Express.js", "Socket.io",
    "Jest", "Cypress", "Webpack", "Vite", "Next.js"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <Zap className="h-4 w-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[5rem]">
            <span className="gradient-text-animate">
              {displayedText}
              <span className="typewriter"></span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Crafting exceptional digital experiences with cutting-edge technologies and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`modern-card bg-gradient-to-br ${category.gradient} p-0.5 rounded-xl animate-scale-in`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <CardContent className="bg-background m-0.5 rounded-lg p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/50 rounded-lg">
                    <category.icon className="h-6 w-6 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="animate-slide-in-left"
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-up">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className={`px-4 py-2 text-sm font-medium bg-gradient-to-r from-secondary/50 to-secondary/30 hover:from-neon-blue/20 hover:to-neon-cyan/20 transition-all duration-300 cursor-pointer animate-bounce-in floating`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animationDuration: `${2 + (index % 3) * 0.5}s`
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;