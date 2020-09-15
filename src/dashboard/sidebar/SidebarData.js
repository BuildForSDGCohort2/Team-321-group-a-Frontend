import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = {

  specialist: 
  [{
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/patients',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
    {
      title: 'Messages',
      path: '/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ],

  hospital: [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Specialists',
      path: '/specialists',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ],

  patient: [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Hospitals',
      path: '/hospitals',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ],


};