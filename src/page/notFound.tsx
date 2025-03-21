import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader from "../components/global/globalHero";

const ErrorPage: React.FC = () => {
  return (
    <>
      <GlobalHeader
        pageTitle="404 Error"
        pageDescription="Oops! page not found"
      />
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-page-image wow fadeInUp">
                {/* <img
                  src="/images/404-error-img.png"
                  alt="404 Error"
                  width={500}
                  height={300}
                /> */}
              </div>
              <div className="error-page-content">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Oops! page not found
                  </h2>
                </div>
                <div className="error-page-content-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    The page you are looking for does not exist
                  </p>
                  <Link to="/">
                    <a
                      className="btn-default wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <span>back to home</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
