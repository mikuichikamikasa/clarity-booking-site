interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.language": "Türkçe",

    // Hero Section
    "hero.title": "Aygul TATLICI",
    "hero.subtitle": "Registered Psychotherapist(q)",
    "hero.description": "Helping you navigate anxiety, depression, ADHD, and trauma to regain clarity, motivation, and purpose.",
    "hero.cta": "Book Free Consultation",
    "hero.philosophy": "Healing and transformation begin with authentic care and connection, and change becomes powerful when someone believes in your potential and ability to grow.",

    // About Section
    "about.title": "About Me",
    "about.credentials": "Registered Psychotherapist(q) | Verified by Psychology Today",
    "about.paragraph1": "I am a registered psychotherapist(q) practicing in Canada, currently providing therapy under the clinical supervision of an approved supervisor. I'm genuinely looking forward to supporting you on your journey toward healing, growth, and positive change.",
    "about.paragraph2": "I know how overwhelming it can feel to struggle with depression, trauma, anxiety, procrastination, and the pressure of work stress. Feeling stuck and unsure is okay — those challenges are real, and you deserve support. I'm here to walk alongside you, helping you find clarity, healing, and renewed strength when ready.",
    "about.qualifications": "I completed a Master's in Counselling Psychotherapy and have training in ACT, CBT and Solution-Focused Approaches. I have experience of helping adults, kids, struggling with depression, anxiety, PTSD, adjustment disorders, ADHD, specific phobias, burnout and works stress.",

    // Expertise Section
    "expertise.title": "Areas of Expertise",
    "expertise.description": "I specialize in helping clients with a variety of challenges:",
    "expertise.item1": "ADHD",
    "expertise.item2": "Anxiety & Panic Attacks",
    "expertise.item3": "Depression",
    "expertise.item4": "Trauma & PTSD",
    "expertise.item5": "Stress & Burnout",
    "expertise.item6": "Specific Phobias",
    "expertise.item7": "Parenting Challenges",
    "expertise.item8": "Life Transitions",
    "expertise.item9": "Chronic Pain",

    // Services Section
    "services.title": "My Approach",
    "services.description": "Using evidence-based methods like SFBT, ACT and CBT, we'll find tools that work for you, whether you're striving to improve focus, manage your emotions, or find a sense of balance and fulfillment in becoming the version of yourself you want to be.",
    "services.quote": "Imagine stepping into a space where your challenges are seen as opportunities for growth. In counselling, we'll focus on your strengths and find ways to move forward.",

    // Pricing Section
    "pricing.title": "Pricing",
    "pricing.individual": "Individual Sessions",
    "pricing.individual.price": "$140",
    "pricing.couples": "Couple Sessions",
    "pricing.couples.price": "230",
    "pricing.note": "Sliding scale available for those who qualify",
    "pricing.payment": "Payment Methods:",
    "pricing.payment.methods": "Cheque, e-Transfer, cash",
    "pricing.insurance": "Check fees and, if listed, ask to verify your insurance coverage.",

    // Contact Section
    "contact.title": "Book an Appointment",
    "contact.description": "Feel free to reach out for a free 15-minute consultation.",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Your Message",
    "contact.submit": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.error": "There was an error sending your message. Please try again.",
    "contact.phone.direct": "Phone: ",
    "contact.email.direct": "Email: ",
    "contact.consult": "Call or email me for a free 15-minute consultation now",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.disclaimer.title": "Disclaimer",
    "footer.disclaimer.text": "Coaching is not psychotherapy; coaching does not diagnose or treat mental health conditions. Coaching focuses on personal development, goal achievement, and mindset shifts. It is not a substitute for a serious mental health treatment, diagnosis, or psychotherapy."
  },
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.services": "Hizmetler",
    "nav.pricing": "Ücretlendirme",
    "nav.contact": "İletişim",
    "nav.language": "English",

    // Hero Section
    "hero.title": "Aygül TATLICI",
    "hero.subtitle": "Kayıtlı Psikoterapist",
    "hero.description": "Anksiyete, depresyon, ADHD ve travma ile başa çıkmanıza yardımcı olarak netlik, motivasyon ve amaç kazanmanızı sağlıyorum.",
    "hero.cta": "Ücretsiz Danışma Randevusu Al",
    "hero.philosophy": "İyileşme ve dönüşüm, özgün ilgi ve bağlantıyla başlar ve birisi sizin potansiyelinize ve büyüme yeteneğinize inandığında değişim güçlenir.",

    // About Section
    "about.title": "Hakkımda",
    "about.credentials": "Kayıtlı Psikoterapist | Psychology Today tarafından doğrulanmıştır",
    "about.paragraph1": "Danışmanlık Psikolojisi alanında yüksek lisans öğrencisiyim ve şu anda onaylı bir süpervizör gözetiminde terapi hizmeti vermekteyim. İyileşme, büyüme ve olumlu değişim yolculuğunuzda size destek olmak için sabırsızlanıyorum.",
    "about.paragraph2": "Depresyon, travma, anksiyete, erteleme ve iş stresinin yarattığı baskıyla mücadele etmenin ne kadar bunaltıcı olabileceğini biliyorum. Takılıp kalmış ve emin olamamak normaldir — bu zorluklar gerçektir ve desteği hak ediyorsunuz. Ben yanınızda olarak, hazır olduğunuzda netlik, iyileşme ve yenilenmiş güç bulmanıza yardımcı olmak için buradayım.",
    "about.qualifications": "Danışmanlık Psikoterapisi alanında yüksek lisans yaptım ve ACT, BDT ve Çözüm Odaklı Yaklaşımlar konusunda eğitimim var. Depresyon, anksiyete, TSSB, uyum bozuklukları, ADHD, özel fobiler, tükenmişlik ve iş stresi ile mücadele eden yetişkinlere ve çocuklara yardım etme deneyimim var.",

    // Expertise Section
    "expertise.title": "Uzmanlık Alanları",
    "expertise.description": "Çeşitli zorluklarla karşılaşan danışanlara yardımcı olmada uzmanım:",
    "expertise.item1": "ADHD",
    "expertise.item2": "Anksiyete ve Panik Ataklar",
    "expertise.item3": "Depresyon",
    "expertise.item4": "Travma ve TSSB",
    "expertise.item5": "Stres ve Tükenmişlik",
    "expertise.item6": "Özel Fobiler",
    "expertise.item7": "Ebeveynlik Zorlukları",
    "expertise.item8": "Hayat Geçişleri",
    "expertise.item9": "Kronik Ağrı",

    // Services Section
    "services.title": "Yaklaşımım",
    "services.description": "ÇOKT, ACT ve BDT gibi kanıta dayalı yöntemler kullanarak, odaklanmanızı geliştirmek, duygularınızı yönetmek veya olmak istediğiniz kişi haline gelmede denge ve tatmin duygusu bulmak için çabalıyor olsanız da, sizin için işe yarayan araçlar bulacağız.",
    "services.quote": "Zorluklarınızın büyüme fırsatları olarak görüldüğü bir alana adım attığınızı hayal edin. Danışmanlıkta, güçlü yönlerinize odaklanacak ve ilerleme yolları bulacağız.",

    // Pricing Section
    "pricing.title": "Ücretlendirme",
    "pricing.individual": "Bireysel Seanslar",
    "pricing.individual.price": "$140",
    "pricing.couples": "Çift Seansları",
    "pricing.couples.price": "$230",
    "pricing.note": "Hak sahipleri için kademeli ücretlendirme mevcuttur",
    "pricing.payment": "Ödeme Yöntemleri:",
    "pricing.payment.methods": "Çek, e-Transfer",
    "pricing.insurance": "Ücretleri kontrol edin ve sigorta kapsamınızı doğrulamak için sorun.",

    // Contact Section
    "contact.title": "Randevu Al",
    "contact.description": "Ücretsiz 15 dakikalık danışma için iletişime geçin.",
    "contact.name": "Adınız",
    "contact.email": "E-posta Adresiniz",
    "contact.phone": "Telefon Numaranız",
    "contact.message": "Mesajınız",
    "contact.submit": "Mesaj Gönder",
    "contact.success": "Mesajınız başarıyla gönderildi!",
    "contact.error": "Mesajınızı gönderirken bir hata oluştu. Lütfen tekrar deneyin.",
    "contact.phone.direct": "Telefon: ",
    "contact.email.direct": "E-posta: ",
    "contact.consult": "Ücretsiz 15 dakikalık danışma için şimdi arayın veya e-posta gönderin",

    // Footer
    "footer.rights": "Tüm hakları saklıdır",
    "footer.disclaimer.title": "Yasal Uyarı",
    "footer.disclaimer.text": "Koçluk psikoterapi değildir; koçluk ruh sağlığı durumlarını teşhis veya tedavi etmez. Koçluk kişisel gelişim, hedef belirleme ve zihniyet değişimlerine odaklanır. Ciddi ruh sağlığı tedavisi, teşhisi veya psikoterapinin yerini tutmaz."
  }
};

export default translations;
