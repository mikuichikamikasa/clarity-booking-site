import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: "Anxiety and Panic Attacks",
      description: "When anxiety starts to affect your daily life, it can feel overwhelming. We're here to support you in discovering practical tools to manage anxious thoughts, build inner calm, and regain control.",
      content: `What Is Anxiety? Anxiety is a natural human response to stress or perceived danger, often felt as nervousness, worry, fear, or unease. While it can be helpful in certain situations by alerting us to potential threats, it can become problematic when it is excessive or persistent.

      Anxiety Attacks and Their Impact: An anxiety attack, also known as a panic attack, involves a sudden and intense surge of fear or discomfort, often without an obvious trigger. These episodes can cause a racing heart, shortness of breath, trembling, chest pain, nausea, and feelings of choking or dizziness.

      I can help you by focusing on the things already working for you, even small ones. Instead of going deep into what's causing your anxiety, we'll look at moments when you felt just a little more in control or less overwhelmed, and we'll explore what helped in those times.`
    },
    {
      title: "Depression",
      description: "Struggles with sadness and hopelessness can feel isolating. In our sessions, you'll find a safe and supportive space to gently explore these emotions and learn ways to shift your perspective toward hope, healing, and renewed purpose.",
      content: "Together, we'll work on developing coping strategies, identifying sources of support, and creating meaningful change in your life. Our approach focuses on building resilience and finding new ways to engage with life."
    },
    {
      title: "ADHD",
      description: "Living with ADHD can feel frustrating and disorganizing. Together, we'll focus on your strengths, build routines that work for you, and develop practical strategies to boost focus and follow-through.",
      content: "We'll work together to develop personalized strategies that work with your unique way of thinking and processing information. Our goal is to help you harness your strengths while managing challenges effectively."
    },
    {
      title: "Family/Couple’s Counselling",
      description: "Relationship challenges can create distance and miscommunication. In sessions, we create a safe space for honest dialogue and take steps that rebuild trust, connection, and shared goals.",
      content: "In sessions, we create a safe space for honest dialogue and take steps that rebuild trust, connection, and shared goals."
    },
    {
      title: "Burnout",
      description: "Burnout leaves you feeling mentally, emotionally, and physically drained. We’ll explore what energizes you, identify small shifts, and support your journey toward balance and renewal.",
      content: "We’ll explore what energizes you, identify small shifts, and support your journey toward balance and renewal."
    },
    {
      title: "Overcoming Work Stress",
      description: "Work stress can feel relentless and impact your well-being. We can work on clarifying your values, building coping strategies, and taking purposeful steps toward a more empowered work-life experience.",
      content: "We can work on clarifying your values, building coping strategies, and taking purposeful steps toward a more empowered work-life experience."
    },
    {
      title: "Time Management",
      description: "Struggling to manage time can leave you feeling overwhelmed and stuck. You can learn to prioritize your tasks effectively, set manageable goals, and create a structure supporting your success.",
      content: "You can learn to prioritize your tasks effectively, set manageable goals, and create a structure supporting your success."
    },
    {
      title: "Increasing Productivity",
      description: "Low productivity can affect your self-esteem and motivation. Together, we’ll uncover what drives you, identify small, achievable changes, and help you take focused steps toward meaningful progress.",
      content: "Together, we’ll uncover what drives you, identify small, achievable changes, and help you take focused steps toward meaningful progress."
    },
    {
      title: "Emotional (Dys)Regulation",
      description: "I can help you manage overwhelming emotions, teaching skills to stay present, understand what truly matters to you, and take meaningful steps forward—even when complicated feelings are present.",
      content: "Together, we'll use mindfulness techniques to help you observe your thoughts and emotions without judgment, so you don’t feel consumed by them. We’ll clarify your core values to guide your actions and create a sense of purpose, even in emotional pain. You’ll learn how to “detach” from distressing thoughts—seeing them as temporary mental events rather than absolute truths—and how to accept your emotions openly instead of resisting them. Through small, values-based actions, you’ll regain a sense of control and confidence, while creative exercises and metaphors will help you shift how you relate to your inner experiences. You can live fully and meaningfully, even when life gets difficult."
    }
  ];

  return (
    <section id="services" className="py-16 bg-therapy-muted animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-therapy-primary mb-12 text-center transform transition-all duration-300 hover:scale-105">
          {t("services.title")}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              content={service.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
