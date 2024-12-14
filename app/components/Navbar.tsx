"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "About Us", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky border-b top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            <p className="text-black">Direct</p>
            <p className="text-primary">Builders</p>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Menu Sheet */}
        {isOpen && (
          <div className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-40 p-6 transition-transform transform translate-x-0">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              <HiX />
            </button>
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`text-lg font-semibold ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}