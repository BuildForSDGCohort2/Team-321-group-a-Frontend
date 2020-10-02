import React from "react";
import { Container } from "semantic-ui-react";

import ListAppointment from "./list-appointments.component";

function Appointment() {
  return (
    <div>
      <Container>
        <ListAppointment />
      </Container>
    </div>
  );
}

export default Appointment;
