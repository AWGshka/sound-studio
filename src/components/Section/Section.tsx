import type { ReactNode } from "react";
import { BackgroundVideo } from "../BackgroundVideo";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "secondary" | "muted";
  padding?: "sm" | "md" | "lg";
  id?: string;
  videoBackground?: {
    src: string;
    opacity?: number;
  };
}

export const Section = ({
  children,
  className = "",
  background = "default",
  padding = "lg",
  id,
  videoBackground,
}: SectionProps) => {
  const backgrounds = {
    default: "",
    secondary: "bg-secondary",
    muted: "bg-muted",
  };

  const paddings = {
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
  };

  return (
    <section
      id={id}
      className={`relative ${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      {videoBackground && (
        <BackgroundVideo
          src={videoBackground.src}
          opacity={videoBackground.opacity}
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
