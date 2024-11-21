
export const types=[
  {
    id:1,
    name:'book',
  },
  {
    id:2,
    name:'podcast',
  },
]
export const categories = [
  {
    id: 1,
    name: "رمان",
    image: "/imgs/categories/novel.jpg",
    slug: "novel",
    description: "داستان‌های جذاب و رمان‌های خواندنی",
    subcategories: [
      {
        id: 101,
        name: "رمان ایرانی",
        slug: "iranian-novel",
        image: "/imgs/subcategories/iranian-novel.jpg"
      },
      {
        id: 102,
        name: "رمان خارجی",
        slug: "foreign-novel",
        image: "/imgs/subcategories/foreign-novel.jpg"
      },
      {
        id: 103,
        name: "رمان عاش قانه",
        slug: "romance-novel",
        image: "/imgs/subcategories/romance-novel.jpg"
      },
      {
        id: 104,
        name: "رمان تاریخی",
        slug: "historical-novel",
        image: "/imgs/subcategories/historical-novel.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "روانشناسی",
    image: "/imgs/categories/psychology.jpg",
    slug: "psychology",
    description: "کتاب‌های روانشناسی و خودشناسی",
    subcategories: [
      {
        id: 201,
        name: "روانشناسی فردی",
        slug: "personal-psychology",
        image: "/imgs/subcategories/personal-psychology.jpg"
      },
      {
        id: 202,
        name: "روانشناسی موفقیت",
        slug: "success-psychology",
        image: "/imgs/subcategories/success-psychology.jpg"
      },
      {
        id: 203,
        name: "روانشناسی روابط",
        slug: "relationship-psychology",
        image: "/imgs/subcategories/relationship-psychology.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "کسب و کار",
    image: "/imgs/categories/business.jpg",
    slug: "business",
    description: "کتاب‌های مدیریت و کارآفرینی",
    subcategories: [
      {
        id: 301,
        name: "استارتاپ",
        slug: "startup",
        image: "/imgs/subcategories/startup.jpg"
      },
      {
        id: 302,
        name: "بازاریابی",
        slug: "marketing",
        image: "/imgs/subcategories/marketing.jpg"
      },
      {
        id: 303,
        name: "مدیریت",
        slug: "management",
        image: "/imgs/subcategories/management.jpg"
      },
      {
        id: 304,
        name: "رهبری",
        slug: "leadership",
        image: "/imgs/subcategories/leadership.jpg"
      }
    ]
  },
  {
    id: 4,
    name: "پادکست",
    image: "/imgs/categories/podcast.jpg",
    slug: "podcast",
    description: "مجموعه پادکست‌های متنوع",
    subcategories: [
      {
        id: 401,
        name: "پادکست انگیزشی",
        slug: "motivation-podcast",
        image: "/imgs/subcategories/motivation-podcast.jpg"
      },
      {
        id: 402,
        name: "پادکست علمی",
        slug: "science-podcast",
        image: "/imgs/subcategories/science-podcast.jpg"
      },
      {
        id: 403,
        name: "پادکست تاریخی",
        slug: "history-podcast",
        image: "/imgs/subcategories/history-podcast.jpg"
      },
      {
        id: 404,
        name: "پادکست کسب و کار",
        slug: "business-podcast",
        image: "/imgs/subcategories/business-podcast.jpg"
      }
    ]
  }
]

export const products = [
  {
    id: 1,
    name: "صد سال تنهایی",
    author: "محمد حسینی",
    publish: "1404/01/01",
    shorttext: "نوشته گابریل گارسیا مارکز یکی از آثار برجسته ادبیات معاصر است که داستان خانواده بوندیا را در دهکده خیالی ماکوندو روایت می‌کند.",
    price: 10000,
    img: "/imgs/1.jpg",
    slug: "product-1",
    type: "1",
    category: "1",
    tags: ["ادبیات داستانی", "رمان خارجی", "ادبیات معاصر"],
    hasAudio: true,
    audioVersion: {
      narrator: "احمد گلشن",
      duration: "12:30:00",
      audioFile: "/books/100years-audio.mp3",
      downloadLink: "/downloads/100years-audio.mp3",
      episodes: [
        {
          title: "فصل اول - ماکوندو",
          duration: "45:00",
          audioFile: "/books/100years/ep1.mp3"
        },
        {
          title: "فصل دوم - خاندان بوئندیا",
          duration: "50:00",
          audioFile: "/books/100years/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 2,
    name: "کیمیاگر",
    author: "پائولو کوئیلو",
    publish: "1403/05/15",
    shorttext: "داستان چوپان جوانی به نام سانتیاگو که به دنبال گنج خود سفری پرماجرا را آغاز می‌کند",
    price: 15000,
    img: "/imgs/3.jpg",
    slug: "alchemist",
    type: "1",
    category: "رمان",
    tags: ["ادبیات داستانی", "رمان خارجی", "عرفانی"],
    hasAudio: true,
    audioVersion: {
      narrator: "رضا سلطانی",
      duration: "6:45:00",
      audioFile: "/books/alchemist-audio.mp3",
      downloadLink: "/downloads/alchemist-audio.mp3",
      episodes: [
        {
          title: "بخش اول - رویای چوپان",
          duration: "35:00",
          audioFile: "/books/alchemist/ep1.mp3"
        },
        {
          title: "بخش دوم - سفر به مصر",
          duration: "40:00",
          audioFile: "/books/alchemist/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 3,
    name: "پادکست برنامه نویسی پایتون",
    author: "علی محمدی",
    publish: "1403/08/20",
    shorttext: "آموزش کامل برنامه نویسی پایتون از صفر تا صد",
    price: 8000,
    img: "/imgs/podcast3.jpg",
    slug: "python-podcast",
    type: "2",
    duration: "55:00",
    episode: 1,
    audioFile: "/podcasts/python-ep1.mp3",
    downloadLink: "/downloads/python-ep1.mp3"
  },
  {
    id: 4,
    name: "پادکست انگیزشی",
    author: "سارا کریمی",
    publish: "1403/09/01", 
    shorttext: "راهکارهای عملی برای موفقیت و انگیزه در زندگی",
    price: 6000,
    img: "/imgs/podcast4.jpg",
    slug: "motivation-podcast",
    type: "podcast",
    duration: "40:00",
    episode: 1,
    audioFile: "/podcasts/motivation-ep1.mp3",
    downloadLink: "/downloads/motivation-ep1.mp3"
  },
  {
    id: 5,
    name: "عادت‌های اتمی",
    author: "جیمز کلیر",
    publish: "1403/11/10",
    shorttext: "راهنمای عملی برای ایجاد عادت‌های خوب و ترک عادت‌های بد",
    price: 18000,
    img: "/imgs/5.jpg",
    slug: "atomic-habits",
    type: "book",
    category: "توسعه فردی",
    tags: ["روانشناسی", "موفقیت", "تغییر عادت"],
    hasAudio: true,
    audioVersion: {
      narrator: "مریم حسینی",
      duration: "9:20:00",
      audioFile: "/books/atomic-habits-audio.mp3",
      downloadLink: "/downloads/atomic-habits-audio.mp3",
      episodes: [
        {
          title: "فصل اول - قدرت عادت‌های اتمی",
          duration: "45:00",
          audioFile: "/books/atomic-habits/ep1.mp3"
        },
        {
          title: "فصل دوم - سیستم تغییر عادت",
          duration: "50:00",
          audioFile: "/books/atomic-habits/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 6,
    name: "هنر شفاف اندیشیدن",
    author: "رولف دوبلی",
    publish: "1403/12/15",
    shorttext: "52 راهکار برای تصمیم‌گیری بهتر در زندگی و کسب‌وکار",
    price: 20000,
    img: "/imgs/6.jpg",
    slug: "clear-thinking",
    type: "book",
    category: "روانشناسی",
    tags: ["تفکر انتقادی", "تصمیم‌گیری", "روانشناسی"],
    hasAudio: true,
    audioVersion: {
      narrator: "حمید رضایی",
      duration: "10:15:00",
      audioFile: "/books/clear-thinking-audio.mp3",
      downloadLink: "/downloads/clear-thinking-audio.mp3",
      episodes: [
        {
          title: "بخش اول - خطاهای شناختی",
          duration: "48:00",
          audioFile: "/books/clear-thinking/ep1.mp3"
        },
        {
          title: "بخش دوم - تله‌های ذهنی",
          duration: "52:00",
          audioFile: "/books/clear-thinking/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 7,
    name: "پادکست تاریخ ایران",
    author: "امید تاریخی",
    publish: "1404/01/05",
    shorttext: "روایتی جذاب از تاریخ کهن ایران زمین",
    price: 9000,
    img: "/imgs/podcast5.jpg",
    slug: "iran-history-podcast",
    type: "podcast",
    duration: "65:00",
    episode: 1,
    audioFile: "/podcasts/iran-history-ep1.mp3",
    downloadLink: "/downloads/iran-history-ep1.mp3"
  },
  {
    id: 8,
    name: "پادکست سلامت و تغذیه",
    author: "دکتر مریم سلامت",
    publish: "1404/01/10",
    shorttext: "نکات کاربردی درباره سبک زندگی سالم و تغذیه اصولی",
    price: 7500,
    img: "/imgs/podcast6.jpg", 
    slug: "health-podcast",
    type: "podcast",
    duration: "45:00",
    episode: 1,
    audioFile: "/podcasts/health-ep1.mp3",
    downloadLink: "/downloads/health-ep1.mp3"
  },
  {
    id: 9,
    name: "انسان خردمند",
    author: "یووال نوح هراری",
    publish: "1403/10/20",
    shorttext: "تاریخ مختصر بشر از ابتدا تاکنون",
    price: 25000,
    img: "/imgs/7.jpg",
    slug: "sapiens",
    type: "book",
    category: "تاریخ",
    tags: ["تاریخ", "انسان‌شناسی", "علمی"],
    hasAudio: true,
    audioVersion: {
      narrator: "علی صدیقی",
      duration: "15:30:00",
      audioFile: "/books/sapiens-audio.mp3",
      downloadLink: "/downloads/sapiens-audio.mp3",
      episodes: [
        {
          title: "فصل اول - انقلاب شناختی",
          duration: "55:00",
          audioFile: "/books/sapiens/ep1.mp3"
        },
        {
          title: "فصل دوم - انقلاب کشاورزی",
          duration: "60:00",
          audioFile: "/books/sapiens/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 10,
    name: "پادکست کارآفرینی",
    author: "رضا کسب‌وکار",
    publish: "1404/01/15",
    shorttext: "تجربیات کارآفرینان موفق و درس‌های کسب‌وکار",
    price: 8500,
    img: "/imgs/podcast7.jpg",
    slug: "startup-podcast",
    type: "podcast",
    duration: "50:00",
    episode: 1,
    audioFile: "/podcasts/startup-ep1.mp3",
    downloadLink: "/downloads/startup-ep1.mp3"
  },
  {
    id: 11,
    name: "خودت را به فنا نده",
    author: "گری جان بیشاپ",
    publish: "1403/11/25",
    shorttext: "راهنمای کاربردی برای زندگی بهتر و مقابله با افکار منفی",
    price: 16000,
    img: "/imgs/8.jpg",
    slug: "unfu*k-yourself",
    type: "book",
    category: "خودیاری",
    tags: ["توسعه فردی", "روانشناسی", "انگیزشی"],
    hasAudio: true,
    audioVersion: {
      narrator: "سعید محمدی",
      duration: "7:45:00",
      audioFile: "/books/unfuck-audio.mp3",
      downloadLink: "/downloads/unfuck-audio.mp3",
      episodes: [
        {
          title: "فصل اول - قدرت گفتگوی درونی",
          duration: "42:00",
          audioFile: "/books/unfuck/ep1.mp3"
        },
        {
          title: "فصل دوم - غلبه بر موانع ذهنی",
          duration: "38:00",
          audioFile: "/books/unfuck/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 12,
    name: "پادکست فلسفه زندگی",
    author: "دکتر حسن فکری",
    publish: "1404/01/20",
    shorttext: "بررسی مفاهیم فلسفی در زندگی روزمره",
    price: 9500,
    img: "/imgs/podcast8.jpg",
    slug: "philosophy-podcast",
    type: "podcast",
    duration: "55:00",
    episode: 1,
    audioFile: "/podcasts/philosophy-ep1.mp3",
    downloadLink: "/downloads/philosophy-ep1.mp3"
  },
  {
    id: 13,
    name: "هفت عادت مردمان موثر",
    author: "استفان کاوی",
    publish: "1403/09/15",
    shorttext: "اصول موفقیت شخصی و حرفه‌ای برای زندگی اثربخش",
    price: 22000,
    img: "/imgs/9.jpg",
    slug: "seven-habits",
    type: "book",
    category: "موفقیت",
    tags: ["مدیریت", "رهبری", "توسعه فردی"],
    hasAudio: true,
    audioVersion: {
      narrator: "محمد امینی",
      duration: "11:20:00",
      audioFile: "/books/seven-habits-audio.mp3",
      downloadLink: "/downloads/seven-habits-audio.mp3",
      episodes: [
        {
          title: "عادت اول - فعال بودن",
          duration: "45:00",
          audioFile: "/books/seven-habits/ep1.mp3"
        },
        {
          title: "عادت دوم - آغاز با هدف",
          duration: "50:00",
          audioFile: "/books/seven-habits/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 14,
    name: "پادکست علم و تکنولوژی",
    author: "مهندس علی فناور",
    publish: "1404/01/25",
    shorttext: "آخرین پیشرفت‌های علمی و تکنولوژیک دنیا",
    price: 8000,
    img: "/imgs/podcast9.jpg",
    slug: "tech-podcast",
    type: "podcast",
    duration: "45:00",
    episode: 1,
    audioFile: "/podcasts/tech-ep1.mp3",
    downloadLink: "/downloads/tech-ep1.mp3"
  },
  {
    id: 15,
    name: "تختخوابت را مرتب کن",
    author: "ویلیام مک‌ریون",
    publish: "1403/08/10",
    shorttext: "درس‌های یک دریاسالار برای تغییر جهان با شروع از کارهای کوچک",
    price: 19000,
    img: "/imgs/10.jpg",
    slug: "make-your-bed",
    type: "book",
    category: "انگیزشی",
    tags: ["موفقیت", "رهبری", "انگیزشی"],
    hasAudio: true,
    audioVersion: {
      narrator: "رضا صدایی",
      duration: "8:15:00",
      audioFile: "/books/make-bed-audio.mp3",
      downloadLink: "/downloads/make-bed-audio.mp3",
      episodes: [
        {
          title: "درس اول - شروع روز",
          duration: "40:00",
          audioFile: "/books/make-bed/ep1.mp3"
        },
        {
          title: "درس دوم - کار تیمی",
          duration: "45:00",
          audioFile: "/books/make-bed/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 16,
    name: "بوف کور",
    author: "صادق هدایت",
    publish: "1403/02/15",
    shorttext: "شاهکار ادبیات معاصر ایران که روایتگر داستانی سوررئال و عمیق است",
    price: 14000,
    img: "/imgs/11.jpg",
    slug: "buf-kur",
    type: "book",
    category: 1,
    subcategory: 101,
    tags: ["ادبیات معاصر", "رمان ایرانی", "داستان کوتاه"],
    hasAudio: true,
    audioVersion: {
      narrator: "بهروز رضوی",
      duration: "4:30:00",
      audioFile: "/books/buf-kur-audio.mp3",
      downloadLink: "/downloads/buf-kur-audio.mp3",
      episodes: [
        {
          title: "بخش اول",
          duration: "35:00",
          audioFile: "/books/buf-kur/ep1.mp3"
        },
        {
          title: "بخش دوم",
          duration: "40:00",
          audioFile: "/books/buf-kur/ep2.mp3"
        }
      ]
    }
  },
  {
    id: 17,
    name: "پادکست روانشناسی روابط",
    author: "دکتر سارا روانشناس",
    publish: "1404/02/01",
    shorttext: "بررسی چالش‌های روابط و راهکارهای بهبود آن",
    price: 7500,
    img: "/imgs/podcast10.jpg",
    slug: "relationship-psychology-podcast",
    type: "podcast",
    category: 1,
    subcategory: 101,
    duration: "50:00",
    episode: 1,
    audioFile: "/podcasts/relationship-ep1.mp3",
    downloadLink: "/downloads/relationship-ep1.mp3"
  },
  {
    id: 18,
    name: "اصول بازاریابی دیجیتال",
    author: "علی بازاریاب",
    publish: "1403/11/10",
    shorttext: "آموزش جامع بازاریابی دیجیتال و استراتژی‌های نوین",
    price: 25000,
    img: "/imgs/12.jpg",
    slug: "digital-marketing",
    type: "book",
    category: 1,
    subcategory: 101,
    tags: ["بازاریابی", "دیجیتال مارکتینگ", "کسب و کار"],
    hasAudio: true,
    audioVersion: {
      narrator: "مهدی صدایی",
      duration: "9:15:00",
      audioFile: "/books/marketing-audio.mp3",
      downloadLink: "/downloads/marketing-audio.mp3",
      episodes: [
        {
          title: "فصل اول - مبانی بازاریابی دیجیتال",
          duration: "45:00",
          audioFile: "/books/marketing/ep1.mp3"
        },
        {
          title: "فصل دوم - شبکه‌های اجتماعی",
          duration: "50:00",
          audioFile: "/books/marketing/ep2.mp3"
        }
      ]
    }
  }
]