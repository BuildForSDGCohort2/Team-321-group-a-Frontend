// import React from "react";
// import { List, Image, Header, Button } from "semantic-ui-react";
// // import { withRouter } from "react-router-dom";


// function SpecialistListComponent() {
//   return (
//     <div >
//       <Header size="h3">Available Specialists</Header>
//      <List>
//     <List.Item>
//       <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
//       <List.Content >
//         <List.Header as='a'>Rachel Adamu</List.Header>
        
//         <List.Description>
//           description
//             <b>profession <Button  size="mini" circular floated="right">More info</Button></b>
//         </List.Description>
//       </List.Content>
//     </List.Item>
//     </List>
//     </div>
//   );
// }

// export default SpecialistListComponent;


import React from "react";
import { Grid, Button, Card, Image, Rating, Popup } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import { specialistData } from "../../Data";

// import "./specialist-list.styles.css";

function SpecialistListComponent({ history }) {
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

export default withRouter(SpecialistListComponent);
