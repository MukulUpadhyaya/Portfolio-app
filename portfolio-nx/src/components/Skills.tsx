import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';

interface Skill {
  id: number;
  name: string;
  level: string; // e.g., "Advanced", "Intermediate", "Beginner"
}

const skills: Skill[] = [
  { id: 1, name: 'React', level: 'Advanced' },
  { id: 2, name: 'TypeScript', level: 'Advanced' },
  { id: 3, name: 'Tailwind CSS', level: 'Advanced' },
  { id: 4, name: 'JavaScript', level: 'Advanced' },
  { id: 5, name: 'HTML & CSS', level: 'Advanced' },
  { id: 6, name: 'Node.js', level: 'Intermediate' },
  { id: 7, name: 'Firebase', level: 'Intermediate' },
  { id: 8, name: 'Git', level: 'Intermediate' },
];

const Skills: React.FC = () => {
  return (
    <WithScrollAnimation animation="animate-fade-in">
      <section id="skills" className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>
    </WithScrollAnimation>
  );
};

export default Skills;