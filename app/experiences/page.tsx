import { experienceCards } from "../_data/site";
import type { Metadata } from "next";
import { PageHero, SectionHeading, SimpleCta } from "../components";

export const metadata: Metadata = { title: "Tours & Experiences" };

export default function ExperiencesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Tours & experiences"
          title="Walk through 2,500 years of living history."
          intro="Visit the world's oldest documented planted tree, stand before towering ancient stupas, explore royal gardens and monastery ruins — all with Gunarathna by your side, sharing the history, Buddhism, culture and traditions that still shape this sacred city."
          image="/images/experiences/521903808b0729ec.avif"
          imageAlt="White stupa framed by trees in Anuradhapura"
        />

        {/* ── What you'll see ─────────────────────────────── */}
        <section className="section section--sage">
          <div className="shell">
            <SectionHeading
              eyebrow="Places you'll visit"
              title="Every monument has a story. Gunarathna tells it."
              intro="This is not a checklist tour. Each site is introduced with its history, Buddhist significance, cultural meaning and the traditions that locals still practice here today."
            />
            <div className="landmark-grid">
              <article className="landmark-card">
                <span className="landmark-card__number">01</span>
                <h3>Sri Maha Bodhi</h3>
                <p>The oldest documented planted tree in human history — a sacred fig tree grown from a branch of the very tree under which the Buddha attained enlightenment. A site of deep devotion.</p>
              </article>
              <article className="landmark-card">
                <span className="landmark-card__number">02</span>
                <h3>Ruwanweli Maha Stupa</h3>
                <p>A luminous white dome and one of the most revered Buddhist monuments in Sri Lanka. Especially beautiful in the soft light of early morning or late evening.</p>
              </article>
              <article className="landmark-card">
                <span className="landmark-card__number">03</span>
                <h3>Ancient Alms Hall</h3>
                <p>The remains of a great refectory where thousands of monks once gathered to eat. A powerful reminder of the scale of monastic life in the ancient city.</p>
              </article>
              <article className="landmark-card">
                <span className="landmark-card__number">04</span>
                <h3>Jetavanaramaya &amp; Museum</h3>
                <p>Once the tallest brick structure in the ancient world. The on-site museum holds remarkable artefacts that bring the monastery&apos;s story to life.</p>
              </article>
              <article className="landmark-card">
                <span className="landmark-card__number">05</span>
                <h3>Isurumuniya Temple</h3>
                <p>A rock-carved temple famous for its exquisite stone carvings, including the celebrated &ldquo;Isurumuniya Lovers.&rdquo; An intimate, atmospheric space beside water.</p>
              </article>
              <article className="landmark-card">
                <span className="landmark-card__number">06</span>
                <h3>Royal Pleasure Garden</h3>
                <p>Tranquil parkland where ancient royalty once relaxed, surrounded by pools, pavilions and carefully positioned shade trees.</p>
              </article>
              <article className="landmark-card">
                <span className="landmark-card__number">07</span>
                <h3>Wessagiriya Monastery</h3>
                <p>A quieter monastery complex with cave inscriptions and meditation platforms — a peaceful place away from the crowds that reveals monastic solitude.</p>
              </article>
              <article className="landmark-card">
                <span className="landmark-card__number">08</span>
                <h3>Other Stupas &amp; Sacred Sites</h3>
                <p>Mirisawetiya, Abhayagiriya and more — Gunarathna selects the route based on your time, interests and the most meaningful way to experience the sacred city.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── What Gunarathna shares ──────────────────────── */}
        <section className="section">
          <div className="shell split split--balanced">
            <SectionHeading
              eyebrow="More than monuments"
              title="History, Buddhism, culture and tradition — explained by someone who lives it."
            />
            <div className="prose">
              <p>
                Gunarathna doesn&apos;t just point at ruins. He explains why the Bodhi Tree
                is still worshipped today, what each stupa symbolises in Buddhist philosophy,
                how the ancient irrigation systems shaped Sri Lankan civilisation, and the
                traditional customs and rituals you can still see in villages around
                Anuradhapura.
              </p>
              <p>
                From the meaning of temple offerings to the architecture of monastic life,
                from royal history to the everyday traditions that have survived for centuries —
                this is a conversation, not a lecture.
              </p>
            </div>
          </div>
        </section>

        {/* ── Signature tour details ─────────────────────── */}
        <section className="section section--cream">
          <div className="shell">
            <SectionHeading eyebrow="Signature experience" title="Tour Anuradhapura with a local guide." intro="A thoughtful introduction to the sacred city's landmarks, Buddhist traditions, cultural heritage and ancient stories — hosted in fluent English." />
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
                  ["01", "Meet at Mirisawetiya", "Begin your journey at one of the ancient city's important stupas. Choose your transport — bicycle, tuk tuk, car or your own vehicle."],
                  ["02", "Sri Maha Bodhi — the sacred tree", "Stand before the world's oldest documented planted tree and learn about its 2,300-year journey from India to Sri Lanka."],
                  ["03", "Ruwanweli Stupa & Alms Hall", "Walk around the great white dome and visit the ancient refectory where monks once gathered in their thousands."],
                  ["04", "Jetavanaramaya & Museum", "Explore the massive stupa and its museum, discovering artefacts and the stories behind this once-towering structure."],
                  ["05", "Isurumuniya & Royal Garden", "Visit the rock temple's carvings, then find calm in the ancient royal pleasure gardens beside the water."],
                  ["06", "Wessagiriya & other sacred sites", "Discover the monastery caves, meditation platforms and quieter monuments that reveal monastic life beyond the main sites."],
                  ["07", "History, Buddhism & tradition", "Throughout the day, Gunarathna shares the history, Buddhist teachings, cultural significance and traditional practices that connect past to present."],
                ].map(([number, title, text]) => <div className="route-stop" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
              </div>
            </div>
          </div>
        </section>

        {/* ── Transport options ───────────────────────────── */}
        <section className="section section--cream">
          <div className="shell">
            <SectionHeading
              eyebrow="Choose your ride"
              title="Every journey has a way that suits you."
              intro="This tour can be done by bicycle, tuk tuk or car. If you have your own vehicle, that works too — the choice is yours."
            />
            <div className="transport-grid">
              <article className="transport-card">
                <span className="transport-card__icon">🚲</span>
                <h3>By Bicycle</h3>
                <p>Pedal at your own pace through shaded roads and ancient pathways. The most immersive way to feel the landscape.</p>
                <span className="soft-label">Popular with adventurous guests</span>
              </article>
              <article className="transport-card">
                <span className="transport-card__icon">🛺</span>
                <h3>By Tuk Tuk</h3>
                <p>A classic Sri Lankan experience. Comfortable, breezy and easy to hop on and off between monuments.</p>
                <span className="soft-label">Most popular choice</span>
              </article>
              <article className="transport-card">
                <span className="transport-card__icon">🚗</span>
                <h3>By Car</h3>
                <p>Air-conditioned and private. Ideal for families, older travellers or anyone who prefers a relaxed, comfortable ride.</p>
                <span className="soft-label">Great for families</span>
              </article>
              <article className="transport-card">
                <span className="transport-card__icon">🔑</span>
                <h3>Your Own Vehicle</h3>
                <p>If you have your own wheels — whether rented or personal — Gunarathna will guide you along the best route.</p>
                <span className="soft-label">Flexible &amp; convenient</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--sage" id="village-life">
          <div className="shell">
            <SectionHeading eyebrow="More ways to explore" title="Build a visit that feels like your own." />
            <div className="experience-list">
              {experienceCards.slice(2).concat([
                { number: "05", kicker: "Wander", title: "Village walk or cycle", description: "Follow quiet roads, notice everyday details and experience the landscape beyond the main sights.", href: "/contact", image: "/images/experiences/779b1bf74211ee25.avif", alt: "Guests walking a lakeside path near Anuradhapura" },
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
              <article className="info-card"><h3>Getting around</h3><p>The ancient city is spread out. Choose a bicycle, tuk tuk, car or bring your own vehicle — Gunarathna adapts the tour to whichever suits you best.</p></article>
              <article className="info-card"><h3>Comfort</h3><p>Bring water, sun protection and footwear that is easy to remove.</p></article>
            </div>
          </div>
        </section>
        <SimpleCta />
      </main>
    </>
  );
}
