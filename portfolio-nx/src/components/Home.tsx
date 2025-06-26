import * as React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import WithScrollAnimation from '../components/WithScrollAnimation';
import Skills from '../components/Skills';
import MyWork from './MyWork';
import { useStarryCanvas } from '../utils/useStarryCanvas';

const Home: React.FC = () => {
  const canvasRef = useStarryCanvas();

  return (
    <div className="relative min-h-screen">
      {/* Background Container */}
      <div className="fixed inset-0 z-[-1]">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section with Fade-In Animation */}
      <WithScrollAnimation animation="animate-fade-in">
        <section className="relative bg-[radial-gradient(circle_at_50%_20%,_#2a004a_0%,_#1a1a2e_50%,_transparent_80%)] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition duration-300">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-200 drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] mt-4">
              I’m a Frontend Developer, passionate about building modern, user-friendly web applications and interactive games.
            </p>
          </div>
        </section>
      </WithScrollAnimation>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <About />
        <Skills />
        <WorkExperience />
        <MyWork />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Mukul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
