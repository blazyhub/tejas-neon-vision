import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const floatingElements = document.querySelectorAll('.float-on-scroll');
      floatingElements.forEach((element) => {
        observer.observe(element);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter relative">
      {/* Floating background elements */}
      <div className="floating-bg"></div>
      <div className="floating-bg"></div>
      <div className="floating-bg"></div>
      <div className="floating-bg"></div>
      <div className="floating-bg"></div>
      
      <Navigation />
      <section id="home"><Hero /></section>
      <section id="about" className="float-on-scroll"><About /></section>
      <section id="experience" className="float-on-scroll float-left"><Experience /></section>
      <section id="skills" className="float-on-scroll float-right"><Skills /></section>
      <section id="projects" className="float-on-scroll"><Projects /></section>
      <section id="contact" className="float-on-scroll float-left"><Contact /></section>
      <Footer />
    </div>
  );
};

export default Index;
