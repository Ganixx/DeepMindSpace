import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Find Provider", href: "#find-provider" },
    { name: "For Providers", href: "#for-providers" },
    { name: "About Us", href: "#about-us" },
    { name: "Resources", href: "#resources", dropdown: true },
  ];

  return (
    <nav className="w-full bg-teal-50 h-20 flex items-center justify-between px-4 md:px-8 shadow-sm relative">
      {/* logo and name */}
      <a href="#home" className="flex items-center gap-2">
        <img src='/images/brain.png' alt="DeepMindScape Logo" className="w-10 h-10" />
        <h1 className="text-2xl md:text-4xl text-teal-800 font-semibold cursor-pointer">DeepMindScape</h1>
      </a>
      {/* Bigger Screen links */}
      <ul className="hidden md:flex items-center gap-4">
        {navLinks.map((link) =>
          link.dropdown ? (
            <li key={link.name} className="relative group">
              <a href={link.href} className="font-semibold text-lg border-0 hover:border-b-4 border-b-teal-800 cursor-pointer 
              flex items-center gap-1 focus:outline" aria-haspopup="true" aria-expanded="false">
                {link.name}
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </a>
              {/* Example dropdown, can be expanded */}
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 
              group-focus-within:opacity-100 pointer-events-none 
              group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-10">
                <li><a href="#resource1" className="block px-4 py-2 hover:bg-teal-100">Resource 1</a></li>
                <li><a href="#resource2" className="block px-4 py-2 hover:bg-teal-100">Resource 2</a></li>
              </ul>
            </li>
          ) : (
            <li key={link.name}>
              <a href={link.href} className="font-semibold text-lg border-0 hover:border-b-4 border-b-teal-800 cursor-pointer focus:outline">
                {link.name}
              </a>
            </li>
          )
        )}
      </ul>
      {/* Mobile code*/}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-20 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.name} className="relative group">
                  <button className="w-full text-left font-semibold text-lg flex items-center gap-1 focus:outline" 
                  aria-haspopup="true" aria-expanded="false">
                    {link.name}
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </button>
                  <ul className="ml-4 mt-1 bg-teal-50 rounded-md 
                  opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none 
                  group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity">
                    <li><a href="#resource1" className="block px-2 py-2 hover:bg-teal-100">Resource 1</a></li>
                    <li><a href="#resource2" className="block px-2 py-2 hover:bg-teal-100">Resource 2</a></li>
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  <a href={link.href} className="font-semibold text-lg block py-2 focus:outline">
                    {link.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;