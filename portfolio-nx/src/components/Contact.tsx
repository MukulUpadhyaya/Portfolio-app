import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';
import { useStarryCanvas } from '../utils/useStarryCanvas';

const Contact: React.FC = () => {
  const canvasRef = useStarryCanvas(); // Using the starry canvas hook

  return (
    <div className="relative min-h-[50vh]">
      {/* Background Canvas */}
      <div className="fixed inset-0 z-[-1]">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      <WithScrollAnimation animation="animate-slide-in-right">
        <section id="contact" className="py-5 px-4 container mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-lg mb-4">
              Reach out to me at{' '}
              <a href="mailto:mukulfb49@gmail.com" className="text-blue-400 hover:underline">
                mukulfb49@gmail.com
              </a>
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/MukulUpadhyaya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mukul-upadhyaya-274605195/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/mukulfb49"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Twitter
              </a>
            </div>
          </div>
        </section>
      </WithScrollAnimation>
    </div>
  );
};

export default Contact;
