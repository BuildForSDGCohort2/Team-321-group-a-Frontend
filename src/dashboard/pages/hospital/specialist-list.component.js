import React from "react";
import { Grid } from "semantic-ui-react";

import ImageContainer from "../../image-container.component";
import { specialistData } from "../Data";

export default function SpecialistList() {
  return (
    <div>
      <Grid padded>
        {specialistData.map((data) => (
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <ImageContainer data={data}/>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}
