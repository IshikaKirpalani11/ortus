import React, { useEffect } from "react";
import "./Page3.css";

function Page3() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="homepage">
      {/* NAV */}
      <nav className="navbar">
        <div className="nav-logo">ORTUS</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#buy">Buy</a></li>
          <li><a href="#rent">Rent</a></li>
          <li><a href="#sell">Sell with us</a></li>
          <li><a href="#communities">Communities</a></li>
          <li><a href="#lifestyle">Lifestyle</a></li>
          <li><a href="#about">About Ortus</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="communities-hero">
  <img
    src="/images/hero-page3.png"
    alt="Communities Background"
    className="communities-hero-image"
  />
  <div className="communities-hero-overlay">
    <div className="communities-hero-text">
      <p className="subtitle">COMMUNITIES</p>
      <h1>
        Locations of <em>Legacy</em>
      </h1>
    </div>
  </div>
</section>


      

      {/* Communities Section */}
      <section className="communities-section">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <a href="#">Home</a> &gt;
          <a href="#"> Property for sale in Dubai </a> &gt;
          <span> Property for sale in Palm Jumeirah </span>
        </div>

        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search Community" />
          <button type="submit">🔍</button>
        </div>

        {/* Grid */}
        <div className="communities-grid" role="list">
          <article className="community-card item1" role="listitem">
            <img src="/images/albarari.png" alt="Al Barari" />
            <div className="overlay"><span>Al Barari</span></div>
          </article>

          <article className="community-card item2" role="listitem">
            <img src="/images/jumeirah-golf.png" alt="Palm Jumeirah" />
            <div className="overlay"><span>Palm Jumeirah</span></div>
          </article>

          <article className="community-card item3" role="listitem">
            <img src="/images/districtone.png" alt="District One" />
            <div className="overlay"><span>District One</span></div>
          </article>

          <article className="community-card item4" role="listitem">
            <img src="/images/dubai-downtown.png" alt="Downtown Dubai" />
            <div className="overlay"><span>Downtown Dubai</span></div>
          </article>

          <article className="community-card item5" role="listitem">
            <img src="/images/dubai-hills.png" alt="Dubai Hills Estate" />
            <div className="overlay"><span>Dubai Hills Estate</span></div>
          </article>

          <article className="community-card item6" role="listitem">
            <img src="/images/jumeirah-golf.png" alt="Jumeirah Golf Estates" />
            <div className="overlay"><span>Jumeirah Golf Estates</span></div>
          </article>
        </div>
      </section>

  <footer className="footer-section">
  <div className="container">

    {/* Newsletter block (TOP) */}
    <div className="footer-newsletter">
      <div className="footer-logo">ORTUS</div>
      <h3 className="footer-news-title">Stay Updated on the Market</h3>
      <p className="footer-news-sub">
        Get exclusive real estate insights, market trends, and property updates straight to your inbox.
      </p>
      <form
        className="footer-form"
        onSubmit={(e) => {
          e.preventDefault();
          /* handle subscribe */
        }}
      >
        <input
          type="email"
          placeholder="jane@framer.com"
          aria-label="email"
          required
        />
        <button type="submit" aria-label="subscribe">Submit</button>
      </form>
    </div>

  {/* Footer bottom grid (with inline SVG icons) */}
<div className="footer-bottom-grid">
  {/* Contact Information */}
  <div className="footer-col contact-col">
    <h4>Contact Information</h4>

    <ul className="contact-info">
      <li>
        {/* Phone icon */}
        <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.21.36 2.41.7 3.56a2 2 0 0 1-.45 2.11L9 11a16 16 0 0 0 7 7l1.61-1.61a2 2 0 0 1 2.11-.45c1.15.34 2.35.58 3.56.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <span>971 55 555 5555</span>
      </li>

      <li>
        {/* Email icon */}
        <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M22 7l-10 6L2 7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>hello@ortus.com</span>
      </li>

      <li>
        {/* Location / Map pin */}
        <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
        </svg>
        <span>DUBAI, UAE</span>
      </li>
    </ul>

    <div className="social-icons" aria-label="Social links">
      <a href="#" className="social-link" aria-label="Instagram">
        <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
        </svg>
      </a>

      <a href="#" className="social-link" aria-label="Facebook">
        <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M15 3h3v4h-3v2h3v4h-3v8h-4v-8H8v-4h3V7a3 3 0 0 1 3-3z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      </a>

      <a href="#" className="social-link" aria-label="YouTube">
        <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <rect x="2" y="6" width="20" height="12" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <polygon points="10,9 16,12 10,15" fill="currentColor"/>
        </svg>
      </a>

      <a href="#" className="social-link" aria-label="Email">
        <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M22 7l-10 6L2 7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </div>

  {/* Browse homes */}
  <div className="footer-col">
    <h4>Browse homes in</h4>
    <h5>Lifestyles</h5>
    <ul>
      <li><a href="#">Water Front</a></li>
      <li><a href="#">Beach Front</a></li>
      <li><a href="#">Private Living</a></li>
      <li><a href="#">Resort Style</a></li>
      <li><a href="#">Modern</a></li>
      <li><a href="#">Green Living</a></li>
      <li><a href="#">Golf Course Living</a></li>
      <li><a href="#">View All</a></li>
    </ul>
  </div>

  {/* Neighbourhood guides */}
  <div className="footer-col">
    <h4>Neighbourhood guides</h4>
    <ul>
      <li><a href="#">All Locations</a></li>
      <li><a href="#">Al Barari</a></li>
      <li><a href="#">District One</a></li>
      <li><a href="#">Downtown Dubai</a></li>
      <li><a href="#">Dubai Hills</a></li>
      <li><a href="#">Emirates Hills</a></li>
      <li><a href="#">Jumeirah Bay Island</a></li>
      <li><a href="#">Jumeirah Golf Estates</a></li>
    </ul>
  </div>

  {/* Properties */}
  <div className="footer-col">
    <h4>Properties</h4>
    <ul>
      <li><a href="#">Villas</a></li>
      <li><a href="#">Penthouses</a></li>
      <li><a href="#">Luxury Apartments</a></li>
      <li><a href="#">Duplex</a></li>
      <li><a href="#">Signature Properties</a></li>
      <li><a href="#">View All</a></li>
    </ul>
  </div>

  {/* Services */}
  <div className="footer-col">
    <h4>Services</h4>
    <ul>
      <li><a href="#">Buy</a></li>
      <li><a href="#">Rent</a></li>
      <li><a href="#">Sell with us</a></li>
      <li><a href="#">Off-Plan Projects</a></li>
    </ul>
  </div>

  {/* Company */}
  <div className="footer-col">
    <h4>Company</h4>
    <ul>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Advisory</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  </div>
</div>


  </div>
</footer>

  </div>


  );
}

export default Page3;
