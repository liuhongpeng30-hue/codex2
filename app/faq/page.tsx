import type { Metadata } from "next";
import { MarketingPage } from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "FAQ | Custom Hats, Apparel & OEM/ODM Manufacturing | Aung Crown",
  description:
    "Read Aung Crown FAQs for MOQ, samples, logo customization, private label, production lead time, packaging and custom hats or apparel inquiries."
};

const faq = [
  {
    question: "What is your MOQ?",
    answer:
      "MOQ usually starts from 100 pieces, depending on product type, material, logo method and customization details."
  },
  {
    question: "Can I customize my own logo?",
    answer:
      "Yes. We support embroidery, 3D puff embroidery, woven patches, leather patches, rubber patches, printing, labels and packaging."
  },
  {
    question: "Can you make private label products?",
    answer:
      "Yes. We support private label hats, apparel, socks, custom labels, hang tags, inner tape, packaging and brand trims."
  },
  {
    question: "How long does production take?",
    answer:
      "Production time depends on product type, order quantity, material availability and customization details. Many projects can be completed within 2-4 weeks after sample confirmation."
  },
  {
    question: "Can I get a sample before bulk production?",
    answer:
      "Yes. Samples help confirm shape, fabric, color, logo position, workmanship and packaging before bulk production begins."
  },
  {
    question: "Can you support OEM or ODM projects?",
    answer:
      "Yes. Aung Crown supports OEM/ODM custom hats, custom caps, custom apparel, socks and brand merchandise programs."
  }
];

export default function FaqPage() {
  return (
    <MarketingPage
      breadcrumb="FAQ"
      title="Custom Manufacturing FAQ"
      description="Clear answers for buyers planning custom hats, custom caps, private label clothing, OEM apparel, custom socks and brand merchandise with Aung Crown."
      note="If your project has special materials, compliance needs or a fixed launch date, send the details so our team can review the right path."
      heroImage="/assets/supplemental/stacked-wool-snapbacks.jpg"
      heroAlt="Stacked custom snapback hats"
      proof={["MOQ guidance", "Sample questions", "Logo and craft options", "Production and packing answers"]}
      sections={[
        {
          title: "Before You Send an Inquiry",
          intro:
            "A stronger first inquiry helps us reply faster with practical options and fewer back-and-forth questions.",
          cards: [
            {
              title: "Product Type",
              text: "Tell us if you need custom hats, caps, hoodies, t-shirts, socks, private label or a mixed product program."
            },
            {
              title: "Quantity Range",
              text: "Share estimated quantity so we can suggest suitable production, sampling and packing options."
            },
            {
              title: "Logo Method",
              text: "Send artwork or describe whether you prefer embroidery, patch, print, label or packaging customization."
            },
            {
              title: "Target Timeline",
              text: "Let us know your launch date or delivery window so the team can discuss realistic timing."
            }
          ]
        }
      ]}
      faq={faq}
      ctaTitle="Still Have Questions?"
      ctaText="Send your product idea, quantity and target market. We will help you confirm materials, craft, sample details and production options."
    />
  );
}
