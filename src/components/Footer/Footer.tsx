import { siteConfig } from "@/config/site";
import { DynamicIcon } from "@/utils";

export const Footer = () => {
  const { studio, services, sections } = siteConfig;

  return (
    <footer className="bg-black/60 backdrop-blur-md text-white pt-12 pb-8 border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group">
            <div className="flex items-center mb-4 group-hover:scale-105 transition-transform duration-200">
              <div className="w-10 h-10 bg-black/60 rounded-lg flex items-center justify-center group-hover:bg-black/80 transition-colors duration-200 backdrop-blur-sm border border-white/25">
                <span className="text-white font-bold text-xl group-hover:text-white/90 transition-colors duration-200">{studio.name.charAt(0)}</span>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold group-hover:text-white/90 transition-colors duration-200">{studio.name}</span>
                <div className="text-xs text-white/70 group-hover:text-white/80 transition-colors duration-200">{studio.tagline}</div>
              </div>
            </div>
            <p className="text-white/80 group-hover:text-white/70 transition-colors duration-200">{studio.description}</p>
          </div>

          <div className="group">
            <h4 className="font-semibold mb-4 group-hover:text-white/90 transition-colors duration-200">{sections.footer.servicesTitle}</h4>
            <ul className="space-y-2 text-white/80">
              {services.slice(0, 4).map((service, index) => (
                <li
                  key={service.id}
                  className="hover:text-white/70 transition-colors duration-200 hover:translate-x-1 transform"
                  style={{ animationDelay: `${index * 50}ms` }}>
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="group">
            <h4 className="font-semibold mb-4 group-hover:text-white/90 transition-colors duration-200">{sections.footer.contactsTitle}</h4>
            <ul className="space-y-2 text-white/80">
              {studio.contact.phones.map((phone, index) => (
                <li key={index}>
                  <a href={`tel:${phone}`} className="cursor-pointer hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${studio.contact.email}`}
                  className="cursor-pointer hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  {studio.contact.email}
                </a>
              </li>
              <li className="hover:text-white/70 transition-colors duration-200">{studio.address.street}</li>
              <li className="hover:text-white/70 transition-colors duration-200">{studio.address.city}</li>
            </ul>
          </div>

          <div className="group">
            <h4 className="font-semibold mb-4 group-hover:text-white/90 transition-colors duration-200">{sections.footer.socialTitle}</h4>
            <div className="flex flex-wrap gap-3 justify-start">
              {studio.socialMedia.vk && (
                <a
                  href={studio.socialMedia.vk}
                  className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 hover:text-white transition-all cursor-pointer transform hover:scale-110 hover:rotate-12 duration-300 backdrop-blur-sm border border-white/20"
                  target="_blank"
                  rel="noopener noreferrer">
                  <DynamicIcon name="Vk" className="w-5 h-5" />
                </a>
              )}
              {studio.socialMedia.youtube && (
                <a
                  href={studio.socialMedia.youtube}
                  className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 hover:text-white transition-all cursor-pointer transform hover:scale-110 hover:rotate-12 duration-300 backdrop-blur-sm border border-white/20"
                  target="_blank"
                  rel="noopener noreferrer">
                  <DynamicIcon name="Youtube" className="w-5 h-5" />
                </a>
              )}
              {studio.socialMedia.soundcloud && (
                <a
                  href={studio.socialMedia.soundcloud}
                  className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 hover:text-white transition-all cursor-pointer transform hover:scale-110 hover:rotate-12 duration-300 backdrop-blur-sm border border-white/20"
                  target="_blank"
                  rel="noopener noreferrer">
                  <DynamicIcon name="Soundcloud" className="w-5 h-5" />
                </a>
              )}
              {studio.socialMedia.telegram && (
                <a
                  href={studio.socialMedia.telegram}
                  className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 hover:text-white transition-all cursor-pointer transform hover:scale-110 hover:rotate-12 duration-300 backdrop-blur-sm border border-white/20"
                  target="_blank"
                  rel="noopener noreferrer">
                  <DynamicIcon name="Telegram" className="w-5 h-5" />
                </a>
              )}
              {studio.socialMedia.spotify && (
                <a
                  href={studio.socialMedia.spotify}
                  className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 hover:text-white transition-all cursor-pointer transform hover:scale-110 hover:rotate-12 duration-300 backdrop-blur-sm border border-white/20"
                  target="_blank"
                  rel="noopener noreferrer">
                  <DynamicIcon name="Spotify" className="w-5 h-5" />
                </a>
              )}
              {studio.socialMedia.yandexMusic && (
                <a
                  href={studio.socialMedia.yandexMusic}
                  className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 hover:text-white transition-all cursor-pointer transform hover:scale-110 hover:rotate-12 duration-300 backdrop-blur-sm border border-white/20"
                  target="_blank"
                  rel="noopener noreferrer">
                  <DynamicIcon name="YandexMusic" className="w-5 h-5" />
                </a>
              )}
              {studio.socialMedia.appleMusic && (
                <a
                  href={studio.socialMedia.appleMusic}
                  className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 hover:text-white transition-all cursor-pointer transform hover:scale-110 hover:rotate-12 duration-300 backdrop-blur-sm border border-white/20"
                  target="_blank"
                  rel="noopener noreferrer">
                  <DynamicIcon name="AppleMusic" className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-8 text-center text-white/80 hover:text-white/70 transition-colors duration-200">
          <p>
            &copy; {studio.name}. {sections.footer.copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
};
