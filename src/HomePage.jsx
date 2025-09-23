import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ import navigate
import "./HomePage.css";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [frame, setFrame] = useState(1);
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();  // ✅ hook for navigation

  // Play through 562 images ONCE (001 → 562)
  useEffect(() => {
    const totalFrames = 562;
    const interval = setInterval(() => {
      setFrame((prev) => {
        if (prev < totalFrames) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setFinished(true);
          return prev;
        }
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Animate-on-scroll observer
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
      {/* IMAGE SEQUENCE "VIDEO" */}
      <div className={`image-sequence ${finished ? "fade-out" : ""}`}>
        <img
          src={`/images/CLOUD_3 (1)${String(frame).padStart(3, "0")}.png`}
          alt="sequence"
        />
      </div>

      {/* NAV */}
      <nav className="navbar">
        <div className="nav-logo">ORTUS</div>

      <ul className="nav-links">
  <li><a href="#home">Home</a></li>
  <li><button onClick={() => navigate("/page1?type=buy")} className="nav-btn">Buy</button></li>
  <li><button onClick={() => navigate("/page1?type=rent")} className="nav-btn">Rent</button></li>

  {/* Updated Projects button */}
  <li>
    <button
      className="nav-btn"
      onClick={() => {
        const el = document.getElementById("hero-banner");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Projects
    </button>
  </li>

  <li><a href="#sell">Sell with us</a></li>
  <li>
  <button
    className="nav-btn"
    onClick={() => navigate("/page3")}
  >
    Communities
  </button>
</li>

  <li>
  <button
    className="nav-btn"
    onClick={() => {
      const el = document.getElementById("investment");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Lifestyle
  </button>
</li>

  <li>
  <button
    className="nav-btn"
    onClick={() => {
      const el = document.getElementById("bg-highlight");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
  >
    About Ortus
  </button>
</li>

  <li><a href="#contact">Contact</a></li>
</ul>

      </nav>

      {/* HERO */}
      <section className="hero">
        <img className="hero-image" src="/images/hero.jpg" alt="hero" />
        <div className="hero-overlay">
          {/* Tabs (Buy / Rent / Off-plan) */}
          <div className="hero-tabs">
            <span className="tab active" onClick={() => navigate("/page1?type=buy")}>Buy</span>
            <span className="tab" onClick={() => navigate("/page1?type=rent")}>Rent</span>
            <span className="tab">Off-plan</span>
          </div>

          {/* Search Box */}
          <div className="hero-search">
            <div className="hero-search-left">
              <label className="search-label">Location</label>
              <input placeholder="Area," />
            </div>
            <div className="hero-search-filters">
              <span>Filters</span>
            </div>
            <button className="hero-search-btn">
              <span className="search-icon">🔍</span> 1,049 results
            </button>
          </div>
        </div>
      </section>
    

{/* GREY TRANSITION SCREEN */}
<section className="transition-screen">
  <div id="intro" className="hero-section">
    <div className="hero-inner animate-on-scroll">
      <h1
        className="hero-title"
        aria-label="Your bespoke living to disconnect and reconnect"
      >
        {/* First line */}
        <div className="title-line line-1">
          <span className="your">Your</span>
          <span className="bespoke">bespoke living</span>
        </div>

        {/* Second line */}
        <div className="title-line line-2">to disconnect</div>

        {/* Third line */}
        <div className="title-line line-3">
          <span className="amp">&amp;</span>
          <span className="reconnect">reconnect</span>
        </div>
      </h1>

      <p className="hero-sub">
        ORTUS is a discreet real estate investment firm serving ultra-high-net-worth
        individuals.
        <br />
        <br />
        We operate like a private bank for real estate — each client is carefully
        vetted, each opportunity is curated, and each transaction is managed with
        ultra precision. No mass listings. No open houses. Just intelligent
        acquisitions for those who live in rare air.
      </p>

      <a href="#contact" className="connect-link">
        CONTACT US
      </a>
    </div>
  </div>
</section>

{/* VIDEO PREVIEW */}
<section className="video-section section transition-screen">
  <div className="video-preview animate-on-scroll">
    <img src="/images/project-video.png" alt="project preview" />
    <button className="play-btn" aria-label="play preview">▶</button>
  </div>
</section>







<section id="listings" className="listings section">
      <div className="container">
        <h3 className="section-heading">
          Curated <em>listings</em>
        </h3>

        <div className="listings-row">
          <div className="listings-left animate-on-scroll">
  <p className="small-meta">Our newest residences</p>
  <h4>Explore curated properties</h4>
  <p className="muted">
    At the very top, life takes on a different rhythm. Wrapped in glass
    and kissed by the sky, ORTUS penthouses offer panoramic views,
    expansive terraces, and bespoke interiors—a rarefied world above
    it all, designed for those who dwell in distinction.
  </p>
 <a
  href="#"
  className="view-link"
  onClick={(e) => {
    e.preventDefault();
    navigate("/page1");       // navigate to Page1.jsx
    window.scrollTo(0, 0);    // scroll to top
  }}
>
  VIEW LISTINGS <span>➜</span>
</a>

</div>


         <div className="listings-cards">
  <article
    className="card animate-on-scroll"
    onClick={() => {
      navigate("/page4");
      window.scrollTo(0, 0);
    }}
  >
    <img src="/images/apartment1.png" alt="apartment" />
    <div className="card-body">
      <h5>Lorem Ipsum is simply dummy</h5>
      <p className="price">AED 482,500,000</p>
      <p className="meta">5 ▪ 7 ▪ 43,830 SQ.FT.</p>
    </div>
  </article>

  <article
    className="card animate-on-scroll"
    onClick={() => {
      navigate("/page4");
      window.scrollTo(0, 0);
    }}
  >
    <img src="/images/villa.png" alt="villa" />
    <div className="card-body">
      <h5>Lorem Ipsum is simply dummy</h5>
      <p className="price">AED 482,500,000</p>
      <p className="meta">5 ▪ 7 ▪ 43,830 SQ.FT.</p>
    </div>
  </article>

  <article
    className="card animate-on-scroll"
    onClick={() => {
      navigate("/page4");
      window.scrollTo(0, 0);
    }}
  >
    <img src="/images/duplex.png" alt="duplex" />
    <div className="card-body">
      <h5>Lorem Ipsum is simply dummy</h5>
      <p className="price">AED 482,500,000</p>
      <p className="meta">5 ▪ 7 ▪ 43,830 SQ.FT.</p>
    </div>
  </article>

  <article
    className="card animate-on-scroll"
    onClick={() => {
      navigate("/page4");
      window.scrollTo(0, 0);
    }}
  >
    <img src="/images/gallery1.png" alt="interior" />
    <div className="card-body">
      <h5>Lorem Ipsum is simply dummy</h5>
      <p className="price">AED 482,500,000</p>
      <p className="meta">5 ▪ 7 ▪ 43,830 SQ.FT.</p>
    </div>
  </article>
</div>

        </div>
      </div>
    </section>

{/* SANCTUARY / TALL STACKED IMAGES */}
<section id="lifestyle" className="sanctuary section">
  <div className="container">

   
 
    {/* Section Heading */}
    <div className="sanctuary-heading">
      <span className="line-1">
        The <span className="serif-italic">sanctuary</span> of
      </span>
      <span className="line-2">your own</span>
      <span className="line-3">private retreat</span>
    </div>

    <div className="sanctuary-grid">

      {/* Row 1 - Penthouse */}
      <div className="sanctuary-row">
        <div className="sanctuary-text">
          <h6 className="sanctuary-label">THE PENTHOUSE</h6>
          <p className="muted">
            At the very top, life takes on a different rhythm. Wrapped in glass and kissed by the sky, ORTUS penthouses offer panoramic views, expansive terraces, and bespoke interiors – a rarefied world above it all, designed for those who dwell in distinction.
          </p>
        </div>
        <div className="sanctuary-image animate-on-scroll">
          <img src="/images/lifestyle1.png" alt="Penthouse" />
        </div>
      </div>

      {/* Row 2 - Villa */}
      <div className="sanctuary-row">
        <div className="sanctuary-text">
          <h6 className="sanctuary-label">THE VILLA</h6>
          <p className="muted">
            A world of your own – surrounded by space, serenity, and stature. Villa living at ORTUS is where architecture meets privacy, and every corner is a celebration of timeless luxury and effortless elegance. A true sanctuary crafted for those who lead life on their own terms.
          </p>
        </div>
        <div className="sanctuary-image animate-on-scroll">
          <img src="/images/lifestyle3.png" alt="Villa" />
        </div>
      </div>

      {/* Row 3 - Duplex */}
      <div className="sanctuary-row">
        <div className="sanctuary-text">
          <h6 className="sanctuary-label">THE DUPLEX</h6>
          <p className="muted">
            Two levels of refinement, one seamless lifestyle. With grand ceilings, flowing staircases, and thoughtfully layered spaces, our duplex residences offer the feel of a private home with the convenience of elevated living – perfect for those who desire space, style, and sophistication in equal measure.
          </p>
        </div>
        <div className="sanctuary-image animate-on-scroll">
          <img src="/images/lifestyle2.png" alt="Duplex" />
        </div>
      </div>

    </div>
  </div>
</section>

{/* HERO BANNER SECTION */}
<section id="hero-banner" className="hero-banner">
  {/* Banner Image */}
  <img src="/images/project-intro.png" alt="hero banner" className="hero-banner-img" />

  {/* Overlay + Text */}
  <div className="hero-overlay">
    <div className="hero-text animate-on-scroll">
      <h2>
        Explore your <em>personal residence</em><br />
        at <em>global brands</em>
      </h2>
     <p className="hero-name">
  PROJECT NAME{" "}
  <span
    className="arrow"
    onClick={() => {
      navigate("/page2");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    style={{ cursor: "pointer" }}
  >
    ➜
  </span>
</p>

    </div>
  </div>
</section>




{/* INVESTMENT / RESIDENCES */}
<section id="investment" className="investment section">
  <div className="container investment-inner">

    {/* LEFT COLUMN */}
    <div className="investment-left">
      {/* Heading */}
      <h3 className="section-heading">
        Residences for <em>refined lifestyle</em>
      </h3>

      {/* Intro paragraph (blends into background now) */}
      <p className="intro">
        At ORTUS, we go beyond listings — we curate lifestyles. From serene waterfront sanctuaries
        to golf-side retreats and sky-high penthouses, each residence is handpicked to match the
        aspirations of those who seek more. Every property we present reflects elevated living,
        offering not just a home, but a way of life defined by elegance, privacy, and distinction.
      </p>

      {/* Features + Resort block aligned horizontally */}
      <div className="features-resort">
        <div className="features">
          <p>
            Waterfront, Private, Golf Course,<br />
            Modern, Resort, Green,<br />
            Beachfront.
          </p>
        </div>

        <div className="resort-block">
 <h4>
  <em>Resort</em> living
</h4>
<p>
  Every day, an escape. Every corner, a retreat. <br />
  Discover serenity made permanent.
</p>
<a href="#" className="view-link">
  VIEW LISTINGS <span className="dot">→</span>
</a>

</div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="investment-image">
      <img src="/images/residence.png" alt="residence" />
    </div>
  </div>
</section>



{/* IMAGE BACKGROUND SECTION */}
<section id="bg-highlight" className="bg-section">
  <img src="/images/founder.png" alt="Background" className="bg-img" />

  <div className="bg-overlay">
    {/* Beige Box on Right */}
    <div className="bg-box">
      <p>
  here to deliver the finest luxury real estate experiences, redefining elegance,
  exclusivity, and investment value for discerning clientele in Dubai and beyond.<br /><br />
  here to deliver the finest luxury real estate experiences, redefining elegance,
  exclusivity, and investment value for discerning clientele in Dubai and beyond.<br /><br />
  here to deliver the finest luxury real estate experiences, redefining elegance,
  exclusivity, and investment value for discerning clientele in Dubai and beyond.
</p>
      <h5>FOUNDER | DEEPAK BHOJWANI</h5>
    </div>
  </div>
</section>

{/* INVESTMENT ADVISORY SECTION (replace existing advisory block) */}
<section id="advisory" className="advisory-section">
  <div className="advisory-inner container">
    {/* LEFT: Heading + short paragraphs */}
    <div className="advisory-text">
      <h2>
        Private Real Estate<br />
        <em>Investment Advisory</em>
      </h2>

      <h4 className="micro">PRESTIGE WITHOUT NOISE</h4>

      <p className="lead">
        At Ortus, we offer a level of service beyond traditional brokerages —
        real estate advisory with the care and discretion of private banking.
      </p>

      <p className="body">
        Each client is guided by a dedicated investment advisor, offering insight that
        extends beyond property to long-term value, portfolio growth, and legacy planning.
        With access to private, off-market opportunities and a deeply personalised approach,
        we curate not just homes, but lasting investments in lifestyle and wealth.
      </p>
    </div>

    {/* RIGHT: Image */}
    <div className="advisory-image">
      <img src="/images/advisory.png" alt="Private jet interior" />
    </div>
  </div>

  {/* CENTERED TAGLINE */}
  <div className="advisory-tagline">
    <p>
      A World Of Discreet Luxury, <em>Curated Investments</em>, & <em>White-Glove Service</em>.
    </p>
  </div>

  {/* BOTTOM: small heading + paragraph */}
  <div className="advisory-bottom container">
    <h4 className="micro center">REAL ESTATE FOR THE RARE FEW</h4>
    <p className="body center narrow">
      In a world saturated with media and mass visibility, ORTUS takes a different route.
      Our brand presence is intentionally understated—built through trust, referrals, and performance.
      We are known not for volume, but for impact. We exist for the rare few who move silently but powerfully.
    </p>
  </div>
</section>






     {/* ADVISORY IMAGE GRID SECTION */}
<section id="advisory-grid" className="advisory-grid-section">
  <div className="container">
    {/* Heading */}
    <h2 className="advisory-grid-title">Advisory</h2>

    <div className="advisory-grid">
      {/* Left large image with caption */}
      <div className="advisory-main">
        <img src="/images/advisor1.png" alt="Advisory Main" />
        <p className="caption">
          Lorem Ipsum is simply dummy text of the printing
        </p>
      </div>

      {/* Right two stacked images */}
      <div className="advisory-side">
        <img src="/images/advisor2.png" alt="Advisory Small 1" />
        <img src="/images/advisor3.png" alt="Advisory Small 2" />
      </div>
    </div>
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
};

export default HomePage;
