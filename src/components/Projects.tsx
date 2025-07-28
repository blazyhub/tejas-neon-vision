import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Code, Sparkles, Rocket } from 'lucide-react';

const Projects = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Featured Projects";
  
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

  const projects = [
    {
      title: "AI-Powered Assistant",
      description: "An intelligent virtual assistant built with machine learning capabilities to help businesses automate customer support and streamline operations.",
      image: "/src/assets/project-ai-assistant.jpg",
      technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
      features: [
        "Natural language processing",
        "Real-time chat interface",
        "Sentiment analysis",
        "Multi-language support"
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Featured",
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Smart Home Dashboard",
      description: "A comprehensive IoT dashboard for controlling and monitoring smart home devices with real-time data visualization and automation features.",
      image: "/src/assets/project-smart-home.jpg",
      technologies: ["Next.js", "React", "TypeScript", "IoT", "WebSocket", "Chart.js"],
      features: [
        "Device control interface",
        "Energy consumption tracking",
        "Automated scheduling",
        "Security monitoring"
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Popular",
      gradient: "from-neon-green to-neon-blue"
    },
    {
      title: "OCR Document Scanner",
      description: "Advanced document scanning application with OCR capabilities, document management, and cloud storage integration for businesses.",
      image: "/src/assets/project-ocr.jpg",
      technologies: ["React Native", "Python", "TensorFlow", "AWS", "PostgreSQL", "Docker"],
      features: [
        "Optical character recognition",
        "Document categorization",
        "Cloud storage integration",
        "Batch processing"
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Latest",
      gradient: "from-neon-purple to-neon-green"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Featured": return <Sparkles className="h-3 w-3" />;
      case "Popular": return <Eye className="h-3 w-3" />;
      case "Latest": return <Rocket className="h-3 w-3" />;
      default: return <Code className="h-3 w-3" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured": return "bg-neon-blue/20 text-neon-blue border-neon-blue/30";
      case "Popular": return "bg-neon-green/20 text-neon-green border-neon-green/30";
      case "Latest": return "bg-neon-purple/20 text-neon-purple border-neon-purple/30";
      default: return "bg-secondary/50 text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 text-neon-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <Code className="h-4 w-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[5rem]">
            <span className="gradient-text-animate">
              {displayedText}
              <span className="typewriter"></span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Discover my latest projects where innovation meets functionality. Each project represents a unique challenge solved with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden bg-gradient-to-br ${project.gradient} p-0.5 rounded-xl animate-scale-in modern-card`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="bg-background m-0.5 rounded-lg p-0 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} border animate-pulse`}>
                      {getStatusIcon(project.status)}
                      <span className="ml-1">{project.status}</span>
                    </Badge>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0 bg-background/90 hover:bg-background"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0 bg-background/90 hover:bg-background"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 animate-slide-in-left"
                          style={{ animationDelay: `${(index * 200) + (featureIndex * 50) + 400}ms` }}
                        >
                          <div className="w-1 h-1 bg-neon-green rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs px-2 py-1 animate-bounce-in floating"
                          style={{ 
                            animationDelay: `${(index * 200) + (techIndex * 30) + 600}ms`,
                            animationDuration: `${2 + techIndex * 0.1}s`
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-neon-blue to-neon-cyan hover:shadow-neon transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neon-green text-neon-green hover:bg-neon-green/10"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-blue hover:shadow-neon transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Let's Collaborate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;