import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2, TrendingUp, Code, Users } from 'lucide-react';

const Experience = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Professional Journey";
  
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

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      location: "Remote",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on multiple projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Built real-time features serving 100K+ users"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "MongoDB", "Docker"],
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "San Francisco, CA",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences. Focused on modern frontend technologies and performance optimization.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved user engagement by 35%",
        "Reduced page load times by 50%",
        "Collaborated with UX/UI teams on design systems"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Redux", "REST APIs", "Git"],
      gradient: "from-neon-green to-neon-blue"
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Austin, TX",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Started my professional journey building web applications and learning industry best practices. Contributed to various projects and gained experience in full-stack development.",
      achievements: [
        "Successfully delivered 10+ web projects",
        "Learned and implemented modern web technologies",
        "Contributed to open-source projects",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MySQL"],
      gradient: "from-neon-purple to-neon-green"
    }
  ];

  const stats = [
    { icon: Code, number: "50+", label: "Projects Delivered", color: "text-neon-blue" },
    { icon: Users, number: "100K+", label: "Users Impacted", color: "text-neon-green" },
    { icon: TrendingUp, number: "40%", label: "Performance Gains", color: "text-neon-purple" },
    { icon: Building2, number: "3+", label: "Years Experience", color: "text-neon-cyan" }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-secondary/5 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-cyan/10 text-neon-cyan px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <Building2 className="h-4 w-4" />
            <span>Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[5rem]">
            <span className="gradient-text-animate">
              {displayedText}
              <span className="typewriter"></span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            A journey of continuous learning, innovation, and delivering exceptional digital solutions across various industries.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-scale-in floating"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationDuration: `${3 + index * 0.3}s`
              }}
            >
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-xl flex items-center justify-center mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className={`modern-card bg-gradient-to-r ${exp.gradient} p-0.5 rounded-xl animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="bg-background m-0.5 rounded-lg p-8 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Job Details */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-neon-blue font-semibold mb-2">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mb-4">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs animate-bounce-in floating"
                            style={{ 
                              animationDelay: `${(index * 200) + (techIndex * 50)}ms`,
                              animationDuration: `${2 + techIndex * 0.2}s`
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Description & Achievements */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 animate-slide-in-left"
                            style={{ animationDelay: `${(index * 200) + (achIndex * 100) + 300}ms` }}
                          >
                            <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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