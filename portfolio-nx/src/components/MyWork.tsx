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
    title: 'E-Commerce Dashboard',
    description:
      'Designed and developed a responsive e-commerce dashboard using React and Tailwind CSS. Implemented features like real-time sales analytics, product management, and user authentication. The project improved client efficiency by 30% through streamlined workflows.',
    link: 'https://example.com/ecommerce-dashboard',
  },
  {
    id: 2,
    title: 'Personal Blog Platform',
    description:
      'Built a full-stack personal blog platform with Next.js and Firebase. Integrated Markdown support for blog posts, a commenting system, and SEO optimization. The platform achieved over 1,000 monthly users within three months of launch.',
    link: 'https://example.com/blog-platform',
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'Created a weather application using React and the OpenWeather API. Features include real-time weather updates, a 5-day forecast, and location-based weather data. Styled with Tailwind CSS for a clean and modern UI.',
    link: 'https://example.com/weather-app',
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