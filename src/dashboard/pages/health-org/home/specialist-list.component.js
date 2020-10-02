import React from "react";
import { List, Image, Header, Button } from "semantic-ui-react";
// import { withRouter } from "react-router-dom";


function SpecialistListComponent() {
  return (
    <div >
      <Header size="h3">Available Specialists</Header>
     <List>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content >
        <List.Header as='a'>Rachel Adamu</List.Header>
        
        <List.Description>
          description
            <b>profession <Button  size="mini" circular floated="right">More info</Button></b>
        </List.Description>
      </List.Content>
    </List.Item>
    </List>
    </div>
  );
}

export default SpecialistListComponent;
