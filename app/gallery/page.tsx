import type { Metadata } from "next";
import { Footer, Header, PageHero, PhotoGrid, SectionHeading, SimpleCta } from "../components";
import { stayPhotos, tourPhotos } from "../gallery-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs from Green Village homestay and Gunarathna's Anuradhapura tours.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="The Green Village gallery"
          title="A true picture of your time with us."
          intro="Step inside the homestay, meet your local guide and explore the sacred landscapes of Anuradhapura through photographs from the real stay and tour."
          image="/images/experiences/779b1bf74211ee25.avif"
          imageAlt="Guests walking beside an ancient reservoir in Anuradhapura"
        />

        <section className="section gallery-section gallery-section--stay">
          <div className="shell">
            <div className="gallery-heading-row">
              <SectionHeading
                eyebrow="The homestay · 5 photographs"
                title="Your quiet village base."
                intro="The guest room, veranda, garden home and nearby nature at Green Village."
              />
              <a className="text-link" href="https://www.airbnb.com/rooms/13886001" target="_blank" rel="noreferrer">View the stay on Airbnb ↗</a>
            </div>
            <PhotoGrid photos={stayPhotos} priorityCount={2} />
          </div>
        </section>

        <section className="section section--cream gallery-section">
          <div className="shell">
            <div className="gallery-heading-row">
              <SectionHeading
                eyebrow="Tours & experiences · 26 photographs"
                title="Ancient Anuradhapura, personally shared."
                intro="Sacred monuments, rock temples, reservoirs, village landscapes and moments with Gunarathna's guests."
              />
              <a className="text-link" href="https://www.airbnb.co.uk/experiences/471573" target="_blank" rel="noreferrer">View the tour on Airbnb ↗</a>
            </div>
            <PhotoGrid photos={tourPhotos} />
          </div>
        </section>
        <SimpleCta />
      </main>
      <Footer />
    </>
  );
}
