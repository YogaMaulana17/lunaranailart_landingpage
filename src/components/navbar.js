export function Navbar() {
  return `
    <nav class="navbar navbar-expand-lg sticky-md-top custom-navbar ">
      <div class="container py-2">

        <!-- Brand -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="https://picsum.photos/40" alt="Lunara Logo" class="logo me-2" loading="lazy" />
          <span class="brand-text">Lunara</span>
        </a>

        <!-- Toggler -->
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation menu" >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu -->
        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li>
            <li class="nav-item ms-lg-3">
              <a href="#" class="btn btn-gold">Book Now</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  `;
}
