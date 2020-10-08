import React from "react";
import { List, Image, Breadcrumb } from "semantic-ui-react";

const ActivitiesList = () => (
  <div>
    <Breadcrumb>
      <Breadcrumb.Section active>All activities</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section link>Arranged by Date</Breadcrumb.Section>
    </Breadcrumb>
    {["just now", "2 hrs ago", "3 days ago"].map(item => (
      <List>
        <List.Item>
          <Image avatar src="https://react.semantic-ui.com/images/avatar/small/rachel.png" />
          <List.Content>
            <List.Header as="a">Rachel</List.Header>
            <List.Description>
              Last seen watching{" "}
              <a>
                <b>Arrested Development</b>
              </a>{" "}
              {item}.
                </List.Description>
          </List.Content>
        </List.Item>
      </List>
    ))}
  </div>
)

export default ActivitiesList;