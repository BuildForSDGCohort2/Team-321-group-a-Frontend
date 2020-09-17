import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const headerData = [{
      title: 'Signin',
      path: '/signin',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Companies',
      path: '/companies',
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
      title: 'Hospitals',
      path: '/hospitals',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Pricing',
      path: '/pricing',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ];

  export default headerData;
