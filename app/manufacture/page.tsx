import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Manufacturing Process & Factory Capability | Aung Crown",
  description:
    "See Aung Crown factory capability for custom hats, caps and apparel, including sampling, bulk production, quality control, packing and export coordination."
};

const stats = [
  ["25+", "Years experience"],
  ["3", "Owned factory bases"],
  ["400+", "Skilled employees"],
  ["25,000+", "Pieces per day"]
];

const process = [
  {
    title: "Requirement Review",
    text: "Product type, quantity, artwork, logo method, target market and delivery window are confirmed before sampling."
  },
  {
    title: "Sampling & Approval",
    text: "Shape, fabric, color, decoration placement, trims and packaging details are checked before bulk production."
  },
  {
    title: "Material Preparation",
    text: "Fabric, thread, patches, labels, accessories and cartons are prepared around the approved sample direction."
  },
  {
    title: "Bulk Production",
    text: "Production is arranged by category and order requirement, with workmanship checks during the manufacturing run."
  },
  {
    title: "QC & Packing",
    text: "Appearance, stitching, logo position, quantity, packing method and carton information are reviewed before shipment."
  }
];

const capability = [
  {
    title: "Factory Ownership",
    text: "A real production base gives buyers clearer communication, steadier capacity planning and better order control.",
    image: "/assets/supplemental/factory-exterior.jpg",
    alt: "Aung Crown factory exterior"
  },
  {
    title: "Workshop Production",
    text: "Hat and apparel orders are handled through practical production steps, from material preparation to finishing.",
    image: "/assets/supplemental/hat-making-workshop.jpg",
    alt: "Aung Crown hat making workshop"
  },
  {
    title: "Quality Review",
    text: "QC checks focus on materials, logo placement, workmanship, packing accuracy and export-ready order details.",
    image: "/assets/generated/trust-qc-document-review.png",
    alt: "Quality control desk with cap, documents and swatches"
  }
];

export default function ManufacturePage() {
  return (
    <main className="manufacture-page">
      <SiteHeader />

      <section className="factory-hero">
        <Image
          src="/assets/supplemental/hat-making-workshop.jpg"
          alt="Aung Crown production workshop with custom hats in progress"
          fill
          priority
          loading="eager"
          sizes="100vw"
        />
        <div className="factory-hero-overlay" />
        <div className="factory-hero-content">
          <nav aria-label="Breadcrumb" className="breadcrumb factory-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Manufacture</strong>
          </nav>
          <p className="eyebrow">Factory Capability</p>
          <h1>Manufacturing Built for Custom Brand Orders</h1>
          <p>
            From sample confirmation to bulk production, quality control and
            export packing, Aung Crown gives global buyers a clear view of how
            custom hats and apparel are made.
          </p>
          <div className="factory-hero-actions">
            <a className="button button-primary" href="/contact#contact-form">
              Discuss a Project
            </a>
            <a className="button button-ghost-light" href="/products/hats">
              View Hat Products
            </a>
          </div>
        </div>
        <div className="factory-stat-panel" aria-label="Aung Crown manufacturing proof">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="factory-intro-section">
        <div>
          <p className="eyebrow">Why Buyers Care</p>
          <h2>Factory pages should reduce risk, not just show machines.</h2>
        </div>
        <p>
          International buyers need to know whether a supplier can understand a
          brief, make a sample, control bulk production and prepare an order for
          export. This page is organized around that buying decision.
        </p>
      </section>

      <section className="capability-grid" aria-label="Factory capability areas">
        {capability.map((item) => (
          <article className="capability-card" key={item.title}>
            <div className="capability-image">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="factory-process-section">
        <div className="factory-process-heading">
          <p className="eyebrow">Controlled Workflow</p>
          <h2>From brief to packed order</h2>
          <p>
            The process is intentionally simple for the buyer, but each stage
            has a job: confirm the details before the next production decision
            creates cost or delay.
          </p>
        </div>
        <div className="factory-timeline">
          {process.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="factory-qc-section">
        <div className="factory-qc-copy">
          <p className="eyebrow">Quality Control</p>
          <h2>Checkpoints before production becomes shipment.</h2>
          <p>
            QC is handled across the order, not only at the end. Material,
            workmanship, decoration position, product appearance and packing
            details all need to match the approved direction.
          </p>
          <ul>
            <li>Material and trim review before bulk production</li>
            <li>Workmanship and decoration checks during production</li>
            <li>Final appearance, quantity and carton review before shipping</li>
          </ul>
        </div>
        <div className="factory-qc-media">
          <Image
            src="/assets/supplemental/hat-showroom-wall.jpg"
            alt="Aung Crown custom hat showroom wall"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="factory-final-cta">
        <h2>Send Your Product Brief to the Factory Team</h2>
        <p>
          Share product type, logo artwork, quantity, target delivery country
          and packing needs. We will help confirm the right sample and
          production path.
        </p>
        <a className="button button-dark" href="/contact#contact-form">
          Get Manufacturing Advice
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
