import * as React from 'react';
import { FaReact, FaNodeJs, FaGit, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPixi, SiPhaser, SiFirebase } from 'react-icons/si';
import { FaGamepad, FaPaintBrush} from 'react-icons/fa';
import WithScrollAnimation from './WithScrollAnimation';

interface Skill {
  id: number;
  name: string;
  level: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { id: 1, name: 'React', level: 'Advanced', icon: <FaReact className="text-blue-500 text-4xl mx-auto" /> },
  { id: 2, name: 'TypeScript', level: 'Advanced', icon: <SiTypescript className="text-blue-600 text-4xl mx-auto" /> },
  { id: 3, name: 'PIXI', level: 'Advanced', icon: <FaPaintBrush className="text-purple-600 text-4xl mx-auto" /> },
  { id: 4, name: 'Phaser', level: 'Advanced', icon: <FaGamepad className="text-indigo-600 text-4xl mx-auto" /> },
  { id: 5, name: 'Tailwind CSS', level: 'Advanced', icon: <SiTailwindcss className="text-teal-500 text-4xl mx-auto" /> },
  { id: 6, name: 'JavaScript', level: 'Advanced', icon: <FaJs className="text-yellow-500 text-4xl mx-auto" /> },
  { id: 7, name: 'HTML & CSS', level: 'Advanced', icon: (
    <div className="flex justify-center space-x-2 text-4xl">
      <FaHtml5 className="text-orange-600" />
      <FaCss3Alt className="text-blue-600" />
    </div>
  ) },
  { id: 8, name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs className="text-green-600 text-4xl mx-auto" /> },
{ id: 9, name: 'Firebase', level: 'Intermediate', icon: <SiFirebase className="text-yellow-600 text-4xl mx-auto" /> },  { id: 10, name: 'Git', level: 'Intermediate', icon: <FaGit className="text-red-600 text-4xl mx-auto" /> },
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
              {skill.icon}
              <h3 className="text-lg font-semibold text-gray-800 mt-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>
    </WithScrollAnimation>
  );
};

export default Skills;
