import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Icon, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import store from "store";

import { signOutSuccess } from "../../../redux/user/user.actions";
import DrawerToggleBtn from "../sideDrawer/DrawerToggleBtn";
import "./Toolbar.css";

const Toolbar = props => {
    const { currentUser: { username }, history, signOutSuccess } = props;

    const signOut = () => {
        signOutSuccess()
        history.push("/signin");
        store.remove("token");
      }

    return(
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleBtn click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar__logo"><a href="/">DocBook</a></div>
                <div className="spacer" />
                <div className="toolbar__navigation-items">
              
                    <ul>
                        <Link to="#">
                            <Icon name="inbox" />
                        </Link>
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
                    </ul>
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = ({ user }) => ({
    // currentUser: user.currentUser.user
    currentUser: user.currentUser
  });

const mapDispatchToProps = dispatch => ({
    signOutSuccess: () => dispatch(signOutSuccess()),
  })

const MyToolbar =  connect(mapStateToProps,mapDispatchToProps)(Toolbar);

export default withRouter(MyToolbar);