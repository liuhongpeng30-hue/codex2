const WHATSAPP_URL =
  "https://wa.me/8613543271499?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Aung Crown on WhatsApp"
    >
      <span className="whatsapp-float-ring" aria-hidden="true" />
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <path d="M16 4.2c-6.36 0-11.53 5.02-11.53 11.2 0 2.1.62 4.16 1.8 5.94L4.4 27.8l6.76-1.72a11.9 11.9 0 0 0 4.84 1c6.36 0 11.53-5.02 11.53-11.2S22.36 4.2 16 4.2Z" />
        <path d="M12.45 10.1c-.25-.54-.52-.55-.75-.56h-.64c-.22 0-.58.08-.88.4-.3.32-1.15 1.1-1.15 2.68s1.18 3.1 1.35 3.32c.17.22 2.28 3.56 5.65 4.85 2.8 1.08 3.38.86 3.99.81.61-.06 1.97-.79 2.25-1.55.28-.76.28-1.42.2-1.56-.08-.14-.3-.22-.64-.38-.33-.16-1.97-.95-2.27-1.06-.3-.11-.53-.16-.75.16-.22.32-.86 1.06-1.06 1.27-.2.22-.39.24-.72.08-.33-.16-1.4-.5-2.67-1.6-.99-.86-1.66-1.93-1.85-2.25-.2-.32-.02-.5.15-.66.15-.15.33-.38.5-.57.17-.19.22-.32.33-.54.11-.22.06-.41-.03-.57-.08-.16-.73-1.75-1.01-2.37Z" />
      </svg>
    </a>
  );
}
