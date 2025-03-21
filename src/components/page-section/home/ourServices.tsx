import React from "react";
import { ourService, ourServiceProvide } from "../../../constants/ourService";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

 const OurServices: React.FC = () => {


  return (
    <div className="our-services">
      <div className="container">
        <div className="row align-items-center section-row">
          <div className="col-lg-6 col-md-9">
            <div className="section-title">
              <h3 className="fadeInUp wow">{ourService.title}</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                {ourService.MainTitle}
              </h2>
            </div>
          </div>

          <div className="col-lg-6 col-md-3">
            <div className="fadeInUp section-btn wow" data-wow-delay="0.2s">
              <Link to="/services" className="btn-default">
                view all services
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {ourServiceProvide.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="fadeInUp service-item wow"
                // data-wow-delay={`${index * 0.2}s`}
              >
                <div data-cursor-text={"view"} className="service-image curor-pointer">
                  {/* <a href="service-single.html" data-cursor-text=""> */}
                    <figure style={{height: "98%"}}  className="image-anime h-[98%] bg-zinc-800">
                      <LazyLoadImage
                        src={service.image}
                        alt={service.title}
                        effect="blur"
                        height={"100%"}
                        width={"100%"}
                        delayMethod="debounce"
                        className="h-full scale-105 opacity-50  duration-[.3s] ease-in-out object-cover transition-all tw-full"
                      />
                    </figure>
                  {/* </a> */}
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                </div>
                <div className="service-btn">
                  <Link to="/services" className="readmore-btn">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div
              className="fadeInUp service-get-quote-text wow"
              data-wow-delay="1s"
            >
              <p>
                <span>Free</span> Let's make something great work together.{" "}
                <Link to="/contact">Get Free Quote</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default React.memo(OurServices);
