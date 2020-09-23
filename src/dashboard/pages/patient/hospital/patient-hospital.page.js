import React from "react";
import Sidebar from "../../../sidebar/Sidebar";
import HospitalList from "./hospital-list.component";

export default function PatientHospitalPage() {
  return (
    <div>
      <Sidebar />
      <HospitalList />
    </div>
  );
}
