
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Github } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openResume = () => {
    // In a real implementation, this would open/download the actual resume
    window.open('#', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Resume Button */}
      <Button
        onClick={openResume}
        className="w-14 h-14 rounded-full bg-portfolio-accent-secondary hover:bg-portfolio-accent-secondary/90 text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        title="View Resume"
      >
        <Github className="w-6 h-6" />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-fade-in"
          title="Scroll to Top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default FloatingButtons;
