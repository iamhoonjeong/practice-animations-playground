import React, { useEffect } from 'react';
import App from '../../animations/infinifeDropBall/app';

export default function InfiniteDropBall() {
  useEffect(() => {
    const infiniteDrop = new App();
  });

  return <div className="infinite-drop"></div>;
}
