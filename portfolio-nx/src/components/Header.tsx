import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Application, Text } from 'pixi.js';

const Header: React.FC = () => {
  const pixiContainerRef = React.useRef<HTMLDivElement>(null);
  const appRef = React.useRef<Application | null>(null);

  React.useEffect(() => {
    if (pixiContainerRef.current && !appRef.current) {
      const app = new Application({
        width: 250,
        height: 60,
        backgroundAlpha: 0,
        antialias: true,
        resolution: window.devicePixelRatio || 1,
      });

      appRef.current = app;
      pixiContainerRef.current.appendChild(app.view);

      const title = new Text("Mukul's Portfolio", {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xffffff,
        align: 'center',
      });

      title.anchor.set(0.5);
      title.x = app.screen.width / 2;
      title.y = app.screen.height / 2;
      title.alpha = 0;
      title.scale.set(0.8);

      app.stage.addChild(title);

      let time = 0;
      app.ticker.add((delta) => {
        time += delta;
        const p = Math.min(time / 30, 1);
        title.alpha = p;
        title.scale.set(0.8 + p * 0.2);
      });
    }

    return () => {
      if (appRef.current) {
        appRef.current.destroy(true);
        appRef.current = null;
      }
    };
  }, []);

  return (
    <header className="bg-blue-700 text-white py-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div ref={pixiContainerRef} className="hover:text-gray-200 transition" />
        <ul className="flex space-x-6">
          {['Home','About','Experience','Projects','My Work','Contact'].map((label) => (
            <li key={label}>
              <Link to={`/${label === 'Home' ? '' : '#'+label.toLowerCase().replace(' ', '-')}`}
                    smooth
                    className="hover:text-gray-200 transition">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
