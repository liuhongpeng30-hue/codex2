import Image from "next/image";
import { SiteHeader } from "./components/SiteHeader";

const productCategories = [
  {
    title: "Custom Hats & Caps",
    image: "/assets/supplemental/laser-perforated-rubber-patch-cap.png",
    alt: "Custom 5-panel cap with laser perforation and rubber patch"
  },
  {
    title: "5-Panel Snapbacks",
    image: "/assets/supplemental/eco-printed-canvas-5-panel.jpg",
    alt: "Printed canvas 5-panel snapback cap"
  },
  {
    title: "Trucker Hats",
    image: "/assets/supplemental/red-suede-trucker-patch.jpg",
    alt: "Red suede trucker hat with embroidered patch"
  },
  {
    title: "Wool Snapbacks",
    image: "/assets/supplemental/stacked-wool-snapbacks.jpg",
    alt: "Stacked wool snapback caps in multiple colors"
  },
  {
    title: "Custom Apparel",
    image: "/assets/catalog/hoodie-hero.png",
    alt: "Custom hoodie and apparel production reference"
  }
];

const proofStats = [
  ["25+", "Years Experience"],
  ["3", "Owned Factories"],
  ["400+", "Skilled Employees"],
  ["25,000+", "Pieces Per Day"],
  ["30,000+", "Brand Projects"]
];

const developmentPoints = [
  ["Shape", "Baseball caps, 5-panel caps, snapbacks, truckers, beanies and apparel support."],
  ["Material", "Wool, cotton, performance fabrics, mesh, recycled options and seasonal trims."],
  ["Decoration", "Embroidery, rubber patch, woven patch, print, perforation and private label details."],
  ["Packaging", "Hangtags, labels, polybags, cartons and buyer-ready packing plans."]
];

const buyerSegments = [
  {
    title: "Streetwear & Fashion Brands",
    text: "Launch shape-driven cap drops with fabric, color and logo options that match your collection."
  },
  {
    title: "Retail & Distributors",
    text: "Build repeatable assortments with stable styles, color runs and export packing for wholesale orders."
  },
  {
    title: "Corporate & Team Merch",
    text: "Create clean logo caps and apparel for staff, teams, campaigns and branded merchandise."
  },
  {
    title: "Outdoor & Sports Brands",
    text: "Use breathable panels, performance fabrics and lightweight structures for active product lines."
  },
  {
    title: "Events & Promotions",
    text: "Support campaign quantities, deadline planning and simple artwork approval before production."
  }
];

const craftOptions = [
  {
    title: "Rubber Patch & Perforation",
    image: "/assets/supplemental/laser-perforated-side.png",
    alt: "Laser perforated cap side detail with rubber patch",
    text: "A clean performance look for golf, outdoor and sports collections."
  },
  {
    title: "Embroidery Patch",
    image: "/assets/supplemental/red-trucker-front.jpg",
    alt: "Front view of red trucker hat with embroidered patch",
    text: "Dimensional brand artwork for fashion, team and merchandise programs."
  },
  {
    title: "Printed Panels",
    image: "/assets/supplemental/eco-printed-canvas-front.jpg",
    alt: "Printed 5-panel cap front view",
    text: "Full-panel graphics for outdoor, lifestyle and seasonal product stories."
  },
  {
    title: "Private Label Series",
    image: "/assets/supplemental/stacked-wool-snapbacks.jpg",
    alt: "Stacked custom wool snapbacks with embroidery",
    text: "Coordinated colorways, labels and packaging for retail-ready launches."
  }
];

const processSteps = [
  ["Consultation", "Confirm product type, target buyer, quantity and launch timeline."],
  ["Design & Sampling", "Develop shape, fabric, logo placement and sample approval details."],
  ["Material Sourcing", "Match fabric, trims, labels, patches, thread colors and packaging."],
  ["Bulk Production", "Run controlled production with in-house manufacturing management."],
  ["Quality Control", "Check materials, workmanship, logo placement, sizing and packing."],
  ["Packing & Delivery", "Prepare export cartons and coordinate shipment requirements."]
];

const trustProof = [
  {
    title: "Owned Factory Base",
    image: "/assets/supplemental/factory-exterior.jpg",
    alt: "Aung Crown factory exterior",
    text: "Factory ownership and production control matter when buyers need stable capacity."
  },
  {
    title: "Compliance & QC Review",
    image: "/assets/generated/trust-qc-document-review.png",
    alt: "Custom cap quality checklist, material swatches and compliance review documents",
    text: "Quality checklists, material files and compliance documents can be reviewed before bulk production."
  },
  {
    title: "Trade Show Experience",
    image: "/assets/supplemental/exhibitions-collage.jpg",
    alt: "Aung Crown exhibition photos with global buyers",
    objectPosition: "center top",
    text: "Real buyer meetings and product presentations support international B2B trust."
  }
];

const faqs = [
  "What is your minimum order quantity (MOQ)?",
  "Can I get a sample before bulk production?",
  "How long is the production lead time?",
  "What customization options are available?",
  "Do you offer private labeling and packaging?"
];

const factoryAddress =
  "No. 30, Xinmuxinyuan Industrial Zone, Pinghu Street, Longgang District, Shenzhen, China";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function LineIcon({ index }: { index: number }) {
  return (
    <span className="line-icon" aria-hidden="true">
      <svg viewBox="0 0 32 32">
        {index % 3 === 0 ? (
          <>
            <circle cx="16" cy="16" r="10" />
            <path d="M16 9v14M9 16h14" />
          </>
        ) : index % 3 === 1 ? (
          <>
            <rect x="8" y="8" width="16" height="16" rx="2" />
            <path d="M12 14h8M12 19h6" />
          </>
        ) : (
          <>
            <path d="M16 6 26 16 16 26 6 16Z" />
            <path d="m12 16 3 3 6-7" />
          </>
        )}
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img
            className="hero-main-image"
            src="/assets/supplemental/hat-making-workshop.jpg"
            alt=""
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="hero-copy">
          <h1>Custom Headwear & Apparel Manufacturer for Global Brands</h1>
          <p>
            One-stop OEM/ODM production for custom hats, caps, apparel,
            private labels and export packaging.
          </p>
          <div className="hero-stats" aria-label="Company highlights">
            <span>25+ Years</span>
            <span>3 Factories</span>
            <span>400+ Employees</span>
            <span>25,000+ pcs/day</span>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="#quote">Get a Quote</a>
            <a className="button button-light" href="#products">Explore Products</a>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Aung Crown proof points">
        <h2>Our Proof</h2>
        <div className="proof-grid">
          {proofStats.map(([number, label], index) => (
            <div className="proof-item" key={label}>
              <LineIcon index={index} />
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-tight" id="products">
        <div className="section-intro">
          <h2>Product Categories</h2>
          <p>
            Start with the main product line. Each category leads buyers toward
            the right shape, decoration method, material choice and quote path.
          </p>
        </div>
        <div className="category-grid">
          {productCategories.map((category) => (
            <a className="category-card" href={category.title === "Custom Hats & Caps" ? "/products/hats" : "#quote"} key={category.title}>
              <div className="category-image">
                <Image src={category.image} alt={category.alt} fill sizes="20vw" />
              </div>
              <span>{category.title}</span>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section className="program-section" id="oemodm">
        <div className="program-copy">
          <h2>Develop a Complete Custom Cap Program</h2>
          <p>
            Turn a brand idea into a production-ready cap line with clear
            decisions for shape, material, craft, labels, packaging and delivery.
          </p>
          <div className="program-points">
            {developmentPoints.map(([title, text], index) => (
              <article key={title}>
                <LineIcon index={index + 3} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="program-image">
          <Image
            src="/assets/generated/custom-cap-development-table.png"
            alt="Custom cap development table with samples, swatches and tech pack"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="section buyer-section" id="applications">
        <div className="section-intro section-intro-wide">
          <h2>Applications</h2>
          <p>
            Different sales channels need different cap programs. Match the
            product plan to the buyer, season, order quantity and launch deadline.
          </p>
        </div>
        <div className="buyer-grid">
          {buyerSegments.map((segment, index) => (
            <article key={segment.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{segment.title}</h3>
              <p>{segment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="craft-section">
        <div className="section-intro section-intro-dark">
          <h2>Customization Options</h2>
          <p>
            Select the craft and finishing details that make the product feel
            like your brand before bulk production begins.
          </p>
        </div>
        <div className="craft-option-grid">
          {craftOptions.map((option) => (
            <article className="craft-option" key={option.title}>
              <div className="craft-option-image">
                <Image src={option.image} alt={option.alt} fill sizes="25vw" />
              </div>
              <div>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manufacture-section" id="manufacture">
        <div className="manufacture-image">
          <Image
            src="/assets/supplemental/hat-making-workshop.jpg"
            alt="Aung Crown hat making workshop and production control"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
        <div className="manufacture-copy">
          <h2>Manufacturing Process</h2>
          <p>
            A simple controlled path from idea to shipment, designed for custom
            brand orders rather than one-off catalog browsing.
          </p>
          <div className="process-list">
            {processSteps.map(([title, text], index) => (
              <article key={title}>
                <strong>{index + 1}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="section-intro section-intro-wide">
          <h2>Trust Proof</h2>
          <p>
            Factory control, document review and global buyer experience help
            reduce risk before a custom order moves into production.
          </p>
        </div>
        <div className="trust-card-grid">
          {trustProof.map((item) => (
            <article className="trust-card" key={item.title}>
              <div className="trust-image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="33vw"
                  style={{ objectPosition: item.objectPosition ?? "center" }}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="faq-column">
          <h2>FAQ</h2>
          <div className="faq-list">
            {faqs.map((question, index) => (
              <details key={question} open={index === 0}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Our team will confirm the best option based on product type,
                  quantity, materials, craft, packaging and delivery timeline.
                </p>
              </details>
            ))}
          </div>
        </div>
        <form className="quote-form" aria-label="Get a quote form">
          <h2>Get a Quote</h2>
          <div className="form-grid">
            <input type="text" name="name" placeholder="Your Name*" aria-label="Your Name" />
            <input type="text" name="company" placeholder="Company Name*" aria-label="Company Name" />
            <input type="email" name="email" placeholder="Email*" aria-label="Email" />
            <input type="tel" name="phone" placeholder="Phone / WhatsApp*" aria-label="Phone or WhatsApp" />
            <select name="category" aria-label="Product Category" defaultValue="">
              <option value="" disabled>Product Category*</option>
              <option>Custom Hats & Caps</option>
              <option>5-Panel Snapbacks</option>
              <option>Trucker Hats</option>
              <option>Wool Snapbacks</option>
              <option>Custom Apparel</option>
            </select>
            <input type="text" name="quantity" placeholder="Estimated Quantity*" aria-label="Estimated Quantity" />
          </div>
          <textarea name="message" placeholder="Message" aria-label="Message" rows={5} />
          <label className="upload-field">
            <input type="file" name="attachment" />
            <span>Upload Logo / Tech Pack</span>
            <small>JPG, PNG, PDF or AI files up to 20MB</small>
          </label>
          <button type="submit">Submit Inquiry</button>
        </form>
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
            We help global brands bring their ideas to life with premium custom
            headwear and apparel. Made with heart, built for the world.
          </p>
          <div className="social-row" aria-label="Social links">
            <a href="#">in</a>
            <a href="#">ig</a>
            <a href="#">yt</a>
            <a href="#">fb</a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Products</h3>
            <a href="#products">Custom Hats & Caps</a>
            <a href="#products">5-Panel Snapbacks</a>
            <a href="#products">Trucker Hats</a>
            <a href="#products">Wool Snapbacks</a>
            <a href="#products">Custom Apparel</a>
          </div>
          <div>
            <h3>Applications</h3>
            <a href="#applications">Streetwear Brands</a>
            <a href="#applications">Retail & Distributors</a>
            <a href="#applications">Corporate Merch</a>
            <a href="#applications">Events & Promotions</a>
          </div>
          <div>
            <h3>Manufacture</h3>
            <a href="#manufacture">Production Process</a>
            <a href="#manufacture">Quality Control</a>
            <a href="#oemodm">OEM/ODM Support</a>
            <a href="#oemodm">Sustainability</a>
          </div>
          <div>
            <h3>Resources</h3>
            <a href="#quote">Catalogs</a>
            <a href="#quote">Materials</a>
            <a href="#quote">Techniques</a>
            <a href="#quote">FAQs</a>
          </div>
          <div>
            <h3>About</h3>
            <a href="#top">Company Profile</a>
            <a href="#manufacture">Factory Base</a>
            <a href="#quote">Certificates</a>
            <a href="/contact">Contact Sales</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>info@aungcrown.com</p>
            <p>+86 138 2372 7513</p>
            <p>{factoryAddress}</p>
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
