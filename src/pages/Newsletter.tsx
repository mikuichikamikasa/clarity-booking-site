import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface NewsletterContent {
  title: string;
  textSize: number;
  content: Array<{
    type: string;
    text: string;
  }>;
}

const Newsletter = () => {
  const [newsletterData, setNewsletterData] = useState<NewsletterContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNewsletterContent = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/newsletter-content.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.title || !Array.isArray(data.content)) {
          throw new Error("Invalid JSON data format");
        }
        setNewsletterData(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadNewsletterContent();
  }, []);

  const getTextSizeClass = (size: number) => {
    switch (size) {
      case 1:
        return "text-sm";
      case 2:
        return "text-base";
      case 3:
        return "text-lg";
      default:
        return "text-base";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-therapy-primary"></div>
        <p className="mt-4 text-lg text-therapy-dark font-semibold">Loading Newsletter...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 text-center p-4">
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-4">Error Loading Content</h2>
          <p className="text-red-600 bg-red-100 p-4 rounded-md mb-6">
            There was a problem fetching the newsletter: <strong>{error}</strong>
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!newsletterData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No newsletter content available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet
        title={`${newsletterData.title} | Aygul TATLICI`}
        meta={[
          {
            name: "description",
            content: `Read the latest news from Aygul TATLICI: ${newsletterData.title}`,
          },
        ]}
      />
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-br from-therapy-muted to-white py-16">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-therapy-primary mb-4">
              {newsletterData.title}
            </h1>
            <p className="text-lg md:text-xl text-therapy-dark/80 max-w-3xl mx-auto">
              Your source for insights on mental wellness and personal growth.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-up">
              {newsletterData.content.map((item, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  {item.type === "paragraph" && (
                    <p className={`${getTextSizeClass(newsletterData.textSize)} leading-relaxed text-gray-800`}>
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <a 
                  href="/" 
                  className="inline-block bg-therapy-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-therapy-primary/90 transition-transform transform hover:scale-105"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Newsletter; 