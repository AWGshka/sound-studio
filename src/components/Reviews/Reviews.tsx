"use client";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { DynamicIcon } from "@/utils";
import { useReviews } from "@/hooks";

export const Reviews = () => {
  const { sections } = siteConfig;
  const { reviews, loading, error } = useReviews();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <DynamicIcon key={index} name="Star" className={`w-4 h-4 ${index < rating ? "text-white fill-white" : "text-white/30"}`} />
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <Section id="reviews" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.reviews?.title || "Отзывы клиентов"}</h2>
            <p className="text-xl text-muted-foreground">{sections.reviews?.subtitle || "Что говорят о нас наши клиенты"}</p>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white/50"></div>
          </div>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="reviews" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.reviews?.title || "Отзывы клиентов"}</h2>
            <p className="text-xl text-muted-foreground">{sections.reviews?.subtitle || "Что говорят о нас наши клиенты"}</p>
          </div>
          <Card className="p-8 text-center">
            <DynamicIcon name="AlertCircle" className="w-12 h-12 text-white/60 mx-auto mb-4" />
            <p className="text-white/80">{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
              Попробовать снова
            </button>
          </Card>
        </div>
      </Section>
    );
  }

  return (
    <Section id="reviews" padding="lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.reviews?.title || "Отзывы клиентов"}</h2>
          <p className="text-xl text-muted-foreground">{sections.reviews?.subtitle || "Что говорят о нас наши клиенты"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 h-full">
              <div className="flex flex-col h-full">
                {/* Header with author and rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <span className="text-white font-semibold text-sm">{review.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{review.author}</h4>
                      <p className="text-xs text-white/60">{formatDate(review.date)}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">{renderStars(review.rating)}</div>
                </div>

                {/* Review comment */}
                <div className="flex-grow">
                  <p className="text-white/80 text-sm leading-relaxed">{review.comment}</p>
                </div>

                {/* Source badge */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded border border-white/30 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{review.source.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-xs text-white/60">Отзыв с {review.source}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View all reviews links */}
        <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.avito.ru/krasnodar/predlozheniya_uslug/studiya_zvukozapisi_2612159526"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
            <span>Посмотреть все отзывы на Avito</span>
            <DynamicIcon name="ExternalLink" className="w-4 h-4" />
          </a>
          <span className="hidden sm:inline text-white/40">•</span>
          <a
            href="https://yandex.ru/maps/org/203675977435/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
            <span>Посмотреть все отзывы на Яндекс.Картах</span>
            <DynamicIcon name="ExternalLink" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
};
