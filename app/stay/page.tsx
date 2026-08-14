import type { Metadata } from "next";
import { Footer, Header, PageHero, SectionHeading, SimpleCta } from "../components";

export const metadata: Metadata = { title: "Stay" };

export default function StayPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Stay at Green Village"
          title="Rest in the quiet rhythm of village life."
          intro="A private guest room, a peaceful garden and a family who makes you feel at home—within easy reach of ancient Anuradhapura."
          image="/images/stay/40e420b66f1aaf5f.avif"
          imageAlt="Green Village guesthouse beneath tropical trees"
        />

        <section className="section">
          <div className="shell split split--balanced">
            <SectionHeading eyebrow="Simple comfort" title="Your own space, with family nearby." />
            <div className="prose">
              <p>The Airbnb listing offers a private guesthouse room for up to four guests, with one bedroom, two beds and a private bathroom.</p>
              <p>Air conditioning, free parking and a garden setting make it a practical base. The family home is nearby, so guests can join cooking, meals and everyday life whenever they wish.</p>
              <a className="button button--forest" href="https://www.airbnb.com/rooms/13886001" target="_blank" rel="noreferrer">View availability on Airbnb ↗</a>
            </div>
          </div>
        </section>

        <section className="section section--sage">
          <div className="shell">
            <SectionHeading eyebrow="At a glance" title="Everything you need to settle in." />
            <div className="info-grid">
              {[
                ["Up to 4 guests", "A flexible room for solo travellers, couples, friends or a small family."],
                ["2 beds", "A king-sized bed plus a second bed, as described on the listing."],
                ["Private bathroom", "Your own bathroom, while the family spaces remain welcoming."],
                ["Air conditioning", "A cool and comfortable place to rest after exploring."],
                ["Home-cooked meals", "Ask about lunch, dinner and cooking traditional dishes together."],
                ["Free parking", "Convenient for travellers arriving with a driver or rented vehicle."],
              ].map(([title, text]) => <article className="info-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell rhythm-grid">
            <div>
              <p className="eyebrow">A day at Green Village</p>
              <h2>Unhurried, from morning to night.</h2>
            </div>
            <ol className="timeline">
              <li><span>Morning</span><div><h3>Wake with the village</h3><p>Listen to birds, take breakfast on the veranda and decide how you want the day to unfold.</p></div></li>
              <li><span>Day</span><div><h3>Explore with local context</h3><p>Visit Anuradhapura, cycle nearby roads or plan a wildlife day with Gunarathna.</p></div></li>
              <li><span>Evening</span><div><h3>Return to the family table</h3><p>Learn a recipe, share a home-cooked meal and slow down under the palms.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section section--cream">
          <div className="shell location-card">
            <div><p className="eyebrow">Location</p><h2>Thalawa, near Anuradhapura</h2></div>
            <div><p>Green Village is in a quiet local neighbourhood outside the busy centre. The Airbnb description notes that Anuradhapura can be reached by local bus; confirm the best route for your arrival directly with the host.</p><a className="text-link" href="/guide">Read the travel guide <span aria-hidden="true">→</span></a></div>
          </div>
        </section>
        <SimpleCta />
      </main>
      <Footer />
    </>
  );
}
