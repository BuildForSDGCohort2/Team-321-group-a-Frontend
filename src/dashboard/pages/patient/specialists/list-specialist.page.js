import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Button, Card, Image, Rating, Popup } from "semantic-ui-react";


import { getSpecialists } from "../../../../redux/specialist/specialist.actions";
import { specialistData } from "../../Data";

import "./specialist-list.styles.css";

function ListSpecialistPage({ history, specialist, getSpecialists }) {

useEffect(() => {
  getSpecialists();
  console.log(specialist)
}, []);


  return (
    <div>
      <Grid padded relaxed centered column={2}>
        {specialist.map((data) => (
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Popup
              trigger={
                <Card id="patient-spec-card">
                  <Image src="https://homepages.cae.wisc.edu/~ece533/images/boy.bmp" />
                  <Card.Content>
                    <Card.Header>{data.username}</Card.Header>
                    <Card.Description>
                      {"data.description"} <strong>Status: {"available"}</strong> 
                      <Button
                        fluid
                        basic
                        color="green"
                        onClick={() => history.push(`/dashboard/patient/appointments/${data.id}`)}
                      >
                        Book Appointment
                      </Button>
                    </Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>User Rating</Popup.Header>
              <Popup.Content>
                <Rating icon="star" defaultRating={3} maxRating={4} />
              </Popup.Content>
            </Popup>
          </Grid.Column>

        ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  specialist: state.specialist.specialist
});

const mapDispatchToProps = dispatch => ({
  getSpecialists: () => dispatch(getSpecialists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSpecialistPage);
