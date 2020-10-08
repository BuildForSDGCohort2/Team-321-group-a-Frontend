import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, withRouter } from "react-router-dom";
import store from "store";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { Icon, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { signOutSuccess } from "../../redux/user/user.actions";

function SidebarComponent(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const {
    currentUser: { username, user_type },
  history, signOutSuccess } = props;


  function renderSidebar() {
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

function signOut() {
  signOutSuccess()
  history.push("/signin");
  // store.remove("token");
  store.clearAll();
}

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <div className="right-navbar">
        <Dropdown
          icon="user"
          floating
          labeled
          className="icon"
          direction="left"
        >
          <Dropdown.Menu>
            <Dropdown.Header content={username} />
            <Dropdown.Divider />
            <Dropdown.Item icon="sign-out" text="Logout" onClick={() => signOut()} />
          </Dropdown.Menu>
        </Dropdown>
        <Link to="#">
          <Icon name="inbox" />
        </Link>
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser.user
});

const mapDispatchToProps = dispatch => ({
  signOutSuccess: () => dispatch(signOutSuccess()),
})

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent)
export default withRouter(Sidebar);
