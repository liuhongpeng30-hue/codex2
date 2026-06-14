import type { Metadata } from "next";
import { MarketingPage } from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Aung Crown English Site | Custom Headwear & Apparel",
  description:
    "Aung Crown English site for global buyers sourcing custom hats, custom caps, apparel, socks, private label and OEM/ODM merchandise."
};

export default function EnglishPage() {
  return (
    <MarketingPage
      breadcrumb="English"
      title="Aung Crown English Global Buyer Hub"
      description="A fast entry point for international buyers sourcing custom headwear, custom apparel, private label clothing, socks and OEM/ODM brand merchandise."
      note="Use the English site to browse products, understand services and send an inquiry to the Shenzhen team."
      heroImage="/assets/supplemental/exhibitions-collage.jpg"
      heroAlt="Aung Crown exhibition meetings with international buyers"
      proof={["English buyer support", "Global export experience", "Custom product guidance", "Quote and sampling assistance"]}
      sections={[
        {
          title: "Start Here",
          intro:
            "Choose the route that matches your sourcing task. Each path leads to product planning and inquiry support.",
          cards: [
            {
              title: "Explore Products",
              text: "Browse custom hats and caps, apparel, socks, scarves, labels and packaging options."
            },
            {
              title: "Review Services",
              text: "Understand OEM/ODM, private label, sampling, decoration and export packing support."
            },
            {
              title: "See Manufacture",
              text: "Learn how consultation, sampling, material sourcing, production and QC work together."
            },
            {
              title: "Contact Sales",
              text: "Send your product idea, quantity, country and target delivery time for review."
            }
          ]
        }
      ]}
      ctaTitle="Send Your English Inquiry"
      ctaText="Tell us what you need to make: custom hats, caps, apparel, socks, private label products or brand merchandise."
    />
  );
}
