import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ExpertiseSection = () => {
  const { t, language } = useLanguage();
  
  const expertiseAreas = {
    en: [
      {
        id: "adhd",
        emoji: "🧠",
        titleKey: "expertise.item1",
        content: "Living with ADHD can feel frustrating and disorganizing. We'll work together to develop personalized strategies that work with your unique way of thinking and processing information. Our goal is to help you harness your strengths while managing challenges effectively. Together, we'll focus on your strengths, build routines that work for you, and develop practical strategies to boost focus and follow-through."
      },
      {
        id: "anxiety",
        emoji: "😥",
        titleKey: "expertise.item2",
        content: "When anxiety starts to affect your daily life, it can feel overwhelming. We're here to support you in discovering practical tools to manage anxious thoughts, build inner calm, and regain control. What Is Anxiety? Anxiety is a natural human response to stress or perceived danger, often felt as nervousness, worry, fear, or unease. While it can be helpful in certain situations by alerting us to potential threats, it can become problematic when it is excessive or persistent. Anxiety Attacks and Their Impact: An anxiety attack, also known as a panic attack, involves a sudden and intense surge of fear or discomfort, often without an obvious trigger. These episodes can cause a racing heart, shortness of breath, trembling, chest pain, nausea, and feelings of choking or dizziness. I can help you by focusing on the things already working for you, even small ones. Instead of going deep into what's causing your anxiety, we'll look at moments when you felt just a little more in control or less overwhelmed, and we'll explore what helped in those times."
      },
      {
        id: "depression",
        emoji: "😔",
        titleKey: "expertise.item3",
        content: "Struggles with sadness and hopelessness can feel isolating. In our sessions, you'll find a safe and supportive space to gently explore these emotions and learn ways to shift your perspective toward hope, healing, and renewed purpose. Together, we'll work on developing coping strategies, identifying sources of support, and creating meaningful change in your life. Our approach focuses on building resilience and finding new ways to engage with life."
      },
      {
        id: "trauma",
        emoji: "🔄",
        titleKey: "expertise.item4",
        content: "Specialized support for processing traumatic experiences and managing symptoms of PTSD to foster resilience and recovery. We'll work together to create a safe space where you can process difficult memories at your own pace, develop coping strategies, and rebuild your sense of safety and control."
      },
      {
        id: "burnout",
        emoji: "🔥",
        titleKey: "expertise.item5",
        content: "Burnout leaves you feeling mentally, emotionally, and physically drained. We'll explore what energizes you, identify small shifts, and support your journey toward balance and renewal. Through our sessions, you'll learn to recognize early warning signs, set effective boundaries, and reconnect with what brings you joy and meaning."
      },
      {
        id: "phobias",
        emoji: "😨",
        titleKey: "expertise.item6",
        content: "Gentle and effective strategies to confront and overcome specific phobias, allowing you to regain freedom and control. Using evidence-based approaches, we'll work at your pace to gradually expose you to feared situations while teaching you practical tools to manage anxiety and change your relationship with fear."
      },
      {
        id: "parenting",
        emoji: "👨‍👩‍👧‍👦",
        titleKey: "expertise.item7",
        content: "Guidance and strategies for navigating the complexities of parenting, improving communication, and fostering a positive family environment. We'll explore practical approaches to managing challenging behaviors, setting healthy boundaries, and nurturing strong emotional connections with your children."
      },
      {
        id: "transitions",
        emoji: "🛤️",
        titleKey: "expertise.item8",
        content: "Support during significant life changes, such as career shifts, relocation, or relationship adjustments, helping you adapt and thrive. Together, we'll process the emotions that come with change, identify your strengths and resources, and develop practical strategies for navigating uncertainty with confidence and resilience."
      },
      {
        id: "pain",
        emoji: "🩺",
        titleKey: "expertise.item9",
        content: "Developing coping mechanisms and strategies to manage chronic pain, improve quality of life, and focus on well-being beyond the physical symptoms. Our work together will help you reconnect with meaningful activities, manage pain-related thoughts and emotions, and build a fulfilling life even in the presence of persistent pain."
      }
    ],
    tr: [
      {
        id: "adhd",
        emoji: "🧠",
        titleKey: "expertise.item1",
        content: "ADHD ile yaşamak sinir bozucu ve düzensiz hissedebilir. Düşünme ve bilgiyi işleme şeklinize uygun kişiselleştirilmiş stratejiler geliştirmek için birlikte çalışacağız. Amacımız, zorluklarla etkin bir şekilde başa çıkarken güçlü yönlerinizi kullanmanıza yardımcı olmaktır. Birlikte, güçlü yönlerinize odaklanacak, sizin için işe yarayan rutinler oluşturacak ve odaklanma ve takibi artırmak için pratik stratejiler geliştireceğiz."
      },
      {
        id: "anxiety",
        emoji: "😥",
        titleKey: "expertise.item2",
        content: "Anksiyete günlük hayatınızı etkilemeye başladığında, bunaltıcı hissedebilir. Endişeli düşünceleri yönetmeniz, iç huzuru oluşturmanız ve kontrolü yeniden kazanmanız için pratik araçlar keşfetmenizde size destek olmak için buradayız. Anksiyete Nedir? Anksiyete, genellikle sinirlilik, endişe, korku veya huzursuzluk olarak hissedilen, strese veya algılanan tehlikeye karşı doğal bir insan tepkisidir. Belirli durumlarda bizi potansiyel tehlikelere karşı uyararak yardımcı olabilirken, aşırı veya sürekli olduğunda sorunlu hale gelebilir. Anksiyete Ataklarının Etkisi: Bir anksiyete atağı, aynı zamanda panik atak olarak da bilinen, genellikle belirgin bir tetikleyici olmadan korku veya rahatsızlığın ani ve yoğun bir dalgalanmasını içerir. Bu epizodlar hızlı kalp atışı, nefes darlığı, titreme, göğüs ağrısı, mide bulantısı ve boğulma veya baş dönmesi hissi yaratabilir. Size, küçük de olsa zaten işe yarayan şeylere odaklanarak yardımcı olabilirim. Anksiyetenizin nedenlerini derinlemesine incelemek yerine, kendinizi biraz daha kontrol altında veya daha az bunalmış hissettiğiniz anları ve bu anlarda nelerin yardımcı olduğunu keşfedeceğiz."
      },
      {
        id: "depression",
        emoji: "😔",
        titleKey: "expertise.item3",
        content: "Üzüntü ve umutsuzlukla mücadele etmek izole edici hissedebilir. Seanslarımızda, bu duyguları nazikçe keşfetmek ve bakış açınızı umut, iyileşme ve yenilenmiş amaç doğrultusunda değiştirmenin yollarını öğrenmek için güvenli ve destekleyici bir alan bulacaksınız. Birlikte, başa çıkma stratejileri geliştirmek, destek kaynaklarını belirlemek ve hayatınızda anlamlı değişiklikler yaratmak için çalışacağız. Yaklaşımımız, dayanıklılık oluşturmaya ve hayatla yeni şekillerde etkileşim kurmanın yollarını bulmaya odaklanır."
      },
      {
        id: "trauma",
        emoji: "🔄",
        titleKey: "expertise.item4",
        content: "Travmatik deneyimleri işlemek ve dirençlilik ve iyileşmeyi teşvik etmek için TSSB semptomlarını yönetmek için özel destek. Zor anıları kendi temponuzda işleyebileceğiniz, başa çıkma stratejileri geliştirebileceğiniz ve güvenlik ve kontrol hissinizi yeniden inşa edebileceğiniz güvenli bir alan yaratmak için birlikte çalışacağız."
      },
      {
        id: "burnout",
        emoji: "🔥",
        titleKey: "expertise.item5",
        content: "Tükenmişlik, kendinizi zihinsel, duygusal ve fiziksel olarak tükenmiş hissetmenize neden olur. Size enerji veren şeyleri keşfedecek, küçük değişiklikler belirleyecek ve denge ve yenilenme yolculuğunuzda size destek olacağız. Seanslarımız boyunca, erken uyarı işaretlerini tanımayı, etkili sınırlar koymayı ve size neşe ve anlam getiren şeylerle yeniden bağlantı kurmayı öğreneceksiniz."
      },
      {
        id: "phobias",
        emoji: "😨",
        titleKey: "expertise.item6",
        content: "Özgürlük ve kontrolünüzü yeniden kazanmanızı sağlayan belirli fobileri karşılamak ve üstesinden gelmek için nazik ve etkili stratejiler. Kanıta dayalı yaklaşımlar kullanarak, korktuğunuz durumlara kademeli olarak maruz kalırken, anksiyeteyi yönetmek ve korkuyla ilişkinizi değiştirmek için pratik araçlar öğreterek kendi hızınızda çalışacağız."
      },
      {
        id: "parenting",
        emoji: "👨‍👩‍👧‍👦",
        titleKey: "expertise.item7",
        content: "Ebeveynliğin karmaşıklıklarını anlamak, iletişimi geliştirmek ve olumlu bir aile ortamı oluşturmak için rehberlik ve stratejiler. Zorlu davranışlarla başa çıkma, sağlıklı sınırlar belirleme ve çocuklarınızla güçlü duygusal bağlar kurma konusunda pratik yaklaşımları keşfedeceğiz."
      },
      {
        id: "transitions",
        emoji: "🛤️",
        titleKey: "expertise.item8",
        content: "Kariyer değişiklikleri, taşınma veya ilişki düzenlemeleri gibi önemli yaşam değişikliklerinde, uyum sağlamanıza ve gelişmenize yardımcı olur. Birlikte, değişimle gelen duyguları işleyecek, güçlü yönlerinizi ve kaynaklarınızı belirleyecek ve belirsizlikte güven ve dayanıklılıkla gezinmek için pratik stratejiler geliştireceğiz."
      },
      {
        id: "pain",
        emoji: "🩺",
        titleKey: "expertise.item9",
        content: "Kronik ağrıyı yönetmek, yaşam kalitesini iyileştirmek ve fiziksel semptomların ötesinde sağlığa odaklanmak için başa çıkma mekanizmaları ve stratejiler geliştirmek. Birlikte çalışmamız, anlamlı aktivitelerle yeniden bağlantı kurmanıza, ağrıyla ilgili düşünce ve duyguları yönetmenize ve kalıcı ağrının varlığında bile tatmin edici bir yaşam kurmanıza yardımcı olacaktır."
      }
    ]
  };

  // State to track the selected expertise area
  const [selectedArea, setSelectedArea] = useState(
    language === "tr" ? expertiseAreas.tr[0] : expertiseAreas.en[0]
  );

  // Get correct areas based on current language
  const currentExpertiseAreas = language === "tr" ? expertiseAreas.tr : expertiseAreas.en;
  
  // Update selected area when language changes
  useEffect(() => {
    // Find matching expertise area in the new language
    if (selectedArea) {
      const newLanguageArea = language === "tr" 
        ? expertiseAreas.tr.find(area => area.id === selectedArea.id) 
        : expertiseAreas.en.find(area => area.id === selectedArea.id);
      
      if (newLanguageArea) {
        setSelectedArea(newLanguageArea);
      } else {
        // Fallback to first item if no match found
        setSelectedArea(language === "tr" ? expertiseAreas.tr[0] : expertiseAreas.en[0]);
      }
    }
  }, [language]);

  return (
    <section id="expertise" className="py-16 bg-therapy-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-therapy-primary mb-4 text-center">
          {t("expertise.title")}
        </h2>
        
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          {t("expertise.description")}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {currentExpertiseAreas.map((area) => {
            const isSelected = selectedArea.id === area.id;
            const buttonClasses = [
              "p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border-2",
              isSelected ? "border-therapy-primary scale-105 shadow-lg" : "border-transparent hover:border-therapy-accent",
              "flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-therapy-primary focus:ring-offset-2"
            ].join(" ");
            
            return (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={buttonClasses}
              >
                <span className="text-2xl">{area.emoji}</span>
                <span className="font-medium text-therapy-dark">{t(area.titleKey)}</span>
              </button>
            );
          })}
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-3xl mx-auto border border-gray-200">
          <h3 className="text-xl font-semibold text-therapy-primary mb-3 flex items-center">
            <span className="text-2xl mr-2">{selectedArea.emoji}</span>
            {t(selectedArea.titleKey)}
          </h3>
          <p className="text-gray-700 whitespace-pre-wrap">
            {selectedArea.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
