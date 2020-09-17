import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

import ImageContainer from "../../image-container.component";
import { specialistData } from "../Data";


const extra = (
  <div className="ui two buttons">
    <Button basic color="green">
      Message
    </Button>
    <Button basic color="red" >
     <Link to="/pay"> Payment</Link>
    </Button>
  </div>
);

export default function SpecialistList() {
  return (
    <div>
      <Grid padded>
        {specialistData.map((data) => (
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <ImageContainer extra={extra} data={data}/>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}
