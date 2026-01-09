import * as React from 'react';
import WithScrollAnimation from './WithScrollAnimation';
import { useStarryCanvas } from '../utils/useStarryCanvas';

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
    link: 'https://well-management-app.netlify.app/',
  },
  {
    id: 2,
    title: 'YouTube Cone',
    description: 'An awesome YouTube clone which has a live chat feature.',
    link: 'https://youtube2023-react-clone.netlify.app/',
  },
];

const Projects: React.FC = () => {
  const canvasRef = useStarryCanvas();

  return (
    <div className="relative min-h-screen">
      {/* Background Canvas */}
      <div className="fixed inset-0 z-[-1]">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      <WithScrollAnimation animation="animate-scale-up">
        <section id="projects" className="py-20 px-4 container mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-white/20"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </WithScrollAnimation>
    </div>
  );
};

export default Projects;
