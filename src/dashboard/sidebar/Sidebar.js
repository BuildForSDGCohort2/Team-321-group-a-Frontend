import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

// function Navbar({AccountType: {account_type}}) {
function SidebarComponent() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  function renderSidebar() {
    // if (account_type === "specialist") {
    //   return SidebarData.specialist;
    // } else if (account_type === "hospital") {
    //   return SidebarData.hospital;
    // } else if (account_type === "patient") {
    //   return SidebarData.patient;
    // }
    return SidebarData.patient;
  }

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <div className="right-navbar">
      <Link to="d/"><Icon name="user" size="larg" /></Link>
        <Link to="/"><Icon name="mail" size="larg" /></Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {renderSidebar().map((item, index) => {
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
    </IconContext.Provider>
  );
}

const mapStateToProps = ({user: {currentUser}}) => ({
  AccountType: currentUser
});

export default connect(mapStateToProps)(SidebarComponent);
