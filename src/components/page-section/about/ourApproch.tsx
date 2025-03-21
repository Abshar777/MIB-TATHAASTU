

const OurApproach = () => {
  return (
    <div className="our-approach">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Our Approach Content Start */}
            <div className="our-approach-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our approach</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Holistic support for mental wellness
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We provide personalized, compassionate care to nurture
                  emotional well-being, promote self-discovery.
                </p>
              </div>
              {/* Section Title End */}

              {/* Our Approach List Start */}
              <div className="our-approach-list">
                {/* Our Approach Item Start */}
                <div className="our-approach-item wow fadeInUp">
                  <div className="approach-item-content">
                    <h3>personalized care</h3>
                    <p>Each session is tailored to your individual challenges, goals.</p>
                  </div>
                </div>
                {/* Our Approach Item End */}

                {/* Our Approach Item Start */}
                <div className="our-approach-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="approach-item-content">
                    <h3>safe and supportive space</h3>
                    <p>We provide a non-judgmental environment where you.</p>
                  </div>
                </div>
                {/* Our Approach Item End */}

                {/* Our Approach Item Start */}
                <div className="our-approach-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="approach-item-content">
                    <h3>empowerment and growth</h3>
                    <p>Our goal is to equip you with tools to navigate challenges.</p>
                  </div>
                </div>
                {/* Our Approach Item End */}
              </div>
              {/* Our Approach List End */}
            </div>
            {/* Our Approach Content End */}
          </div>

          <div className="col-lg-6">
            {/* Our Approach Image Start */}
            <div className="our-approach-image">
              <div className="our-approach-img-1">
                <figure className="image-anime reveal">
                  <img
                    src="/images/our-apporach-img-1.jpg"
                    alt="Our Approach 1"
                   
                  />
                </figure>
              </div>
              <div className="our-approach-img-2">
                <figure className="image-anime reveal">
                  <img
                    src="/images/our-apporach-img-2.jpg"
                    alt="Our Approach 2"
                   
                  />
                </figure>
              </div>
            </div>
            {/* Our Approach Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
