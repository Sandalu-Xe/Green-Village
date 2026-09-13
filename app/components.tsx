import { galleryPhotos, guestPhotos, type GalleryPhoto } from "./gallery-data";
import { InteractiveGallery } from "./interactive-gallery";

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="page-hero__image-wrap">
          <img
            className={`page-hero__image ${image.includes("family-guest-welcome") ? "page-hero__image--people" : ""}`}
            src={image}
            alt={imageAlt}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export function PhotoGrid({ photos, priorityCount = 0 }: { photos: GalleryPhoto[]; priorityCount?: number }) {
  return <InteractiveGallery photos={photos} priorityCount={priorityCount} />;
}

export function Gallery({ limit = 9 }: { limit?: number }) {
  const preview = galleryPhotos.slice(0, limit);
  const visiblePhotos = limit
    ? [...preview, ...guestPhotos.filter((photo) => !preview.includes(photo))]
    : galleryPhotos;
  return (
    <>
      <PhotoGrid photos={visiblePhotos} priorityCount={2} />
      {limit ? <div className="gallery-more"><a className="button button--forest" href="/gallery">View all {galleryPhotos.length} photographs</a></div> : null}
    </>
  );
}

export function SimpleCta() {
  return (
    <section className="closing-cta">
      <div className="shell closing-cta__inner">
        <div><p className="eyebrow eyebrow--light">A personal journey</p><h2>Let&apos;s plan your time in Anuradhapura.</h2></div>
        <a className="button button--cream" href="/contact">Plan your visit</a>
      </div>
    </section>
  );
}
