import type { Metadata } from "next";
import { Footer, Header, PageHero, SectionHeading, SimpleCta } from "../components";

export const metadata: Metadata = { title: "About Gunarathna" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Gunarathna"
          title="A host, teacher and storyteller of his home."
          intro="Gunarathna welcomes travellers with the care of a hotel professional and the perspective of someone deeply connected to village life."
          image="/images/family-guest-welcome.webp"
          imageAlt="Gunarathna and his family welcoming guests at Green Village"
        />

        <section className="section">
          <div className="shell split split--balanced">
            <SectionHeading eyebrow="His story" title="Hospitality became a way of sharing." />
            <div className="prose">
              <p>Gunarathna spent sixteen years working in a hotel in Anuradhapura. That experience shaped his calm service, attention to guests and natural ability to make people comfortable.</p>
              <p>Today he hosts travellers with his family, guides visitors through the ancient city and teaches English in his village. He enjoys explaining not only what a monument is, but why it matters to the people who still visit and worship there.</p>
            </div>
          </div>
        </section>

        <section className="section section--forest values-section">
          <div className="shell">
            <p className="eyebrow eyebrow--light">What guides every welcome</p>
            <div className="values-grid">
              <article><span>01</span><h3>Warmth</h3><p>Guests are treated with care, patience and genuine family hospitality.</p></article>
              <article><span>02</span><h3>Understanding</h3><p>History and Buddhist culture are explained clearly, respectfully and without rushing.</p></article>
              <article><span>03</span><h3>Connection</h3><p>Meals, village routines and conversation create space for real cultural exchange.</p></article>
              <article><span>04</span><h3>Community</h3><p>Hosting supports Gunarathna&apos;s continuing work with local students and families.</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell impact-grid">
            <div className="impact-image"><img src="/images/experiences/4c1e9a4592c7d9da.avif" alt="Green rice fields and coconut palms near Green Village" loading="lazy" /></div>
            <div>
              <SectionHeading eyebrow="A positive local story" title="Travel that gives something back." />
              <div className="prose"><p>Gunarathna teaches English voluntarily and has described using part of the family&apos;s tourism income to help students who need stationery, uniforms and learning materials.</p><p>The website communicates this carefully: as an ongoing local commitment, not as a spectacle. Any future photographs involving students should be published only with appropriate adult and guardian consent.</p></div>
              <a className="text-link" href="/contact">Plan a thoughtful visit <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
        <SimpleCta />
      </main>
      <Footer />
    </>
  );
}
