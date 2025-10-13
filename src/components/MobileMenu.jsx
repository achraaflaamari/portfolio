import { X, Menu as MenuIcon } from "lucide-react";
import React, { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "Landing", label: "Home" },
    { id: "About", label: "About" },
    { id: "Projects", label: "Projects" },
    { id: "Skills", label: "Skills" },
    { id: "Contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-[60] p-2 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-700 z-[56] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="text-2xl font-bold text-white mb-8 anton uppercase">
            Menu
          </div>
          
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
