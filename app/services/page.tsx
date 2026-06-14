import type { Metadata } from "next";
import { MarketingPage } from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "OEM/ODM Custom Manufacturing Services | Aung Crown",
  description:
    "Explore Aung Crown services for custom hats, caps, apparel, socks, private label, OEM/ODM, sampling, decoration and packaging."
};

export default function ServicesPage() {
  return (
    <MarketingPage
      breadcrumb="Services"
      title="Custom Manufacturing Services"
      description="From idea and artwork to samples, bulk production and export packaging, Aung Crown supports B2B buyers with a complete OEM/ODM custom product workflow."
      note="Use this page to understand how we help with custom hats, custom apparel, socks, private label clothing and brand merchandise."
      heroImage="/assets/generated/custom-cap-development-table.png"
      heroAlt="Custom cap development table with samples and material swatches"
      proof={["OEM / ODM support", "Private label programs", "Sampling before bulk", "Packaging and export coordination"]}
      sections={[
        {
          title: "Service Modules",
          intro:
            "Choose the support level that matches your brand stage, from a single custom cap to a full retail-ready merchandise line.",
          cards: [
            {
              title: "Product Development",
              text: "Plan product shape, target buyer, fabric, colorway, logo placement, trims and packaging requirements."
            },
            {
              title: "Design & Sampling",
              text: "Develop samples for review so materials, decoration, fit and brand details can be confirmed before bulk production."
            },
            {
              title: "Bulk Production",
              text: "Move approved samples into controlled production with workmanship checks and export packing preparation."
            },
            {
              title: "Private Label Packaging",
              text: "Support custom labels, hang tags, inner tape, polybags, cartons and retail-ready brand presentation."
            }
          ]
        },
        {
          title: "Decoration & Brand Detail Options",
          intro:
            "The right craft changes how a custom product feels. We help choose options that fit your buyer, channel and price target.",
          image: "/assets/supplemental/laser-perforated-side.png",
          imageAlt: "Custom cap perforation and rubber patch detail",
          tone: "dark",
          cards: [
            {
              title: "Embroidery",
              text: "Flat embroidery, 3D puff embroidery and detailed logo stitching for hats and apparel."
            },
            {
              title: "Patch Options",
              text: "Rubber patches, woven patches, leather patches and embroidered patches for different brand styles."
            },
            {
              title: "Printing",
              text: "Panel printing, apparel printing and seasonal graphics for custom merchandise programs."
            },
            {
              title: "Material Matching",
              text: "Cotton, wool, mesh, performance fabrics, recycled options and trims selected around your product brief."
            }
          ]
        }
      ]}
    />
  );
}
