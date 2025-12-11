"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/Section";
import type { GalleryItem } from "@/types/config";

export const Gallery = () => {
  const { gallery, sections } = siteConfig;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef({ startX: 0, scrollLeft: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    dragStateRef.current = {
      startX: e.pageX - container.offsetLeft,
      scrollLeft: container.scrollLeft,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const distance = (x - dragStateRef.current.startX) * 2;
    scrollRef.current.scrollLeft = dragStateRef.current.scrollLeft - distance;
  };

  const handleDragEnd = () => setIsDragging(false);

  return (
    <Section id="gallery" padding="lg">
      <header className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.gallery.title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{sections.gallery.subtitle}</p>
      </header>

      <div className="relative">
        <div
          ref={scrollRef}
          role="region"
          aria-label="Gallery carousel"
          className={`overflow-x-auto overflow-y-hidden scroll-smooth select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:mx-5 [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-white/10 [&::-webkit-scrollbar-thumb:hover]:bg-white/50 [&::-webkit-scrollbar-thumb:active]:bg-white/70`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}>
          <div className="flex gap-6 pb-4">
            {gallery.map((item, idx) => (
              <GalleryCard key={item.id} item={item} priority={idx < 2} />
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-20 bg-gradient-to-r from-black/50 to-transparent pointer-events-none rounded-r" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-20 bg-gradient-to-l from-black/50 to-transparent pointer-events-none rounded-l" />
      </div>
    </Section>
  );
};

const GalleryCard = ({ item, priority }: { item: GalleryItem; priority: boolean }) => (
  <article className="relative flex-shrink-0 w-[400px] h-64 group overflow-hidden rounded-lg bg-black/20 border border-white/20">
    <Image
      src={item.imageUrl}
      alt={item.title}
      fill
      sizes="(max-width: 768px) 100vw, 400px"
      quality={85}
      priority={priority}
      className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
      draggable={false}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      {item.description && <p className="text-sm text-white/80">{item.description}</p>}
    </div>
  </article>
);
