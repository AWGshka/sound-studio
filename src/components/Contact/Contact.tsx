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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {sections.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {sections.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              {sections.contact.form.title}
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  {sections.contact.form.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder={sections.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  {sections.contact.form.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder={sections.contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  {sections.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder={sections.contact.form.messagePlaceholder}
                />
              </div>
              <Button fullWidth size="lg">
                {sections.contact.form.submitButton}
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <DynamicIcon name="MapPin" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    {sections.contact.info.addressTitle}
                  </h4>
                  <p className="text-white/80">
                    {studio.address.street}
                    <br />
                    {studio.address.city}
                    <br />
                    {studio.address.metro}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <DynamicIcon name="Phone" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    {sections.contact.info.phoneTitle}
                  </h4>
                  <a
                    href={`tel:${studio.contact.phone}`}
                    className="text-white/80 cursor-pointer hover:text-white transition-colors"
                  >
                    {studio.contact.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <DynamicIcon name="Mail" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    {sections.contact.info.emailTitle}
                  </h4>
                  <a
                    href={`mailto:${studio.contact.email}`}
                    className="text-white/80 cursor-pointer hover:text-white transition-colors"
                  >
                    {studio.contact.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <DynamicIcon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    {sections.contact.info.workingHoursTitle}
                  </h4>
                  <p className="text-white/80">
                    {studio.contact.workingHours.weekdays}
                    <br />
                    {studio.contact.workingHours.weekends}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              {sections.contact.mapTitle}
            </h3>
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
