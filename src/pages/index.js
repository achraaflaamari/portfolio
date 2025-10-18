"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
import { ResponsiveRoute } from '@/components/RouteProtection';

// Mobile Components
import WelcomeScreen from '@/components/WelcomeScreen';
import ProfileCard from '@/components/ProfileCard';
import InfoScreen from '@/components/InfoScreen';

// Desktop Components
import WelcomeScreenDesktop from '@/components/WelcomeScreenDesktop';
import ProfileCardDesktop from '@/components/ProfileCardDesktop';
import InfoScreenDesktop from '@/components/InfoScreenDesktop';

export default function Home() {
  const router = useRouter();
  const { isDesktop, isLoading } = useDeviceDetection();
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [initialSection, setInitialSection] = useState('about');

  // Load state from URL on mount
  useEffect(() => {
    const { screen, section } = router.query;
    if (screen) {
      setCurrentScreen(screen);
      if (section) {
        setInitialSection(section);
      }
    }
  }, [router.query]);

  // Navigation handler with device-aware routing
  const handleNavigate = (screen) => {
    if (['about', 'skills', 'projects', 'contact'].includes(screen)) {
      setInitialSection(screen);
      setCurrentScreen('info');
      router.push(`/?screen=info&section=${screen}`, undefined, { shallow: true });
    } else {
      setCurrentScreen(screen);
      router.push(`/?screen=${screen}`, undefined, { shallow: true });
    }
  };

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

  return (
    <>
      <Head>
        <title>Achraf LAMARI - Software Developer Portfolio</title>
        <meta name="description" content="Portfolio of Achraf LAMARI - Full Stack Software Developer specialized in Next.js, React, Spring Boot, and AI integration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Achraf LAMARI, Software Developer, Full Stack Developer, Next.js, React, Spring Boot, Portfolio" />
        <meta name="author" content="Achraf LAMARI" />
        <link rel="icon" type="image/png" href="/Fav.png" />
        <link rel="apple-touch-icon" href="/Fav.png" />
      </Head>
      
      <div className="w-full min-h-screen">
      {/* Welcome Screen - Protected Route */}
      {currentScreen === 'welcome' && (
        <ResponsiveRoute
          mobileComponent={<WelcomeScreen onNext={() => handleNavigate('profile')} />}
          desktopComponent={<WelcomeScreenDesktop onNext={() => handleNavigate('about')} />}
        />
      )}
      
      {/* Profile Screen - Mobile Only */}
      {currentScreen === 'profile' && !isDesktop && (
        <ProfileCard onNavigate={handleNavigate} />
      )}
      
      {/* Info Screen - Protected Route */}
      {currentScreen === 'info' && (
        <ResponsiveRoute
          mobileComponent={
            <InfoScreen 
              onBack={() => handleNavigate('profile')} 
              initialSection={initialSection}
            />
          }
          desktopComponent={
            <InfoScreenDesktop 
              onBack={() => handleNavigate('welcome')} 
              initialSection={initialSection}
            />
          }
        />
      )}
      </div>
    </>
  );
}
