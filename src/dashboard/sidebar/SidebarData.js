import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = {

  specialist: 
  [{
      title: 'Home',
      path: '/specialist',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Reports',
      path: '/specialist/reports',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/specialist/patients',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
    {
      title: 'Messages',
      path: '/specialist/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/specialist/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ],

  hospital: [
    {
      title: 'Home',
      path: '/hospital',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Specialists',
      path: '/hospital/specialists',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'Messages',
      path: '/hospital/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/hospital/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ],

  patient: [
    {
      title: 'Home',
      path: '/patient',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Hospitals',
      path: '/patient/hospitals',
      icon: <FaIcons.FaHospitalAlt />,
      cName: 'nav-text'
    },
    {
      title: 'Appointment',
      path: '/patient/appointment',
      icon: <AiIcons.AiOutlineWhatsApp />,
      cName: 'nav-text'
    },
    {
      title: 'Messages',
      path: '/patient/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/patient/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ],


};