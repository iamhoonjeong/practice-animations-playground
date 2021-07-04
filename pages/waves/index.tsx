import React, { useEffect } from 'react';
import App from '../../animations/waves/app';

export default function Waves() {
  useEffect(() => {
    let waves = new App();

    return () => {
      window.removeEventListener('resize', waves.resize);
    };
  });
  return <div className="waves"></div>;
}
