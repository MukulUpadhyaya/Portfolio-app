import * as React from 'react';

   const Contact: React.FC = () => {
     return (
       <section id="contact" className="py-8">
         <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
         <p className="text-lg">
           Reach out to me at{' '}
           <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
             your.email@example.com
           </a>
         </p>
       </section>
     );
   };

   export default Contact;