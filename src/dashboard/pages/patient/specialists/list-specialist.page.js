import React from "react";
import { Grid, Button, Card, Image, Rating } from "semantic-ui-react";
import { withRouter } from "react-router-dom";


import Sidebar from "../../../sidebar/Sidebar";
import { specialistData } from "../../Data";


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
              <Card style={{ marginLeft: "15%" }}>
                <Card.Content>
                  <Image floated="right" size="tiny" src={data.imageUrl} />
                  <Card.Header style={{ marginBottom: "-20px" }}>
                    {data.name}
                  </Card.Header>
                  <Card.Meta>
                    <div>
                      <p>{data.profession}</p>
                      <Rating
                        icon="star"
                        defaultRating={data.rate}
                        maxRating={5}
                        disabled
                      />
                    </div>
                  </Card.Meta>
                  <Card.Description>
                    {data.description} <strong>Status: {data.available}</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>{extra}</Card.Content>
              </Card>
          </Grid.Column>
         
        ))}
      </Grid>
    </div>
  );
}

export default withRouter(ListSpecialistPage);
