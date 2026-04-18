import Hero from "@/components/faq/Hero";
import IntroQuote from "@/components/faq/IntroQuote";
import Guidelines from "@/components/faq/Guidelines";
import ParallaxBreak from "@/components/faq/ParallaxBreak";
import FaqList from "@/components/faq/FaqList";
import Footer from "@/components/faq/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-heading overflow-x-hidden">
      <Hero />
      <IntroQuote />
      <Guidelines />
      <ParallaxBreak />
      <FaqList />
      <Footer />
    </div>
  );
};

export default FAQ;
