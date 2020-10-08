import React from "react";
import { Route } from "react-router-dom";

import SpecialistHomePage from "./home/specialist.home.page";
import Appointment from "./appointments/appointment.page";
import EditAppointment from "./appointments/edit-appointment.component";

function SpecialistPage({ match }) {
  return (
    <div>
        <Route exact path={`${match.path}`} component={SpecialistHomePage} />
        {/* <Route path={`${match.path}/wallet`} component={Wallet} />
        <Route path={`${match.path}/records`} component={RecordsPage} />
        <Route path={`${match.path}/history`} component={HistoryPage} />
        <Route path={`${match.path}/notifications`} component={NotificationPage} /> */}
        <Route exact path={`${match.path}/appointments`} component={Appointment} />
        <Route path={`${match.path}/appointments/edit`} component={EditAppointment} />
    </div>
  );
}

export default SpecialistPage;
