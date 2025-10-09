export interface AvitoReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface YandexReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  source: "Avito" | "Яндекс.Карты";
}
