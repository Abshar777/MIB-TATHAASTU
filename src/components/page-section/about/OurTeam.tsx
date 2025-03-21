import React from "react";
import { teamMembers } from "../../../constants/ourTeam";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="our-team-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">team member</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Dedicated Experts Supporting your Journey
                </h2>
              </div>
              <div className="mental-therapy-counter">
                <div className="mental-therapy-header">
                  <div className="icon-box">
                    <img src="/images/icon-mental-therapy-counter.svg" alt="" />
                  </div>
                  <h2>
                    <span className="counter">200</span>+
                  </h2>
                </div>
                <div className="mental-therapy-body">
                  <p>mental therapy dedicated</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="team-member-list">
              {teamMembers.map((member, index) => (
                <div
                  className="team-member-item wow fadeInUp"
                  key={index}
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <div className="team-image">
                    <Link to={""} data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={member.img} alt={member.name} />
                      </figure>
                    </Link>
                  </div>
                  <div className="team-body">
                    <div className="team-content">
                      <h3>
                        <Link to={""}>{member.name}</Link>
                      </h3>
                      <p>{member.role}</p>
                    </div>
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <Link to={""}>
                            <i className="fa-brands fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={""}>
                            <i className="fa-brands fa-whatsapp"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={""}>
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
