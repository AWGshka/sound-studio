"use client";

import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";
import { DynamicIcon } from "@/utils";

export const Hero = () => {
  const { hero } = siteConfig;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {hero.title.main}
              <span className="block text-white animate-pulse">{hero.title.highlight}</span>
            </h1>
            <p className="text-md md:text-xl mb-8 text-white/80">{hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="transform hover:scale-105 transition-transform duration-200">
                {hero.buttons.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="transform hover:scale-105 transition-transform duration-200">
                {hero.buttons.secondary}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="backdrop-blur-md bg-black/50 border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:bg-black/70">
              <div className="space-y-4">
                {hero.features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-center space-x-4 group hover:bg-black/30 rounded-lg p-3 transition-all duration-200"
                    style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 backdrop-blur-sm border border-white/25">
                      <DynamicIcon name={feature.icon as any} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-white/90 transition-colors duration-200">{feature.title}</h3>
                      <p className="text-white/80 group-hover:text-white/70 transition-colors duration-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
