import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, withRouter } from "react-router-dom";
import headerData from "./header-data";
import "./header.styles.css";
import { Button } from "semantic-ui-react";

function Header({ history }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="header">
        <Link to="#" className="header-menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        {/* for landing page desktop view*/}
        <div className="options">
          <Link className="logo-container" to="/home">
            DocBook
          </Link>
          <span className="header-right">
            <Link className="option">Companies</Link>
            <Link className="option">Patients</Link>
            <Link className="option">Doctors</Link>
            <Link className="option">Hospitals</Link>
            <Link className="option">Pricing</Link>
            <Button
              size="tiny"
              className="nav-btn"
              attached="left"
              onClick={(e) => history.push("/signin")}
            >
              SIGN IN
            </Button>
            <Button
              size="tiny"
              className="nav-btn-sec"
              attached="right"
              onClick={(e) => history.push("/signup")}
            >
              SIGN UP
            </Button>
          </span>
        </div>
      </div>
      {/* end of landing page desktop view*/}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {headerData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default withRouter(Header);
