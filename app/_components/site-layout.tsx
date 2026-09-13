import { navItems } from "../_data/site";
import { NavigationBehavior } from "../navigation-behavior";

export function Header() {
  return (
    <header className="site-header">
      <NavigationBehavior />
      <div className="shell site-header__inner">
        <a className="brand" href="/" aria-label="Green Village Anuradhapura home">
          <span className="brand__mark"><img src="/green-village-logo.png" alt="" /></span>
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
            <span className="brand__mark"><img src="/green-village-logo.png" alt="" /></span>
            <span><strong>Green Village</strong><small>Anuradhapura</small></span>
          </a>
          <p>A peaceful family homestay and local gateway to Sri Lanka&apos;s ancient capital.</p>
          <div className="footer-socials" aria-label="Follow Green Village on social media">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-links footer-links--desktop">
          <h3>Explore</h3>
          <a href="/stay">Stay</a>
          <a href="/experiences">Tours & experiences</a>
          <a href="/guide">Anuradhapura guide</a>
          <a href="/gallery">Gallery</a>
        </div>
        <div className="footer-links footer-links--desktop">
          <h3>Plan</h3>
          <a href="/about">About Gunarathna</a>
          <a href="/reviews">Guest impressions</a>
          <a href="/contact">Plan your visit</a>
        </div>
        <div className="footer-links footer-links--desktop">
          <h3>Book securely</h3>
          <a href="https://www.airbnb.com/rooms/13886001" target="_blank" rel="noreferrer">Homestay on Airbnb ↗</a>
          <a href="https://www.airbnb.co.uk/experiences/471573" target="_blank" rel="noreferrer">Tour on Airbnb ↗</a>
        </div>
        <details className="footer-quick-menu">
          <summary>
            <span>Quick menu</span>
            <span className="footer-quick-menu__icon" aria-hidden="true" />
          </summary>
          <div className="footer-quick-menu__panel">
            <div>
              <h3>Explore</h3>
              <a href="/stay">Stay</a>
              <a href="/experiences">Tours &amp; experiences</a>
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
        </details>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Green Village Anuradhapura</span>
        <span className="footer-credit">Designed &amp; developed by <strong>Sandalu</strong></span>
        <span>Thalawa, North Central Province, Sri Lanka</span>
      </div>
    </footer>
  );
}

