import React, { useEffect } from 'react';
import App from '../../animations/bounceBall/app';

export default function BounceBall() {
  useEffect(() => {
    const bounceBall = new App();

    return () => {
      window.removeEventListener('resize', bounceBall.resize);
    };
  });
  return <div className="bounce-ball"></div>;
}
