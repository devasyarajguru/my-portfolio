import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import "magnific-popup";

const Header = () => {
  // Navbar Toggle State
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-shrink");
      } else {
        navbar.classList.remove("navbar-shrink");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize Magnific Popup for Portfolio Items
  useEffect(() => {
    $(".popup-link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }, []);

  return (
    <header className="header-area">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            coderMastery
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link active" data-scroll-nav="0">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" data-scroll-nav="1">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link" data-scroll-nav="2">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link" data-scroll-nav="3">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className="nav-link" data-scroll-nav="4">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link" data-scroll-nav="5">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" data-scroll-nav="6">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="home" id="home" data-scroll-index="0">
        <div className="header-content d-flex align-items-center">
          <div id="parallax">
            {[...Array(10).keys()].map((i) => (
              <div key={i} className={`header-shape shape-${i + 1}`}>
                <img
                  src={`https://i.postimg.cc/${["J7bRR2cK/shape-1.png", "437TqLx6/shape-2.png", "63Cx58RT/shape-3.png", "bNyfpNvN/shape-4.png", "9FL5M54P/shape-5.png", "sgLkYY4v/shape-6.png"][i % 6]}`}
                  alt={`shape-${i + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="home-text">
                  <h4>HELLO, I'M</h4>
                  <h1>PETER PARKER</h1>
                  <p>A freelancer Spider-Man & Web Developer</p>
                  <div className="home-btn">
                    <a href="#portfolio" className="btn-1">
                      View my Work
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="home-img d-none d-lg-block">
                  <img src="https://i.postimg.cc/PqZ3bt0G/profile-pic.png" alt="Peter Parker" />
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="header-social">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-social-icon">
                    <ul>
                      <li>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
