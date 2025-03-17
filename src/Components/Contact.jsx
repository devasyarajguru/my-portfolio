import React from 'react';

const Contact = () => {
  return (
    <section className="contact section-padding" id="contact" data-scroll-index="6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h4>Contact us</h4>
              <h2>Get <span>in touch</span></h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="contact-info">
              <h3>For any Queries and Support</h3>
              <div className="contact-info-item">
                <i className="fa-solid fa-location-arrow"></i>
                <h4>Company Location</h4>
                <p>199 xyz Clermont, Florida</p>
              </div>

              <div className="contact-info-item">
                <i className="fa-solid fa-envelope"></i>
                <h4>Write to us at</h4>
                <p>Parker@gmail.com</p>
              </div>

              <div className="contact-info-item">
                <i className="fa-solid fa-location-arrow"></i>
                <h4>Call us on</h4>
                <p>+1 678 7890</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="contact-form">
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" placeholder="Your Email" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" placeholder="Your Phone" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" placeholder="Subject" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea name="" id="" placeholder="Your Message" className="form-control"></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <button className="btn-2">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;