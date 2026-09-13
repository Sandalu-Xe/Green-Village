import type { Metadata } from "next";
import { PageHero, SectionHeading, SimpleCta } from "../components";

export const metadata: Metadata = { title: "About Gunarathna — Teacher, Volunteer & Guide" };

export default function AboutPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Meet Gunarathna"
          title="A teacher who became the island's most loved guide."
          intro="From a countryside classroom to the sacred ruins of Anuradhapura — Gunarathna's journey has always been about sharing what he loves."
          image="/images/family-guest-welcome.webp"
          imageAlt="Gunarathna welcoming guests warmly at Green Village"
        />

        {/* ── The story ───────────────────────────────────── */}
        <section className="section">
          <div className="shell split split--balanced">
            <SectionHeading eyebrow="His story" title="Two decades of sharing this place with the world." />
            <div className="prose">
              <p>
                Gunarathna is, first and foremost, an English teacher. For years he has taught
                children in the countryside — not in city schools, but in the communities that
                need it most. Many of these children come from underprivileged families, and
                Gunarathna supports them as a volunteer, giving his time, patience and
                encouragement freely.
              </p>
              <p>
                That same passion for teaching found another home in tourism. With more than
                twenty years in the industry, Gunarathna brings the ancient city to life for
                travellers from every corner of the world. His fluent English, calm storytelling
                and deep knowledge of Buddhist heritage turn a tour into something far more
                personal — a conversation, a friendship, a memory.
              </p>
              <p>
                Today he is one of the highest-reviewed tour guides on Airbnb, recognised by
                travellers not for rehearsed scripts, but for genuine warmth and understanding.
              </p>
            </div>
          </div>
        </section>

        {/* ── Journey milestones ──────────────────────────── */}
        <section className="section section--cream">
          <div className="shell">
            <SectionHeading
              eyebrow="A journey in milestones"
              title="From the classroom to the sacred city."
              intro="Every chapter of Gunarathna's life has been about connecting people to knowledge, culture and each other."
            />
            <div className="journey-grid">
              <article className="journey-card">
                <span className="journey-card__icon">📚</span>
                <h3>English Teacher</h3>
                <p>
                  Years spent teaching English in countryside schools — helping young
                  minds unlock opportunities through language.
                </p>
              </article>
              <article className="journey-card">
                <span className="journey-card__icon">🤝</span>
                <h3>Volunteer &amp; Mentor</h3>
                <p>
                  Dedicated volunteer work supporting underprivileged children with
                  learning materials, guidance and a belief in their potential.
                </p>
              </article>
              <article className="journey-card">
                <span className="journey-card__icon">🏛️</span>
                <h3>20+ Years in Tourism</h3>
                <p>
                  Two decades of welcoming travellers to Anuradhapura, turning
                  ancient ruins into living, breathing stories.
                </p>
              </article>
              <article className="journey-card">
                <span className="journey-card__icon">⭐</span>
                <h3>Highest Airbnb Reviews</h3>
                <p>
                  Recognised as one of the top-rated guides on Airbnb — not by marketing,
                  but by hundreds of heartfelt guest reviews.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Values ──────────────────────────────────────── */}
        <section className="section section--forest values-section">
          <div className="shell">
            <p className="eyebrow eyebrow--light">What guides every welcome</p>
            <div className="values-grid">
              <article><span>01</span><h3>Warmth</h3><p>Guests are treated with the same care he gives his students — patience, kindness and a genuine smile.</p></article>
              <article><span>02</span><h3>Understanding</h3><p>History and Buddhist culture are explained clearly, respectfully and at a pace that lets you truly absorb it.</p></article>
              <article><span>03</span><h3>Connection</h3><p>Meals, village routines and conversation create space for the kind of cultural exchange that stays with you.</p></article>
              <article><span>04</span><h3>Community</h3><p>Hosting supports Gunarathna&apos;s continuing volunteer work with local students and families in the countryside.</p></article>
            </div>
          </div>
        </section>

        {/* ── Giving back ─────────────────────────────────── */}
        <section className="section">
          <div className="shell impact-grid">
            <div className="impact-image"><img src="/images/experiences/4c1e9a4592c7d9da.avif" alt="Green rice fields and coconut palms near Green Village" loading="lazy" /></div>
            <div>
              <SectionHeading eyebrow="A positive local story" title="A teacher's heart, a traveller's trust." />
              <div className="prose">
                <p>
                  Long before hosting his first guest, Gunarathna was already giving back.
                  As a volunteer English teacher in the countryside, he has helped children
                  who might otherwise have no access to language education — providing
                  stationery, uniforms and learning materials from his own resources.
                </p>
                <p>
                  Today, part of the family&apos;s tourism income continues to support
                  these students. When you stay at Green Village or join a tour, you
                  become part of a story that reaches far beyond ancient monuments.
                </p>
              </div>
              <a className="text-link" href="/contact">Plan a thoughtful visit <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
        <SimpleCta />
      </main>
    </>
  );
}

