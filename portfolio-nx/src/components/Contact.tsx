import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';

const Contact: React.FC = () => {
  return (
    <WithScrollAnimation animation="animate-slide-in-right">
      <section id="contact" className="py-12 bg-gray-100 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Reach out to me at{' '}
            <a href="mailto:mukulfb49@gmail.com" className="text-blue-600 hover:underline">
              mukulfb49@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/MukulUpadhyaya" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mukul-upadhyaya-274605195/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              LinkedIn
            </a>
            <a href="https://x.com/mukulfb49" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              Twitter
            </a>
          </div>
        </div>
      </section>
    </WithScrollAnimation>
  );
};

export default Contact;