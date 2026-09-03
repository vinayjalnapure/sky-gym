import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sky/Nav";
import { Hero } from "@/components/sky/Hero";
import { ValueStrip } from "@/components/sky/ValueStrip";
import { About } from "@/components/sky/About";
import { Membership } from "@/components/sky/Membership";
import { WhyChoose } from "@/components/sky/WhyChoose";
import { Gallery } from "@/components/sky/Gallery";
import { BreakSection } from "@/components/sky/BreakSection";
import { FinalCTA } from "@/components/sky/FinalCTA";
import { Contact } from "@/components/sky/Contact";
import { Footer } from "@/components/sky/Footer";
import { FloatingCTA } from "@/components/sky/FloatingCTA";
import { LanguageProvider } from "@/components/sky/i18n";

const TITLE = "Sky Fitness Gym | Gym in Arali, Solapur";
const DESCRIPTION =
  "Sky Fitness Gym in Arali, Solapur. Explore memberships from ₹600/month and get in touch to start your fitness journey.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Gym",
          name: "Sky Fitness Gym",
          telephone: "+917768070808",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Arali, Solapur",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          areaServed: "Arali, Solapur, Maharashtra",
          priceRange: "₹600–₹1500",
          makesOffer: [
            {
              "@type": "Offer",
              name: "1 Month Membership",
              price: "600",
              priceCurrency: "INR",
            },
            {
              "@type": "Offer",
              name: "3 Months Membership",
              price: "1500",
              priceCurrency: "INR",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink text-white">
      <Nav />
      <main>
        <Hero />
        <ValueStrip />
        <About />
        <Membership />
        <WhyChoose />
        <Gallery />
        <BreakSection />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      {/* Extra space so the mobile floating CTA bar never covers the footer text. */}
      <div className="h-16 sm:hidden" />
      </div>
    </LanguageProvider>
  );
}
