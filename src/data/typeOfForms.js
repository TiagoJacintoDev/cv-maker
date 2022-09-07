import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { VscTools } from 'react-icons/vsc';
import { FaGraduationCap } from 'react-icons/fa';

const IconStyle = {
  marginLeft: 'var(--size-300)',
};

export const forms = [
  {
    name: 'general',
    icon: <AiOutlineInfoCircle className='svg' style={IconStyle} />,
  },
  {
    name: 'experience',
    icon: <BsBriefcase className='svg' style={IconStyle} />,
  },
  {
    name: 'skills',
    icon: <VscTools className='svg' style={IconStyle} />,
  },
  {
    name: 'education',
    icon: <FaGraduationCap className='svg' style={IconStyle} />,
  },
];
