import { galleryPhotos, type GalleryPhoto } from "./gallery-data";
import { ImageMotion } from "./image-motion";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/stay", label: "Stay" },
  { href: "/experiences", label: "Tours & Experiences" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/guide", label: "Travel Guide" },
  { href: "/gallery", label: "Gallery" },
];

export const experienceCards = [
  {
    number: "01",
    kicker: "Stay",
    title: "A peaceful village home",
    description: "Rest in a private, air-conditioned guest room and wake to palms, birds and a warm family welcome.",
    href: "/stay",
    image: "/images/stay/40e420b66f1aaf5f.avif",
    alt: "Green Village guesthouse beneath tropical trees",
  },
  {
    number: "02",
    kicker: "Explore",
    title: "The sacred city, made personal",
    description: "Understand ancient monuments, Buddhist traditions and hidden details through Gunarathna's local stories.",
    href: "/experiences",
    image: "/images/experiences/521903808b0729ec.avif",
    alt: "White stupa framed by trees in Anuradhapura",
  },
  {
    number: "03",
    kicker: "Connect",
    title: "Cook, share and slow down",
    description: "Join the family kitchen, learn traditional dishes and enjoy the generous pleasure of a meal made together.",
    href: "/experiences#village-life",
    image: "/images/experiences/c4253e6c91dfc117.avif",
    alt: "Gunarathna with a family of visiting guests",
  },
  {
    number: "04",
    kicker: "Discover",
    title: "Wildlife and wide horizons",
    description: "Ask Gunarathna about planning a wildlife day and the best seasonal route for your visit.",
    href: "/experiences#wildlife",
    image: "/images/experiences/93e9532789b5936c.avif",
    alt: "Ancient reservoir surrounded by tropical palms",
  },
];

export const reviews = [
  {
    title: "Warm hospitality",
    text: "Guests often describe being welcomed into family life, sharing food and leaving with a genuine personal connection.",
    source: "Recurring homestay theme",
  },
  {
    title: "History brought to life",
    text: "Travellers value the calm explanations, fluent English and thoughtful introduction to Buddhism and the ancient city.",
    source: "Recurring tour theme",
  },
  {
    title: "More than a room",
    text: "Cooking together, meeting the family and discovering village routines are remembered as much as the landmarks.",
    source: "Recurring stay theme",
  },
  {
    title: "Patient and personal",
    text: "The experience is repeatedly praised for its flexible pace, kindness and willingness to answer questions.",
    source: "Recurring guide theme",
  },
  {
    title: "A peaceful base",
    text: "Visitors appreciate the quiet garden atmosphere and the chance to rest away from mass tourism.",
    source: "Recurring location theme",
  },
  {
    title: "Food with a story",
    text: "Home-cooked meals and learning traditional recipes create some of the most personal memories of the stay.",
    source: "Recurring food theme",
  },
];

export function Header() {
  return (
    <header className="site-header">
      <ImageMotion />
      <div className="shell site-header__inner">
        <a className="brand" href="/" aria-label="Green Village Anuradhapura home">
          <span className="brand__mark">GV</span>
          <span><strong>Green Village</strong><small>Anuradhapura</small></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span>Menu</span><span aria-hidden="true">☰</span></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
            <a className="mobile-nav__plan" href="/contact">Plan your visit</a>
          </nav>
        </details>
        <a className="button button--small button--forest header-cta" href="/contact">Plan your visit</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <a className="brand brand--footer" href="/">
            <span className="brand__mark">GV</span>
            <span><strong>Green Village</strong><small>Anuradhapura</small></span>
          </a>
          <p>A peaceful family homestay and local gateway to Sri Lanka&apos;s ancient capital.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="/stay">Stay</a>
          <a href="/experiences">Tours & experiences</a>
          <a href="/guide">Anuradhapura guide</a>
          <a href="/gallery">Gallery</a>
        </div>
        <div>
          <h3>Plan</h3>
          <a href="/about">About Gunarathna</a>
          <a href="/reviews">Guest impressions</a>
          <a href="/contact">Plan your visit</a>
        </div>
        <div>
          <h3>Book securely</h3>
          <a href="https://www.airbnb.com/rooms/13886001" target="_blank" rel="noreferrer">Homestay on Airbnb ↗</a>
          <a href="https://www.airbnb.co.uk/experiences/471573" target="_blank" rel="noreferrer">Tour on Airbnb ↗</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Green Village Anuradhapura</span>
        <span>Thalawa, North Central Province, Sri Lanka</span>
      </div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="page-hero__image-wrap">
          <img
            className={`page-hero__image ${image.includes("family-guest-welcome") ? "page-hero__image--people" : ""}`}
            src={image}
            alt={imageAlt}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export function PhotoGrid({ photos, priorityCount = 0 }: { photos: GalleryPhoto[]; priorityCount?: number }) {
  return (
    <div className="gallery-grid">
      {photos.map((image, index) => (
        <figure
          className={`gallery-item ${index % 9 === 0 || index % 9 === 5 ? "gallery-item--wide" : ""} ${index % 11 === 3 ? "gallery-item--tall" : ""}`}
          key={image.src}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading={index < priorityCount ? "eager" : "lazy"}
            decoding="async"
          />
          <figcaption><span>{image.category}</span>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Gallery({ limit = 9 }: { limit?: number }) {
  const visiblePhotos = limit ? galleryPhotos.slice(0, limit) : galleryPhotos;
  return (
    <>
      <PhotoGrid photos={visiblePhotos} priorityCount={2} />
      {limit ? <div className="gallery-more"><a className="button button--forest" href="/gallery">View all 32 photographs</a></div> : null}
    </>
  );
}

export function SimpleCta() {
  return (
    <section className="closing-cta">
      <div className="shell closing-cta__inner">
        <div><p className="eyebrow eyebrow--light">A personal journey</p><h2>Let&apos;s plan your time in Anuradhapura.</h2></div>
        <a className="button button--cream" href="/contact">Plan your visit</a>
      </div>
    </section>
  );
}
