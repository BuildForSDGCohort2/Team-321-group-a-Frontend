import React from "react";
import { Route } from "react-router-dom";

import Sidebar from "../../sidebar/Sidebar";
import Appointment from "./appointment/appointment.page";
import PatientHospitalPage from "./hospital/patient-hospital.page";

function PatientPage({ match }) {
  return (
    <div>
      <Sidebar />
      <Route path={`${match.path}/hospitals`} component={PatientHospitalPage} />
      <Route path={`${match.path}/appointment`} component={Appointment} />
    </div>
  );
}

export default PatientPage;
