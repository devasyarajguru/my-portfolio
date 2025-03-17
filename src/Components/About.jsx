import React from 'react';

const About = () => {
  return (
    <section className="about-area section-padding" id="about" data-scroll-index="1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h4>About</h4>
              <h2>Personal <span>Details</span></h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <h5 className="about-title">I'm <span>Peter Parker</span> and I'm a Web Designer</h5>
              <p className="details">
                I am a passionate web designer with a love for creating beautiful and functional websites. I enjoy working with HTML, CSS, and JavaScript to bring ideas to life and enhance user experiences. In my free time, I like to explore new design trends and work on personal projects that challenge my creativity.
              </p>

              <ul>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-calendar"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Date of Birth:</span> 9 November 1990</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Email:</span> parker@gmail.com</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Phone:</span> +1 456 7890</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-map-marker"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Location:</span> 3475, K1 Downtown, LA</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-university"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Degree:</span> <abbr title="Bachelor of Science in Computer Science">BSCS</abbr></p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="info-text">
                      <p><span>Website:</span> www.coderMastery.com</p>
                    </div>
                  </div>
                </li>
              </ul>

              <a href="#" className="hire-me">Hire me</a>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div id="skill-bar-wrapper">
              <div className="text-left">
                <h4>C++ <span style={{ float: 'right' }}>95%</span></h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills"></div>
                </div>

                <h4>Java <span style={{ float: 'right' }}>85%</span></h4>
                <div className="skillbar-container" data-percent="85%">
                  <div className="skills"></div>
                </div>

                <h4>HTML <span style={{ float: 'right' }}>75%</span></h4>
                <div className="skillbar-container" data-percent="75%">
                  <div className="skills"></div>
                </div>

                <h4>JQuery <span style={{ float: 'right' }}>80%</span></h4>
                <div className="skillbar-container" data-percent="80%">
                  <div className="skills"></div>
                </div>

                <h4>Javascript <span style={{ float: 'right' }}>85%</span></h4>
                <div className="skillbar-container" data-percent="85%">
                  <div className="skills"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;