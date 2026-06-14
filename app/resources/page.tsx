import type { Metadata } from "next";
import { MarketingPage } from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Resources for Custom Hats & Apparel Buyers | Aung Crown",
  description:
    "Explore buyer resources for custom hats, caps, apparel, private label, OEM/ODM production, materials, logo techniques and packaging."
};

export default function ResourcesPage() {
  return (
    <MarketingPage
      breadcrumb="Resources"
      title="Resources for Custom Product Buyers"
      description="Use these buying resources to plan custom hats, caps, apparel, socks, private label clothing and OEM/ODM brand merchandise before you request a quote."
      note="This resource center is designed for global B2B buyers comparing product types, materials, logo techniques, packaging and production paths."
      heroImage="/assets/supplemental/laser-perforated-side.png"
      heroAlt="Custom cap side detail with perforation and brand patch"
      proof={["Buying guides", "Material references", "Logo technique ideas", "Quote preparation checklists"]}
      sections={[
        {
          title: "Buyer Resource Library",
          intro:
            "Each resource is designed to help buyers make clearer decisions before sampling and bulk production.",
          cards: [
            {
              title: "Custom Hat Buying Guide",
              text: "Compare snapbacks, trucker hats, baseball caps, dad hats, bucket hats, beanies and 5-panel hats."
            },
            {
              title: "Logo Technique Guide",
              text: "Understand embroidery, puff embroidery, rubber patches, woven patches, leather patches and printing."
            },
            {
              title: "Private Label Checklist",
              text: "Plan labels, tags, inner tape, packaging, carton marks and retail-ready brand presentation."
            },
            {
              title: "Quote Preparation",
              text: "Gather product type, quantity, artwork, country, target delivery time and packaging needs before contacting us."
            }
          ]
        },
        {
          title: "What to Prepare Before Production",
          intro:
            "A complete brief helps reduce sampling delays and gives the factory team better context for recommendations.",
          image: "/assets/generated/custom-cap-development-table.png",
          imageAlt: "Custom cap planning table with samples and material swatches",
          tone: "dark",
          cards: [
            {
              title: "Reference Images",
              text: "Share preferred product shapes, colorways, fabric feeling and logo placement references."
            },
            {
              title: "Artwork Files",
              text: "Vector artwork, Pantone colors and logo size notes help the decoration discussion move faster."
            },
            {
              title: "Target Buyer",
              text: "Streetwear, golf, outdoor, team merch, corporate gifts and retail programs require different choices."
            },
            {
              title: "Packing Requirements",
              text: "Confirm whether you need hang tags, polybags, cartons, barcodes or distributor-ready packing."
            }
          ]
        }
      ]}
    />
  );
}
