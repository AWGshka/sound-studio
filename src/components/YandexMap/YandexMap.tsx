"use client";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { siteConfig } from "@/config/site";

import type * as YMaps3 from "@yandex/ymaps3-types";
import type { ReactifiedModule } from "@yandex/ymaps3-types/reactify/reactify";

declare global {
  interface Window {
    ymaps3: typeof YMaps3;
  }
}

type ReactifiedApi = ReactifiedModule<typeof window.ymaps3>;

interface YandexMapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  markers?: Array<{
    coordinates: [number, number];
    title: string;
    content?: string;
  }>;
}

export const YandexMap = ({ center, zoom, className = "", markers = [] }: YandexMapProps) => {
  const [reactifiedApi, setReactifiedApi] = React.useState<ReactifiedApi>();

  // Use default values from config if not provided
  const mapCenter = center || siteConfig.studio.location.coordinates;
  const mapZoom = zoom || siteConfig.studio.location.zoom;

  React.useEffect(() => {
    if (!window.ymaps3) {
      console.error("Yandex Maps API not loaded");
      return;
    }

    Promise.all([window.ymaps3.import("@yandex/ymaps3-reactify"), window.ymaps3.ready])
      .then(([{ reactify }]) => {
        setReactifiedApi(reactify.bindTo(React, ReactDOM).module(window.ymaps3));
      })
      .catch((error) => {
        console.error("Failed to initialize Yandex Maps:", error);
      });
  }, []);

  if (!reactifiedApi) {
    return (
      <div className={`w-full h-full min-h-[300px] rounded-lg bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = reactifiedApi;

  const location = {
    center: mapCenter,
    zoom: mapZoom,
  };

  return (
    <div className={`w-full h-full min-h-[300px] rounded-lg overflow-hidden ${className}`}>
      <YMap location={location} theme="dark">
        <YMapDefaultSchemeLayer theme="dark" />
        <YMapDefaultFeaturesLayer />
        {markers.map((marker, index) => (
          <YMapMarker key={index} coordinates={marker.coordinates}>
            <div className="relative group">
              {/* Main marker pin */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Pulsing animation */}
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  {/* Main pin body */}
                  <div className="relative w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  {/* Pin pointer */}
                  <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-red-600"></div>
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap backdrop-blur-sm border border-white/20 shadow-xl">
                  <div className="font-semibold">{marker.title}</div>
                  {marker.content && <div className="text-xs text-gray-300 mt-1">{marker.content} </div>}
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
                </div>
              </div>
            </div>
          </YMapMarker>
        ))}
      </YMap>
    </div>
  );
};
