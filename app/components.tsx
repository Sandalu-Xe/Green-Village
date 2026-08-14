import Link from "next/link";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/stay", label: "Stay" },
  { href: "/experiences", label: "Tours & Experiences" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/guide", label: "Travel Guide" },
  { href: "/#gallery", label: "Gallery" },
];

export const galleryImages = [
  {
    src: "https://images.pexels.com/photos/33713450/pexels-photo-33713450.jpeg?auto=compress&cs=tinysrgb&w=1500&h=1100&fit=crop",
    alt: "White Ruwanweli Maha Seya stupa framed by greenery in Anuradhapura",
    caption: "Ancient Anuradhapura",
    className: "gallery-item--wide",
  },
  {
    src: "https://images.pexels.com/photos/11495863/pexels-photo-11495863.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop",
    alt: "Sri Lankan village house surrounded by coconut palms",
    caption: "Village calm",
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/37179402/pexels-photo-37179402.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop",
    alt: "Traditional Sri Lankan breakfast being prepared in a home kitchen",
    caption: "Food made together",
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/19710786/pexels-photo-19710786.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop",
    alt: "Cyclist riding along a quiet green path in Sri Lanka",
    caption: "Slow village journeys",
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/37114883/pexels-photo-37114883.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop",
    alt: "Sri Lankan elephant walking through green forest",
    caption: "Wild Sri Lanka",
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/33265699/pexels-photo-33265699.jpeg?auto=compress&cs=tinysrgb&w=1500&h=1100&fit=crop",
    alt: "Pink lotus flowers across a green pond in Sri Lanka",
    caption: "Nature in stillness",
    className: "gallery-item--wide",
  },
];

export const experienceCards = [
  {
    number: "01",
    kicker: "Stay",
    title: "A peaceful village home",
    description: "Rest in a private, air-conditioned guest room and wake to palms, birds and a warm family welcome.",
    href: "/stay",
    image: "https://images.pexels.com/photos/11495863/pexels-photo-11495863.jpeg?auto=compress&cs=tinysrgb&w=1100&h=900&fit=crop",
    alt: "A tropical Sri Lankan house surrounded by coconut trees",
  },
  {
    number: "02",
    kicker: "Explore",
    title: "The sacred city, made personal",
    description: "Understand ancient monuments, Buddhist traditions and hidden details through Gunarathna's local stories.",
    href: "/experiences",
    image: "https://images.pexels.com/photos/33713450/pexels-photo-33713450.jpeg?auto=compress&cs=tinysrgb&w=1100&h=900&fit=crop",
    alt: "Ruwanweli Maha Seya stupa in Anuradhapura",
  },
  {
    number: "03",
    kicker: "Connect",
    title: "Cook, share and slow down",
    description: "Join the family kitchen, learn traditional dishes and enjoy the generous pleasure of a meal made together.",
    href: "/experiences#village-life",
    image: "https://images.pexels.com/photos/37179402/pexels-photo-37179402.jpeg?auto=compress&cs=tinysrgb&w=1100&h=900&fit=crop",
    alt: "Traditional Sri Lankan cooking in a home kitchen",
  },
  {
    number: "04",
    kicker: "Discover",
    title: "Wildlife and wide horizons",
    description: "Ask Gunarathna about planning a wildlife day and the best seasonal route for your visit.",
    href: "/experiences#wildlife",
    image: "https://images.pexels.com/photos/37114883/pexels-photo-37114883.jpeg?auto=compress&cs=tinysrgb&w=1100&h=900&fit=crop",
    alt: "Sri Lankan elephant in green forest",
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
      <div className="shell site-header__inner">
        <Link className="brand" href="/" aria-label="Green Village Anuradhapura home">
          <span className="brand__mark">GV</span>
          <span><strong>Green Village</strong><small>Anuradhapura</small></span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button--small button--forest header-cta" href="/contact">Plan your visit</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand brand--footer" href="/">
            <span className="brand__mark">GV</span>
            <span><strong>Green Village</strong><small>Anuradhapura</small></span>
          </Link>
          <p>A peaceful family homestay and local gateway to Sri Lanka&apos;s ancient capital.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/stay">Stay</Link>
          <Link href="/experiences">Tours & experiences</Link>
          <Link href="/guide">Anuradhapura guide</Link>
          <Link href="/#gallery">Gallery</Link>
        </div>
        <div>
          <h3>Plan</h3>
          <Link href="/about">About Gunarathna</Link>
          <Link href="/reviews">Guest impressions</Link>
          <Link href="/contact">Plan your visit</Link>
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
          <img className="page-hero__image" src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <figure className={`gallery-item ${image.className}`} key={image.src}>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="gallery-note">
        Representative regional photography from Pexels. Replace with original Green Village photographs before the final public launch.
      </p>
    </>
  );
}

export function SimpleCta() {
  return (
    <section className="closing-cta">
      <div className="shell closing-cta__inner">
        <div><p className="eyebrow eyebrow--light">A personal journey</p><h2>Let&apos;s plan your time in Anuradhapura.</h2></div>
        <Link className="button button--cream" href="/contact">Plan your visit</Link>
      </div>
    </section>
  );
}
