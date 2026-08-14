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
            <div><strong>4.96 / 5</strong><span>Homestay · 67 Airbnb reviews</span></div>
            <div><strong>4.97 / 5</strong><span>Tour · 100 Airbnb reviews</span></div>
            <div><strong>4.97 / 5</strong><span>Host profile · 176 reviews</span></div>
          </div>
          <p className="source-note source-note--center">Public ratings observed on 14 August 2026 and subject to change.</p>
        </section>

        <section className="section section--cream">
          <div className="shell">
            <SectionHeading eyebrow="What guests talk about" title="Six themes that appear again and again." />
            <div className="quote-grid quote-grid--two">
              {reviews.map((review) => <blockquote className="quote-card" key={review.title}><div className="quote-mark" aria-hidden="true">“</div><p>{review.text}</p><footer>{review.title}<span>{review.source}</span></footer></blockquote>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell review-links">
            <SectionHeading eyebrow="Read verified reviews" title="See the latest feedback at the source." />
            <div className="button-row">
              <a className="button button--forest" href="https://www.airbnb.com/rooms/13886001" target="_blank" rel="noreferrer">Homestay reviews ↗</a>
              <a className="button button--outline" href="https://www.airbnb.co.uk/experiences/471573" target="_blank" rel="noreferrer">Tour reviews ↗</a>
            </div>
          </div>
        </section>
        <SimpleCta />
      </main>
      <Footer />
    </>
  );
}
