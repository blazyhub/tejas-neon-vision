import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Linkedin, Send, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Let's Work Together";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ps6c3cp',
        'template_th2xj18',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'qmim58CVSC2RFfCGQ'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tejas200412@gmail.com',
      action: () => window.open('mailto:tejas200412@gmail.com'),
      gradient: 'from-neon-blue to-neon-cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      action: () => window.open('https://www.linkedin.com/in/tejas-m-324b2a25a/', '_blank'),
      gradient: 'from-neon-green to-neon-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide',
      action: () => {},
      gradient: 'from-neon-purple to-neon-green'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-blue/10 text-neon-blue px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <Sparkles className="h-4 w-4" />
            <span>Ready to Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[5rem]">
            <span className="gradient-text-animate">
              {displayedText}
              <span className="typewriter"></span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 animate-slide-in-left">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={info.label} 
                className={`modern-card cursor-pointer group bg-gradient-to-r ${info.gradient} p-0.5 rounded-xl animate-scale-in`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={info.action}
              >
                <CardContent className="bg-background m-0.5 rounded-lg p-6 h-full">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-neon-blue" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="text-muted-foreground hover:text-neon-blue transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Stats */}
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border animate-fade-in-up">
              <h4 className="font-semibold text-foreground mb-4">Why Work With Me?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground text-sm">Quick response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground text-sm">Clear communication throughout the project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground text-sm">Delivered on time, every time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="modern-card bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send me a <span className="text-neon-blue">Message</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-neon-blue transition-all duration-300 hover:bg-secondary/70"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="animate-slide-in-left" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-neon-blue transition-all duration-300 hover:bg-secondary/70"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="animate-slide-in-left" style={{ animationDelay: '400ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-secondary/50 border-border focus:border-neon-blue transition-all duration-300 resize-none hover:bg-secondary/70"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan hover:shadow-neon transition-all duration-300 animate-bounce-in"
                  style={{ animationDelay: '500ms' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;