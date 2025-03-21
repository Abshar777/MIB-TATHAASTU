import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { IoLogoVimeo } from "react-icons/io";
import { GiMuscleUp } from "react-icons/gi";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonial-img-1.jpg",
    name: "Jessica L.",
    position: "Co-founder",
    review:
      "I can't thank my therapist enough for their compassionate approach. They helped me process my trauma in a safe environment, and I've seen significant improvements in my mental health.",
  },
  {
    id: 2,
    image: "/images/testimonial-img-1.jpg",
    name: "Michael S.",
    position: "CEO",
    review:
      "The therapy sessions have been life-changing. I feel more confident and at peace with myself than ever before.",
  },
  {
    id: 3,
    image: "/images/testimonial-img-1.jpg",
    name: "Sophia R.",
    position: "Product Manager",
    review:
      "Absolutely amazing experience! The guidance and support I received made a huge difference in my life.",
  },
];

const companyLogos = [
  "/images/company-logo-1.svg",
  "/images/company-logo-2.svg",
  "/images/company-logo-3.svg",
  "/images/company-logo-4.svg",
  "/images/company-logo-5.svg",
];

const companies = [
  {
    id: 1,
    logo: <IoLogoVimeo className="text-4xl text-[#9B9A84]" />,
    name: "Verzio",
    description:
      "Verzio is a leading tech solutions provider, offering AI-driven innovations for businesses worldwide.",
    website: "https://www.verzio.com",
  },
  {
    id: 2,
    logo: <GiMuscleUp className="text-4xl text-[#9B9A84]" />,
    name: "CultFitness",
    description:
      "CultFitness is revolutionizing the fitness industry with cutting-edge workout programs ",
    website: "https://www.cultfitness.com",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="our-testimonial">
      <div className="container">
        <div className="row align-items-center section-row">
          <div className="col-lg-5">
            <div className="section-title">
              <h3 className="fadeInUp wow">child Companies</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                We Are Parent Company Of 
              </h2>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="section-btn">
              <Link to="/contact" className="btn-default">
                contact us
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="testimonial-slider w-full"
                data-cursor-text="Drag"
              >
                {companies.map((company) => (
                  <SwiperSlide className="w-full" key={company.id}>
                    <div key={company.id} className="company-box w-full gap-2 flex flex-col  items-center justify-center justify-items-center  ">
                      <div className="testimonial-site-logo">
                        {company.logo}
                      </div>
                      <h3 className="company-name">{company.name}</h3>
                      <p className="company-description text-center">
                        {company.description}
                      </p>
                      <div className="visit-button">
                        <Link
                          to={company.website}
                          target="_blank"
                          className="btn-default"
                        >
                          Visit
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="col-lg-8">
            {/* convert to slides show the comapney details ans eveerything */}
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="testimonial-slider"
              data-cursor-text="Drag"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-item">
                    <div className="testimonial-slider-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-slider-content">
                      <div className="testimonial-rating">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                      </div>
                      <div className="testimonial-content">
                        <p>"{testimonial.review}"</p>
                      </div>
                      <div className="author-content">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="testimonial-company-slider"
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {companyLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="company-logo">
                    <img src={logo} alt="Company Logo" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
