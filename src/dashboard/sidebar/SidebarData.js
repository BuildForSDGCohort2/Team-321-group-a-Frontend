import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = {

  specialist: 
  [{
      title: "Home",
      path: "/dashboard/specialist",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text"
    },
    {
      title: "Reports",
      path: "/dashboard/specialist/reports",
      icon: <IoIcons.IoIosPaper />,
      cName: "nav-text"
    },
    {
        title: "Patients",
        path: "/dashboard/specialist/patients",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
      },
    {
      title: "Messages",
      path: "/dashboard/specialist/messages",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav-text"
    },
    {
      title: "Support",
      path: "/dashboard/specialist/support",
      icon: <IoIcons.IoMdHelpCircle />,
      cName: "nav-text"
    }
  ],

  hospital: [
    {
      title: "Home",
      path: "/dashboard/hospital",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text"
    },
    {
      title: "Specialists",
      path: "/dashboard/hospital/specialists",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text"
    },
    {
      title: "Messages",
      path: "/dashboard/hospital/messages",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav-text"
    },
    {
      title: "Support",
      path: "/dashboard/hospital/support",
      icon: <IoIcons.IoMdHelpCircle />,
      cName: "nav-text"
    }
  ],

  patient: [
    {
      title: "Home",
      path: "/dashboard/patient",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text"
    },
    {
      title: "Hospitals",
      path: "/dashboard/patient/hospitals",
      icon: <FaIcons.FaUniversity />,
      cName: "nav-text"
    },
    {
      title: "Specialists",
      path: "/dashboard/patient/specialists",
      icon: <FaIcons.FaHospitalAlt />,
      cName: "nav-text"
    },
    {
      title: "Appointment",
      path: "/dashboard/patient/appointments",
      icon: <AiIcons.AiOutlineWhatsApp />,
      cName: "nav-text"
    },
    {
      title: "Messages",
      path: "/dashboard/patient/messages",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav-text"
    },
    {
      title: "Support",
      path: "/dashboard/patient/support",
      icon: <IoIcons.IoMdHelpCircle />,
      cName: "nav-text"
    }
  ],


};