import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.page";
import forgotPasswordPage from "./pages/forgot-password/forgot-password.page";
import SignUp from "./pages/sign-up/sign-up.page";
import SignIn from "./pages/sign-in/sign-in.page";
import CompaniesPage from "./pages/companies/companies.pages";
import SpecialistsPage from "./pages/specialists/specialist.page";
import HospitalPage from "./pages/hospitals/hospital.page";
import Patient from "./pages/patients/patient.pages";
import Footer from "./components/footer/footer.component";


import Dashboard from "./dashboard/pages/dashboard.page";
import DashboardHospitalPage from "./dashboard/pages/hospital/hospital.page";
import HospitalSpecialistPage from "./dashboard/pages/hospital/hospital-specialist.page";
import paymentPage from "./dashboard/pages/patient/payment/payment.page";
import PatientHospitalPage from "./dashboard/pages/patient/hospital/patient-hospital.page";
import Appointment from "./dashboard/pages/patient/appointment/appointment.page";

import PatientPage from "./dashboard/pages/patient/patient.page";
import ListSpecialistPage from "./dashboard/pages/patient/specialists/list-specialist.page";


export default function App() {

  return (
    <div>
      <Switch>
        <Route path="/hospital/specialists" component={HospitalSpecialistPage} />
       
        <Route path="/dashboard/patient/appointment/pay" component={paymentPage} />
        <Route path="/dashboard/hospital/specialists" component={HospitalSpecialistPage} />
        <Route path="/dashboard/hospital" component={DashboardHospitalPage} />

        <Route path="/dashboard/patient/appointments" component={Appointment} />
        <Route path="/dashboard/patient/specialists" component={ListSpecialistPage} />
        <Route path="/dashboard/patient/hospitals" component={PatientHospitalPage} />
         <Route path="/dashboard/patient" component={PatientPage} />
         <Route path="/dashboard" component={Dashboard} />


        <Route path="/patients" component={Patient} />
        <Route path="/hospitals" component={HospitalPage} />
        <Route path="/specialists" component={SpecialistsPage} />
        <Route path="/companies" component={CompaniesPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/forgotpass" component={forgotPasswordPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>

  )};

