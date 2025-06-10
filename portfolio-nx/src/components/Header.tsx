import * as React from 'react';

   const Header: React.FC = () => {
     return (
       <header className="bg-blue-600 text-white py-4">
         <nav className="container mx-auto px-4 flex justify-between items-center">
           <h1 className="text-2xl font-bold">My Portfolio</h1>
           <ul className="flex space-x-4">
             <li><a href="#about" className="hover:underline">About</a></li>
             <li><a href="#projects" className="hover:underline">Projects</a></li>
             <li><a href="#contact" className="hover:underline">Contact</a></li>
           </ul>
         </nav>
       </header>
     );
   };

   export default Header;