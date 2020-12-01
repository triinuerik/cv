import React from 'react';
import { IoIosBriefcase, IoIosSchool, IoIosCheckmarkCircle } from "react-icons/io";
import EducationIcon from '../__assets__/education-icon';


interface Props {
  section: string;
}

const Icon:  React.FC<Props> = props => {
  const { section } = props;
  switch (section) {
    case 'Work':
      return <IoIosBriefcase />
    case 'Education':
      return <IoIosSchool />
    default:
      return <IoIosCheckmarkCircle />
  }
};

export default Icon;