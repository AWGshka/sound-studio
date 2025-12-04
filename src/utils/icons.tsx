import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { FaYoutube, FaSoundcloud, FaTelegram, FaSpotify, FaApple, FaVk } from "react-icons/fa";

export type LucideIconName = keyof typeof LucideIcons;

// Custom Yandex Music SVG component
const YandexMusicIcon = ({ className, ...props }: LucideProps) => (
  <svg
    role="img"
    aria-label="YandexMusicIcon"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 400 400"
    className={className}
    {...props}
    xmlns="http://www.w3.org/2000/svg">
    <path d="M352 160.19L350.71 154.12L299.74 145.2L329.42 104.99L326 101.04L282.36 122.08L287.88 66.3499L283.41 63.7399L256.86 108.94L227.15 41.6599H221.91L229 106.57L154.08 46.3799L147.77 48.2199L205.34 121.03L91.2701 82.9099L86.0001 88.7099L188 147.05L47.3901 158.87L45.8201 167.55L191.94 183.56L69.9901 285.04L75.2601 292.12L220.34 212.75L191.7 352.59H200.38L256.07 220.91L290 323.92L296.03 319.19L282.12 214.6L334.92 274.79L338.33 269.24L297.88 194.61L354.37 215.64L354.9 209.33L304.18 171.73L352 160.19Z" />
  </svg>
);

// Define platform-specific icons
export const PlatformIcons = {
  Vk: FaVk,
  Youtube: FaYoutube,
  Soundcloud: FaSoundcloud,
  Telegram: FaTelegram,
  Spotify: FaSpotify,
  // Using the official Yandex Music SVG
  YandexMusic: YandexMusicIcon,
  AppleMusic: FaApple,
} as const;

export type PlatformIconName = keyof typeof PlatformIcons;
export type IconName = LucideIconName | PlatformIconName;

interface DynamicIconProps extends LucideProps {
  name: IconName;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  // First check if it's a platform-specific icon
  if (name in PlatformIcons) {
    const Icon = PlatformIcons[name as PlatformIconName];
    return <Icon {...props} />;
  }

  // Otherwise, try to find it in Lucide icons
  const LucideIcon = LucideIcons[name as LucideIconName] as React.ComponentType<LucideProps>;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react or platform icons`);
    return null;
  }

  return <LucideIcon {...props} />;
};
