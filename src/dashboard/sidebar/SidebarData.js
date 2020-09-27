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

  healthorg: [
    {
      title: "Home",
      path: "/dashboard/healthorg",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text"
    },
    {
      title: "Specialists",
      path: "/dashboard/healthorg/specialists",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text"
    },
    {
      title: "Messages",
      path: "/dashboard/healthorg/messages",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav-text"
    },
    {
      title: "Support",
      path: "/dashboard/healthorg/support",
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
      icon: <AiIcons.AiFillSchedule />,
      cName: "nav-text"
    },
    {
      title: "History",
      path: "/dashboard/patient/history",
      icon: <FaIcons.FaHistory />,
      cName: "nav-text"
    },
    {
      title: "Records",
      path: "/dashboard/patient/records",
      icon: <FaIcons.FaRecordVinyl />,
      cName: "nav-text"
    },
    {
      title: "Bill",
      path: "/dashboard/patient/bill",
      icon: <FaIcons.FaMoneyBill />,
      cName: "nav-text"
    },
    {
      title: "Payment",
      path: "/dashboard/patient/payment",
      icon: <IoIcons.IoLogoEuro />,
      cName: "nav-text"
    },
    {
      title: "Wallet",
      path: "/dashboard/patient/wallet",
      icon: <FaIcons.FaWallet />,
      cName: "nav-text"
    },
    {
      title: "Notifications",
      path: "/dashboard/patient/notifications",
      icon: <FaIcons.FaInbox />,
      cName: "nav-text"
    },
  ],


};