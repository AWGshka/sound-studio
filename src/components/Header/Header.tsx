"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";

const { studio } = siteConfig;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: "Главная", id: "home" },
    { label: "Услуги", id: "services" },
    { label: "О нас", id: "about" },
    { label: "Портфолио", id: "portfolio" },
    { label: "Команда", id: "team" },
    { label: "Контакты", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md bg-black/50 border-b border-white/15 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button type="button" onClick={() => scrollToSection("home")} className="flex items-center cursor-pointer group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 overflow-hidden">
              <img src={studio.logo} alt={studio.name} className="w-full h-full object-contain" />
            </div>
            <div className="ml-3 text-left">
              <span className="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-200">{studio.name}</span>
              <div className="text-xs text-white/70 group-hover:text-white/80 transition-colors duration-200">{studio.tagline}</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer">
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Записаться
            </Button>
          </div>

          {/* Mobile menu button */}
          <button type="button" className="md:hidden p-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 absolute ${isMenuOpen ? "rotate-45" : "top-1"}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 absolute ${isMenuOpen ? "-rotate-45" : "bottom-1"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/15">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-colors text-left cursor-pointer">
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection("contact")} fullWidth>
                Записаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
