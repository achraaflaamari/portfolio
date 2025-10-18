"use client";

import { useDeviceDetection } from '@/hooks/useDeviceDetection';

/**
 * Composant de protection des routes pour séparer mobile et desktop
 * Affiche un message approprié si l'utilisateur accède à la mauvaise version
 */
export function MobileOnly({ children }) {
  const { isMobile, isTablet, isDesktop, isLoading } = useDeviceDetection();

  // Afficher un loader pendant la détection
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  // Afficher le contenu si mobile ou tablette
  if (isMobile || isTablet) {
    return children;
  }

  // Redirection ou message pour desktop
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Mobile View</h2>
        <p className="text-slate-600 mb-6">
          Cette vue est optimisée pour les appareils mobiles. Veuillez utiliser un smartphone ou redimensionner votre fenêtre.
        </p>
        <div className="text-sm text-slate-500">
          Largeur actuelle: <span className="font-bold">{window.innerWidth}px</span>
        </div>
      </div>
    </div>
  );
}

export function DesktopOnly({ children }) {
  const { isDesktop, isLoading } = useDeviceDetection();

  // Afficher un loader pendant la détection
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  // Afficher le contenu si desktop
  if (isDesktop) {
    return children;
  }

  // Message pour mobile/tablette
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Desktop View</h2>
        <p className="text-slate-600 mb-6">
          Cette vue est optimisée pour les écrans desktop. Veuillez utiliser un ordinateur ou une tablette en mode paysage.
        </p>
        <div className="text-sm text-slate-500">
          Largeur minimale requise: <span className="font-bold">1024px</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Composant de protection adaptatif - affiche automatiquement la bonne version
 */
export function ResponsiveRoute({ mobileComponent, desktopComponent }) {
  const { isDesktop, isLoading } = useDeviceDetection();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return isDesktop ? desktopComponent : mobileComponent;
}
