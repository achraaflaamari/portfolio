"use client";

import { useEffect, useRef, useState } from 'react';

export default function SplineWrapper({ scene, onLoad, className, enableInteraction = true }) {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let splineApp = null;
    let animationFrameId = null;

    const loadSpline = async () => {
      try {
        const { Application } = await import('@splinetool/runtime');
        
        if (canvasRef.current) {
          splineApp = new Application(canvasRef.current);
          
          // Load with optimizations
          await splineApp.load(scene);
          
          // Optimize for mobile
          if (isMobile && splineApp) {
            // Reduce quality on mobile for better performance
            if (splineApp.setQuality) {
              splineApp.setQuality('low');
            }
            
            // Disable interactions on mobile if specified
            if (!enableInteraction && splineApp.setInteractionEnabled) {
              splineApp.setInteractionEnabled(false);
            }
            
            // Limit frame rate on mobile
            const canvas = canvasRef.current;
            if (canvas) {
              let lastFrameTime = 0;
              const fps = 30; // 30 FPS on mobile instead of 60
              const frameInterval = 1000 / fps;
              
              const throttleRender = (currentTime) => {
                animationFrameId = requestAnimationFrame(throttleRender);
                const elapsed = currentTime - lastFrameTime;
                
                if (elapsed > frameInterval) {
                  lastFrameTime = currentTime - (elapsed % frameInterval);
                }
              };
              
              animationFrameId = requestAnimationFrame(throttleRender);
            }
          }
          
          setIsLoaded(true);
          if (onLoad) onLoad();
        }
      } catch (error) {
        console.error('Error loading Spline:', error);
        if (onLoad) onLoad(); // Call onLoad even on error to show content
      }
    };

    // Delay loading slightly to prioritize critical content
    const timeoutId = setTimeout(loadSpline, isMobile ? 500 : 0);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (splineApp) {
        splineApp.dispose();
      }
    };
  }, [scene, onLoad, isMobile, enableInteraction]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
