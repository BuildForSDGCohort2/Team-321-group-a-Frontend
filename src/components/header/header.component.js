import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.css";
import { Button } from "semantic-ui-react";

function HeaderComponent({ history }) {
  return (
    <div className="header">
      <div>
        <Link className="logo-container" to="/">
          DocBook
        </Link>
        <span className="header-right">
          <span className="options">
          <Link className="option">Companies</Link>
          <Link className="option">Patients</Link>
          <Link className="option">Doctors</Link>
          <Link className="option">Hospitals</Link>
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
