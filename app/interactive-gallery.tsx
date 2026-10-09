"use client";

import { useId, useRef, useState, type CSSProperties } from "react";
import type { GalleryPhoto } from "./gallery-data";

type GalleryStyle = CSSProperties & {
  "--stack-x": string;
  "--stack-y": string;
  "--stack-rotate": string;
  "--stack-z": number;
};

const stackPositions = [
  ["0px", "0px", "0deg"],
  ["-28px", "9px", "-4deg"],
  ["30px", "13px", "4.5deg"],
  ["-15px", "20px", "-2deg"],
  ["18px", "24px", "2.5deg"],
  ["-6px", "29px", "-1deg"],
];

export function InteractiveGallery({ photos, priorityCount = 0 }: { photos: GalleryPhoto[]; priorityCount?: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const visiblePhotos = isOpen ? photos : photos.slice(0, 6);

  const galleryId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={`gallery-stage ${isOpen ? "is-open" : "is-stacked"}`}>
      <div className="gallery-grid" id={galleryId}>
        {visiblePhotos.map((image, index) => {
          const stack = stackPositions[index % stackPositions.length];
          const style: GalleryStyle = {
            "--stack-x": stack[0],
            "--stack-y": stack[1],
            "--stack-rotate": stack[2],
            "--stack-z": photos.length - index,
          };

          return (
            <figure
              className={`gallery-item ${index % 9 === 0 || index % 9 === 5 ? "gallery-item--wide" : ""} ${index % 11 === 3 ? "gallery-item--tall" : ""}`}
              key={image.src}
              style={style}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < priorityCount ? "eager" : "lazy"}
                decoding="async"
              />
              <figcaption><span>{image.category}</span>{image.caption}</figcaption>
            </figure>
          );
        })}
        {!isOpen && <button
          className="gallery-stack-open"
          type="button"
          aria-label={`Release ${photos.length} photographs into the gallery`}
          aria-controls={galleryId}
          aria-expanded={false}
          onClick={() => { setIsOpen(true); toggleRef.current?.focus({ preventScroll: true }); }}
        />}
      </div>
      <button
        ref={toggleRef}
        className="gallery-stack-toggle"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-controls={galleryId}
        aria-expanded={isOpen}
      >
        <span>{isOpen ? "Gather photos" : "Release the gallery"}</span>
        <strong>{photos.length}</strong>
        <span aria-hidden="true">{isOpen ? "↑" : "↓"}</span>
      </button>
    </div>
  );
}
