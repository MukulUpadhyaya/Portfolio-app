import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Well Management Application',
    description: 'Built a well management app with admin controls, streamlining task assignment for multiple users using Google Firebase.',
    link: 'https://example.com/project-one',
  },
  {
    id: 2,
    title: 'YouTube Cone',
    description: 'An awesome YouTube clone which have live chat feature.',
    link: 'https://youtube2023-react-clone.netlify.app/',
  },
];

const Projects: React.FC = () => {
  return (
    <WithScrollAnimation animation="animate-scale-up">
      <section id="projects" className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </WithScrollAnimation>
  );
};

export default Projects;