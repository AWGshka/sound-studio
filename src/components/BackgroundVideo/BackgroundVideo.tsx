"use client";

import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  src: string;
  className?: string;
  opacity?: number;
}

export const BackgroundVideo = ({ src, className = "", opacity = 0.5 }: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties for optimal performance
      video.preload = "metadata";
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");

      // Ensure video plays automatically and loops
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log("Video autoplay failed:", error);
        }
      };

      // Play video when it's ready
      if (video.readyState >= 3) {
        playVideo();
      } else {
        video.addEventListener("canplay", playVideo, { once: true });
      }

      // Handle visibility change to pause/resume video
      const handleVisibilityChange = () => {
        if (document.hidden) {
          video.pause();
        } else if (!video.ended) {
          playVideo();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden background-video ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
        aria-hidden="true">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay to ensure content is readable */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
};
