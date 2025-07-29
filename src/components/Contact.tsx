import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "tejas200412@gmail.com",
      action: "mailto:tejas200412@gmail.com",
      color: "neon-blue"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      content: "Connect with me",
      action: "https://www.linkedin.com/in/tejas-m-324b2a25a/",
      color: "neon-cyan"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Hassan, Karnataka, India",
      action: null,
      color: "neon-green"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-neon bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Let's <span className="text-neon-cyan">Connect</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with innovative teams. 
                Whether you have a specific project in mind or just want to discuss possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const colorClasses = {
                  'neon-blue': {
                    icon: 'text-neon-blue',
                    bg: 'bg-neon-blue/10 group-hover:bg-neon-blue/20',
                    text: 'text-neon-blue'
                  },
                  'neon-cyan': {
                    icon: 'text-neon-cyan',
                    bg: 'bg-neon-cyan/10 group-hover:bg-neon-cyan/20',
                    text: 'text-neon-cyan'
                  },
                  'neon-green': {
                    icon: 'text-neon-green',
                    bg: 'bg-neon-green/10 group-hover:bg-neon-green/20',
                    text: 'text-neon-green'
                  }
                };
                
                const colors = colorClasses[info.color as keyof typeof colorClasses];
                
                return (
                  <Card 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-300 hover:shadow-card group float-on-scroll"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 ${colors.bg} rounded-lg transition-colors duration-300`}>
                          <div className={colors.icon}>
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className={`${colors.text} hover:underline transition-colors duration-300`}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4">Why Work With Me?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span className="text-muted-foreground text-sm">Quick response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="text-muted-foreground text-sm">Clear communication throughout the project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  <span className="text-muted-foreground text-sm">Delivered on time, every time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Send me a <span className="text-neon-blue">Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
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
                    className="bg-secondary/50 border-border focus:border-neon-blue transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
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
                    className="bg-secondary/50 border-border focus:border-neon-blue transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
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
                    className="bg-secondary/50 border-border focus:border-neon-blue transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="neon" 
                  size="lg" 
                  className="w-full"
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