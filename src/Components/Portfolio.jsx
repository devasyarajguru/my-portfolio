import React from 'react';

const Portfolio = () => {
  return (
    <section className="img-gallery section-padding" id="portfolio" data-scroll-index="3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h4>Portfolio</h4>
              <h2>Our latest <span>work</span></h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 d-flex justify-content-center sortBtn flex-wrap">
            <a href="#" className="filter-btn active" data-filter="*">All</a>
            <a href="#" className="filter-btn" data-filter=".wordpress">Wordpress</a>
            <a href="#" className="filter-btn" data-filter=".photoshop">Photoshop</a>
            <a href="#" className="filter-btn" data-filter=".web-design">Web Design</a>
          </div>
        </div>

        <div className="row grid">
          <div className="col-lg-4 col-md-6 col-sm-6 wordpress">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src="https://i.postimg.cc/0ykh0n4C/portfolio-1.jpg" alt="portfolio image" />
              </div>
              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">Product Design</h3>
                  <ul>
                    <li><a href="https://i.postimg.cc/0ykh0n4C/portfolio-1.jpg" className="image-popup"><i className="fa-solid fa-plus"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-link"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat for other portfolio items */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;