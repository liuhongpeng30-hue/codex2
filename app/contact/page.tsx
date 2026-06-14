import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Aung Crown | Custom Hats & Apparel Manufacturer",
  description:
    "Contact Aung Crown for custom hats, caps, apparel, socks, private label clothing and OEM/ODM brand merchandise. Send your inquiry for pricing, samples and production details.",
  openGraph: {
    title: "Contact Aung Crown | Custom Hats & Apparel Manufacturer",
    description:
      "Send your custom hats, caps, apparel, socks, private label clothing or OEM/ODM project inquiry to Aung Crown.",
    type: "website"
  }
};

const factoryAddress =
  "No.30, Xinmuxinyuan Industrial Zone, Pinghu Street, Longgang District, Shenzhen, China, 518111";

const productInterestOptions = [
  "Custom Hats / Caps",
  "Baseball Caps",
  "Trucker Hats",
  "Snapback Hats",
  "Dad Hats",
  "Bucket Hats",
  "Beanies",
  "Custom Hoodies",
  "Custom T-Shirts",
  "Custom Jackets",
  "Custom Socks",
  "Private Label Clothing",
  "Brand Merchandise",
  "OEM / ODM Project",
  "Not Sure Yet"
];

const contactCards = [
  ["Email Us", "info@aungcrown.com", "Send product details, tech packs or buying questions."],
  ["Call / WhatsApp", "+86 138 2372 7513", "Useful for urgent timeline, sample or order discussions."],
  ["Skype", "kailyn.ac", "Connect with our team for project communication."],
  ["Visit Us", factoryAddress, "Factory visits are available by appointment."]
];

const benefits = [
  "MOQ from 100 pieces",
  "Custom hats, apparel and socks in one place",
  "OEM / ODM and private label support",
  "Sample and bulk production support"
];

const productGroups = [
  ["Hats & Caps", "Baseball caps, trucker hats, snapback hats, dad hats, bucket hats, beanies, 5-panel hats"],
  ["Apparel", "Hoodies, t-shirts, jackets, sweatshirts, shorts, polos, pants"],
  ["Accessories", "Socks, scarves, labels, packaging, brand trims"],
  ["Services", "OEM / ODM, private label, embroidery, patches, printing, fabric sourcing, custom packaging"]
];

const nextSteps = [
  ["Send your inquiry", "Share your product idea, quantity and logo or design reference."],
  ["Requirement review", "Our team suggests suitable materials, crafts and options."],
  ["Quote and sample details", "We provide quotation, sample details and a production timeline."],
  ["Production after approval", "After sample approval, we move to bulk production and quality inspection."]
];

const contactFaqs = [
  [
    "What is your MOQ?",
    "MOQ usually starts from 100 pieces, depending on product type, material and customization method."
  ],
  [
    "Can I customize my own logo?",
    "Yes. We support embroidery, puff embroidery, woven patches, leather patches, rubber patches, printing, labels and packaging."
  ],
  [
    "Can you make private label products?",
    "Yes. We support private label hats, apparel, socks, custom labels, hang tags and packaging."
  ],
  [
    "How long does production take?",
    "Production time depends on product type, order quantity and customization details. Many projects can be completed within 2-4 weeks after sample confirmation."
  ],
  [
    "Can I upload my design or tech pack?",
    "Yes. This static preview includes an upload field UI for logos, artwork, reference images or tech packs. The real upload function can be connected later."
  ]
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader />

      <section className="contact-hero">
        <div className="contact-hero-copy">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Contact</strong>
          </nav>
          <h1>Contact Aung Crown for Custom Hats & Apparel</h1>
          <p>
            Tell us what you&apos;re planning: custom hats, caps, apparel, socks,
            private label collections or brand merchandise. Our team will help
            you with product options, pricing, samples and production details.
          </p>
          <div className="contact-hero-note">
            MOQ starts from 100 pieces. Most projects can be completed within
            2-4 weeks depending on product details and order quantity.
          </div>
        </div>
        <div className="contact-hero-media">
          <Image
            src="/assets/generated/custom-cap-development-table.png"
            alt="Custom cap samples, material swatches and project planning table"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <span>Inquiry Form</span>
            <h2>Send Your Inquiry</h2>
            <p>
              Share your product idea, quantity, country and deadline. We&apos;ll
              review your project and suggest suitable options.
            </p>
          </div>

          <form className="contact-form-ui" aria-label="Static contact inquiry form">
            <div className="form-grid">
              <input type="text" name="name" placeholder="Name*" aria-label="Name" />
              <input type="email" name="email" placeholder="Email*" aria-label="Email" />
              <input type="text" name="country" placeholder="Country*" aria-label="Country" />
              <input type="tel" name="phone" placeholder="Phone / WhatsApp" aria-label="Phone or WhatsApp" />
              <input type="text" name="company" placeholder="Company Name" aria-label="Company Name" />
              <input type="url" name="website" placeholder="Website / Brand URL" aria-label="Website or Brand URL" />
              <select name="interest" aria-label="Product Interest" defaultValue="">
                <option value="" disabled>Product Interest*</option>
                {productInterestOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <select name="quantity" aria-label="Estimated Order Quantity" defaultValue="">
                <option value="" disabled>Estimated Order Quantity</option>
                <option>100-300 pcs</option>
                <option>300-500 pcs</option>
                <option>500-1000 pcs</option>
                <option>1000+ pcs</option>
                <option>Not sure yet</option>
              </select>
              <select name="delivery" aria-label="Target Delivery Time" defaultValue="">
                <option value="" disabled>Target Delivery Time</option>
                <option>2-4 weeks</option>
                <option>1-2 months</option>
                <option>Flexible</option>
                <option>Not sure yet</option>
              </select>
              <div className="static-upload-field" aria-label="Upload Design File UI only">
                <strong>Upload Design File</strong>
                <span>Logo, artwork, reference image or tech pack. UI preview only.</span>
              </div>
            </div>
            <textarea name="message" placeholder="Message*" aria-label="Message" rows={6} />
            <button type="button">Send Inquiry</button>
            <p className="static-form-note">
              This is a static preview. Form submission will be connected later.
            </p>
          </form>
        </div>

        <aside className="contact-side-panel">
          <div className="contact-card-grid">
            {contactCards.map(([title, value, text]) => (
              <article key={title}>
                <span>{title}</span>
                <strong>{value}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="contact-map-card">
            <iframe
              title="Aung Crown factory location on OpenStreetMap"
              src="https://www.openstreetmap.org/export/embed.html?bbox=114.138349%2C22.680286%2C114.148349%2C22.690286&layer=mapnik&marker=22.685286%2C114.143349"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-caption">
              <strong>Shenzhen Factory Base</strong>
              <a
                href="https://www.openstreetmap.org/?mlat=22.685286&mlon=114.143349#map=16/22.685286/114.143349"
                target="_blank"
                rel="noreferrer"
              >
                OpenStreetMap
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="contact-benefits">
        {benefits.map((benefit, index) => (
          <article key={benefit}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{benefit}</h2>
          </article>
        ))}
        <p>
          Delivery time usually depends on product type, quantity, material and
          customization details.
        </p>
      </section>

      <section className="contact-product-section">
        <div className="section-intro section-intro-wide">
          <h2>What We Can Make</h2>
          <p>
            Aung Crown supports custom hats wholesale, custom cap supplier needs,
            custom apparel manufacturer projects and private label clothing
            programs for global B2B buyers.
          </p>
        </div>
        <div className="contact-product-grid">
          {productGroups.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="next-steps-section">
        <div>
          <span>After You Contact Us</span>
          <h2>What Happens Next?</h2>
        </div>
        <div className="next-steps-list">
          {nextSteps.map(([title, text], index) => (
            <article key={title}>
              <strong>Step {index + 1}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="section-intro">
          <h2>Contact FAQ</h2>
          <p>
            Quick answers before you send a custom hats, custom hoodie
            manufacturer, custom socks manufacturer or brand merchandise supplier
            inquiry.
          </p>
        </div>
        <div className="faq-list">
          {contactFaqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-final-cta">
        <h2>Ready to Start Your Custom Project?</h2>
        <p>
          Send us your idea, product type and estimated quantity. We&apos;ll help
          you choose suitable materials, crafts and production options.
        </p>
        <a className="button button-dark" href="#contact-form">
          Send Inquiry
          <ArrowIcon />
        </a>
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
            Custom headwear and apparel manufacturing for global brands. Made
            with heart, built for the world.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Products</h3>
            <a href="/products/hats">Custom Hats & Caps</a>
            <a href="/#products">Custom Apparel</a>
            <a href="/#products">Custom Socks</a>
            <a href="/#oemodm">Private Label</a>
          </div>
          <div>
            <h3>Services</h3>
            <a href="/#oemodm">OEM / ODM</a>
            <a href="/#manufacture">Production Process</a>
            <a href="/#manufacture">Quality Control</a>
            <a href="#contact-form">Send Inquiry</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>info@aungcrown.com</p>
            <p>+86 138 2372 7513</p>
            <p>Skype: kailyn.ac</p>
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
