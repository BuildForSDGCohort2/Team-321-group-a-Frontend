import React, { useState } from "react";
import { Grid, Header, Container, Image, Button } from "semantic-ui-react";

import Sidebar from "../../sidebar/Sidebar";
import UpdateInfoBtn from "./update-info-btn";

function PatientPage() {
  const [userinfo, setUserinfo] = useState(false);
  return (
    <div>
      <Sidebar />
      <Container>
        <div style={{ marginTop: "20px" }}>
          <Grid columns={3} divided="vertically" centered>
            <Grid.Column mobile={16} table={8} computer={6}>
              <Image
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                size="medium"
                circular
              />
            </Grid.Column>

            <Grid.Column mobile={16} table={8} computer={4}>
              <Header>Name</Header>
              <p>email</p>
              <p>Phone no</p>
              <p>Wallet</p>
              <Button onClick={() => setUserinfo(!userinfo)}>
                {" "}
                Update Info
              </Button>
            </Grid.Column>

            {userinfo ? (
              <Grid.Column mobile={16} table={8} computer={6}>
                <UpdateInfoBtn />
              </Grid.Column>
            ) : null}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default PatientPage;
