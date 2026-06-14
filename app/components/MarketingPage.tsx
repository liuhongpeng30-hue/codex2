import Image from "next/image";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

type Card = {
  title: string;
  text: string;
};

type PageSection = {
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  cards: Card[];
  tone?: "light" | "dark";
};

type FaqItem = {
  question: string;
  answer: string;
};

type MarketingPageProps = {
  breadcrumb: string;
  title: string;
  description: string;
  note: string;
  heroImage: string;
  heroAlt: string;
  proof: string[];
  sections: PageSection[];
  faq?: FaqItem[];
  ctaTitle?: string;
  ctaText?: string;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function MarketingPage({
  breadcrumb,
  title,
  description,
  note,
  heroImage,
  heroAlt,
  proof,
  sections,
  faq,
  ctaTitle = "Ready to Talk About Your Custom Project?",
  ctaText = "Send us your product idea, quantity and timeline. We will help you choose suitable materials, crafts and production options."
}: MarketingPageProps) {
  return (
    <main className="inner-page">
      <SiteHeader />

      <section className="inner-hero">
        <div className="inner-hero-copy">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>{breadcrumb}</strong>
          </nav>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="inner-hero-note">{note}</div>
        </div>
        <div className="inner-hero-media">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            loading="eager"
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="inner-proof-strip" aria-label={`${breadcrumb} highlights`}>
        {proof.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </article>
        ))}
      </section>

      {sections.map((section) => (
        <section
          className={`inner-section ${section.tone === "dark" ? "inner-section-dark" : ""}`}
          key={section.title}
        >
          <div className="inner-section-heading">
            <h2>{section.title}</h2>
            <p>{section.intro}</p>
          </div>
          {section.image ? (
            <div className="inner-split">
              <div className="inner-section-image">
                <Image src={section.image} alt={section.imageAlt ?? section.title} fill sizes="(max-width: 900px) 100vw, 42vw" />
              </div>
              <div className="inner-card-stack">
                {section.cards.map((card, cardIndex) => (
                  <article className="inner-card" key={card.title}>
                    <span>{String(cardIndex + 1).padStart(2, "0")}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="inner-card-grid">
              {section.cards.map((card, cardIndex) => (
                <article className="inner-card" key={card.title}>
                  <span>{String(cardIndex + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}

      {faq ? (
        <section className="inner-faq-section">
          <div className="section-intro">
            <h2>Frequently Asked Questions</h2>
            <p>
              Practical answers for custom hats, custom apparel, OEM/ODM,
              private label and export production inquiries.
            </p>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <section className="inner-final-cta">
        <h2>{ctaTitle}</h2>
        <p>{ctaText}</p>
        <a className="button button-dark" href="/contact#contact-form">
          Send Inquiry
          <ArrowIcon />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
