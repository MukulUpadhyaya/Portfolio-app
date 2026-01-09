// useStarryCanvas.ts
import { useEffect, useRef } from 'react';

export const useStarryCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Array<{ x: number; y: number; radius: number; alpha: number; speed: number }>>([]);
  const shootingStarsRef = useRef<Array<{ x: number; y: number; length: number; speed: number; alpha: number }>>([]);
  const animatingRef = useRef(false);

  const numStars = 200;

  const resizeCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  };

  const initStars = () => {
    if (canvasRef.current) {
      starsRef.current = [];
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvasRef.current.width,
          y: Math.random() * canvasRef.current.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          speed: Math.random() * 0.02,
        });
      }
    }
  };

  const createShootingStar = () => {
    if (canvasRef.current && Math.random() < 0.01) {
      shootingStarsRef.current.push({
        x: canvasRef.current.width,
        y: Math.random() * canvasRef.current.height * 0.3,
        length: 50,
        speed: 10,
        alpha: 1,
      });
    }
  };

  const updateShootingStars = () => {
    shootingStarsRef.current = shootingStarsRef.current.filter((ss) => {
      ss.x -= ss.speed;
      ss.y += ss.speed * 0.5;
      ss.alpha -= 0.02;
      return ss.alpha > 0 && ss.x > 0;
    });
  };

  const draw = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const gradient = ctx.createRadialGradient(
      canvasRef.current.width / 2,
      canvasRef.current.height / 2,
      100,
      canvasRef.current.width / 2,
      canvasRef.current.height / 2,
      canvasRef.current.width
    );
    gradient.addColorStop(0, 'rgba(0, 0, 50, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 0, 20, 0.8)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    ctx.save();
    ctx.translate(canvasRef.current.width / 2, canvasRef.current.height / 2);
    ctx.rotate(Date.now() * 0.00002);
    ctx.translate(-canvasRef.current.width / 2, -canvasRef.current.height / 2);

    starsRef.current.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
    });

    shootingStarsRef.current.forEach((ss) => {
      ctx.beginPath();
      ctx.moveTo(ss.x, ss.y);
      ctx.lineTo(ss.x + ss.length, ss.y - ss.length * 0.5);
      ctx.strokeStyle = `rgba(255, 255, 255, ${ss.alpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    ctx.restore();
  };

  const animate = () => {
    if (!animatingRef.current) return;
    createShootingStar();
    updateShootingStars();
    draw();
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    resizeCanvas();
    initStars();
    animatingRef.current = true;
    animate();

    const handleResize = () => {
      resizeCanvas();
      initStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      animatingRef.current = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return canvasRef;
};
