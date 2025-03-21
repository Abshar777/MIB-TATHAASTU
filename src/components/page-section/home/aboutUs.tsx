import React from "react";
import { aboutUsData, ourMission, ourVision } from "../../../constants/AboutUs";
import aboutVideo from "../../../assets/video/aboutus.mp4";
import aboutVideo2 from "../../../assets/video/aboutsus2.mp4";
import { Link } from "react-router-dom";

export const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-images">
              <div className="about-img-1">
                <figure className="image-anime reveal">
                  <img
                    className="h-full rounded-[20px] w-full"
                    src={"/images/about.webp"}
                    alt=""
                  />
                </figure>
              </div>
              <div className="about-img-2">
                <figure className="image-anime ">
                  <video
                    className="h-full rounded-[20px] w-full"
                    src={aboutVideo}
                    autoPlay
                    muted
                    loop
                  />
                </figure>
              </div>
              <div className="about-customer-box">
                <div className="about-customer-rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <div className="about-customer-content">
                  <p>
                    Customer Review <span className="counter">30,000</span>
                  </p>
                </div>
                <div className="customer-images">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="customer-img">
                      <figure className="image-anime reveal">
                        <img
                          src={`../public/images/customer-img-${num}.jpg`}
                          alt=""
                        />
                      </figure>
                    </div>
                  ))}
                  <div className="add-more customer-img">
                    <p>
                      <span className="counter">30</span>k
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="fadeInUp wow">{aboutUsData.title}</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  {aboutUsData.mainTitle}
                </h2>
                <p className="fadeInUp wow" data-wow-delay="0.2s">
                  {aboutUsData.description}
                </p>
              </div>
              <div className="about-vision-mission">
                <div
                  className="fadeInUp vision-mission-content wow"
                  data-wow-delay="0.4s"
                >
                  <h3>our vision</h3>
                  <p>{ourVision.description}</p>
                </div>
                <div
                  className="fadeInUp vision-mission-content wow"
                  data-wow-delay="0.4s"
                >
                  <h3>Our Mission</h3>
                  <ul>
                    {ourMission.map((mission, index) => (
                      <li key={index}>{mission}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="about-us-content-btn fadeInUp wow"
                data-wow-delay="0.6s"
              >
                <Link to="/about" className="btn-default">
                  learn more
                </Link>
                <Link to="/contact" className="btn-default btn-highlighted">
                  get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
