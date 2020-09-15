import React from "react";
import { Route } from 'react-router-dom';

import HospitalPage from "./hospital/hospital.page";
import PatientPage from "./patient/patient.pages";
import SpecialistPage from "./specialist/specialist.page";

const DashboardComponent = ({match}) => {
  return (
    <div>
       <Route
        path={`${match.path}/specialist`}
        component={SpecialistPage}
      />
      <Route
        path={`${match.path}/hospital`}
        component={HospitalPage}
      />
       <Route
        path={`${match.path}/patient`}
        component={PatientPage}
      />


    </div>
  );
};

export default DashboardComponent;
