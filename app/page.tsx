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
          <div className="home-hero__image" role="img" aria-label="Gunarathna and his family welcoming guests at Green Village" />
          <div className="home-hero__overlay" />
          <div className="shell home-hero__content">
            <p className="eyebrow eyebrow--light">Homestay · Local guide · Village life</p>
            <h1>Stay local.<br /><em>Explore ancient</em> Anuradhapura.</h1>
            <p className="hero-copy">
              A peaceful village homestay and personal journeys with Gunarathna —
              a local English teacher, volunteer and Airbnb&apos;s highest-reviewed guide.
            </p>
            <div className="button-row">
              <a className="button button--clay" href="/stay">Explore the homestay</a>
              <a className="button button--ghost-light" href="/experiences">Tour with Gunarathna</a>
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
              <a className="text-link" href="/about">Meet Gunarathna <span aria-hidden="true">→</span></a>
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
                    <a className="text-link" href={item.href}>Discover more <span aria-hidden="true">→</span></a>
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
                src="/images/family-guest-welcome.webp"
                alt="Gunarathna welcoming guests at Green Village with a warm smile"
              />
              <span className="story-photo__caption">From the classroom to the sacred city — a guide shaped by kindness.</span>
            </div>
            <div className="story-copy">
              <p className="eyebrow">Your host and guide</p>
              <h2>Meet Gunarathna</h2>
              <p className="story-quote">&ldquo;I teach because I believe knowledge should reach everyone. I guide because every traveller deserves to feel this place.&rdquo;</p>
              <p>
                Gunarathna is an English teacher who has spent years educating children
                in the Sri Lankan countryside — many of them from underprivileged families
                he supports as a volunteer. With more than twenty years in the tourism
                industry and the highest-reviewed tour guide status on Airbnb,
                he brings a rare combination of warmth, knowledge and storytelling
                to every journey through the ancient city.
              </p>
              <div className="quiet-stats" aria-label="Green Village trust signals">
                <div><strong>20+</strong><span>Years in tourism</span></div>
                <div><strong>4.97</strong><span>Airbnb rating</span></div>
                <div><strong>★★★★★</strong><span>Highest reviewed guide</span></div>
              </div>
              <a className="button button--forest" href="/about">Read our story</a>
            </div>
          </div>
        </section>

        <section className="section section--cream" id="gallery">
          <div className="shell">
            <SectionHeading
              eyebrow="Real moments from Green Village"
              title="The stay, the sacred city and the people you meet."
              intro="A curated preview from the real Green Village homestay and Gunarathna's Anuradhapura experience."
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
              <a className="text-link" href="/reviews">Read review themes <span aria-hidden="true">→</span></a>
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
            <a className="button button--cream" href="/contact">Plan your visit</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
