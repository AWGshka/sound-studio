"use client";

import { useEffect, useState } from "react";
import type { Review } from "@/types/review";
import { avitoReviews, yandexReviews } from "@/config/reviews";

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = () => {
      try {
        setLoading(true);
        setError(null);

        const allReviews: Review[] = [
          ...avitoReviews.map((r) => ({ ...r, source: "Avito" as const })),
          ...yandexReviews.map((r) => ({ ...r, source: "Яндекс.Карты" as const })),
        ];

        allReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setReviews(allReviews);
        setLoading(false);
      } catch (err) {
        setError("Failed to load reviews");
        console.error("Error loading reviews:", err);
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  return { reviews, loading, error };
};
