import React from 'react';
import { IoIosBriefcase, IoIosSchool, IoIosPerson } from 'react-icons/io';
import './Icon.scss';


interface IconProps {
  section: string;
}

const Icon: React.FC<IconProps> = ({section}) => {
  const renderIcon = () => {
    switch (section) {
      case 'Work':
        return <IoIosBriefcase />
      case 'Education':
        return <IoIosSchool />
      default:
        return <IoIosPerson />
    }
  }

  return(
    <div className={`circle ${section}`}>
      { renderIcon() }
    </div>
  )
};

export default Icon;