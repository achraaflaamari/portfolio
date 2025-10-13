import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false
});

function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleSplineLoad = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500); // Delay de 500ms après le chargement
  };

  return (
    <div id="Landing" className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen relative p-5">
      
          {/* Mobile: Spline Background */}
          <div className="lg:hidden absolute inset-0 z-0">
            <Spline
              scene="https://prod.spline.design/N4EV40kdovwSkyDl/scene.splinecode"
              onLoad={handleSplineLoad}
              className="w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className={`order-2 lg:order-1 relative z-10  pointer-events-none transition-opacity duration-1000 ${showContent ? 'animate-fade-right opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full flex justify-center items-end lg:items-center py-20 lg:py-0">
              <div className="text-center lg:text-left pointer-events-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase anton text-green-400">
                  Software
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase anton lg:pl-11">
                  {" "}
                  Developer
                </h1>
                <h2 className="OpenSansRegular text-lg sm:text-xl lg:text-2xl lg:pl-11 mt-4">Hi ! I'm Achraf LAMARI</h2>
                <p className="OpenSansLight lg:pl-11 text-base sm:text-lg lg:text-2xl mt-1 px-4 lg:px-0">
                  A software developer who blends imaginative ideas with
                  technical proficiency to create digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Spline in Column */}
          <div className="hidden lg:block relative order-1 lg:order-2 h-[50vh] lg:h-auto">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="text-xl">Loading ...</div>
            </div>
          )}

          {/* Desktop Spline */}
          <Spline
            scene="https://prod.spline.design/VhKXP4lgPLOeuJnF/scene.splinecode"
            onLoad={handleSplineLoad}
            className="w-full h-full"
          />
          </div>
        </div>

  )
}

export default Landing