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
    title: 'Frontend Developer',
    company: 'Tech Innovations Ltd.',
    period: 'Jan 2023 - Present',
    description:
      'Developed and maintained responsive web applications using React and TypeScript. Collaborated with UX designers to implement pixel-perfect designs and improved application performance by 20%.',
  },
  {
    id: 2,
    title: 'Junior Web Developer',
    company: 'Creative Solutions Inc.',
    period: 'Jun 2021 - Dec 2022',
    description:
      'Built and deployed static websites using HTML, CSS, and JavaScript. Assisted in migrating legacy applications to modern frameworks, enhancing user experience and reducing load times.',
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