// src/components/Header.js
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup';
import 'isotope-layout/dist/isotope.pkgd.min.js';
import Parallax from 'parallax-js';

const Header = () => {
  useEffect(() => {
    // Initialize Parallax
    if ($("#parallax").length) {
      var scene = document.getElementById("parallax");
      new Parallax(scene);
    }

    // Initialize Owl Carousel
    $('.testimonial-slider').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });

    // Initialize Magnific Popup
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
    });

    // Initialize Isotope
    let $btns = $('.img-gallery .sortBtn .filter-btn');
    $btns.click(function (e) {
      $('.img-gallery .sortBtn .filter-btn').removeClass('active');
      e.target.classList.add('active');
      let selector = $(e.target).attr('data-filter');
      $('.img-gallery .grid').isotope({ filter: selector });
      return false;
    });

    // ScrollIt
    $.scrollIt({ topOffset: -50 });

    // Hide Mobile Navbar on Link Click
    $(".nav-link").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    // Navbar Shrink on Scroll
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 90) {
        $(".navbar").addClass("navbar-shrink");
      } else {
        $(".navbar").removeClass("navbar-shrink");
      }
    });

    // Skills Meter
    $(window).scroll(function () {
      var hT = $("#skill-bar-wrapper").offset().top;
      var hH = $("#skill-bar-wrapper").outerHeight();
      var wH = $(window).height();
      var wS = $(this).scrollTop();

      if (wS > (hT + hH - 1.4 * wH)) {
        jQuery('.skillbar-container').each(function () {
          jQuery(this).find('.skills').animate({
            width: jQuery(this).attr('data-percent')
          }, 5000);
        });
      }
    });
  }, []);

  return (
    <header className="header-area">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a href="#index.html" className="navbar-brand">coderMastery</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#home" className="nav-link active" data-scroll-nav="0">home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link" data-scroll-nav="1">about</a></li>
              <li className="nav-item"><a href="#services" className="nav-link" data-scroll-nav="2">services</a></li>
              <li className="nav-item"><a href="#portfolio" className="nav-link" data-scroll-nav="3">portfolio</a></li>
              <li className="nav-item"><a href="#testimonials" className="nav-link" data-scroll-nav="4">testimonials</a></li>
              <li className="nav-item"><a href="#pricing" className="nav-link" data-scroll-nav="5">pricing</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link" data-scroll-nav="6">contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="home" id="home" data-scroll-index="0">
        <div className="header-content d-flex align-items-center">
          <div id="parallax">
            {/* Parallax shapes */}
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="home-text">
                  <h4>HELLO, I'M</h4>
                  <h1>PETER PARKER</h1>
                  <p>A freelancer SpiderMan & Web Developer</p>
                  <div className="home-btn">
                    <a href="#" className="btn-1">View my Work</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home-img d-none d-lg-block">
                  <img src="https://i.postimg.cc/PqZ3bt0G/profile-pic.png" alt="Mark Parker" />
                </div>
              </div>
            </div>
          </div>
          <div className="header-social">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-social-icon">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
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