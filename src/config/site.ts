import type { SiteConfig } from "@/types/config";

export const siteConfig: SiteConfig = {
  studio: {
    name: "Sosnovka Studio",
    tagline: "Профессиональная студия звукозаписи",
    description:
      "Sosnovka Studio — это современная студия звукозаписи в центре Краснодара, оснащенная профессиональным оборудованием и управляемая командой опытных звукоинженеров и продюсеров.",
    logo: "/images/logo.svg",
    address: {
      street: "ул. Красная, 122",
      city: "Краснодар",
      metro: "Центр города",
    },
    location: {
      coordinates: [38.975313, 45.03547] as [number, number], // [longitude, latitude]
      zoom: 16,
    },
    contact: {
      phone: "+7 (918) 222-22-22",
      email: "info@sosnovka-studio.ru",
      workingHours: {
        weekdays: "Пн-Пт: 10:00 - 22:00",
        weekends: "Сб-Вс: 12:00 - 20:00",
      },
    },
    socialMedia: {
      youtube: "https://youtube.com/@sosnovka-studio",
      soundcloud: "https://soundcloud.com/sosnovka-studio",
      telegram: "https://t.me/sosnovka-studio",
      spotify: "https://open.spotify.com/artist/sosnovka-studio",
      yandexMusic: "https://music.yandex.ru/artist/sosnovka-studio",
      appleMusic: "https://music.apple.com/artist/sosnovka-studio",
    },
  },

  hero: {
    title: {
      main: "Профессиональная",
      highlight: "звукозапись",
    },
    subtitle: "Создаем музыку мирового уровня в Краснодаре. Запись, сведение, мастеринг — все для вашего успеха в музыкальной индустрии.",
    buttons: {
      primary: "Записаться",
      secondary: "Наши работы",
    },
    features: [
      {
        icon: "Music",
        title: "Профессиональное оборудование",
        description: "Neumann, SSL, Pro Tools HDX",
      },
      {
        icon: "Headphones",
        title: "Опытные инженеры",
        description: "Более 10 лет в индустрии",
      },
      {
        icon: "Star",
        title: "Гарантия качества",
        description: "Бесплатные правки до результата",
      },
    ],
  },

  services: [
    {
      id: "vocal-recording",
      name: "Запись вокала",
      description: "Профессиональная запись вокала в акустически обработанной студии с использованием топового оборудования Neumann U87 и Avalon VT-737sp.",
      price: { from: 3000, currency: "₽" },
      icon: "Mic",
      features: ["Акустически обработанная кабина", "Микрофоны Neumann U87, AKG C414", "Предусилители Avalon, Neve", "Мониторинг на Genelec 8040A"],
    },
    {
      id: "instrument-recording",
      name: "Запись инструментов",
      description: "Качественная запись любых музыкальных инструментов: электро и акустические гитары, бас-гитара, барабаны, клавишные.",
      price: { from: 2500, currency: "₽" },
      icon: "Guitar",
      features: ["Комплект микрофонов для барабанов", "DI-боксы Radial, Countryman", "Гитарные усилители Marshall, Fender", "Акустические инструменты"],
    },
    {
      id: "mixing",
      name: "Сведение",
      description: "Профессиональное сведение ваших треков. Балансировка инструментов, обработка эффектами, создание глубины и пространства.",
      price: { from: 5000, currency: "₽" },
      icon: "Sliders",
      features: ["Работа в Pro Tools HDX", "Плагины Waves, Universal Audio", "Аналоговые процессоры SSL, Neve", "Референс на различных мониторах"],
    },
    {
      id: "mastering",
      name: "Мастеринг",
      description: "Финальная обработка трека для всех платформ. Оптимизация громкости, динамики и частотного баланса для стриминговых сервисов.",
      price: { from: 2000, currency: "₽" },
      icon: "Sparkles",
      features: ["Мастеринг для стриминга", "Подготовка для винила", "Анализ LUFS и динамического диапазона", "Несколько версий для разных платформ"],
    },
    {
      id: "arrangement",
      name: "Аранжировка",
      description: "Создание полноценной аранжировки из вашей идеи. Добавление инструментов, гармоний, ритмических партий и оркестровки.",
      price: { from: 8000, currency: "₽" },
      icon: "FileMusic",
      features: ["Работа с живыми инструментами", "MIDI-программирование", "Оркестровые аранжировки", "Современные и классические стили"],
    },
    {
      id: "production",
      name: "Продакшн",
      description: "Полный цикл создания трека от идеи до готового релиза. Композиция, аранжировка, запись, сведение, мастеринг.",
      price: { from: 15000, currency: "₽" },
      icon: "Music",
      features: ["Полный цикл производства", "Работа с артистом", "Креативная поддержка", "Готовый к релизу результат"],
    },
  ],

  equipment: [
    {
      category: "Микрофоны",
      items: ["Neumann U87 Ai", "Neumann TLM 103", "AKG C414 XLS", "Shure SM57/58", "Royer R-121", "Coles 4038"],
    },
    {
      category: "Предусилители",
      items: ["Avalon VT-737sp", "Neve 1073", "API 512c", "Universal Audio 610", "SSL VHD Pre"],
    },
    {
      category: "Мониторы",
      items: ["Genelec 8040A", "Yamaha NS-10M", "Auratone 5C", "Beyerdynamic DT 770"],
    },
    {
      category: "DAW и процессоры",
      items: ["Pro Tools HDX", "Logic Pro X", "Universal Audio Apollo", "Waves Mercury Bundle", "FabFilter Pro Bundle"],
    },
  ],

  portfolio: [
    {
      id: "track-1",
      title: "Oh I think they like me",
      artist: "INMYWHITEE",
      genre: "Indie Pop",
      services: ["Запись вокала", "Сведение", "Мастеринг"],
      imageUrl: "/images/portfolio/track-1.png",
      releaseDate: "2025-04-23",
      audioUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: "track-2",
      title: "Not Like Us",
      artist: "Kendrick Lamar",
      genre: "Hip-Hop",
      services: ["Продакшн", "Запись вокала"],
      imageUrl: "/images/portfolio/track-2.png",
      releaseDate: "2024-05-04",
      audioUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: "track-3",
      title: "Наследство (Inheritance)",
      artist: "ICEGERGERT & SKY RAE",
      genre: "Electronic Rock",
      services: ["Запись инструментов", "Сведение"],
      imageUrl: "/images/portfolio/track-3.png",
      releaseDate: "2025-04-25",
    },
    {
      id: "track-4",
      title: "Expensive Tearz",
      artist: "sugakkilla",
      genre: "Neo-Soul",
      services: ["Аранжировка", "Запись вокала", "Мастеринг"],
      imageUrl: "/images/portfolio/track-4.jpg",
      releaseDate: "2025-04-23",
    },
    {
      id: "track-5",
      title: "No Gletcher Gang 2",
      artist: "FRIENDLY THUG 52 NGG",
      genre: "Drum & Bass",
      services: ["Продакшн", "Мастеринг"],
      imageUrl: "/images/portfolio/track-5.png",
      releaseDate: "2025-04-23",
    },
    {
      id: "track-6",
      title: "BOMB",
      artist: "ROCKET",
      genre: "Чувак это репчик",
      services: ["Запись инструментов", "Сведение"],
      imageUrl: "/images/portfolio/track-6.png",
      releaseDate: "2021-03-26",
      audioUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],

  gallery: [
    {
      id: "studio-1",
      title: "Главная студия",
      description: "Основная комната для записи с акустической обработкой",
      imageUrl: "/images/studio/studio-1.jpg",
    },
    {
      id: "studio-2",
      title: "Вокальная кабина",
      description: "Изолированная кабина для записи вокала",
      imageUrl: "/images/studio/studio-2.jpg",
    },
    {
      id: "equipment-1",
      title: "Микрофоны Neumann",
      description: "Коллекция профессиональных микрофонов",
      imageUrl: "/images/studio/studio-3.jpg",
    },
    {
      id: "equipment-2",
      title: "Пульт SSL",
      description: "Аналоговый микшерный пульт SSL",
      imageUrl: "/images/studio/studio-4.jpg",
    },
    {
      id: "equipment-3",
      title: "Мониторы Genelec",
      description: "Студийные мониторы для точного контроля",
      imageUrl: "/images/studio/studio-5.jpg",
    },
  ],

  team: [
    {
      id: "pasha-tehnik",
      name: "Павел Ивлев",
      role: "Главный звукоинженер",
      experience: "12 лет",
      photo: "/images/team/pashka.jpg",
      bio: "Выпускник Berklee College of Music. Работал с такими артистами как Мумий Тролль, Земфира, Сплин. Специализируется на записи и сведении рок и поп музыки.",
    },
    {
      id: "rocket",
      name: "Дмитрий Ухин",
      role: "Продюсер",
      experience: "8 лет",
      photo: "/images/team/rocket.jpg",
      bio: "Продюсер и аранжировщик с опытом работы в различных жанрах. Специализируется на поп, R&B и электронной музыке. Выпустил более 50 коммерческих релизов.",
    },
    {
      id: "papka-future",
      name: "Нейведиус Деманв",
      role: "Мастеринг-инженер",
      experience: "15 лет",
      photo: "/images/team/future.jpg",
      bio: "Сертифицированный мастеринг-инженер с международным опытом. Работы попадали в топы iTunes и Spotify. Специализируется на мастеринге для стриминговых платформ.",
    },
  ],

  stats: [
    { value: "500+", label: "Записанных треков" },
    { value: "12+", label: "Лет опыта" },
    { value: "200+", label: "Довольных клиентов" },
    { value: "24/7", label: "Поддержка" },
  ],

  sections: {
    about: {
      title: "О нашей студии",
      additionalDescription:
        "Мы работаем с артистами всех жанров и уровней — от начинающих музыкантов до известных исполнителей. Наша цель — помочь каждому клиенту реализовать свое творческое видение на высшем уровне.",
      equipmentTitle: "Профессиональное оборудование",
      learnMoreButton: "Узнать больше",
    },
    services: {
      title: "Наши услуги",
      subtitle: "Полный спектр услуг для создания профессиональной музыки",
    },
    gallery: {
      title: "Студия изнутри",
      subtitle: "Посмотрите на наше профессиональное оборудование и рабочий процесс",
    },
    portfolio: {
      title: "Наши работы",
      subtitle: "Примеры проектов, над которыми мы работали",
      listenButton: "Слушать",
      detailsButton: "Подробнее",
    },
    team: {
      title: "Наша команда",
      subtitle: "Профессионалы с многолетним опытом в музыкальной индустрии",
    },
    contact: {
      title: "Связаться с нами",
      subtitle: "Готовы начать работу над вашим проектом? Свяжитесь с нами!",
      form: {
        title: "Отправить сообщение",
        nameLabel: "Имя",
        namePlaceholder: "Ваше имя",
        emailLabel: "Email",
        emailPlaceholder: "Ваш email",
        messageLabel: "Сообщение",
        messagePlaceholder: "Расскажите о вашем проекте...",
        submitButton: "Отправить сообщение",
      },
      info: {
        addressTitle: "Адрес студии",
        phoneTitle: "Телефон",
        emailTitle: "Email",
        workingHoursTitle: "Режим работы",
      },
      mapTitle: "Как нас найти",
    },
    footer: {
      servicesTitle: "Услуги",
      contactsTitle: "Контакты",
      socialTitle: "Социальные сети",
      copyright: "All rights reserved",
    },
  },
};
