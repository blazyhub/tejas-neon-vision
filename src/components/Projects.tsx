import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import ocrProject from '@/assets/project-ocr.jpg';
import smartHomeProject from '@/assets/project-smart-home.jpg';
import aiAssistantProject from '@/assets/project-ai-assistant.jpg';

const Projects = () => {
  const projects = [
    {
      title: "OCR-AI Document Reader",
      description: "Advanced AI-powered application that converts handwritten notes to editable text and integrates GPT for intelligent document querying and analysis.",
      image: ocrProject,
      technologies: ["Python", "OpenAI GPT", "OCR", "Machine Learning"],
      features: [
        "Handwriting recognition with 95% accuracy",
        "GPT-powered document analysis",
        "Multi-format export capabilities",
        "Real-time text conversion"
      ],
      category: "AI & Machine Learning",
      status: "Completed"
    },
    {
      title: "Smart Home Automation",
      description: "Bluetooth-based IoT prototype system for controlling various home devices remotely through an intuitive mobile interface.",
      image: smartHomeProject,
      technologies: ["IoT", "Bluetooth", "Mobile Development", "Arduino"],
      features: [
        "Remote device control via Bluetooth",
        "Energy consumption monitoring",
        "Automated scheduling system",
        "Real-time device status updates"
      ],
      category: "IoT & Automation",
      status: "Prototype"
    },
    {
      title: "AI Virtual Assistant",
      description: "PC automation system using Python voice-command scripts inspired by Alexa, capable of controlling computer functions through natural language.",
      image: aiAssistantProject,
      technologies: ["Python", "Voice Recognition", "Automation", "NLP"],
      features: [
        "Voice command recognition",
        "PC automation capabilities",
        "Natural language processing",
        "Custom command scripting"
      ],
      category: "AI & Automation",
      status: "In Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-neon bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions in AI, automation, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-500 hover:shadow-card group animate-fade-in-up overflow-hidden h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`bg-neon-blue/20 text-neon-blue border-neon-blue/30 ${
                      project.status === 'Completed' ? 'bg-neon-green/20 text-neon-green border-neon-green/30' : ''
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs text-neon-cyan border-neon-cyan/30">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow flex flex-col">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="flex-grow">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className="text-xs border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="neon-outline" size="sm" className="flex-1 text-xs">
                    <Eye className="mr-1 h-3 w-3" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-neon-cyan">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub repository for additional projects and code samples.
          </p>
          <Button variant="neon-outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;