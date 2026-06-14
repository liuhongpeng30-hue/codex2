import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Custom Hats & Caps Manufacturer | Aung Crown",
  description:
    "Explore custom hats and caps from Aung Crown, including snapback hats, trucker hats, baseball caps, bucket hats and private label headwear with OEM/ODM support."
};

const hatProducts = [
  {
    title: "Custom Performance Caps",
    image: "/assets/supplemental/laser-perforated-rubber-patch-cap.png",
    desc: "Laser-perforated caps with rubber patches for sports, golf and lifestyle brands.",
    tags: ["Perforated", "Rubber patch", "Performance"]
  },
  {
    title: "Suede Trucker Hats",
    image: "/assets/supplemental/red-suede-trucker-patch.jpg",
    desc: "Mesh-back trucker hats with soft suede fabric and embroidered patch branding.",
    tags: ["Mesh back", "Suede", "Patch logo"]
  },
  {
    title: "Wool Snapback Hats",
    image: "/assets/supplemental/lime-wool-snapback.jpg",
    desc: "Structured wool snapbacks with raised embroidery for teams and fashion drops.",
    tags: ["Wool", "Flat brim", "Embroidery"]
  },
  {
    title: "Colorway Snapback Sets",
    image: "/assets/supplemental/stacked-wool-snapbacks.jpg",
    desc: "Multi-color custom hat programs for seasonal retail collections and brand launches.",
    tags: ["Colorways", "Retail sets", "Sampling"]
  },
  {
    title: "Printed 5-Panel Caps",
    image: "/assets/supplemental/eco-printed-canvas-front.jpg",
    desc: "Outdoor, festival and fashion headwear with all-over print or woven label branding.",
    tags: ["Printed", "Outdoor", "Fashion"]
  },
  {
    title: "Outdoor 5-Panel Hats",
    image: "/assets/supplemental/eco-printed-canvas-5-panel.jpg",
    desc: "Lightweight profile caps for lifestyle brands, cycling, outdoor and promotion lines.",
    tags: ["5-panel", "Webbing", "Lifestyle"]
  },
  {
    title: "Embroidered Patch Trucker Hats",
    image: "/assets/supplemental/red-trucker-front.jpg",
    desc: "Classic trucker caps with front embroidery patches for streetwear and events.",
    tags: ["Trucker", "Embroidery", "Event merch"]
  },
  {
    title: "Perforated Private Label Caps",
    image: "/assets/supplemental/laser-perforated-side.png",
    desc: "End-to-end private label headwear with trims, tags, packaging and shipment support.",
    tags: ["Hang tags", "Packaging", "Brand program"]
  }
];

const filterGroups: Array<[string, string[]]> = [
  ["Hat Categories", ["Snapback Hats", "Trucker Hats", "Baseball Caps", "Dad Hats", "Bucket Hats", "Beanies"]],
  ["Decoration", ["Embroidery", "3D Puff", "Woven Patch", "Leather Patch", "Screen Print"]],
  ["Materials", ["Cotton Twill", "Polyester", "Mesh", "Corduroy", "Recycled Fabric"]]
];

const craftOptions: Array<[string, string]> = [
  ["Logo Embroidery", "Flat and 3D puff embroidery for premium headwear branding."],
  ["Patch Options", "Leather, woven, rubber and printed patches for different market styles."],
  ["Private Label", "Custom labels, tags, closures, inner tape and packaging for brand programs."],
  ["Sample Support", "Design review, material matching and pre-production samples before bulk orders."]
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function HatsProductPage() {
  return (
    <main className="product-page">
      <SiteHeader />

      <section className="product-hero">
        <div className="product-hero-copy">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/#products">Products</a>
            <span>/</span>
            <strong>Custom Hats & Caps</strong>
          </nav>
          <h1>Custom Hats & Caps Manufacturer</h1>
          <p>
            Build custom headwear programs with Aung Crown: snapbacks, trucker
            hats, baseball caps, dad hats, bucket hats, beanies and private label
            packaging for global brands.
          </p>
          <div className="product-hero-actions">
            <a className="button button-dark" href="#product-quote">Get a Quote</a>
            <a className="button button-light" href="#hat-products">View Hat Styles</a>
          </div>
        </div>
        <div className="product-hero-media">
          <Image
            src="/assets/supplemental/laser-perforated-rubber-patch-cap.png"
            alt="Custom performance cap with laser perforation and rubber patch"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="product-shell">
        <aside className="product-sidebar" aria-label="Product filters and inquiry">
          <div className="sidebar-card sidebar-search">
            <label htmlFor="product-search">Search products</label>
            <input id="product-search" type="search" placeholder="Search custom hats..." />
          </div>

          {filterGroups.map(([title, items]) => (
            <div className="sidebar-card" key={title}>
              <h2>{title}</h2>
              <div className="filter-list">
                {items.map((item) => (
                  <label key={item}>
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <form className="sidebar-card mini-quote" id="product-quote">
            <h2>Quick Inquiry</h2>
            <input type="text" placeholder="Name*" aria-label="Name" />
            <input type="email" placeholder="Email*" aria-label="Email" />
            <select aria-label="Interested product" defaultValue="">
              <option value="" disabled>Interested Product</option>
              <option>Custom Snapback Hats</option>
              <option>Custom Trucker Hats</option>
              <option>Custom Baseball Caps</option>
              <option>Private Label Hats</option>
            </select>
            <textarea placeholder="Quantity, logo method, timeline..." rows={4} />
            <button type="submit">Send Inquiry</button>
          </form>
        </aside>

        <div className="product-main" id="hat-products">
          <div className="product-intro">
            <span>Headwear Product Template</span>
            <h2>Choose a hat style, then customize fabric, logo, label and packaging.</h2>
            <p>
              This page template is designed for SEO and inquiry conversion: clear
              product cards, procurement filters, custom craft details and repeated
              quote paths for overseas buyers.
            </p>
          </div>

          <div className="product-toolbar">
            <strong>Showing 8 custom hat styles</strong>
            <div className="toolbar-actions" aria-label="Product view controls">
              <button type="button">Grid</button>
              <button type="button">List</button>
              <select aria-label="Sort products" defaultValue="featured">
                <option value="featured">Sort by Featured</option>
                <option value="new">Newest</option>
                <option value="popular">Most Requested</option>
              </select>
            </div>
          </div>

          <div className="hat-grid">
            {hatProducts.map((product) => (
              <article className="hat-card" key={product.title}>
                <div className="hat-card-image">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    loading="eager"
                    sizes="(max-width: 900px) 100vw, 28vw"
                  />
                </div>
                <div className="hat-card-body">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  <div className="hat-tags">
                    {product.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href="#product-quote">
                    Request quote
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-detail-band">
        <div>
          <span>Customization Options</span>
          <h2>From blank cap to retail-ready brand product.</h2>
        </div>
        <div className="craft-grid">
          {craftOptions.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-proof-section">
        <div className="product-proof-copy">
          <h2>Why source custom hats from Aung Crown?</h2>
          <p>
            Aung Crown supports brand buyers with design, sampling, manufacturing,
            quality control and packaging. Use this template as the repeatable
            product page model for each future category.
          </p>
        </div>
        <div className="product-proof-stats">
          <div><strong>25+</strong><span>Years</span></div>
          <div><strong>3</strong><span>Factories</span></div>
          <div><strong>400+</strong><span>Employees</span></div>
          <div><strong>25,000+</strong><span>pcs/day</span></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image
            src="/assets/brand/aung-crown-logo.jpg"
            alt="Aung Crown logo"
            width={618}
            height={120}
            style={{ height: "auto", width: "230px" }}
          />
          <p>
            Custom headwear and apparel manufacturing for global brands.
            Made with heart, built for the world.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Hat Products</h3>
            <a href="#hat-products">Snapback Hats</a>
            <a href="#hat-products">Trucker Hats</a>
            <a href="#hat-products">Baseball Caps</a>
            <a href="#hat-products">Bucket Hats</a>
          </div>
          <div>
            <h3>Customization</h3>
            <a href="#product-quote">Embroidery</a>
            <a href="#product-quote">Patches</a>
            <a href="#product-quote">Private Label</a>
            <a href="#product-quote">Packaging</a>
          </div>
          <div>
            <h3>Manufacture</h3>
            <a href="/#manufacture">Production Process</a>
            <a href="/#oemodm">Quality Control</a>
            <a href="/#oemodm">Sustainability</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>info@aungcrown.com</p>
            <p>+86 138 2372 7513</p>
            <p>No. 30, Xinmuxinyuan Industrial Zone, Pinghu Street, Longgang District, Shenzhen, China</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2025 Aung Crown. All rights reserved.</span>
          <span>Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms of Use&nbsp;&nbsp;|&nbsp;&nbsp;Sitemap</span>
        </div>
      </footer>
    </main>
  );
}
