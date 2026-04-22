export function Services() {
  return `
    <section class="services" id="services">
      <div class="container">

        <div class="section-header text-center" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>Choose the perfect nail treatment that suits your style</p>
        </div>

        <div class="row g-4">

          ${ServiceCard("💅", "Nail Art Custom", "Unique designs tailored to your personality and style")}
          ${ServiceCard("✨", "Press-On Nails", "Ready-to-wear nails with premium finish and durability")}
          ${ServiceCard("🧴", "Manicure & Pedicure", "Clean, treat, and beautify your nails professionally")}
          ${ServiceCard("🎁", "Package Deals", "Affordable packages for complete nail care experience")}

        </div>

      </div>
    </section>
  `;
}

function ServiceCard(icon, title, desc) {
  return `
    <div class="col-md-6 col-lg-3" data-aos="fade-up">
      <div class="service-card text-center">

        <div class="service-icon">${icon}</div>

        <h3>${title}</h3>
        <p>${desc}</p>

      </div>
    </div>
  `;
}
