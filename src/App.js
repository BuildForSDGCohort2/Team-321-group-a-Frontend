import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.page";
import forgotPasswordPage from "./pages/forgot-password/forgot-password.page";
import SignUp from "./pages/sign-up/sign-up.page";
import SignIn from "./pages/sign-in/sign-in.page";
import Footer from "./components/footer/footer.component";

import Dashboard from "./dashboard/pages/dashboard.page";
import Patient from "./dashboard/pages/patient/patient.pages";
import HospitalPage from "./dashboard/pages/hospital/hospital.page";
import SpecialistPage from "./dashboard/pages/specialist/specialist.page";
import HospitalSpecialistPage from "./dashboard/pages/hospital/hospital-specialist.page";
import paymentPage from "./dashboard/pages/patient/payment/payment.page";


export default function App() {

  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pay" component={paymentPage} />
        <Route path="/hospital/specialists" component={HospitalSpecialistPage} />
        <Route path="/patient" component={Patient} />
        <Route path="/hospital" component={HospitalPage} />
        <Route path="/specialist" component={SpecialistPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/forgotpass" component={forgotPasswordPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>

  )};

