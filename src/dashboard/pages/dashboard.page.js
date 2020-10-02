import React from "react";
import { Route } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import PatientPage from "./patient/patient.page";
import DashboardHealthOrgPage from "./health-org/health-org.page";

const DashboardComponent = ({ match }) => {
  return (
    <div>
      <Sidebar />
      <div style={{ marginTop: "20px" }}>
        <Route path={`${match.path}/patient`} component={PatientPage} />
        <Route path={`${match.path}/healthorg`} component={DashboardHealthOrgPage} />
      </div>
    </div>
  );
};

export default DashboardComponent;
