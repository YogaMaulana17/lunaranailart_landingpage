export function Pricing() {
  return `
    <section class="pricing">
      <div class="container">

        <div class="section-header text-center" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>Choose the package that fits your needs</p>
        </div>

        <div class="row g-4 justify-content-center">

          ${Card("Basic Nail Art Package", "150K", [
            "Simple Nail Art",
            "Basic Manicure",
            "Standard Design",
            "Duration 1-2 Hours",
          ])}

          ${Card(
            "Premium Nail Art Package",
            "300K",
            [
              "Custom Nail Art",
              "Manicure + Pedicure",
              "Premium Design",
              "Long Lasting Finish",
            ],
            true,
          )}

          ${Card("Exclusive Nail Art Package", "500K", [
            "Full Custom Design",
            "All Treatments Included",
            "Luxury Experience",
            "Free Consultation",
          ])}

        </div>

      </div>
    </section>
  `;
}

function Card(title, price, features, highlight = false) {
  return `
    <div class="col-md-6 col-lg-4">
      <div class="price-card ${highlight ? "active" : ""}">

        ${highlight ? `<div class="badge">Best Choice</div>` : ""}

        <h3>${title}</h3>
        <h2>Rp ${price}</h2>

        <ul>
          ${features.map((f) => `<li>${f}</li>`).join("")}
        </ul>

        <a href="#" class="btn btn-gold w-100">Book Now</a>

      </div>
    </div>
  `;
}
