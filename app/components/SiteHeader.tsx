import Image from "next/image";

const menuCategories = [
  {
    title: "Custom Hats & Caps",
    image: "/assets/supplemental/laser-perforated-rubber-patch-cap.png",
    alt: "Custom 5-panel baseball cap with laser perforation and rubber patch"
  },
  {
    title: "5-Panel Snapbacks",
    image: "/assets/supplemental/eco-printed-canvas-5-panel.jpg",
    alt: "Eco-friendly printed canvas 5-panel snapback cap"
  }
];

const navMenus = [
  {
    label: "Home",
    href: "/#top",
    kicker: "Aung Crown",
    title: "Custom manufacturing made simple for global brands.",
    cta: "Back to top",
    preview: [
      { title: "Customization", image: "/assets/supplemental/laser-perforated-rubber-patch-cap.png", alt: "Aung Crown custom cap capability" },
      { title: "Factory", image: "/assets/supplemental/factory-exterior.jpg", alt: "Aung Crown factory production capacity" }
    ],
    columns: [
      { title: "Start Here", links: ["What We Produce", "How to Work", "Get a Quote"] },
      { title: "Proof", links: ["25+ Years", "3 Factories", "30,000+ Projects"] }
    ]
  },
  {
    label: "About",
    href: "/about",
    kicker: "Since 1998",
    title: "Aung Crown builds custom hats and apparel with heart.",
    cta: "Learn about us",
    preview: [
      { title: "Culture", image: "/assets/supplemental/exhibitions-collage.jpg", alt: "Aung Crown exhibition and customer culture" },
      { title: "Showroom", image: "/assets/supplemental/hat-showroom-wall.jpg", alt: "Aung Crown hat showroom and product wall" }
    ],
    columns: [
      { title: "Company", links: ["Our Culture", "Our Team", "Company Profile"] },
      { title: "Trust", links: ["Certificates", "Factory Capacity", "Quality Control"] }
    ]
  },
  {
    label: "Products",
    href: "/products/hats",
    kicker: "Product portfolio",
    title: "Hats, apparel and accessories in one custom supply chain.",
    cta: "Explore categories",
    preview: menuCategories,
    columns: [
      { title: "Hats & Caps", links: ["Snapback Hats", "Trucker Hats", "Baseball Hats", "Bucket Hats"] },
      { title: "Apparel & More", links: ["Hoodies", "T-shirts & Polos", "Socks & Scarves", "Packaging"] }
    ]
  },
  {
    label: "Services",
    href: "/services",
    kicker: "Custom service",
    title: "OEM/ODM support from design to private label packaging.",
    cta: "View services",
    preview: [
      { title: "OEM/ODM", image: "/assets/supplemental/custom-process.jpg", alt: "Aung Crown OEM ODM custom process" },
      { title: "Craft", image: "/assets/supplemental/red-suede-trucker-patch.jpg", alt: "Custom design and embroidery support" }
    ],
    columns: [
      { title: "Production", links: ["Custom Caps & Hats", "Custom Apparel", "Samples"] },
      { title: "Branding", links: ["Design Support", "Custom Labeling", "Packaging"] }
    ]
  },
  {
    label: "Manufacture",
    href: "/manufacture",
    kicker: "Factory capability",
    title: "Controlled production from sampling to final inspection.",
    cta: "See process",
    preview: [
      { title: "Factory", image: "/assets/supplemental/factory-exterior.jpg", alt: "Aung Crown factory and workshop" },
      { title: "Workshop", image: "/assets/supplemental/hat-making-workshop.jpg", alt: "Hat workshop production and inspection" }
    ],
    columns: [
      { title: "Flow", links: ["Design & Sampling", "Material Sourcing", "Bulk Production"] },
      { title: "Strength", links: ["3 Owned Factories", "400+ Employees", "Quality Control"] }
    ]
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    kicker: "Sustainable choices",
    title: "Eco-friendly materials and responsible production options.",
    cta: "View options",
    preview: [
      { title: "Materials", image: "/assets/supplemental/eco-printed-canvas-front.jpg", alt: "Eco-friendly custom cap material options" },
      { title: "Production", image: "/assets/supplemental/hat-making-workshop.jpg", alt: "Responsible production factory overview" }
    ],
    columns: [
      { title: "Materials", links: ["RPET Fabric", "Organic Cotton", "Recycled Options"] },
      { title: "Standards", links: ["GRS", "GOTS", "BSCI"] }
    ]
  },
  {
    label: "FAQ",
    href: "/faq",
    kicker: "Buyer questions",
    title: "Fast answers for MOQ, samples, lead time and customization.",
    cta: "Ask a question",
    preview: [
      { title: "MOQ", image: "/assets/supplemental/stacked-wool-snapbacks.jpg", alt: "MOQ question for custom hats" },
      { title: "Samples", image: "/assets/supplemental/lime-wool-snapback.jpg", alt: "Sample approval for custom embroidery" }
    ],
    columns: [
      { title: "Orders", links: ["MOQ", "Sample Before Bulk", "Lead Time"] },
      { title: "Custom", links: ["Logo Options", "Private Labeling", "Packaging"] }
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    kicker: "Resources",
    title: "Catalogs, videos and buying guides for custom production.",
    cta: "Request resources",
    preview: [
      { title: "Videos", image: "/assets/supplemental/factory-hero-banner.jpg", alt: "Aung Crown production video reference" },
      { title: "Catalogs", image: "/assets/supplemental/hat-showroom-wall.jpg", alt: "Aung Crown catalog and showroom overview" }
    ],
    columns: [
      { title: "Media", links: ["Videos", "Catalogs", "Product Gallery"] },
      { title: "Learning", links: ["Blog", "Material Guide", "Buying Guide"] }
    ]
  },
  {
    label: "Contact",
    href: "/contact",
    kicker: "Start your quote",
    title: "Send requirements, quantity, timeline and artwork for review.",
    cta: "Submit inquiry",
    preview: [
      { title: "Quote", image: "/assets/supplemental/red-trucker-front.jpg", alt: "Custom product quote request" },
      { title: "Artwork", image: "/assets/supplemental/laser-perforated-side.png", alt: "Upload logo artwork for custom production" }
    ],
    columns: [
      { title: "Send Us", links: ["Product Requirement", "Quantity", "Timeline"] },
      { title: "Contact", links: ["info@aungcrown.com", "WhatsApp", "Shenzhen, China"] }
    ]
  },
  {
    label: "EN",
    href: "#language",
    kicker: "Languages",
    title: "Choose a market language.",
    cta: "Current: English",
    preview: [],
    columns: [
      { title: "Language", links: ["EN", "FR", "DE", "ES"] }
    ]
  }
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Aung Crown home">
        <Image
          src="/assets/brand/aung-crown-logo.jpg"
          alt="Aung Crown Made With Heart logo"
          width={618}
          height={120}
          style={{ height: "auto", width: "100%" }}
          priority
        />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navMenus.map((menu) => (
          <div className="nav-with-mega" key={menu.label}>
            <a className="nav-link" href={menu.href} aria-haspopup="true">
              {menu.label}
            </a>
            {menu.label === "EN" ? (
              <div className="language-popover" aria-label="Language menu">
                {["EN", "FR", "DE", "ES"].map((language) => (
                  <a href="#language" key={language}>
                    {language}
                  </a>
                ))}
              </div>
            ) : (
            <div className="mega-menu" aria-label={`${menu.label} mega menu`}>
              <div className="mega-feature">
                <span>{menu.kicker}</span>
                <strong>{menu.title}</strong>
                <a href={menu.href}>
                  {menu.cta}
                  <ArrowIcon />
                </a>
              </div>
              {menu.preview.length ? (
                <div className="mega-product-strip">
                  {menu.preview.map((item) => (
                    <a className="mega-product" href={menu.href} key={item.title}>
                      <span className="mega-product-image">
                        <Image src={item.image} alt={item.alt} fill sizes="160px" />
                      </span>
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              ) : null}
              <div className="mega-columns">
                {menu.columns.map((column) => (
                  <div className="mega-column" key={column.title}>
                    <h3>{column.title}</h3>
                    {column.links.map((link) => (
                      <a href={menu.href} key={link}>
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        ))}
      </nav>
      <a className="header-cta" href="/#quote">Get a Quote</a>
    </header>
  );
}
