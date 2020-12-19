import React, {useState} from "react";
import { Route } from "react-router-dom";

import Backdrop from "../sidebar-widget/backdrop/Backdrop";
import Toolbar from "../sidebar-widget/toolbar/Toolbar";
import SideDrawer from "../sidebar-widget/sideDrawer/SideDrawer";

import PatientPage from "./patient/patient.page";
import DashboardHealthOrgPage from "./health-org/health-org.page";
import SpecialistPage from "./specialist/specialist.page";


const DashboardComponent = ({ match }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  }

  let backdrop;

  if(sideDrawerOpen){
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <div style={{ top: "5rem", position: 'relative' }}>

        <Route path={`${match.path}/patient`} component={PatientPage} />
        <Route path={`${match.path}/healthorg`} component={DashboardHealthOrgPage} />
        <Route path={`${match.path}/specialist`} component={SpecialistPage} />
        
      <Toolbar drawerClickHandler = {drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} click={backdropClickHandler} />
        {backdrop}
       
    </div>
  );
};

export default DashboardComponent;
