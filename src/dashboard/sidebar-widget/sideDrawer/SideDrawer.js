import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./SideDrawer.css";
import { SidebarData } from "./SidebarData";

const SideDrawer = props => {
    let drawerClasses = "side-drawer";
    if(props.show){
        drawerClasses = "side-drawer open";
    }

    const { currentUser: { user_type } } = props;

    const renderSidebar = () => {
        if (user_type === "specialist") {
          return SidebarData.specialist;
        } else if (user_type === "healthorg") {
          return SidebarData.healthorg;
        } else if (user_type === "patient") {
          return SidebarData.patient;
        } else if (user_type === "company") {
          return SidebarData.company;
        }
      }

    return (
        <nav className={drawerClasses}>
        <ul>
            {renderSidebar().map((item, index) => {
                return (
                <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={props.click}>
                    {item.icon}
                    <span>{item.title}</span>
                    </Link>
                </li>
                );
            })}
        </ul>
    </nav>
    )
}

const mapStateToProps = ({ user }) => ({
  // currentUser: user.currentUser.user
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(SideDrawer);