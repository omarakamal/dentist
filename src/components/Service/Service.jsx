import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

/**
 * Service component
 * props:
 *  - index (number) -> used to alternate layout
 *  - title, description, image
 *  - ctaLabel, ctaHref
 */
export default function Service({
  index = 0,
  title,
  description,
  image,
  ctaLabel = "Book Service",
  ctaHref = "/contact",
  id
}) {
  const isReverse = index % 2 === 1;
  return (
    <article id={id} className={`service ${isReverse ? "service--reverse" : ""}`} aria-labelledby={`svc-${index}-title`}>
      <div className="service__media" role="img" aria-hidden="true">
        <img src={image} alt="" loading="lazy" />
      </div>

      <div className="service__content">
        <h2 id={`svc-${index}-title`}>{title}</h2>
        <p>{description}</p>

        <div className="service__actions">
          <Link to={ctaHref} className="main-button" aria-label={`${ctaLabel} for ${title}`}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
