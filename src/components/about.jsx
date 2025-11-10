import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>

              <p>
                At <strong>OPTIMAX SOLUTIONS</strong>, we help businesses grow by providing
                high-quality <b>SEO</b>, <b>Web Development</b>, and <b>Estimation services</b>. <br />
                With a client-focused approach and international experience, our goal is to
                deliver reliable, data-driven, and innovative solutions. <br />
                We believe in building long-term partnerships by combining creativity,
                technology, and strategy to turn ideas into success.
              </p>

              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Global Expertise in SEO, Web & Estimation</li>
                    <li>Data-driven strategies with measurable results</li>
                    <li>Reliable and transparent process</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Customized solutions for your business needs</li>
                    <li>International client success stories</li>
                    <li>Long-term growth and partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
