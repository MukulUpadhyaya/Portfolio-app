import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';
import profileImage from '../assets/Mukul_Pic.jpg';
import { useStarryCanvas } from '../utils/useStarryCanvas';

const About: React.FC = () => {
  const canvasRef = useStarryCanvas();

  return (
    <div className="relative min-h-screen">
      {/* Background Canvas */}
      <div className="fixed inset-0 z-[-1]">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      <WithScrollAnimation animation="animate-slide-in-left">
        <section id="about" className="py-20 px-4 container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover transform scale-[1.75] translate-x-[15%] translate-y-[30%]"
              />
            </div>

            {/* Description */}
            <div className="text-white text-lg leading-relaxed max-w-4xl">
              <p>
                I'm Mukul, a passionate frontend developer with 3+ years of experience in building scalable web applications and interactive games using JavaScript, TypeScript, React, Phaser.js, and PIXI.js.
              </p>
              <p className="mt-4">
                Skilled in performance optimization, design systems, and end-to-end development with a focus on reusable components and maintainable code.
              </p>
            </div>
          </div>
        </section>
      </WithScrollAnimation>
    </div>
  );
};

export default About;
