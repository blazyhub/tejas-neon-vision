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
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <section id="home"><Hero /></section>
      <section id="about" className="opacity-0"><About /></section>
      <section id="experience" className="opacity-0"><Experience /></section>
      <section id="skills" className="opacity-0"><Skills /></section>
      <section id="projects" className="opacity-0"><Projects /></section>
      <section id="contact" className="opacity-0"><Contact /></section>
      <Footer />
    </div>
  );
};

export default Index;
