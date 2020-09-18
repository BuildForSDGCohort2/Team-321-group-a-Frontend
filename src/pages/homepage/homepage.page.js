import React from "react";
import { Grid, Header, Button, Image, Icon, Card } from "semantic-ui-react";

import HeaderComponent from "../../components/header/header.component";
import "./homepage.styles.css";

const HomePage = () => (
  <div>
    <HeaderComponent />
    <div className="my-container">
      <Grid padded>
        <Grid.Column
          floated="left"
          width={5}
          mobile={16}
          tablet={8}
          computer={6}
          centered
        >
          <Header as="h2" style={{ color: "#6b6291" }}>
            Everything you will ever need in health, fast, reliable and
            affordable
          </Header>
          <p>
            A solution made with empathy for the commmon goal of all. very easy
            to interact with, across all users, removing the communication gap
            in genereal hospital care.
          </p>
          <Button className="free-trial-btn">
            Get started with a free trial
          </Button>
        </Grid.Column>
        <Grid.Column
          floated="right"
          width={5}
          mobile={16}
          tablet={8}
          computer={6}
          centered
        >
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className="services-dark">
                  <Icon name="shield" size="big" circular />
                  <p className="services-dark-text">Secure data</p>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="services-light">
                  <Icon name="euro" size="big" circular />
                  <p className="services-light-text">Payment</p>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <div className="services-dark">
                  <Icon name="alarm mute" size="big" circular />
                  <p className="services-dark-text">Quick alerts</p>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="services-light">
                  <Icon name="save outline" size="big" circular />
                  <p className="services-light-text">Schedule</p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>

      <Grid padded stackable={true}>
        <Grid.Row columns={4} style={{ marginTop: "50px" }}>
          <Grid.Column mobile={8} tablet={8} computer={4} centered>
            <div className="services-card">
              <Header as="h4" className="align-header">
                Companies For HMO
              </Header>
              <p>Organizations who want to sign their workers up for HMOs.</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={8} tablet={8} computer={4} centered>
            <div className="services-card">
              <Header as="h4" className="align-header">
                Individual Patients
              </Header>
              <p>Individual from all works of life who need health care</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={8} tablet={8} computer={4} centered>
            <div className="services-card">
              <Header as="h4" className="align-header">
                Doctors & Specialists
              </Header>
              <p>Specialists who want to connect to patients from here</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={8} tablet={8} computer={4} centered>
            <div className="services-card">
              <Header as="h4" className="align-header">
                Health Organizations
              </Header>
              <p>Large or small health firms who provide health care needs</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

export default HomePage;
