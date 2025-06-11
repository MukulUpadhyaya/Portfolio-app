import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';

const About: React.FC = () => {
  return (
    <WithScrollAnimation animation="animate-slide-in-left">
      <section id="about" className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
            <span className="text-gray-500">Profile Image</span>
          </div>
          {/* About Text */}
          <div>
            <p className="text-lg text-gray-700">
              I'm Mukul, a passionate frontend developer with expertise in React, TypeScript, and modern web technologies.
              I specialize in building user-friendly, performant applications that solve real-world problems.
              With a strong focus on clean code and design, I strive to create seamless digital experiences.
            </p>
          </div>
        </div>
      </section>
    </WithScrollAnimation>
  );
};

export default About;