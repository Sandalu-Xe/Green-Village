import type { Metadata } from "next";
import { Footer, Header, PageHero, SectionHeading, SimpleCta, experienceCards } from "../components";

export const metadata: Metadata = { title: "Tours & Experiences" };

export default function ExperiencesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Tours & experiences"
          title="See the ancient city through local eyes."
          intro="Walk, listen, taste and discover at a human pace. Gunarathna brings history and village culture together in one personal journey."
          image="https://images.pexels.com/photos/33713450/pexels-photo-33713450.jpeg?auto=compress&cs=tinysrgb&w=1500&h=1200&fit=crop"
          imageAlt="Ruwanweli Maha Seya stupa in Anuradhapura"
        />

        <section className="section">
          <div className="shell">
            <SectionHeading eyebrow="Signature experience" title="Tour Anuradhapura with a local guide." intro="A thoughtful introduction to the sacred city's landmarks, Buddhist traditions and stories—hosted in English." />
            <div className="tour-feature">
              <div className="tour-feature__details">
                <dl>
                  <div><dt>Duration</dt><dd>About 5½ hours</dd></div>
                  <div><dt>Language</dt><dd>English</dd></div>
                  <div><dt>Group size</dt><dd>Up to 10 guests</dd></div>
                  <div><dt>Meeting area</dt><dd>Mirisawetiya Stupa</dd></div>
                </dl>
                <a className="button button--forest" href="https://www.airbnb.co.uk/experiences/471573" target="_blank" rel="noreferrer">See dates on Airbnb ↗</a>
              </div>
              <div className="tour-feature__route">
                {[
                  ["01", "Begin at the sacred city", "Meet, get situated and choose the easiest way to move between sites."],
                  ["02", "Visit revered monuments", "Explore the Sacred Bo Tree, stupas and temple spaces with cultural context."],
                  ["03", "Listen beyond the facts", "Learn about Buddhist philosophy, daily practice and the meaning behind what you see."],
                  ["04", "End with local life", "Browse crafts and spices, ask questions and leave with practical recommendations."],
                ].map(([number, title, text]) => <div className="route-stop" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--sage" id="village-life">
          <div className="shell">
            <SectionHeading eyebrow="More ways to explore" title="Build a visit that feels like your own." />
            <div className="experience-list">
              {experienceCards.slice(2).concat([
                { number: "05", kicker: "Wander", title: "Village walk or cycle", description: "Follow quiet roads, notice everyday details and experience the landscape beyond the main sights.", href: "/contact", image: "https://images.pexels.com/photos/19710786/pexels-photo-19710786.jpeg?auto=compress&cs=tinysrgb&w=1100&h=900&fit=crop", alt: "Cyclist on a green Sri Lankan path" },
              ]).map((item) => (
                <article className="experience-row" key={item.title} id={item.title.includes("Wildlife") ? "wildlife" : undefined}>
                  <img src={item.image} alt={item.alt} />
                  <div><p className="eyebrow">{item.kicker}</p><h3>{item.title}</h3><p>{item.description}</p><span className="soft-label">Arrange with your host</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell good-to-know">
            <SectionHeading eyebrow="Good to know" title="Arrive ready and respectful." />
            <div className="info-grid info-grid--four">
              <article className="info-card"><h3>Temple clothing</h3><p>Cover shoulders and legs. Shoes and hats are removed at sacred areas.</p></article>
              <article className="info-card"><h3>Entry fees</h3><p>Heritage tickets and selected temple fees may be separate. Confirm current prices before your day.</p></article>
              <article className="info-card"><h3>Getting around</h3><p>The ancient city is spread out. Depending on your needs, use bicycles, tuk-tuk or another agreed option.</p></article>
              <article className="info-card"><h3>Comfort</h3><p>Bring water, sun protection and footwear that is easy to remove.</p></article>
            </div>
          </div>
        </section>
        <SimpleCta />
      </main>
      <Footer />
    </>
  );
}
