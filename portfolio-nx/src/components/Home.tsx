import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import WithScrollAnimation from '../components/WithScrollAnimation';
import Skills from '../components/Skills';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section with Fade-In Animation */}
      <WithScrollAnimation animation="animate-fade-in">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-8">
              I’m a Frontend Developer passionate about building modern, user-friendly web applications.
            </p>
            <Link
              to="/my-work"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
            >
              View My Work
            </Link>
          </div>
        </section>
      </WithScrollAnimation>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
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
      </footer>
    </div>
  );
};

export default Home;