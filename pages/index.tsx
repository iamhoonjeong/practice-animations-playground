import React, { useEffect } from 'react';
import App from '../animations/waveBall/app';

export default function WaveBall() {
  useEffect(() => {
    new App();
  });
  return <div className="ground"></div>;
}
