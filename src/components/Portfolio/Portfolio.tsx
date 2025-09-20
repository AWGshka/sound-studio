"use client";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";

export const Portfolio = () => {
  const { portfolio, sections } = siteConfig;

  return (
    <Section id="portfolio" padding="lg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.portfolio.title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{sections.portfolio.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="h-48 bg-black/20 flex items-center justify-center relative overflow-hidden">
              <img src={item.imageUrl} alt={`${item.title} by ${item.artist}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">{item.title}</div>
                  <div className="text-sm opacity-75">{item.artist}</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-white/80 mb-2">
                {item.artist} • {item.genre}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {item.services.map((service) => (
                    <span key={service} className="text-xs bg-black/40 text-white px-2 py-1 rounded border border-white/20">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/70">{new Date(item.releaseDate).toLocaleDateString("ru-RU")}</span>
                <Button size="sm" variant="outline" className="cursor-pointer" onClick={() => item.audioUrl && window.open(item.audioUrl, "_blank")}>
                  {item.audioUrl ? sections.portfolio.listenButton : sections.portfolio.detailsButton}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
