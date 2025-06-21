import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';

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
    period: 'Sept 2025 - Present',
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
  return (
    <WithScrollAnimation animation="animate-slide-in-left">
      <section id="experience" className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Work Experience</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 w-1 bg-blue-600 h-full transform -translate-x-1/2"></div>
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`mb-8 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2"></div>
              {/* Experience Card */}
              <div
                className={`w-full md:w-5/12 p-6 bg-white rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                <p className="text-gray-600 font-medium">{experience.company}</p>
                <p className="text-gray-500 text-sm mb-2">{experience.period}</p>
                <p className="text-gray-700">{experience.description}</p>
              </div>
              {/* Spacer for Timeline Alignment */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </section>
    </WithScrollAnimation>
  );
};

export default WorkExperience;