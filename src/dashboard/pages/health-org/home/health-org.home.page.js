import React from "react";
import { Grid, Button, Image, Header } from "semantic-ui-react";


import SpecialistListComponent from "./specialist-list.component";

const HealthOrgHomePage = () => {
  return (
    <div>
      <Grid columns={3} divided="vertically" centered>
        <Grid.Row>
          <Grid.Column mobile={16} table={8} computer={6}>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              size="medium"
              circular
            />
          </Grid.Column>

          <Grid.Column mobile={16} table={8} computer={4}>
            <Header as="h3">Name</Header>
            <p>email</p>
            <p>Phone no</p>
            <p>Wallet</p>
            <Button> Update Info</Button>
          </Grid.Column>

          <Grid.Column mobile={16} table={8} computer={6}>
            <SpecialistListComponent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default HealthOrgHomePage;
