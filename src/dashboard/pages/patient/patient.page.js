import React from "react";
import { Route } from "react-router-dom";

import PatientHomePage from "./home/patient.home.page";
import Wallet from "./wallet/wallet.page";
import RecordsPage from "./records/records.page";
import HistoryPage from "./history/history.page";
import NotificationPage from "./notification/notification.page";
import paymentPage from "./payment/payment.page";
import Appointment from "./appointment/appointment.page";
import ListSpecialistPage from "./specialists/list-specialist.page";
import PatientHospitalPage from "./health-org/patient-health-org.page";
import BookAppointment from "./appointment/book-appointment.component";


function PatientPage({ match }) {
  return (
    <div>
        <Route exact path={`${match.path}`} component={PatientHomePage} />
        <Route path={`${match.path}/wallet`} component={Wallet} />
        <Route path={`${match.path}/records`} component={RecordsPage} />
        <Route path={`${match.path}/history`} component={HistoryPage} />
        <Route path={`${match.path}/notifications`} component={NotificationPage} />
        <Route path={`${match.path}/appointment/pay`} component={paymentPage} />
        <Route exact path={`${match.path}/appointments`} component={Appointment} />
        <Route path={`${match.path}/appointments/:appointmentId`} component={BookAppointment} />
        <Route path={`${match.path}/specialists`} component={ListSpecialistPage} />
        <Route path={`${match.path}/hospitals`} component={PatientHospitalPage} />
    </div>
  );
}

export default PatientPage;
