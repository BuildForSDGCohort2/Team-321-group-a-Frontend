import React from "react";
import { Route } from "react-router-dom";

import HealthOrgHomePage from "./home/health-org.home.page";
import HealthOrgSpecialistPage from "./home/specialist-list.component";

function HealthOrgPage({ match }) {
  return (
    <div>
        <Route exact path={`${match.path}`} component={HealthOrgHomePage} />
        <Route path={`${match.path}/specialists`} component={HealthOrgSpecialistPage} />
    </div>
  );
}

export default HealthOrgPage;
