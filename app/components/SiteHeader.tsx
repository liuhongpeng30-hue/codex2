import Image from "next/image";

const navMenus = [
  {
    label: "Home",
    href: "/#top",
    columns: [{ title: "Start Here", links: ["Home", "Product Categories", "Factory Proof", "Get a Quote"] }]
  },
  {
    label: "About",
    href: "/about",
    columns: [{ title: "Company", links: ["Company Profile", "Our Culture", "Factory Base", "Certificates"] }]
  },
  {
    label: "Products",
    href: "/products/hats",
    columns: [
      { title: "Hats & Caps", links: ["Snapback Hats", "Trucker Hats", "Baseball Hats", "Bucket Hats"] },
      { title: "More Products", links: ["Beanies", "Custom Apparel", "Socks & Scarves", "Packaging"] }
    ]
  },
  {
    label: "Services",
    href: "/services",
    columns: [{ title: "OEM / ODM", links: ["Product Development", "Sampling", "Private Label", "Packaging"] }]
  },
  {
    label: "Manufacture",
    href: "/manufacture",
    columns: [
      { title: "Process", links: ["Design & Sampling", "Material Sourcing", "Bulk Production", "Quality Control"] },
      { title: "Capacity", links: ["3 Owned Factories", "400+ Employees", "25,000+ pcs/day"] }
    ]
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    columns: [{ title: "Options", links: ["Recycled Materials", "Packaging Reduction", "Document Review", "Responsible Production"] }]
  },
  {
    label: "FAQ",
    href: "/faq",
    columns: [{ title: "Questions", links: ["MOQ", "Samples", "Lead Time", "Logo Options", "Packaging"] }]
  },
  {
    label: "Resources",
    href: "/resources",
    columns: [{ title: "Buyer Resources", links: ["Buying Guide", "Material Guide", "Logo Techniques", "Quote Checklist"] }]
  },
  {
    label: "Contact",
    href: "/contact",
    columns: [{ title: "Contact", links: ["Send Inquiry", "WhatsApp", "Email", "Factory Address"] }]
  }
];

const languages = ["EN", "FR", "DE", "ES"];

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
            <a className="nav-link" href={menu.href}>
              {menu.label}
            </a>
            <div className="simple-menu" aria-label={`${menu.label} menu`}>
              {menu.columns.map((column) => (
                <div className="simple-menu-column" key={column.title}>
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
        ))}
        <div className="nav-with-mega nav-language">
          <a className="nav-link" href="#language" aria-haspopup="true">
            EN
          </a>
          <div className="language-popover" aria-label="Language menu">
            {languages.map((language) => (
              <a href="#language" key={language}>
                {language}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <a className="header-cta" href="/#quote">Get a Quote</a>
    </header>
  );
}
