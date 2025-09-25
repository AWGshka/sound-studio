"use client";

import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Gallery = () => {
  const { gallery, sections } = siteConfig;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Create infinite scroll by duplicating items
  const infiniteGallery = [...gallery, ...gallery, ...gallery];

  useEffect(() => {
    // Center the scroll position on mount
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const itemWidth = 400 + 24; // width + gap
      const centerOffset = gallery.length * itemWidth;
      scrollContainer.scrollLeft = centerOffset;
    }
  }, [gallery.length]);

  const handleScroll = () => {
    if (!scrollRef.current || isDragging) return;

    const scrollContainer = scrollRef.current;
    const itemWidth = 400 + 24; // width + gap
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const sectionWidth = gallery.length * itemWidth;

    // If scrolled to the beginning, jump to the middle section
    if (scrollContainer.scrollLeft <= 0) {
      scrollContainer.scrollLeft = sectionWidth;
    }
    // If scrolled to the end, jump to the middle section
    else if (scrollContainer.scrollLeft >= maxScroll) {
      scrollContainer.scrollLeft = sectionWidth;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <Section id="gallery" padding="lg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.gallery.title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{sections.gallery.subtitle}</p>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`overflow-x-auto overflow-y-hidden custom-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
          <div className="flex gap-6 pb-4 min-w-max">
            {infiniteGallery.map((item, index) => (
              <div
                key={`${item.id}-${Math.floor(index / gallery.length)}`}
                className="flex-shrink-0 w-[400px] h-64 relative group cursor-pointer overflow-hidden rounded-lg bg-black/20 border border-white/20 select-none">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 80vw, 400px"
                  quality={60}
                  priority={item.id === "studio-3" || index === 0}
                  fetchPriority={item.id === "studio-3" || index === 0 ? "high" : undefined}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.description && <p className="text-sm text-white/80">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicators */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-8 h-16 bg-gradient-to-r from-black/50 to-transparent pointer-events-none rounded-r" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-8 h-16 bg-gradient-to-l from-black/50 to-transparent pointer-events-none rounded-l" />
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0.2);
        }

        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          margin: 0 20px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:active {
          background: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </Section>
  );
};
