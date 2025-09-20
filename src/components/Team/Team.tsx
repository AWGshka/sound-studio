import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";

export const Team = () => {
  const { team, sections } = siteConfig;

  return (
    <Section id="team" padding="lg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{sections.team.title}</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">{sections.team.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <Card
            key={member.id}
            className="p-8 text-center group transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative"
            style={{ animationDelay: `${index * 200}ms` }}>
            <div className="w-32 h-32 bg-black/60 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-black/80 transition-all duration-300 transform group-hover:rotate-6 backdrop-blur-sm border border-white/25 overflow-hidden">
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors duration-200">{member.name}</h3>
            <p className="text-white font-semibold mb-2 group-hover:text-white/80 transition-colors duration-200">{member.role}</p>
            <p className="text-white/80 text-sm mb-4 group-hover:text-white/70 transition-colors duration-200">Опыт: {member.experience}</p>
            <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-200">{member.bio}</p>

            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
