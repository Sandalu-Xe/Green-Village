"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";
import type { GalleryPhoto } from "./gallery-data";

type GalleryStyle = CSSProperties & {
  "--stack-x": string;
  "--stack-y": string;
  "--stack-rotate": string;
  "--stack-z": number;
  "--stack-order": number;
  "--drizzle-index": number;
  "--drizzle-x": string;
  "--drizzle-rotate": string;
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

  const releaseGallery = () => setIsOpen(true);
  const handleStackKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isOpen || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    releaseGallery();
  };

  return (
    <div className={`gallery-stage ${isOpen ? "is-open" : "is-stacked"}`}>
      <div
        className="gallery-grid"
        onClick={isOpen ? undefined : releaseGallery}
        onKeyDown={handleStackKey}
        role={isOpen ? undefined : "button"}
        tabIndex={isOpen ? undefined : 0}
        aria-label={isOpen ? undefined : `Release ${photos.length} photographs into the gallery`}
      >
        {visiblePhotos.map((image, index) => {
          const stack = stackPositions[index % stackPositions.length];
          const style: GalleryStyle = {
            "--stack-x": stack[0],
            "--stack-y": stack[1],
            "--stack-rotate": stack[2],
            "--stack-z": photos.length - index,
            "--stack-order": index,
            "--drizzle-index": index,
            "--drizzle-x": `${((index % 5) - 2) * 28}px`,
            "--drizzle-rotate": `${((index % 7) - 3) * 1.4}deg`,
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
      </div>
      <button
        className="gallery-stack-toggle"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <span>{isOpen ? "Gather photos" : "Release the gallery"}</span>
        <strong>{photos.length}</strong>
        <span aria-hidden="true">{isOpen ? "↑" : "↓"}</span>
      </button>
    </div>
  );
}
