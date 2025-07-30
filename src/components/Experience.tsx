import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Code, Bot } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Project Manager",
      type: "Academic",
      duration: "2024",
      description: "Led development of an AI-powered OCR chatbot integrating OpenAI GPT for conversational document querying.",
      highlights: [
        "Managed cross-functional team of 5 developers",
        "Implemented OCR technology for document processing",
        "Integrated OpenAI GPT for natural language queries",
        "Delivered project 2 weeks ahead of schedule"
      ],
      technologies: ["Python", "OpenAI GPT", "OCR", "Team Leadership"],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Web Developer Intern",
      type: "Internship",
      duration: "2023",
      description: "Designed responsive interfaces using Figma; collaborated with teams to bring UI/UX prototypes to production.",
      highlights: [
        "Created 15+ responsive web interfaces",
        "Collaborated with design and backend teams",
        "Converted Figma designs to production-ready code",
        "Improved website loading speed by 40%"
      ],
      technologies: ["HTML/CSS", "JavaScript", "Figma", "WordPress"],
      icon: <Code className="h-6 w-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-neon bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-500 hover:shadow-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors duration-300">
                      <div className="text-neon-blue">
                        {exp.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-neon-cyan">
                          {exp.type}
                        </Badge>
                        <span className="text-muted-foreground text-sm">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;