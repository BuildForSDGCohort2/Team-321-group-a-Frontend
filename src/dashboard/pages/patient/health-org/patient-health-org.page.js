import React from "react";
import Sidebar from "../../../sidebar/Sidebar";
import HealthOrgList from "./health-org-list.component";

export default function PatientHospitalPage() {
  return (
    <div>
      <Sidebar />
      <HealthOrgList />
    </div>
  );
}
