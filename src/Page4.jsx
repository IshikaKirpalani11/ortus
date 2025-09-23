import React, { useEffect } from "react";
import "./Page4.css";

function Page4() {
  useEffect(() => {
    const els = document.querySelectorAll(".page4-animate-on-scroll");
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
    <div className="page4-wrapper">
      {/* NAV */}
      <nav className="page4-navbar">
        <div className="page4-nav-logo">ORTUS</div>

        <ul className="page4-nav-links">
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

      {/* HERO */}
      <section className="page4-hero">
        <img
          src="/images/page2.png"    // update to your actual image path
          alt="Page 4 Background"
          className="page4-hero-image"
        />

        {/* --- Overlay Text Block --- */}
        <div className="page4-hero-overlay">
          <p className="page4-building">BUILDING NAME</p>
          <h1 className="page4-title">5 Bed Apartment for Rent</h1>
          <span className="page4-price">AED 10,000,000</span>
        </div>
      </section>


<section className="project-details">
  <div className="container">
    {/* Breadcrumb */}
   {/* Page Trail */}
<div className="page-trail">
  <a href="#">Home</a> › 
  <a href="#">Property for sale in Dubai</a> › 
  <a href="#">Property for sale in Palm Jumeirah</a>
</div>


    {/* Project Title */}
    <div className="project-header">
      <h2>Project Name by developer Name</h2>
      <p>Al Marjan Islands | Handover: 2027</p>
    </div>

    {/* Two-column Layout */}
    <div className="profile-section">
      {/* Left Bottom Text */}
      <div className="profile-left">
        <div className="bottom-left-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <p>
            Since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>

      {/* Right Bottom */}
      <div className="profile-right">
        <div className="profile-card">
          <div className="profile-image"></div>
          <h3>Person Name</h3>
          <p className="designation">Executive Partner</p>
          <div className="contact-buttons">
            <button className="whatsapp">Whatsapp</button>
            <button className="call">Call us</button>
          </div>
        </div>

        
      </div>
    </div>

    {/* Bottom icons */}
    <div className="bottom-icons">
      <div className="icon-item">
        <span>📄</span>
        <p>Brochure</p>
      </div>
      <div className="icon-item">
        <span>🛏️</span>
        <p>Factsheet</p>
      </div>
      <div className="icon-item">
        <span>📐</span>
        <p>Floor Plans</p>
      </div>
    </div>
  </div>
</section>

<section className="project-gallery">
  <div className="container">
    
    <div className="gallery-wrapper">
      <div className="gallery-scroll">
        <img src="/images/image1.png" alt="Project 1" />
        <img src="/images/palm-jumeahir.png" alt="Project 2" />
         <img src="/images/image1.png" alt="Project 1" />
        <img src="/images/palm-jumeahir.png" alt="Project 2" />
        
        {/* Add more images as needed */}
      </div>
    </div>
  </div>
</section>


<section className="project-text">
  <div className="container">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
</section>

<section className="project-text">
  <div className="container">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Curabitur sit amet eros blandit, ultrices sapien at, tincidunt orci. 
      Praesent feugiat ex vitae velit bibendum, nec placerat mauris mattis.
    </p>
  </div>
</section>
<section className="amenities-section">
  <div className="container">
    <h3>Amenities</h3>
    <div className="amenities-row">
      <div className="amenity-item">
        <span>🏊‍♂️</span>
        <p>Swimming Pool</p>
      </div>
      <div className="amenity-item">
        <span>🏋️‍♂️</span>
        <p>Gym</p>
      </div>
      <div className="amenity-item">
        <span>🌳</span>
        <p>Garden</p>
      </div>
      <div className="amenity-item">
        <span>🅿️</span>
        <p>Parking</p>
      </div>
      <div className="amenity-item">
        <span>🎯</span>
        <p>Playground</p>
      </div>
      <div className="amenity-item">
        <span>🛡️</span>
        <p>Security</p>
      </div>
    </div>
  </div>
</section>


<section className="similar-properties">
  <div className="container">
    <div className="similar-row">
      {/* Heading on left */}
      <div className="similar-heading">
        <h3>Similar <em>Properties</em></h3>
      </div>
      
      {/* Scrollable images on right */}
      <div className="similar-gallery-wrapper">
        <div className="similar-gallery-scroll">
          <img src="/images/property1.png" alt="Property 1" />
          <img src="/images/property2.png" alt="Property 2" />
          <img src="/images/property1.png" alt="Property 3" />
          <img src="/images/property2.png" alt="Property 4" />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  </div>
</section>


<section className="contact-section">
  <div className="container contact-row">
    {/* Left Side Text */}
    <div className="contact-left">
      <h3>
        Get in <em>touch</em>
      </h3>
      <p>
        Fill out the form below and an Ortus team member will get in touch with
        you within 24 hours.
      </p>
    </div>

    {/* Right Side Form */}
    <div className="contact-right">
      <h4>Submit your Interest</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s
      </p>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First name*" required />
          <input type="text" placeholder="Last name*" required />
        </div>

        <input type="email" placeholder="E-mail address*" required />
        <input type="tel" placeholder="+971" required />
        <textarea placeholder="How can we help?*" required></textarea>

        <button type="submit" className="btn-submit">
          Send enquiry
        </button>
      </form>
    </div>
  </div>
</section>


<section className="page1-footer">
 
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

</section>



    </div>
  );
}

export default Page4;
