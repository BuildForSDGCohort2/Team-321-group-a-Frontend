import React from "react";
import { Grid } from "semantic-ui-react";
import { specialistData } from "../Data";

export default function SpecialistList() {
  return (
    <div>
      {specialistData.map(({ name }) => (
        <Grid>
          <Grid.Column>
            <p>{name}</p>
          </Grid.Column>
        </Grid>
      ))}
    </div>
  );
}
