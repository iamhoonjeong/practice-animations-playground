import React, { useEffect } from 'react';
import App from '../../animations/bounceBall/app';

export default function BounceBall() {
  useEffect(() => {
    new App();
  });
  return <div className="ground"></div>;
}
