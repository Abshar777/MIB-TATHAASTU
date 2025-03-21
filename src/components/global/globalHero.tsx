import React from "react";

const GlobalHeader: React.FC<{
  pageTitle: string;
  pageDescription: string;
  index?: number;
}> = ({ pageTitle, pageDescription, index = 1 }) => {
  const url = ["/pic/childSmile.png", "/pic/vision.png",'/pic/ourstory.JPG'];
  return (
    <div className="bg-black">
      <div
        style={{ backgroundImage: `url(${url[index]})` }}
        className="page-header md:opacity-60 bg-opacity-50 bg-black parallaxie"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  {pageTitle}
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {pageDescription}
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalHeader;
