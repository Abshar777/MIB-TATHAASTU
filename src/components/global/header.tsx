import { MenuIcon } from "lucide-react";
import { navItems } from "../../constants/header";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" to="/">
              <h1
                style={{ color: "#9B9A84" }}
                className="text-[#9B9A84] text-2xl font-bold"
              >
                MI<span className="text-white">B</span>
              </h1>
            </Link>
            {/* Logo End */}

            {/* Desktop Menu */}
            <div
              style={{ visibility: "visible" }}
              className="collapse navbar-collapse main-menu"
            >
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className={`nav-item ${
                        item.btn ? "highlighted-menu" : ""
                      }`}
                    >
                      <Link className="nav-link" to={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Header Btn Start */}
              <div className="d-inline-flex header-btn">
                <Link to="/appoinment" className="btn-default">
                  book an appointment
                </Link>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Desktop Menu End */}

            {/* Mobile Menu Button (Bootstrap Offcanvas Toggle) */}
            <button
              className="navbar-toggler text-white d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              style={{ color: "white" }}
            >
              <MenuIcon className="text-white" />
            </button>
          </div>
        </nav>

        {/* Bootstrap Offcanvas (Mobile Menu) */}
        <div
          style={{ backgroundColor: "#9B9A84" }}
          className="offcanvas offcanvas-end text-white bg-[#9B9A84]"
          tabIndex={-1}
          id="mobileMenu"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link text-white" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Appointment Button */}
            <div
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="d-inline-flex header-btn"
            >
              <Link to="/appoinment" style={{ color: "#9B9A84" ,backgroundColor: "white"}} className="btn-default">
                book an appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;
