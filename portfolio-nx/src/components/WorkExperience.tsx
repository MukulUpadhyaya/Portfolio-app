import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';
import { useStarryCanvas } from '../utils/useStarryCanvas';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer II',
    company: 'Helmerich & Payne',
    period: 'Sept 2024 - Present',
    description:
      'Migrated a Java-based application to React, creating reusable design system components and leading unit/integration testing. Developed an admin portal with secure role-based authentication, token-based API authorization, and integrated data visualization tools. Orchestrated a Micro-Frontend migration from Vue 2 to Vue 3, reducing JavaScript bundle size by 15%.',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Merkur Gaming India',
    period: 'April 2023 - Sept 2024',
    description:
      'Built responsive user interfaces and optimized animations for web-based games using Phaser, PIXI, React, and TypeScript, developing a reusable framework to streamline future game development. Created mobile-friendly interfaces with optimized performance for low-bandwidth users, enhancing overall user experience.',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Ingenuity Gaming',
    period: 'Sept 2021 - March 2023',
    description:
      'Improved game performance by 30% through asset and animation optimization, contributing to architectural decisions. Developed a responsive frontend platform using React, maintaining high code quality through reviews. Implemented localization for games across 26 countries, optimizing assets and rendering performance.',
  },
];

const WorkExperience: React.FC = () => {
  const canvasRef = useStarryCanvas();

  return (
    <div className="relative min-h-screen text-white">
      {/* Starry Background Canvas */}
      <div className="fixed inset-0 z-[-1]">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      <WithScrollAnimation animation="animate-slide-in-left">
        <section id="experience" className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 w-1 bg-blue-500 h-full transform -translate-x-1/2"></div>
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`mb-12 flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                
                {/* Experience Card */}
                <div
                  className={`w-full md:w-5/12 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                  <p className="text-white/80 font-medium">{experience.company}</p>
                  <p className="text-white/60 text-sm mb-3">{experience.period}</p>
                  <p className="text-white/90">{experience.description}</p>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </section>
      </WithScrollAnimation>
    </div>
  );
};

export default WorkExperience;
