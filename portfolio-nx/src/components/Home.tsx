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
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-white mb-8">
              I’m a Frontend Developer, passionate about building modern, user-friendly web applications and interactive
              games.
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
