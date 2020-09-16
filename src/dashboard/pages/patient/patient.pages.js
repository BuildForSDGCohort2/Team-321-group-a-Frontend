import React from "react";
import { Route } from 'react-router-dom';

import Sidebar from "../../sidebar/Sidebar";
import PatientHospitalPage from "./hospital/patient-hospital.page";

function PatientPage({ match }) {
  return (
    <div>
      <Sidebar />
         <Route
        path={`${match.path}/hospitals`}
        component={PatientHospitalPage}
      />
    </div>
  );
}

export default PatientPage;
