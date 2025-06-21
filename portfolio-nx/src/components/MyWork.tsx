import * as React from 'react';
import Header from '../components/Header';
import WithScrollAnimation from '../components/WithScrollAnimation';

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
    title: 'Gem fall',
    description:
      'Gem Fall is a Megaways-powered online slot with a dazzling gem-themed aesthetic, with a horizontal reel in it; it is built to deliver a dynamic and immersive experience across desktop and mobile platforms. As the frontend dev, I’ve worked to create a visually stunning interface with smooth animations, responsive design, and intuitive controls, all underpinned by the game’s core mechanics: up to 117,649 ways to win on a 6-reel grid, cascading wins, and feature-rich gameplay.',
    link: 'https://newslotgames.net/merkur-gaming/gem-fall.html',
  },
  {
    id: 2,
    title: 'Tripple Thunder',
    description:
      'A vibrant cascading slot game with dynamic reels and bonus rounds, built using JavaScript, TypeScript, and PIXI.js. Optimized for cross-platform play, it achieved 30% faster performance via asset optimization, ensuring smooth 60 FPS gameplay on desktops and mobiles.',
    link: 'https://www.tomhorngaming.com/games/triple-thunder/',
  },
  {
    id: 3,
    title: 'Final Frontier',
    description:
      'A space-themed web game with mobile-first UI, built using React, Phaser, PIXI, and TypeScript. Optimized for low-bandwidth networks with adaptive asset quality, it offers responsive controls and smooth gameplay across devices, ensuring accessibility and fast load times.',
    link: 'https://www.slotstemple.com/free-slots/final-frontier/',
  },
];

const MyWork: React.FC = () => {
  return (
    <section id="my-work" className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <WithScrollAnimation animation="animate-fade-in">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">My Work</h1>
        </WithScrollAnimation>

        <div className="space-y-12">
          {workItems.map((work) => (
            <WithScrollAnimation key={work.id} animation="animate-scale-up">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">{work.title}</h2>
                <p className="text-gray-700 mb-4">{work.description}</p>
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-semibold hover:underline"
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
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Mukul. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Twitter
            </a>
          </div>
        </div>
      </footer> */}
    </section>
  );
};

export default MyWork;