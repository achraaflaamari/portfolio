import { FileUser, Home, Mail, MonitorCog, Tags } from "lucide-react";
import React from "react";

function Menu() {
  return (
    <div className=" animate-fade-down grid grid-cols-2 fixed z-50 w-full h-13 bg-transparent backdrop-blur-3xl">
      <div className=" flex px-10 items-center   font-medium text-gray-300 anton text-2xl uppercase">
        Achraf LAMARI
      </div>
      <div className=" flex justify-center items-center  text-sm font-medium text-gray-300 ">
        <button
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("Landing")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex justify-center items-center hover:cursor-pointer my-2 px-5 transition-transform duration-500 ease-in-out transform  hover:text-white hover:scale-125"
        >
          Home
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("About")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex justify-center items-center hover:cursor-pointer my-2 px-5 transition-transform duration-500 ease-in-out transform  hover:text-white hover:scale-125"
        >
          About
        </button>
        <button 
        onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("Projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex justify-center items-center  hover:cursor-pointer my-2 px-5 transition-transform duration-500 ease-in-out transform  hover:text-white hover:scale-125"
        >
          Projects
        </button>
        <button onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("Skills")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex justify-center items-center hover:cursor-pointer my-2 px-5 transition-transform duration-500 ease-in-out transform  hover:text-white hover:scale-125 "
        >
          Skills
        </button>
        <button onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("Contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex justify-center items-center hover:cursor-pointer my-2 px-5 transition-transform duration-300 ease-in-out transform  hover:text-white hover:scale-125"
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Menu;
