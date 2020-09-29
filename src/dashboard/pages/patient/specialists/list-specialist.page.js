import React from "react";
import { Grid, Button, Card, Image, Rating, Popup } from "semantic-ui-react";
import { withRouter } from "react-router-dom";


import Sidebar from "../../../sidebar/Sidebar";
import { specialistData } from "../../Data";

import "./specialist-list.styles.css";

function ListSpecialistPage({ history }) {
  const extra = (
    <Button
      fluid
      basic
      color="green"
      onClick={() => history.push("/dashboard/patient/appointments")}
    >
      Book Appointment
    </Button>
  );

  return (
    <div>
      <Sidebar />
      <Grid padded relaxed centered column={2}>
        {specialistData.map((data) => (
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Popup
              trigger={
                <Card id="patient-spec-card">
                  <Image src={data.imageUrl} />
                  <Card.Content>
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Description>
                      {data.description} <strong>Status: {data.available}</strong> {extra}
                    </Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>User Rating</Popup.Header>
              <Popup.Content>
                <Rating icon="star" defaultRating={data.rate} maxRating={4} />
              </Popup.Content>
            </Popup>
          </Grid.Column>

        ))}
      </Grid>
    </div>
  );
}

export default withRouter(ListSpecialistPage);
