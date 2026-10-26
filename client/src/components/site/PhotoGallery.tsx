import type { ClubPhoto } from "@/data/clubPhotos";

type PhotoGalleryProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  photos: readonly ClubPhoto[];
  tone?: "plain" | "muted";
  columns?: 2 | 3 | 4;
  mobileColumns?: 1 | 2;
};

export default function PhotoGallery({
  id,
  eyebrow,
  title,
  description,
  photos,
  tone = "plain",
  columns = 3,
  mobileColumns = 1,
}: PhotoGalleryProps) {
  return (
    <section
      id={id}
      className={`content-section photo-gallery-section${tone === "muted" ? " section-muted" : ""}`}
      aria-label={title}
    >
      <div className="content-inner">
        <header className="section-heading-simple">
          <div>
            <p className="section-kicker">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          {description ? <p className="section-intro">{description}</p> : null}
        </header>
        <div
          className="photo-gallery-grid"
          data-columns={columns}
          data-mobile-columns={mobileColumns}
          role="list"
          aria-label={title}
        >
          {photos.map(photo => (
            <figure
              className="photo-gallery-card"
              key={photo.id}
              role="listitem"
            >
              <picture className="photo-gallery-picture">
                <source srcSet={photo.avif} type="image/avif" />
                <source srcSet={photo.webp} type="image/webp" />
                <img
                  src={photo.webp}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
