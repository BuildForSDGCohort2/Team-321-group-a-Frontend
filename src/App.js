import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.page";
import forgotPasswordPage from './pages/forgot-password/forgot-password.page';
import SignUp from './pages/sign-up/sign-up.page';
import SignIn from './pages/sign-in/sign-in.page';
import Footer from "./components/footer/footer.component";

//from dashboard
import Dashboard from "./dashboard/pages/dashboard.page";


export default function App() {

  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route  path="/home" component={HomePage} />
        <Route  path="/forgotpass" component={forgotPasswordPage} />
        <Route  path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  )};