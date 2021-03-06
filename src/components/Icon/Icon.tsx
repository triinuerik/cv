import React from 'react';
import { IoIosBriefcase, IoIosSchool, IoIosPerson } from "react-icons/io";
import './Icon.css'


interface Props {
  section: string;
}

const Icon: React.FC<Props> = ({section}) => {
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