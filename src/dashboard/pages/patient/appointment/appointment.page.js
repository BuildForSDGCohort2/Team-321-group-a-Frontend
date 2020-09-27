import React from "react";
import { Container } from "semantic-ui-react";

import ListAppointment from "./list-appointments.component";
import SidebarComponent from "../../../sidebar/Sidebar";

function Appointment() {
  return (
    <div>
      <SidebarComponent />
      <Container>
        <ListAppointment />
      </Container>
    </div>
  );
}

export default Appointment;
