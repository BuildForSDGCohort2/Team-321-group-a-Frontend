import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.css";
import { Button } from "semantic-ui-react";

function HeaderComponent({ history }) {
  return (
    <div className="nav-header">
      <div>
        <Link className="logo-container" to="/">
          DocBook
        </Link>
        <span className="header-right">
          <span className="options">
          <Link to="/companies" className="option">Companies</Link>
          <Link to="/patients" className="option">Patients</Link>
          <Link to="specialists" className="option">Specialists</Link>
          <Link to="hospitals" className="option">Health Organizations</Link>
          <Link className="option">Pricing</Link>
          </span>
          <span className="for-btn">
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
          </span>
        </span>
      </div>
    </div>
  );
}

export default withRouter(HeaderComponent);
