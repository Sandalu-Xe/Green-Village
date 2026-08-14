import Link from "next/link";
import {
  Footer,
  Gallery,
  Header,
  SectionHeading,
  experienceCards,
  reviews,
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="home-hero">
          <div className="home-hero__image" role="img" aria-label="Ruwanweli Maha Seya stupa in Anuradhapura" />
          <div className="home-hero__overlay" />
          <div className="shell home-hero__content">
            <p className="eyebrow eyebrow--light">Homestay · Local guide · Village life</p>
            <h1>Stay local.<br />Explore ancient Anuradhapura.</h1>
            <p className="hero-copy">
              A peaceful village homestay and personal journeys with Gunarathna,
              a local teacher, storyteller and experienced host.
            </p>
            <div className="button-row">
              <Link className="button button--clay" href="/stay">Explore the homestay</Link>
              <Link className="button button--ghost-light" href="/experiences">Tour with Gunarathna</Link>
            </div>
          </div>
          <div className="hero-note">Thalawa · North Central Province · Sri Lanka</div>
        </section>

        <section className="section welcome-section">
          <div className="shell split split--intro">
            <div>
              <SectionHeading
                eyebrow="A slower, warmer way to travel"
                title="Come as a guest. Leave feeling like family."
              />
            </div>
            <div className="prose lead-prose">
              <p>
                Green Village brings together a restful family stay, the history of
                Sri Lanka&apos;s ancient capital and the everyday rhythms of village life.
                Share a meal, learn a story and discover places with someone who calls
                this region home.
              </p>
              <Link className="text-link" href="/about">Meet Gunarathna <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="section section--sage">
          <div className="shell">
            <SectionHeading
              eyebrow="Choose your experience"
              title="One village. Many ways to belong."
              intro="Begin with a room, a guided day or a shared meal. Every experience is personal, unhurried and rooted in this place."
            />
            <div className="feature-grid">
              {experienceCards.slice(0, 3).map((item) => (
                <article className="feature-card" key={item.title}>
                  <div className="feature-card__image-wrap">
                    <img src={item.image} alt={item.alt} className="feature-card__image" />
                    <span className="feature-card__number">{item.number}</span>
                  </div>
                  <div className="feature-card__body">
                    <p className="eyebrow">{item.kicker}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link className="text-link" href={item.href}>Discover more <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section story-section">
          <div className="shell story-grid">
            <div className="story-photo">
              <img
                src="https://images.pexels.com/photos/30783896/pexels-photo-30783896.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1600&fit=crop"
                alt="Anuradhapura stupa reflected in a quiet lake at sunrise"
              />
              <span className="story-photo__caption">Ancient places, shared through local stories.</span>
            </div>
            <div className="story-copy">
              <p className="eyebrow">Your host and guide</p>
              <h2>Meet Gunarathna</h2>
              <p className="story-quote">“The best journeys are not rushed. They are shared.”</p>
              <p>
                After many years working in hospitality, Gunarathna now welcomes
                travellers into his village and guides them through the sacred city.
                His fluent English, gentle pace and love of teaching turn monuments
                into meaningful stories.
              </p>
              <div className="quiet-stats" aria-label="Green Village trust signals">
                <div><strong>4.96</strong><span>Homestay rating</span></div>
                <div><strong>4.97</strong><span>Tour rating</span></div>
                <div><strong>100+</strong><span>Tour reviews</span></div>
              </div>
              <Link className="button button--forest" href="/about">Read our story</Link>
            </div>
          </div>
        </section>

        <section className="section section--cream" id="gallery">
          <div className="shell">
            <SectionHeading
              eyebrow="A glimpse of the region"
              title="Sacred places, village days and wild horizons."
              intro="A quiet visual introduction to the landscapes and experiences around Green Village Anuradhapura."
            />
            <Gallery />
          </div>
        </section>

        <section className="section reviews-preview">
          <div className="shell">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow">Guest impressions</p>
                <h2>What travellers remember</h2>
              </div>
              <Link className="text-link" href="/reviews">Read review themes <span aria-hidden="true">→</span></Link>
            </div>
            <div className="quote-grid">
              {reviews.slice(0, 3).map((review) => (
                <blockquote className="quote-card" key={review.title}>
                  <div className="quote-mark" aria-hidden="true">“</div>
                  <p>{review.text}</p>
                  <footer>{review.title}<span>{review.source}</span></footer>
                </blockquote>
              ))}
            </div>
            <p className="source-note">
              Ratings observed 14 August 2026. Review text is paraphrased from recurring public review themes.
            </p>
          </div>
        </section>

        <section className="closing-cta">
          <div className="shell closing-cta__inner">
            <div>
              <p className="eyebrow eyebrow--light">Plan your stay</p>
              <h2>Ready to experience Anuradhapura differently?</h2>
            </div>
            <Link className="button button--cream" href="/contact">Plan your visit</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
