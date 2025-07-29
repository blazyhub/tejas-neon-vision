import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.E. in Computer Science",
      institution: "Rajeev Institute of Technology, Hassan",
      grade: "GPA: 7.5",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "XII - PCMB",
      institution: "Masters PU College",
      grade: "GPA: 85",
      icon: <Award className="h-5 w-5" />
    },
    {
      degree: "X - SSLC",
      institution: "Royale Apollo International School",
      grade: "GPA: 89",
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-neon bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 float-on-scroll float-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Motivated and detail-oriented <span className="text-neon-cyan font-semibold">Web Developer</span> with hands-on experience in designing and developing user-centric websites and mobile applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proficient in <span className="text-neon-blue font-semibold">HTML/CSS, Python, Java, and WordPress</span>, with a strong foundation in cloud computing and automation tools. Quick learner with a passion for building efficient digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating seamless user experiences through innovative design and cutting-edge technology, always striving to bridge the gap between functionality and aesthetics.
              </p>
            </div>

            <div className="pt-6">
              <Button 
                variant="neon" 
                size="lg" 
                className="group"
                onClick={() => {
                  window.open('https://pdf.ac/1x7vba', '_blank');
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </Button>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6 float-on-scroll float-right">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Educational <span className="text-neon-green">Background</span>
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-300 hover:shadow-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors duration-300">
                        <div className="text-neon-blue">
                          {edu.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-neon-cyan font-medium text-sm">
                          {edu.grade}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;