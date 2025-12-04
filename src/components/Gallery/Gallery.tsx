"use client";

import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";

const ITEM_WIDTH = 400;
const GAP = 24;
const SCROLL_MULTIPLIER = 2;
const DUPLICATION_COUNT = 3;

export const Gallery = () => {
  const { gallery, sections } = siteConfig;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });

  // Memoize infinite gallery to prevent unnecessary recalculations
  const infiniteGallery = useMemo(() => Array.from({ length: DUPLICATION_COUNT }, () => gallery).flat(), [gallery]);

  const itemWidthWithGap = ITEM_WIDTH + GAP;
  const sectionWidth = gallery.length * itemWidthWithGap;

  // Center scroll position on mount
  useEffect(() => {
    scrollRef.current?.scrollTo({ left: sectionWidth, behavior: "auto" });
  }, [sectionWidth]);

  // Handle infinite scroll loop
  const handleScroll = useCallback(() => {
    if (!scrollRef.current || isDragging) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (scrollLeft <= 0 || scrollLeft >= maxScroll) {
      scrollRef.current.scrollLeft = sectionWidth;
    }
  }, [isDragging, sectionWidth]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setDragStart({
      x: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - dragStart.x) * SCROLL_MULTIPLIER;
      scrollRef.current.scrollLeft = dragStart.scrollLeft - walk;
    },
    [isDragging, dragStart]
  );

  const handleDragEnd = useCallback(() => setIsDragging(false), []);

  return (
    <Section id="gallery" padding="lg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.gallery.title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{sections.gallery.subtitle}</p>
      </div>

      <div className="relative">
        <section
          ref={scrollRef}
          role="region"
          aria-label="Gallery carousel"
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          className={`overflow-x-auto overflow-y-hidden custom-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
          <div className="flex gap-6 pb-4 min-w-max">
            {infiniteGallery.map((item, idx) => (
              <GalleryItem key={`${item.id}-${Math.floor(idx / gallery.length)}`} item={item} isPriority={item.id === "studio-3" || idx === 0} />
            ))}
          </div>
        </section>

        <ScrollIndicator position="left" />
        <ScrollIndicator position="right" />
      </div>

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

// Type definition for gallery items
type GalleryItemType = {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
};

// Extracted gallery item component for better readability and performance
const GalleryItem = ({ item, isPriority }: { item: GalleryItemType; isPriority: boolean }) => (
  <div className="flex-shrink-0 w-[400px] h-64 relative group cursor-pointer overflow-hidden rounded-lg bg-black/20 border border-white/20 select-none">
    <Image
      src={item.imageUrl}
      alt={item.title}
      fill
      sizes="(max-width: 640px) 80vw, 400px"
      quality={60}
      priority={isPriority}
      fetchPriority={isPriority ? "high" : undefined}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
      draggable={false}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      {item.description && <p className="text-sm text-white/80">{item.description}</p>}
    </div>
  </div>
);

// Extracted scroll indicator component
const ScrollIndicator = ({ position }: { position: "left" | "right" }) => (
  <div
    className={`absolute top-1/2 -translate-y-1/2 ${position}-0 w-8 h-16 bg-gradient-to-${
      position === "left" ? "r" : "l"
    } from-black/50 to-transparent pointer-events-none rounded-${position === "left" ? "r" : "l"}`}
  />
);
