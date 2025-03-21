import React from "react";
import { therapies } from "../../../constants/thrapies";
import { Link } from "react-router-dom";

const SectionTitle = ({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) => (
  <div className="section-title">
    <h3 className="wow fadeInUp">{subtitle}</h3>
    <h2 className="text-anime-style-2" data-cursor="-opaque">
      {title}
    </h2>
  </div>
);

const CaseStudyItem = ({
  imgSrc,
  title,
  description,
  link,
  delay,
}: {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  delay: string;
}) => (
  <div className="col-lg-4 col-md-6">
    <div className={`case-study-item wow fadeInUp`} data-wow-delay={delay}>
      <div className="case-study-image">
        <Link to={link} data-cursor-text="View">
          <figure>
            <img src={imgSrc} alt={title} />
          </figure>
        </Link>
      </div>
      <div className="case-study-content">
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
      <div className="case-study-btn">
        <Link to={link} className="readmore-btn">
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const CaseStudySection = () => {
  return (
    <div className="case-study">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-5">
            <SectionTitle
              subtitle="Therapies and Techniques"
              title="Therapies and Techniques"
            />
          </div>
          <div className="col-lg-7">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <div className="case-study-btn">
                <Link to="/services" className="readmore-btn">
                  View All Therapies and Techniques
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {therapies.map((therapy, index) => (
              <div
                data-cursor-text={"view"}
                key={index}
                className={`p-6 hover:scale-105 hover:shadow-lg  hover:opacity-80 cursor-pointer transition-all duration-300 ease-in-out rounded-2xl text-white shadow-lg bg-[#9B9A84]`}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {therapy.title}
                </h3>
                <p className="text-sm text-white">{therapy.description}</p>
                <div className="flex justify-between w-full items-center">
                  <button
                    style={{ borderRadius: "10px" }}
                    className="mt-2 transition-all duration-300 ease-in-out hover:scale-105 rounded-full px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-opacity-80 transition"
                  >
                    <h1 style={{ fontSize: "15px" }}>Learn More</h1>
                  </button>
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg">
                    <therapy.icon className="text-[#9B9A84]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudySection;
