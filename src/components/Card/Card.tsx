import type { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export const Card = ({ children, className = "", hover = true, style }: CardProps) => {
  const hoverClass = hover ? "hover:shadow-2xl hover:-translate-y-2" : "";

  return (
    <div
      className={`
        backdrop-blur-md bg-black/50 border border-white/20 rounded-xl shadow-lg 
        transition-all duration-300 ${hoverClass} ${className}
        hover:bg-black/70 hover:border-white/25
      `}
      style={style}>
      {children}
    </div>
  );
};
