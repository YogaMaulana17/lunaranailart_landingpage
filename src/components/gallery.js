const images = [
  new URL("../assets/img/heroBg.webp", import.meta.url).href,
  new URL("../assets/img/image1.webp", import.meta.url).href,
  new URL("../assets/img/image2.webp", import.meta.url).href,
  new URL("../assets/img/image3.webp", import.meta.url).href,
  new URL("../assets/img/image1.webp", import.meta.url).href,
  new URL("../assets/img/image2.webp", import.meta.url).href,
];
export function Gallery() {
  return `
    <section class="gallery" id="gallery">
      <div class="container">

        <div class="section-header text-center">
          <h2>Our Work</h2>
          <p>Explore our latest nail art creations</p>
        </div>

        <div class="row g-3">
          ${images
            .map(
              (img) => `
            <div class="col-6 col-lg-4">
              <div class="gallery-item" data-src="${img}">
                <img src="${img}" alt="Elegant nail art design" class="img-fluid rounded" loading="lazy"/>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}
