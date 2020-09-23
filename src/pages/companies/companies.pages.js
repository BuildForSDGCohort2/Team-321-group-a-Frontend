import React from "react";
import { Grid, Header } from "semantic-ui-react";
import HeaderComponent from "../../components/header/header.component";

// import "../patient/patient.pages.styles.css";

function CompaniesPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="patient-container ">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <div className="circle-div"></div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <div className="patient-section">
              <Header as="h2">For Companies</Header>
              <p>
                A solution made with empathy for the common good of all. Very
                easy to interact with, across all users, removing the
                communication gap in general health care.{" "}
              </p>
              <p>
                A solution made with empathy for the common good of all. Very
                easy to interact with, across all users, removing the
                communication gap in general health care.
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}

export default CompaniesPage;
