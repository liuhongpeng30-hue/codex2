import type { Metadata } from "next";
import { MarketingPage } from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "About Aung Crown | Custom Hats & Apparel Manufacturer",
  description:
    "Learn about Aung Crown, a custom hats, caps, apparel and private label manufacturing partner for global B2B brands."
};

export default function AboutPage() {
  return (
    <MarketingPage
      breadcrumb="About"
      title="About Aung Crown"
      description="Aung Crown helps global brands turn custom headwear and apparel ideas into production-ready products with controlled manufacturing, sampling support and export experience."
      note="Built for B2B buyers who need more than a catalog: product development, factory coordination, quality control and brand-ready packaging."
      heroImage="/assets/supplemental/hat-showroom-wall.jpg"
      heroAlt="Aung Crown showroom with custom hats on display"
      proof={["25+ years in custom manufacturing", "3 owned factory bases", "400+ skilled employees", "30,000+ brand projects supported"]}
      sections={[
        {
          title: "Made With Heart, Built for Brands",
          intro:
            "Aung Crown works with streetwear brands, retail distributors, corporate merch teams, outdoor labels and event buyers who need reliable custom products.",
          image: "/assets/supplemental/exhibitions-collage.jpg",
          imageAlt: "Aung Crown exhibition meetings with global buyers",
          cards: [
            {
              title: "Brand-Focused Development",
              text: "We help shape product direction around your audience, logo method, material choice, quantity and launch timeline."
            },
            {
              title: "Custom Supply Chain",
              text: "Hats, apparel, socks, private label trims and packaging can be planned together instead of sourced through disconnected vendors."
            },
            {
              title: "Practical Buyer Support",
              text: "Our team supports artwork review, sample discussion, quote preparation and bulk production coordination."
            },
            {
              title: "Global Communication",
              text: "We understand export timelines, packaging expectations and the questions international B2B buyers ask before ordering."
            }
          ]
        },
        {
          title: "What Makes Us Useful",
          intro:
            "The goal is not only to make a product, but to reduce uncertainty before money, samples and bulk production move forward.",
          tone: "dark",
          cards: [
            {
              title: "Clear Requirements",
              text: "We translate rough ideas into product type, fabric, craft, label and packing decisions."
            },
            {
              title: "Factory Visibility",
              text: "Production and quality control are easier to discuss when buyers can see the manufacturing path."
            },
            {
              title: "Repeatable Programs",
              text: "Seasonal drops, wholesale assortments and private label collections can be developed as repeatable product systems."
            },
            {
              title: "Trust Before Scale",
              text: "Samples, documents and order details are reviewed before bulk production, helping buyers avoid preventable mistakes."
            }
          ]
        }
      ]}
    />
  );
}
