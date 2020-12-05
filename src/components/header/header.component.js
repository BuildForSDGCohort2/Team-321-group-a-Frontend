import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.css";
import { Button } from "semantic-ui-react";

function HeaderComponent({ history }) {
  return (
    <div className="nav-header">
      <div className="logo-container">
      <Link to="/">
          DocBook
        </Link>
      </div>
      

          <div className="options">
          <Link to="/companies" className="option">Companies</Link>
          <Link to="/patients" className="option">Patients</Link>
          <Link to="specialists" className="option">Specialists</Link>
          <Link to="hospitals" className="option">Health Organizations</Link>
          <Link className="option">Pricing</Link>
          </div>
          <div className="header-btn">
          <Button
            size="tiny"
            id="nav-btn"
            attached="left"
            onClick={(e) => history.push("/signin")}
          >
            SIGN IN
          </Button>
          <Button
            size="tiny"
            id="nav-btn-sec"
            attached="right"
            onClick={(e) => history.push("/signup")}
          >
            SIGN UP
          </Button>
          </div>
    </div>
  );
}

export default withRouter(HeaderComponent);
