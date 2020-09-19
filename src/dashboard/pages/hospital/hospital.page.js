import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import SpecialistPage from "../specialist/specialist.page";

function HospitalPage( { match } ) {
  return (
    <div>
      <Sidebar />
      <Route path={`${match.path}/specialists`} component={SpecialistPage} />
    </div>
  );
}

export default HospitalPage;
