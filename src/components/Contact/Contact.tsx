"use client";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { YandexMap } from "@/components/YandexMap";
import { siteConfig } from "@/config/site";
import { DynamicIcon } from "@/utils";

export const Contact = () => {
  const { studio, sections } = siteConfig;

  return (
    <Section id="contact" padding="lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.contact.title}</h2>
          <p className="text-xl text-muted-foreground">{sections.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 flex-shrink-0">
                <DynamicIcon name="MapPin" className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold mb-2 text-white">{sections.contact.info.addressTitle}</h4>
                <p className="text-white/80 text-sm leading-relaxed text-nowrap">
                  {studio.address.street}
                  <br />
                  {studio.address.city}
                </p>
              </div>
            </div>
          </Card>

          {/* Working Hours Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 flex-shrink-0">
                <DynamicIcon name="Clock" className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold mb-2 text-white">{sections.contact.info.workingHoursTitle}</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {studio.contact.workingHours.weekdays}
                  <br />
                  {studio.contact.workingHours.weekends}
                </p>
              </div>
            </div>
          </Card>

          {/* Phone Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 flex-shrink-0">
                <DynamicIcon name="Phone" className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold mb-2 text-white">{sections.contact.info.phoneTitle}</h4>
                <div className="space-y-1">
                  {studio.contact.phones.map((phone, index) => (
                    <div key={index}>
                      <a href={`tel:${phone}`} className="text-white/80 cursor-pointer hover:text-white transition-colors block text-sm">
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Telegram Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 flex-shrink-0">
                <DynamicIcon name="Send" className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold mb-2 text-white">Telegram</h4>
                <a
                  href={studio.contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 cursor-pointer hover:text-white transition-colors text-sm">
                  Написать в Telegram
                </a>
              </div>
            </div>
          </Card>

          {/* Email Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 flex-shrink-0">
                <DynamicIcon name="Mail" className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold mb-2 text-white">{sections.contact.info.emailTitle}</h4>
                <a href={`mailto:${studio.contact.email}`} className="text-white/80 cursor-pointer hover:text-white transition-colors text-sm break-all">
                  {studio.contact.email}
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">{sections.contact.mapTitle}</h3>
            <div className="h-96">
              <YandexMap
                center={studio.location.coordinates}
                zoom={studio.location.zoom}
                markers={[
                  {
                    coordinates: studio.location.coordinates,
                    title: studio.name,
                    content: `${studio.address.street}<br/>${studio.address.city}<br/>${studio.address.metro}`,
                  },
                ]}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
