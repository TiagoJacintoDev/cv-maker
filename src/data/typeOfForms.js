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
    icon: <AiOutlineInfoCircle style={IconStyle} />,
  },
  {
    name: 'experience',
    icon: <BsBriefcase style={IconStyle} />,
  },
  {
    name: 'skills',
    icon: <VscTools style={IconStyle} />,
  },
  {
    name: 'education',
    icon: <FaGraduationCap style={IconStyle} />,
  },
];
