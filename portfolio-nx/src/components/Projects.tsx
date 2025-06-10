import * as React from 'react';

   interface Project {
     id: number;
     title: string;
     description: string;
     link: string;
   }

   const projects: Project[] = [
     {
       id: 1,
       title: 'Project One',
       description: 'A cool project built with React and TypeScript.',
       link: 'https://example.com/project-one',
     },
     {
       id: 2,
       title: 'Project Two',
       description: 'An awesome app with Vite and Tailwind CSS.',
       link: 'https://example.com/project-two',
     },
   ];

   const Projects: React.FC = () => {
     return (
       <section id="projects" className="py-8">
         <h2 className="text-3xl font-bold mb-4">My Projects</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {projects.map((project) => (
             <div key={project.id} className="bg-white p-4 rounded-lg shadow">
               <h3 className="text-xl font-semibold">{project.title}</h3>
               <p className="text-gray-600">{project.description}</p>
               <a
                 href={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline"
               >
                 View Project
               </a>
             </div>
           ))}
         </div>
       </section>
     );
   };

   export default Projects;