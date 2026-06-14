import Image from "next/image";

const factoryAddress =
  "No.30, Xinmuxinyuan Industrial Zone, Pinghu Street, Longgang District, Shenzhen, China, 518111";

export function SiteFooter() {
  return (
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
          Custom headwear and apparel manufacturing for global brands. Made with
          heart, built for the world.
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
          <a href="/products/hats">Custom Hats & Caps</a>
          <a href="/#products">Custom Apparel</a>
          <a href="/#products">Socks & Scarves</a>
          <a href="/#products">Labeling & Packaging</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/about">About Aung Crown</a>
          <a href="/manufacture">Manufacture</a>
          <a href="/sustainability">Sustainability</a>
          <a href="/resources">Resources</a>
        </div>
        <div>
          <h3>Services</h3>
          <a href="/services">OEM / ODM</a>
          <a href="/services">Private Label</a>
          <a href="/services">Sampling</a>
          <a href="/services">Packaging</a>
        </div>
        <div>
          <h3>Support</h3>
          <a href="/faq">FAQs</a>
          <a href="/contact">Contact Sales</a>
          <a href="/contact#contact-form">Send Inquiry</a>
          <a href="/resources">Buying Guides</a>
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
  );
}
