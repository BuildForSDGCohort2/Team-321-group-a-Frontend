import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import ImageContainer from "../../image-container.component";
import { specialistData } from "../Data";

function SpecialistList({ history }) {
  const extra = (
    <Button fluid basic color="blue" onClick={() => history.push("/patient/appointment")}>
      Book Appointment
    </Button>
);

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

export default withRouter(SpecialistList);
