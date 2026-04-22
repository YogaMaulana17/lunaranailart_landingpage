const imgOverlay = new URL("../assets/img/image1.webp", import.meta.url).href;
export function Hero() {
  return `
    <section class="hero-hybrid">
      <div class="overlay"></div>

      <div class="container">
        <div class="row align-items-center">

          <!-- TEXT -->
          <div class="col-lg-6 hero-text" data-aos="fade-right">
            <h1>Elegant Nails for Your <span class="highlight">Perfect Look</span></h1>
            <p>
              Premium nail art, manicure & press-on nails 
              designed to elevate your style and confidence.
            </p>

            <div class="hero-buttons">
              <a href="#" class="btn btn-gold">Book via WhatsApp</a>
              <a href="#" class="btn btn-outline-dark ms-2">View Gallery</a>
            </div>
          </div>

          <!-- IMAGE CARD -->
          <div class="col-lg-6 hero-image" data-aos="fade-left">
            <div class="image-card">
              <img 
                src="${imgOverlay}"
                alt="nail art" loading="lazy"
                fetchpriority="high"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
