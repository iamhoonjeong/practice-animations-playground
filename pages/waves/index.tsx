import React, { useEffect } from 'react';
import App from '../../animations/waves/app';

export default function Waves() {
  useEffect(() => {
    new App();
  });
  return <div className="ground"></div>;
}
