import type { Metadata } from "next";
import { MarketingPage } from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Sustainable Custom Hats & Apparel Options | Aung Crown",
  description:
    "Explore sustainable material and production options for custom hats, caps, apparel, socks and private label brand merchandise with Aung Crown."
};

export default function SustainabilityPage() {
  return (
    <MarketingPage
      breadcrumb="Sustainability"
      title="Sustainable Choices for Custom Products"
      description="Aung Crown supports buyers who want more responsible material choices, practical packaging options and clearer production communication for custom hats and apparel."
      note="Sustainability depends on the exact material, order quantity, certification requirements and production route. We review these details project by project."
      heroImage="/assets/supplemental/eco-printed-canvas-5-panel.jpg"
      heroAlt="Eco-friendly printed custom 5-panel cap"
      proof={["Recycled and natural material options", "Packaging discussion before production", "Document review by request", "Built around buyer requirements"]}
      sections={[
        {
          title: "Material & Packaging Options",
          intro:
            "Responsible production starts with product decisions buyers can actually verify and specify in their order brief.",
          cards: [
            {
              title: "Recycled Fabric Options",
              text: "Discuss recycled polyester, RPET options and other materials when they fit your product style and budget."
            },
            {
              title: "Natural Fibers",
              text: "Cotton, wool and other natural-feel fabrics can be evaluated for hats, caps and apparel programs."
            },
            {
              title: "Packaging Reduction",
              text: "Review labels, polybags, cartons and packing plans to reduce unnecessary waste where practical."
            },
            {
              title: "Longer Product Life",
              text: "Better material selection, stronger stitching and clearer care requirements can help products last longer."
            }
          ]
        },
        {
          title: "Responsible Production Conversation",
          intro:
            "Different buyers have different compliance requirements. We keep this discussion grounded in real order details.",
          image: "/assets/supplemental/hat-making-workshop.jpg",
          imageAlt: "Aung Crown production workshop",
          tone: "dark",
          cards: [
            {
              title: "Requirement Review",
              text: "Share target market, material preference, certification needs and packaging standards before sampling."
            },
            {
              title: "Document Discussion",
              text: "Available documents can be reviewed during the project instead of showing unverified public claims."
            },
            {
              title: "Supplier Coordination",
              text: "Material and trim sourcing are matched to your order needs and product positioning."
            },
            {
              title: "Practical Tradeoffs",
              text: "We help compare cost, lead time, material availability and product performance before decisions are made."
            }
          ]
        }
      ]}
    />
  );
}
