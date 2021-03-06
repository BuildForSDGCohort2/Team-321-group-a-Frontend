import React from "react";
import { Grid, Header, List, Button, Image } from "semantic-ui-react";
import SearchHealthOrg from "./search-health-org.component";
import { hospitalData } from "../../Data";
import { withRouter } from "react-router-dom";

function HealthOrgList(props) {
  return (
    <div>
      <Grid padded stacked columns={3}>
        <Grid.Row>
          <Grid.Column mobile={16} computer={4}>
            <SearchHealthOrg />
          </Grid.Column>
          <Grid.Column mobile={16}>
            <Header textAlign="center" as="h1">
              Available Hospitals
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid centered>
        {hospitalData.map(({ name }) => (
          <Grid.Column computer={12}>
            <List divided verticalAlign="middle">
              <List.Item>
                <List.Content floated="right">
                  <Button
                    negative
                    inverted
                    size="tiny"
                    onClick={(e) => props.history.push("/dashboard/healthorg/specialists")}
                  >
                    Visit
                  </Button>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                />
                <List.Content>{name}</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}

export default withRouter(HealthOrgList);
