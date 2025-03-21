import { heroData, heroList } from "../../../constants/hero";
import heroVideo from "../../../assets/video/hero.mp4";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <div className="hero hero-video parallaxie">
      <div className="hero-bg-video">
        {/* <video autoplay muted loop id="myVideo"><source src="https://demo.awaikenthemes.com/assets/videos/hipno-video.mp4" type="video/mp4"></video> */}

        <video autoPlay muted loop>
          <source src={heroVideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="fadeInUp wow">{heroData.title}</h3>
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  {heroData.subTitle}
                </h1>
                <p className="fadeInUp wow" data-wow-delay="0.2s">
                  {heroData.description}
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Content Body Start */}
              <div className="hero-content-body">
                {/* Hero Button Start */}
                <div className="fadeInUp hero-btn wow" data-wow-delay="0.4s">
                  <Link to="/appoinment" className="btn-default">
                    get started today
                  </Link>
                </div>
                {/* Hero Button End */}

                {/* Hero Counter Box Start */}
                <div className="hero-client-box">
                  <div className="customer-images">
                    <div className="customer-img">
                      <figure className="image-anime reveal">
                        <img src="images/customer-img-1.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="customer-img">
                      <figure className="image-anime reveal">
                        <img src="images/customer-img-2.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="add-more customer-img">
                      <p>
                        <span className="counter">30</span>k
                      </p>
                    </div>
                  </div>
                  <div className="hero-client-content">
                    <p>
                      More than <span className="counter">30</span>k Clients
                      Reviews
                    </p>
                  </div>
                </div>
                {/* Hero Counter Box End */}
              </div>
              {/* Hero Content Body End */}
            </div>
            {/* Hero Content End */}

            {/* Hero List Start */}
            <div className="fadeInUp hero-list wow" data-wow-delay="0.6s">
              <ul>
                {heroList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Hero List End */}
          </div>
        </div>
      </div>
    </div>
  );
};
