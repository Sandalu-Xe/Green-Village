import type { Metadata } from "next";
import { Footer, Header, PageHero, SectionHeading } from "../components";

export const metadata: Metadata = { title: "Contact & Plan Your Visit" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact & plan your visit"
          title="Tell Gunarathna what kind of journey you hope for."
          intro="Start with a stay, a guided tour or both. Use the secure Airbnb pages below to check availability and contact the host."
          image="/images/stay/7145002ed9686a48.avif"
          imageAlt="Peaceful river bordered by tropical greenery near Green Village"
        />

        <section className="section">
          <div className="shell contact-grid">
            <div>
              <SectionHeading eyebrow="Choose where to begin" title="A clear path to your visit." />
              <p className="contact-intro">Direct contact details have not been published here without confirmation. The Airbnb links provide a secure way to see live details and message Gunarathna.</p>
            </div>
            <div className="contact-options">
              <article>
                <span>01</span><div><p className="eyebrow">Stay</p><h3>Green Village homestay</h3><p>Check dates, current pricing, room details and message the host.</p><a className="button button--forest" href="https://www.airbnb.com/rooms/13886001" target="_blank" rel="noreferrer">Open the homestay ↗</a></div>
              </article>
              <article>
                <span>02</span><div><p className="eyebrow">Tour</p><h3>Anuradhapura with Gunarathna</h3><p>See available tour dates, current pricing and experience requirements.</p><a className="button button--outline" href="https://www.airbnb.co.uk/experiences/471573" target="_blank" rel="noreferrer">Open the tour ↗</a></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--sage">
          <div className="shell plan-card">
            <div><p className="eyebrow">Before you message</p><h2>Five details make planning easier.</h2></div>
            <ol>
              <li><span>1</span>Your arrival and departure dates</li>
              <li><span>2</span>How many people are travelling</li>
              <li><span>3</span>Whether you want the stay, tour or both</li>
              <li><span>4</span>Your interests: history, food, village life or wildlife</li>
              <li><span>5</span>Any mobility, dietary or transport needs</li>
            </ol>
          </div>
        </section>

        <section className="section contact-final">
          <div className="shell contact-final__inner">
            <p className="eyebrow">Green Village Anuradhapura</p>
            <h2>Stay local. Explore ancient Anuradhapura.</h2>
            <p>Thalawa · North Central Province · Sri Lanka</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
