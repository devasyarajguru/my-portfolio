import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing section-padding" id="pricing" data-scroll-index="5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h4>Pricing</h4>
              <h2>Pricing <span>plan</span></h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-plan">
              <div className="pricing-header">
                <h3>Basic</h3>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="price">99</span>
                <span className="period">/monthly</span>
              </div>
              <div className="pricing-body">
                <ul>
                  <li><i className="fa-solid fa-check"></i>5GB Bandwidth</li>
                  <li><i className="fa-solid fa-check"></i>1 Free Update</li>
                  <li><i className="fa-solid fa-check"></i>High Regulation Printing</li>
                  <li><i className="fa-solid fa-check"></i>Branding</li>
                  <li><i className="fa-solid fa-check"></i>2 Free Maintenances</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#" className="btn btn-2">Get Started</a>
              </div>
            </div>
          </div>

          {/* Repeat for other pricing plans */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;