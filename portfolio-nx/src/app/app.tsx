import * as React from 'react';
   import Header from '../components/Header';
   import About from '../components/About';
   import Projects from '../components/Projects';
   import Contact from '../components/Contact';

   const App: React.FC = () => {
     return (
       <div className="min-h-screen bg-gray-100">
         <Header />
         <main className="container mx-auto px-4 py-8">
           <About />
           <Projects />
           <Contact />
         </main>
       </div>
     );
   };

   export default App;