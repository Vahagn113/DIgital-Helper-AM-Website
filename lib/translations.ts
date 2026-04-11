export type Language = 'en' | 'am' | 'ru';

export const translations = {
  en: {
    nav: {
      services: "Services",
      pricing: "Pricing",
      whyUs: "Why Us",
      contact: "Contact",
      getHelp: "Get Help"
    },
    hero: {
      badge: "Digital Services for Armenia",
      headline: "Fix Your CV. Grow Your Business. Solve Digital Problems.",
      subheadline: "We help you get hired, improve your business, and solve tech issues — fast and affordable.",
      ctaPrimary: "Get Help Now",
      ctaSecondary: "Contact on Telegram"
    },
    services: {
      title: "How We Can Help You",
      subtitle: "Tailored digital solutions for your career and business growth.",
      cv: {
        title: "CV & Job Help",
        items: ["CV creation & improvement", "Job applications (we apply)", "LinkedIn optimization"]
      },
      business: {
        title: "Business Digital Fix",
        items: ["Instagram optimization", "Bio, highlights, structure", "Basic marketing setup"]
      },
      website: {
        title: "Website Creation",
        items: ["Simple one-page websites", "Mobile-friendly design", "Clean & modern look"]
      },
      tech: {
        title: "Tech Help",
        items: ["Excel & data help", "PC & software setup", "General problem solving"]
      }
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the package that fits your needs. No hidden fees.",
      mostPopular: "Most Popular",
      starting: "Starting",
      inquire: "Inquire Now",
      plans: {
        basic: {
          name: "Basic",
          price: "7,000 AMD",
          features: ["CV Fix", "5 job applications", "Email support"],
          cta: "Start Basic"
        },
        standard: {
          name: "Standard",
          price: "15,000 AMD",
          features: ["CV + LinkedIn Fix", "15 job applications", "Priority support", "Interview tips"],
          cta: "Get Standard"
        },
        premium: {
          name: "Premium",
          price: "30,000 AMD",
          features: ["Full career support", "30 job applications", "1-on-1 consultation", "Cover letter template"],
          cta: "Go Premium"
        }
      },
      business: {
        title: "Business Package",
        desc: "Instagram setup + content plan",
        price: "25,000 AMD"
      },
      webDev: {
        title: "Website Creation",
        desc: "Simple landing page for your brand",
        price: "40,000 AMD"
      }
    },
    whyUs: {
      title: "Why Choose Digital Helper AM?",
      items: [
        "Fast results — we don't waste your time",
        "Affordable pricing for everyone",
        "Personalized help tailored to your goals",
        "Real problem solving, not just advice",
        "Focus on results: interviews, clients, growth"
      ],
      chat: {
        status: "Active Now",
        msg1: "Hi! How can we help you today?",
        msg2: "I need to fix my CV and find a job in marketing.",
        msg3: "Perfect! We have a Standard package that includes CV fix and 15 applications. We can start today."
      }
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Four simple steps to solve your digital problems.",
      steps: [
        { title: "Contact Us", desc: "Reach out via Telegram or our form." },
        { title: "Consultation", desc: "We understand your specific problem." },
        { title: "Solution", desc: "We offer the best package for you." },
        { title: "Results", desc: "We deliver fast and effective results." }
      ]
    },
    testimonials: {
      title: "What Our Clients Say",
      items: [
        {
          text: "Helped me fix my CV and I got an interview in just 1 week! Highly recommended for job seekers.",
          author: "Anna S.",
          role: "Marketing Specialist"
        },
        {
          text: "Improved my Instagram page structure and bio. I started getting new clients almost immediately.",
          author: "Karen M.",
          role: "Small Business Owner"
        }
      ]
    },
    contact: {
      title: "Ready to get results?",
      subtitle: "Contact us now and let's solve your digital problems together.",
      telegram: "Message on Telegram",
      instagram: "Follow on Instagram",
      whatsapp: "WhatsApp Us",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        message: "Message",
        messagePlaceholder: "How can we help you?",
        send: "Send Message"
      }
    },
    footer: {
      tagline: "Your partner in solving digital and job problems",
      rights: "All rights reserved."
    },
    settings: {
      theme: "Theme",
      language: "Language",
      light: "Light",
      dark: "Dark"
    }
  },
  am: {
    nav: {
      services: "Ծառայություններ",
      pricing: "Գներ",
      whyUs: "Ինչու մենք",
      contact: "Կապ",
      getHelp: "Ստանալ օգնություն"
    },
    hero: {
      badge: "Թվային ծառայություններ Հայաստանում",
      headline: "Ուղղեք ձեր CV-ն: Զարգացրեք ձեր բիզնեսը: Լուծեք թվային խնդիրները:",
      subheadline: "Մենք օգնում ենք ձեզ աշխատանք գտնել, բարելավել ձեր բիզնեսը և լուծել տեխնիկական խնդիրները՝ արագ և մատչելի:",
      ctaPrimary: "Ստանալ օգնություն հիմա",
      ctaSecondary: "Կապվել Telegram-ով"
    },
    services: {
      title: "Ինչպես կարող ենք օգնել ձեզ",
      subtitle: "Անհատական թվային լուծումներ ձեր կարիերայի և բիզնեսի աճի համար:",
      cv: {
        title: "CV և Աշխատանքի օգնություն",
        items: ["CV-ի ստեղծում և բարելավում", "Աշխատանքի հայտերի ուղարկում (մենք դիմում ենք ձեր փոխարեն)", "LinkedIn-ի օպտիմալացում"]
      },
      business: {
        title: "Բիզնեսի թվային շտկում",
        items: ["Instagram-ի օպտիմալացում", "Bio, highlights, բովանդակության կառուցվածք", "Մարքեթինգային հիմնական կարգավորումներ"]
      },
      website: {
        title: "Կայքերի ստեղծում",
        items: ["Պարզ մեկ էջանոց կայքեր", "Հարմարեցված բջջայինների համար", "Մաքուր և ժամանակակից դիզայն"]
      },
      tech: {
        title: "Տեխնիկական օգնություն",
        items: ["Excel-ի և տվյալների օգնություն", "Համակարգչի և ծրագրերի կարգավորում", "Ընդհանուր թվային խնդիրների լուծում"]
      }
    },
    pricing: {
      title: "Պարզ և թափանցիկ գներ",
      subtitle: "Ընտրեք ձեր կարիքներին համապատասխան փաթեթը: Առանց թաքնված վճարների:",
      mostPopular: "Ամենահայտնի",
      starting: "Սկսած",
      inquire: "Հարցնել հիմա",
      plans: {
        basic: {
          name: "Բազային",
          price: "7,000 դրամ",
          features: ["CV-ի շտկում", "5 աշխատանքի հայտ", "Էլ. փոստով աջակցություն"],
          cta: "Սկսել Բազայինը"
        },
        standard: {
          name: "Ստանդարտ",
          price: "15,000 դրամ",
          features: ["CV + LinkedIn-ի շտկում", "15 աշխատանքի հայտ", "Առաջնահերթ աջակցություն", "Հարցազրույցի խորհուրդներ"],
          cta: "Ստանալ Ստանդարտը"
        },
        premium: {
          name: "Պրեմիում",
          price: "30,000 դրամ",
          features: ["Ամբողջական կարիերայի աջակցություն", "30 աշխատանքի հայտ", "1-ը-1 խորհրդատվություն", "Ուղեկցող նամակի ձևանմուշ"],
          cta: "Անցնել Պրեմիումին"
        }
      },
      business: {
        title: "Բիզնես փաթեթ",
        desc: "Instagram-ի կարգավորում + բովանդակության պլան",
        price: "25,000 դրամ"
      },
      webDev: {
        title: "Կայքի ստեղծում",
        desc: "Պարզ landing էջ ձեր բրենդի համար",
        price: "40,000 դրամ"
      }
    },
    whyUs: {
      title: "Ինչու՞ ընտրել Digital Helper AM-ը",
      items: [
        "Արագ արդյունքներ — մենք չենք վատնում ձեր ժամանակը",
        "Մատչելի գներ բոլորի համար",
        "Անհատական մոտեցում ձեր նպատակներին",
        "Իրական խնդիրների լուծում, ոչ միայն խորհուրդներ",
        "Կենտրոնացում արդյունքի վրա՝ հարցազրույցներ, հաճախորդներ, աճ"
      ],
      chat: {
        status: "Ակտիվ է",
        msg1: "Ողջույն: Ինչպե՞ս կարող ենք օգնել ձեզ այսօր:",
        msg2: "Ինձ պետք է ուղղել CV-ն և աշխատանք գտնել մարքեթինգի ոլորտում:",
        msg3: "Հիանալի է: Մենք ունենք Ստանդարտ փաթեթ, որը ներառում է CV-ի շտկում և 15 հայտ: Կարող ենք սկսել այսօր:"
      }
    },
    howItWorks: {
      title: "Ինչպես է այն աշխատում",
      subtitle: "Չորս պարզ քայլ ձեր թվային խնդիրները լուծելու համար:",
      steps: [
        { title: "Կապ մեզ հետ", desc: "Գրեք մեզ Telegram-ով կամ լրացրեք ձևը:" },
        { title: "Խորհրդատվություն", desc: "Մենք հասկանում ենք ձեր կոնկրետ խնդիրը:" },
        { title: "Լուծում", desc: "Մենք առաջարկում ենք լավագույն փաթեթը ձեզ համար:" },
        { title: "Արդյունքներ", desc: "Մենք ապահովում ենք արագ և արդյունավետ արդյունքներ:" }
      ]
    },
    testimonials: {
      title: "Ինչ են ասում մեր հաճախորդները",
      items: [
        {
          text: "Օգնեցին ուղղել CV-ս և ես հարցազրույցի հրավեր ստացա ընդամենը 1 շաբաթում: Խիստ հանձնարարելի է աշխատանք փնտրողներին:",
          author: "Աննա Ս.",
          role: "Մարքեթինգի մասնագետ"
        },
        {
          text: "Բարելավեցին իմ Instagram-ի էջը: Սկսեցի նոր հաճախորդներ ստանալ գրեթե անմիջապես:",
          author: "Կարեն Մ.",
          role: "Փոքր բիզնեսի սեփականատեր"
        }
      ]
    },
    contact: {
      title: "Պատրա՞ստ եք արդյունքների:",
      subtitle: "Կապվեք մեզ հետ հիմա և եկեք միասին լուծենք ձեր թվային խնդիրները:",
      telegram: "Գրել Telegram-ով",
      instagram: "Հետևել Instagram-ում",
      whatsapp: "Գրել WhatsApp-ով",
      form: {
        name: "Անուն",
        namePlaceholder: "Ձեր անունը",
        message: "Հաղորդագրություն",
        messagePlaceholder: "Ինչպե՞ս կարող ենք օգնել ձեզ:",
        send: "Ուղարկել հաղորդագրություն"
      }
    },
    footer: {
      tagline: "Ձեր գործընկերը թվային և աշխատանքային խնդիրների լուծման գործում",
      rights: "Բոլոր իրավունքները պաշտպանված են:"
    },
    settings: {
      theme: "Թեմա",
      language: "Լեզու",
      light: "Լուսավոր",
      dark: "Մութ"
    }
  },
  ru: {
    nav: {
      services: "Услуги",
      pricing: "Цены",
      whyUs: "Почему мы",
      contact: "Контакты",
      getHelp: "Получить помощь"
    },
    hero: {
      badge: "Цифровые услуги в Армении",
      headline: "Исправьте свое резюме. Развивайте бизнес. Решайте цифровые задачи.",
      subheadline: "Мы помогаем вам найти работу, улучшить бизнес и решить технические проблемы — быстро и доступно.",
      ctaPrimary: "Получить помощь сейчас",
      ctaSecondary: "Связаться в Telegram"
    },
    services: {
      title: "Как мы можем вам помочь",
      subtitle: "Индивидуальные цифровые решения для вашей карьеры и роста бизнеса.",
      cv: {
        title: "Помощь с резюме и работой",
        items: ["Создание и улучшение резюме", "Подача заявок (мы подаем за вас)", "Оптимизация LinkedIn"]
      },
      business: {
        title: "Цифровое исправление бизнеса",
        items: ["Оптимизация Instagram", "Био, хайлайтс, структура", "Базовая настройка маркетинга"]
      },
      website: {
        title: "Создание сайтов",
        items: ["Простые одностраничные сайты", "Адаптация под мобильные", "Чистый и современный дизайн"]
      },
      tech: {
        title: "Техническая помощь",
        items: ["Помощь с Excel и данными", "Настройка ПК и программ", "Решение общих цифровых проблем"]
      }
    },
    pricing: {
      title: "Простые и прозрачные цены",
      subtitle: "Выберите пакет, который подходит вам. Никаких скрытых платечей.",
      mostPopular: "Самый популярный",
      starting: "От",
      inquire: "Узнать больше",
      plans: {
        basic: {
          name: "Базовый",
          price: "7,000 AMD",
          features: ["Исправление резюме", "5 заявок на работу", "Поддержка по почте"],
          cta: "Начать Базовый"
        },
        standard: {
          name: "Стандартный",
          price: "15,000 AMD",
          features: ["Резюме + LinkedIn", "15 заявок на работу", "Приоритетная поддержка", "Советы по интервью"],
          cta: "Выбрать Стандартный"
        },
        premium: {
          name: "Премиум",
          price: "30,000 AMD",
          features: ["Полная карьерная поддержка", "30 заявок на работу", "1-на-1 консультация", "Шаблон сопроводительного письма"],
          cta: "Перейти на Премиум"
        }
      },
      business: {
        title: "Бизнес-пакет",
        desc: "Настройка Instagram + контент-план",
        price: "25,000 AMD"
      },
      webDev: {
        title: "Создание сайта",
        desc: "Простой лендинг для вашего бренда",
        price: "40,000 AMD"
      }
    },
    whyUs: {
      title: "Почему стоит выбрать Digital Helper AM?",
      items: [
        "Быстрые результаты — мы не тратим ваше время",
        "Доступные цены для всех",
        "Персонализированная помощь под ваши цели",
        "Решение реальных проблем, а не просто советы",
        "Фокус на результате: интервью, клиенты, рост"
      ],
      chat: {
        status: "В сети",
        msg1: "Привет! Чем мы можем вам помочь сегодня?",
        msg2: "Мне нужно исправить резюме и найти работу в маркетинге.",
        msg3: "Отлично! У нас есть Стандартный пакет, который включает исправление резюме и 15 заявок. Можем начать сегодня."
      }
    },
    howItWorks: {
      title: "Как это работает",
      subtitle: "Четыре простых шага для решения ваших цифровых проблем.",
      steps: [
        { title: "Свяжитесь с нами", desc: "Напишите в Telegram или заполните форму." },
        { title: "Консультация", desc: "Мы вникаем в вашу конкретную проблему." },
        { title: "Решение", desc: "Мы предлагаем лучший пакет для вас." },
        { title: "Результаты", desc: "Мы обеспечиваем быстрые и эффективные результаты." }
      ]
    },
    testimonials: {
      title: "Что говорят наши клиенты",
      items: [
        {
          text: "Помогли исправить резюме, и я получил приглашение на интервью всего через неделю! Очень рекомендую.",
          author: "Анна С.",
          role: "Маркетолог"
        },
        {
          text: "Улучшили мою страницу в Instagram. Я начал получать новых клиентов почти сразу.",
          author: "Карен М.",
          role: "Владелец малого бизнеса"
        }
      ]
    },
    contact: {
      title: "Готовы к результатам?",
      subtitle: "Свяжитесь с нами сейчас, и давайте вместе решим ваши цифровые задачи.",
      telegram: "Написать в Telegram",
      instagram: "Подписаться в Instagram",
      whatsapp: "Написать в WhatsApp",
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        message: "Сообщение",
        messagePlaceholder: "Чем мы можем вам помочь?",
        send: "Отправить сообщение"
      }
    },
    footer: {
      tagline: "Ваш партнер в решении цифровых и карьерных задач",
      rights: "Все права защищены."
    },
    settings: {
      theme: "Тема",
      language: "Язык",
      light: "Светлая",
      dark: "Тёмная"
    }
  }
};
