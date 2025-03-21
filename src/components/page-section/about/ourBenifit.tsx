import React from "react";
import { Link } from "react-router-dom";

const OurBenefits: React.FC = () => {
  return (
    <div className="our-benefit">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-benefit-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Our benefits</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Transformative Care for Better Living
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Experience personalized mental health support that fosters
                  growth, and lasting well-being, empowering you to lead a more
                  fulfilling life.
                </p>
              </div>
              <div className="our-benefit-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link to="/contact" className="btn-default">
                  get started
                </Link>
              </div>
              <div className="our-benefit-img">
                <figure className="image-anime reveal">
                  <img src="images/our-benefit-img.jpg" alt="Our Benefit" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-benefit-box">
              <div className="benefit-box-list">
                {[
                  {
                    icon: "images/icon-our-benefits-1.svg",
                    title: "improved health",
                    text: "Therapy helps manage stress, anxiety, and, leading to better emotional regulation",
                  },
                  {
                    icon: "images/icon-our-benefits-2.svg",
                    title: "enhanced coping skills",
                    text: "Therapy helps manage stress, anxiety, and, leading to better emotional regulation",
                  },
                  {
                    icon: "images/icon-our-benefits-3.svg",
                    title: "self-awareness",
                    text: "Therapy helps manage stress, anxiety, and, leading to better emotional regulation",
                  },
                  {
                    icon: "images/icon-our-benefits-4.svg",
                    title: "stronger relationships",
                    text: "Therapy helps manage stress, anxiety, and, leading to better emotional regulation",
                  },
                ].map((benefit, index) => (
                  <div
                    className="our-benefit-item wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                    key={index}
                  >
                    <div className="icon-box">
                      <img src={benefit.icon} alt={benefit.title} />
                    </div>
                    <div className="benefit-item-content">
                      <h3>{benefit.title}</h3>
                      <p>{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="our-benefit-list wow fadeInUp" data-wow-delay="0.8s">
                <ul>
                  <li>support through life transition</li>
                  <li>reduced stress and anxiety</li>
                  <li>boosted self-esteem</li>
                  <li>greater life satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
