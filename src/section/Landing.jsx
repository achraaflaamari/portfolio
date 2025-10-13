import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false
});

function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div id="Landing"className=" grid grid-cols-2 w-full h-screen relative p-5">
      
          <div className="animate-fade-right">
            <div className="w-full  h-full flex justify-center items-center">
              <div>
                <h1 className="text-8xl font-bold uppercase anton text-green-400">
                  Software
                </h1>
                <h1 className="text-8xl font-bold uppercase anton pl-11">
                  {" "}
                  Developer
                </h1>
                <h2 className="OpenSansRegular  text-2xl  pl-11">Hi ! I'm Achraf LAMARI</h2>
                <p className="OpenSansLight pl-11 text-2xl  mt-1">
                  A software developer who blends imaginative ideas with
                  technical proficiency to create digital solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="relative ">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="text-xl">Loading ...</div>
            </div>
          )}

          <Spline
            scene="https://prod.spline.design/VhKXP4lgPLOeuJnF/scene.splinecode"
            onLoad={() => setIsLoading(false)}
            className=" w-full h-full "
          />
          </div>
        </div>

  )
}

export default Landing