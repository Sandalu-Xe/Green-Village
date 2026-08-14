import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero, SectionHeading, SimpleCta } from "../components";

export const metadata: Metadata = { title: "Anuradhapura Travel Guide" };

const places = [
  ["Sri Maha Bodhi", "A deeply revered living site connected to the tree under which the Buddha attained enlightenment."],
  ["Ruwanwelisaya", "A luminous white stupa and active place of worship, especially atmospheric in softer morning or evening light."],
  ["Jetavanaramaya", "A vast ancient brick stupa whose scale reveals the ambition of the old monastic city."],
  ["Isurumuniya", "A rock temple known for carved stone, water and a more intimate atmosphere."],
  ["Mirisawetiya", "An important stupa and the listed meeting area for Gunarathna's Airbnb experience."],
  ["Ancient tanks", "Historic reservoirs that soften the landscape and offer calm moments between monuments."],
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Anuradhapura travel guide"
          title="A sacred city best understood slowly."
          intro="Anuradhapura is not a single attraction. It is a wide living landscape of stupas, monasteries, reservoirs and active devotion."
          image="https://images.pexels.com/photos/30783896/pexels-photo-30783896.jpeg?auto=compress&cs=tinysrgb&w=1500&h=1200&fit=crop"
          imageAlt="Stupa reflected across calm water at sunrise in Anuradhapura"
        />

        <section className="section">
          <div className="shell">
            <SectionHeading eyebrow="Places to understand" title="Begin with the stories, not a checklist." />
            <div className="place-grid">
              {places.map(([title, text], index) => <article className="place-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section section--sage">
          <div className="shell split split--balanced">
            <SectionHeading eyebrow="Visit respectfully" title="Small actions matter in a sacred place." />
            <ul className="check-list">
              <li>Cover shoulders and legs at temples and stupas.</li>
              <li>Remove shoes and hats where required; hot ground makes socks useful.</li>
              <li>Do not pose with your back directly toward a Buddha image.</li>
              <li>Ask before photographing worshippers, ceremonies or monks.</li>
              <li>Carry water, sun protection and footwear that is easy to remove.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="shell practical-grid">
            <div><p className="eyebrow">Practical planning</p><h2>Make room for the whole experience.</h2></div>
            <div className="info-grid">
              <article className="info-card"><h3>Allow enough time</h3><p>A guided half-day covers important sites, but a slower overnight visit creates space for village life and quieter moments.</p></article>
              <article className="info-card"><h3>Choose your transport</h3><p>The sacred city is extensive. Bicycles, tuk-tuks and other options suit different comfort levels.</p></article>
              <article className="info-card"><h3>Check current tickets</h3><p>Prices can change with exchange rates. Use the official Central Cultural Fund page before your visit.</p><a className="text-link" href="https://ccf.gov.lk/vsl/tickets.html" target="_blank" rel="noreferrer">Official ticket information ↗</a></article>
              <article className="info-card"><h3>Ask a local</h3><p>Opening conditions, ceremonies and the best order can vary. Gunarathna can shape the day around your interests.</p><Link className="text-link" href="/experiences">Explore the guided tour <span aria-hidden="true">→</span></Link></article>
            </div>
          </div>
        </section>
        <SimpleCta />
      </main>
      <Footer />
    </>
  );
}
