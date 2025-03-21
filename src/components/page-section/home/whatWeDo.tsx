import { whatWeDo } from "../../../constants/whatWeDo";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="section-title items-end">
    <h3 className="wow fadeInUp">{title}</h3>
    <h2 className="text-anime-style-2" data-cursor="-opaque">
      {subtitle}
    </h2>
  </div>
);

const VideoCounterItem = ({
  count,
  label,
}: {
  count: string;
  label: string;
}) => (
  <div className="video-counter-item">
    <h2>
      <span className="counter">{count}</span>
    </h2>
    <p>{label}</p>
  </div>
);

const VideoSection = () => (
  <div className="intro-video-box">
    <div className="intro-bg-video bg-black">
      {/* <video autoPlay muted loop id="myVideo">
        <source
          src="https://demo.awaikenthemes.com/assets/videos/intro-bg-video.mp4"
          type="video/mp4"
        />
      </video> */}
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        className="opacity-60"
        src="/pic/ourstory.JPG"
        alt=""
      />
    </div>
    <div className="video-play-button">
      {/* <a
        href="https://www.youtube.com/watch?v=Y-x0efG1seA"
        className="popup-video"
        data-cursor-text="Play"
      > */}
        <i className="fa-solid fa-play"></i>
      {/* </a> */}
    </div>
    <div className="intro-video-counter">
      <VideoCounterItem count="140+" label="successful programs" />
      <VideoCounterItem count="95%" label="positive feedback" />
      <VideoCounterItem count="50+" label="expert facilitators" />
      <VideoCounterItem count="10k+" label="lives transformed" />
    </div>
  </div>
);

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <SectionTitle
              title={whatWeDo.title}
              subtitle={whatWeDo.mainTitle}
            />
          </div>
          <div className="col-lg-6">
            <div
              className="section-title-content wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <p>{whatWeDo.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <VideoSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
