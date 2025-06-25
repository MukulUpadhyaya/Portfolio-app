import * as React from 'react';
import WithScrollAnimation from '../components/WithScrollAnimation';
import { useStarryCanvas } from '../utils/useStarryCanvas';

interface WorkItem {
  id: number;
  title: string;
  description: string;
  link?: string;
  image?: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: 'Gem Fall',
    description:
      'Gem Fall is a Megaways-powered online slot with a dazzling gem-themed aesthetic, built to deliver a dynamic and immersive experience. I created a visually stunning interface with smooth animations, responsive design, and intuitive controls.',
    link: 'https://newslotgames.net/merkur-gaming/gem-fall.html',
  },
  {
    id: 2,
    title: 'Triple Thunder',
    description:
      'A vibrant cascading slot game with dynamic reels and bonus rounds, built using JavaScript, TypeScript, and PIXI.js. Optimized for cross-platform play with 60 FPS performance.',
    link: 'https://www.tomhorngaming.com/games/triple-thunder/',
  },
  {
    id: 3,
    title: 'Final Frontier',
    description:
      'A space-themed web game with mobile-first UI, built using React, Phaser, PIXI, and TypeScript. Optimized for low-bandwidth with adaptive asset quality and responsive controls.',
    link: 'https://www.slotstemple.com/free-slots/final-frontier/',
  },
];

const MyWork: React.FC = () => {
  const canvasRef = useStarryCanvas();

  return (
    <div className="relative min-h-screen">
      {/* Starry background canvas */}
      <div className="fixed inset-0 z-[-1]">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      {/* Content */}
      <section id="my-work" className="py-20 px-4 container mx-auto text-white">
        <WithScrollAnimation animation="animate-fade-in">
          <h1 className="text-5xl font-bold text-center mb-12">My Work</h1>
        </WithScrollAnimation>

        <div className="space-y-12">
          {workItems.map((work) => (
            <WithScrollAnimation key={work.id} animation="animate-scale-up">
              <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <h2 className="text-3xl font-semibold mb-4">{work.title}</h2>
                <p className="text-white/80 mb-4">{work.description}</p>
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 font-semibold hover:underline"
                  >
                    View Work
                  </a>
                )}
                {work.image && (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="mt-4 w-full h-64 object-cover rounded-lg"
                  />
                )}
              </div>
            </WithScrollAnimation>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyWork;
