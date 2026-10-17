import Image from "next/image";
import type { Photo } from "@/lib/site";

export function PhotoArea({
  images,
  title,
  emptyText,
}: {
  images: Photo[];
  title: string;
  emptyText: string;
}) {
  return (
    <section className="photo-area">
      <h2>{title}</h2>
      {images.length ? (
        <div className="photo-grid">
          {images.map((photo) => (
            <figure key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1000}
                height={750}
                className="approved-photo"
              />
              {photo.caption && <figcaption>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ) : (
        <div className="photo-placeholder">
          <span className="placeholder-corner" aria-hidden="true" />
          <p>{emptyText}</p>
          <span className="photo-placeholder-note">
            Space for photos from the program
          </span>
        </div>
      )}
    </section>
  );
}
