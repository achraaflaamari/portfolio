"use client";

import { useEffect, useRef, useState } from 'react';

export default function SplineWrapper({ scene, onLoad, className }) {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let splineApp = null;

    const loadSpline = async () => {
      try {
        const { Application } = await import('@splinetool/runtime');
        
        if (canvasRef.current) {
          splineApp = new Application(canvasRef.current);
          await splineApp.load(scene);
          setIsLoaded(true);
          if (onLoad) onLoad();
        }
      } catch (error) {
        console.error('Error loading Spline:', error);
      }
    };

    loadSpline();

    return () => {
      if (splineApp) {
        splineApp.dispose();
      }
    };
  }, [scene, onLoad]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
