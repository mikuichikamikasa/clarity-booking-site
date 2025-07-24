import { Helmet } from "react-helmet-async";
import { useLanguage } from "../lib/i18n/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  pagePath?: string;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/images/og-image.jpg",
  pagePath = "/",
}: SEOProps) => {
  const { language } = useLanguage();
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "coachingandtherapysolutions.com";
  const siteUrl = `https://${domain}`;
  const pageUrl = `${siteUrl}${pagePath.startsWith("/") ? pagePath : `/${pagePath}`}`;

  const defaultTitle = language === "en" 
    ? "Aygul Tatlici | Registered Psychotherapist(Qualifying) in Toronto, Ontario" 
    : "Aygül Tatlıcı | Toronto, Ontario'da Kayıtlı Psikoterapist(Qualifying)";
  
  const defaultDescription = language === "en"
    ? "Toronto-based Registered Psychotherapist(Qualifying) specializing in anxiety, depression, ADHD, and trauma therapy. Serving clients throughout the GTA. Book a free consultation today."
    : "Toronto merkezli kayıtlı psikoterapist(Qualifying). Anksiyete, depresyon, ADHD ve travma terapisi. Bugün ücretsiz danışma randevusu alın.";

  const siteTitle = title ? `${title} | Aygul Tatlici` : defaultTitle;
  const siteDescription = description || defaultDescription;

  // Generate JSON-LD structured data for Person
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aygul Tatlici",
    "jobTitle": "Registered Psychotherapist(Qualifying)",
    "image": `${siteUrl}/images/calm-blue-waves.jpg`,
    "telephone": "+13656070532",
    "email": "psychaygul@gmail.com",
    "url": siteUrl,
    "sameAs": [
      "https://instagram.com/psychotherapy.aygultatlici",
      "https://www.youtube.com/channel/UChjZVJe2wdTi46rpmiEfPdQ"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Aygul Tatlici Psychotherapy",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "Ontario",
          "addressCountry": "CA"
        }
      }
    },
    "knowsAbout": [
      "Psychotherapy",
      "Anxiety Treatment",
      "Depression Therapy",
      "ADHD Counseling", 
      "Trauma Recovery",
      "Couples Therapy",
      "Mental Health"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Individual Therapy",
        "price": "140",
        "priceCurrency": "CAD",
        "areaServed": {
          "@type": "City",
          "name": "Toronto"
        }
      },
      {
        "@type": "Offer",
        "name": "Couples Therapy",
        "price": "230",
        "priceCurrency": "CAD",
        "areaServed": {
          "@type": "City",
          "name": "Toronto"
        }
      }
    ]
  };

  // Service schema with improved local information
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Aygul Tatlici Psychotherapy",
    "image": `${siteUrl}/images/calm-blue-waves.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "url": siteUrl,
    "telephone": "+13656070532",
    "priceRange": "$$", 
    "areaServed": [
      {
        "@type": "City",
        "name": "Toronto"
      },
      {
        "@type": "Place",
        "name": "Greater Toronto Area (GTA)"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Psychotherapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Anxiety Therapy",
            "description": "Treatment for anxiety and panic attacks",
            "areaServed": {
              "@type": "City",
              "name": "Toronto"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Depression Therapy",
            "description": "Support for depression and mood disorders",
            "areaServed": {
              "@type": "City",
              "name": "Toronto"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ADHD Counseling",
            "description": "Help with focus, organization, and ADHD challenges",
            "areaServed": {
              "@type": "City",
              "name": "Toronto"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trauma Recovery",
            "description": "Support for PTSD and trauma recovery",
            "areaServed": {
              "@type": "City",
              "name": "Toronto"
            }
          }
        }
      ]
    }
  };

  // Local Business schema specifically for Toronto
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aygul Tatlici Psychotherapy",
    "image": `${siteUrl}/images/calm-blue-waves.jpg`,
    "url": siteUrl,
    "telephone": "+13656070532",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Toronto"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.6532",
        "longitude": "-79.3832"
      },
      "geoRadius": "50000"
    }
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept cheque, e-Transfer, and cash payments."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a free consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a free 15-minute consultation to discuss your needs and determine if we're a good fit."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in anxiety, depression, ADHD, trauma recovery, stress management, and relationship counseling."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer in-person therapy in Toronto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer both in-person therapy sessions in Toronto and virtual therapy sessions for clients throughout Ontario."
        }
      },
      {
        "@type": "Question",
        "name": "Which Toronto neighborhoods do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve clients from all Toronto neighborhoods including Downtown, North York, Scarborough, Etobicoke, and throughout the Greater Toronto Area (GTA)."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <html lang={language} />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={canonicalUrl || pageUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Aygul Tatlici" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#5299D3" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Toronto" />
      <meta name="geo.position" content="43.6532;-79.3832" />
      <meta name="ICBM" content="43.6532, -79.3832" />
      <meta name="keywords" content="psychotherapy, Toronto therapist, anxiety therapy Toronto, depression counseling Toronto, ADHD therapy, trauma recovery, couples therapy Toronto, Ontario registered psychotherapist" />

      {/* Open Graph tags */}
      <meta property="og:site_name" content="Aygul Tatlici Psychotherapy" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content={language === "en" ? "en_CA" : "tr_TR"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="place:location:latitude" content="43.6532" />
      <meta property="place:location:longitude" content="-79.3832" />
      <meta property="business:contact_data:locality" content="Toronto" />
      <meta property="business:contact_data:region" content="Ontario" />
      <meta property="business:contact_data:country_name" content="Canada" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@psychaygul" />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Preload critical assets */}
      <link rel="preload" href="/assets/index-De8TwDX5.css" as="style" />
      <link rel="preload" href="/assets/5a82a45e-8dae-47f5-96bb-e4fbc3aaca10-CJGCoTln.png" as="image" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default SEO; 