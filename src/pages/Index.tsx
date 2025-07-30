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
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-in-up', 'opacity-100');
        }
      });
    }, observerOptions);

    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]:not(#home)');
      sections.forEach((section) => {
        observer.observe(section);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <section id="home"><Hero /></section>
      <section id="about" className="opacity-0 transition-opacity duration-700"><About /></section>
      <section id="experience" className="opacity-0 transition-opacity duration-700"><Experience /></section>
      <section id="skills" className="opacity-0 transition-opacity duration-700"><Skills /></section>
      <section id="projects" className="opacity-0 transition-opacity duration-700"><Projects /></section>
      <section id="contact" className="opacity-0 transition-opacity duration-700"><Contact /></section>
      <Footer />
    </div>
  );
};

export default Index;
