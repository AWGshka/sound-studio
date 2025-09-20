import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { DynamicIcon } from "@/utils";

export const About = () => {
  const { studio, equipment, stats, sections } = siteConfig;

  return (
    <Section id="about" padding="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {sections.about.title}
          </h2>
          <p className="text-lg text-white/80 mb-6">{studio.description}</p>
          <p className="text-lg text-white/80 mb-8">
            {sections.about.additionalDescription}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="text-center group hover:bg-black/30 rounded-lg p-4 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-200">
                  {stat.value}
                </div>
                <div className="text-white/80 group-hover:text-white/70 transition-colors duration-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              {sections.about.learnMoreButton}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="backdrop-blur-md bg-black/50 border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:bg-black/70">
            <div className="text-center">
              <div className="w-32 h-32 bg-black/60 rounded-full flex items-center justify-center mx-auto mb-6 group hover:bg-black/80 transition-colors duration-300 backdrop-blur-sm border border-white/25">
                <DynamicIcon
                  name="Settings"
                  className="w-16 h-16 text-white group-hover:text-white/90 transition-colors duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {sections.about.equipmentTitle}
              </h3>
              {equipment.map((category, index) => (
                <div
                  key={category.category}
                  className="mb-4 hover:bg-black/30 rounded-lg p-3 transition-all duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold text-left mb-2 text-white hover:text-white/90 transition-colors duration-200">
                    {category.category}:
                  </h4>
                  <ul className="text-left space-y-1 text-white/80">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="hover:text-white/70 transition-colors duration-200"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
