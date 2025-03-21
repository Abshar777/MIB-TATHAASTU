import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row align-items-center section-row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="fadeInUp wow">highlights</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Past Workshops and Events
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="fadeInUp section-btn wow" data-wow-delay="0.2s">
              <Link to="/blog" className="btn-default">
                view all post
              </Link>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              {/* <div className="col-lg-4 col-md-6"> */}
                <div
                  className={`fadeInUp post-item wow`}
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <div className="post-featured-image">
                    <figure>
                      <Link
                        to="/blog"
                        className="image-anime"
                        data-cursor-text="View"
                      >
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </figure>
                  </div>
                  <div className="post-item-body">
                    <div className="post-item-content">
                      <h3>
                        <Link to="/blog">{post.title}</Link>
                      </h3>
                    </div>
                    <div className="post-item-btn">
                      <Link to="/blog" className="readmore-btn">
                        read more
                      </Link>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const posts = [
  {
    image: "/pic/blog-1.webp",
    title: "A table Talk On World Sex Workers Day",
  },
  {
    image: "/pic/blog-2.heic",
    title: "Creative Methods Of Teaching",
  },
  {
    image: "/pic/blog-3.webp",
    title: "World Hypertensio",
  },
  {
    image: "/pic/blog-4.jpg",
    title: "Old Age Recreational Activities",
  },
  {
    image: "/pic/blog-5.heic",
    title: "Puppetry Workshop",
  },
];

export default BlogSection;
