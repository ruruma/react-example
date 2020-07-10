import React, { useState, useEffect } from 'react';

export default function EffectHook() {
  const [windowWidth, setWindow] = useState(window.innerWidth);
  const handleSize = () => {
    setWindow(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}
