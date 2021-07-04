import React, { useEffect } from 'react';
import App from '../animations/waveBall/app';

export default function WaveBall() {
  useEffect(() => {
    const waveBall = new App();

    return () => {
      window.removeEventListener('resize', waveBall.resize);
    };
  });
  return <div className="wave-ball"></div>;
}
