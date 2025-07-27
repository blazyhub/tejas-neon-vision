import { Heart, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                Tejas M
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Web Developer & Innovator creating efficient digital solutions with modern technology and exceptional user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Experience', 'Skills', 'Services', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 text-left text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Let's Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:tejas2004@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-neon-blue transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">tejas2004@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="#"
                  className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="#"
                  className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-neon-green hover:bg-neon-green/10 transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© {currentYear} Tejas M. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and modern technology</span>
          </div>
          <div className="text-muted-foreground text-sm">
            <span>Powered by React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;