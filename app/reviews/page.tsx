import type { Metadata } from "next";
import { Footer, Header, PageHero, SectionHeading, SimpleCta, reviews } from "../components";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Guest impressions"
          title="Remembered for kindness, knowledge and connection."
          intro="Across the stay and guided tour, travellers return to the same themes: feeling at home, learning deeply and wishing they had stayed longer."
          image="/images/family-guest-welcome.webp"
          imageAlt="Gunarathna and his family with happy Green Village guests"
        />

        <section className="section trust-band">
          <div className="shell trust-grid">
            <a href="https://www.airbnb.com/rooms/13886001?modal=REVIEWS" target="_blank" rel="noreferrer" aria-label="Read all verified homestay reviews on Airbnb">
              <strong>4.96 / 5</strong>
              <span>Homestay · 67 Airbnb reviews</span>
              <small>View verified reviews ↗</small>
            </a>
            <a href="https://www.airbnb.co.uk/experiences/471573?modal=REVIEWS" target="_blank" rel="noreferrer" aria-label="Read all verified tour reviews on Airbnb">
              <strong>4.97 / 5</strong>
              <span>Tour · 100 Airbnb reviews</span>
              <small>View verified reviews ↗</small>
            </a>
            <a href="https://www.airbnb.com/users/profile/1462830811218687281" target="_blank" rel="noreferrer" aria-label="Open Gunarathna's verified Airbnb host profile">
              <strong>4.97 / 5</strong>
              <span>Host profile · 176 reviews</span>
              <small>Open verified profile ↗</small>
            </a>
          </div>
          <p className="source-note source-note--center">Verified directly on Airbnb on 14 August 2026. Ratings and review totals may change as new reviews are published.</p>
        </section>

        <section className="section section--cream">
          <div className="shell">
            <SectionHeading eyebrow="What guests talk about" title="Six themes that appear again and again." />
            <p className="review-disclosure">The cards below summarize recurring themes; they are not verbatim quotations. Read the original reviews through the verified Airbnb links.</p>
            <div className="quote-grid quote-grid--two">
              {reviews.map((review) => <article className="quote-card theme-card" key={review.title}><div className="theme-label">Review theme</div><p>{review.text}</p><footer>{review.title}<span>{review.source}</span></footer></article>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell review-links">
            <SectionHeading
              eyebrow="Read verified reviews"
              title="Every rating links to its source."
              intro="Green Village does not invent or rewrite ratings. Use these links to read every published review directly on Airbnb."
            />
            <div className="button-row">
              <a className="button button--forest" href="https://www.airbnb.com/rooms/13886001?modal=REVIEWS" target="_blank" rel="noreferrer">All homestay reviews ↗</a>
              <a className="button button--outline" href="https://www.airbnb.co.uk/experiences/471573?modal=REVIEWS" target="_blank" rel="noreferrer">All tour reviews ↗</a>
              <a className="button button--outline" href="https://www.airbnb.com/users/profile/1462830811218687281" target="_blank" rel="noreferrer">Verified host profile ↗</a>
            </div>
          </div>
        </section>
        <SimpleCta />
      </main>
      <Footer />
    </>
  );
}
