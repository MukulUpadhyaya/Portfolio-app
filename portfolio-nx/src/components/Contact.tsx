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
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              Twitter
            </a>
          </div>
        </div>
      </section>
    </WithScrollAnimation>
  );
};

export default Contact;