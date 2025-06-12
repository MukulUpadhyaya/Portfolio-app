import * as React from 'react';
import { useInView } from 'react-intersection-observer';

interface WithScrollAnimationProps {
  animation: string;
  children: React.ReactNode;
  className?: string;
}

const WithScrollAnimation: React.FC<WithScrollAnimationProps> = ({ animation, children, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? animation : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default WithScrollAnimation;