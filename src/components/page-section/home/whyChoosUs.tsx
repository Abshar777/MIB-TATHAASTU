import { whyChooseUs } from "../../../constants/whyChooseUs";


const WhyChooseItem = ({ imgSrc, title }: { imgSrc: string; title: string }) => (
  <div className="why-choose-item wow fadeInUp">
    <div className="icon-box">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="why-choose-item-content">
      <h3>{title}</h3>
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="why-choose-us-box">
              <div className="why-choose-image">
                <figure className="image-anime reveal">
                <video
                    className="h-full rounded-[20px] w-full"
                    src={'/video/whychoosUs.mp4'}
                    autoPlay
                    muted
                    loop
                  />
                </figure>
                <div className="contact-circle-img">
                  <img src="images/contact-circle-img.svg" alt="Contact Circle" />
                </div>
              </div>
              <div className="why-choose-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">{whyChooseUs.title}</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {whyChooseUs.mainTitle}
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    With a commitment to compassionate, evidence-based care, we
                    empower individuals to create lasting positive change in
                    their lives. Our team of experienced therapists provides.
                  </p>
                </div>
                <div className="why-choose-list">
                  {whyChooseUs.list.map((item, index) => (
                    <WhyChooseItem
                      key={index}
                      imgSrc={item.imgSrc}
                      title={item.title}
                    />
                  ))}
                </div>
                <div className="why-choose-body">
                  <div className="why-choose-body-image">
                    <figure className="image-anime reveal">
                      <img src="/pic/childSmile.png" alt="Choosing Us" />
                    </figure>
                  </div>
                  <div className="why-choose-body-content wow fadeInUp">
                    <h3>{whyChooseUs.secondTitle}</h3>
                    <p>
                      {whyChooseUs.secondDescription}
                    </p>
                    <a href="contact.html" className="btn-default">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
