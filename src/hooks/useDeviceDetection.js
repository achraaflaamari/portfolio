import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour détecter le type d'appareil
 * @returns {Object} { isMobile, isTablet, isDesktop, isLoading }
 */
export function useDeviceDetection() {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLoading: true
  });

  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      
      // Breakpoints Tailwind CSS standards
      const isMobile = width < 768;  // < md
      const isTablet = width >= 768 && width < 1024;  // md to lg
      const isDesktop = width >= 1024;  // >= lg

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLoading: false
      });
    };

    // Détection initiale
    detectDevice();

    // Écouter les changements de taille d'écran
    window.addEventListener('resize', detectDevice);

    // Cleanup
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  return deviceInfo;
}

/**
 * Hook pour forcer la vue mobile ou desktop
 * @param {string} forcedView - 'mobile' ou 'desktop'
 * @returns {boolean} shouldRenderView
 */
export function useViewProtection(forcedView) {
  const { isMobile, isTablet, isDesktop, isLoading } = useDeviceDetection();

  if (isLoading) return null;

  if (forcedView === 'mobile') {
    return isMobile || isTablet;
  }

  if (forcedView === 'desktop') {
    return isDesktop;
  }

  return true;
}
