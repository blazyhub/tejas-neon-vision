import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Paintbrush, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Website Design",
      subtitle: "Mobile & Desktop",
      description: "Designing responsive, user-friendly websites with modern UI principles using tools like Figma and WordPress. Creating seamless experiences across all devices.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "WordPress Development",
        "Cross-browser Compatibility"
      ],
      icon: <Monitor className="h-8 w-8" />,
      color: "neon-blue"
    },
    {
      title: "Mobile Interface Design",
      subtitle: "iOS & Android",
      description: "Creating intuitive mobile applications with focus on user experience and modern design patterns. Optimized for touch interactions and mobile performance.",
      features: [
        "Touch-optimized Interface",
        "Native Mobile Design",
        "Performance Optimization",
        "User-centric Approach"
      ],
      icon: <Smartphone className="h-8 w-8" />,
      color: "neon-green"
    },
    {
      title: "Custom Interface Prototyping",
      subtitle: "From Concept to Reality",
      description: "Converting innovative ideas into clickable, interactive prototypes for development or testing. Bridging the gap between concept and implementation.",
      features: [
        "Interactive Prototypes",
        "Figma to Development",
        "User Testing Ready",
        "Iterative Design Process"
      ],
      icon: <Paintbrush className="h-8 w-8" />,
      color: "neon-purple"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-neon bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive digital solutions from concept to deployment, ensuring your vision comes to life with modern technology and exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = {
              'neon-blue': {
                icon: 'text-neon-blue',
                bg: 'bg-neon-blue/10 group-hover:bg-neon-blue/20',
                text: 'text-neon-blue',
                dot: 'bg-neon-blue'
              },
              'neon-green': {
                icon: 'text-neon-green',
                bg: 'bg-neon-green/10 group-hover:bg-neon-green/20',
                text: 'text-neon-green',
                dot: 'bg-neon-green'
              },
              'neon-purple': {
                icon: 'text-neon-purple',
                bg: 'bg-neon-purple/10 group-hover:bg-neon-purple/20',
                text: 'text-neon-purple',
                dot: 'bg-neon-purple'
              }
            };
            
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-500 hover:shadow-card group animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 ${colors.bg} rounded-lg transition-colors duration-300 group-hover:shadow-neon`}>
                      <div className={colors.icon}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    {service.title}
                  </CardTitle>
                  <p className={`${colors.text} font-medium text-sm`}>
                    {service.subtitle}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow flex flex-col">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${colors.dot} rounded-full flex-shrink-0`}></div>
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="neon-outline" 
                      className="w-full group"
                      onClick={scrollToContact}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="font-poppins"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;