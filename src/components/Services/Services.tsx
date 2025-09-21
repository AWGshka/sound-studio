import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { DynamicIcon } from "@/utils";

export const Services = () => {
  const { services, sections } = siteConfig;

  return (
    <Section id="services" padding="lg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{sections.services.title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{sections.services.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="p-8 text-center">
            <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
              <DynamicIcon name={service.icon as any} className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
            <p className="text-white/80 mb-6">{service.description}</p>
            {service.features && (
              <div className="mb-6">
                <ul className="text-sm text-white/70 space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-2xl font-bold text-white">
              от {service.price.from} {service.price.currency}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
