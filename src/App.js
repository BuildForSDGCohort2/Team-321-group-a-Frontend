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
import Dashboard from "./dashboard/pages/dashboard.page";
import Footer from "./components/footer/footer.component";

export default function App() {

  return (
    <div>
      <Switch>
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

