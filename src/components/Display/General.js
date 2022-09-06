import { BsTelephone } from 'react-icons/bs';
import { TiMail } from 'react-icons/ti';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';

export default function General({ formData }) {
  const { general } = formData;
  const { firstName, lastName, occupation, phone, email, github, linkedin } =
    general[0];

  return (
    <div className='display-section'>
      <div className='display-info'>
        <h1 className='fs-800 fw-bold'>
          {firstName || 'John'} {lastName || 'Doe'}
        </h1>
        <p>{occupation || 'Occupation'}</p>
      </div>
      <div>
        <p>
          <BsTelephone /> {phone || 'Phone'}
        </p>
        <p>
          <TiMail /> {email || 'Email'}
        </p>
        <p>
          <FiGithub /> {github || 'Github'}
        </p>
        <p>
          <AiOutlineLinkedin /> {linkedin || 'LinkedIn'}
        </p>
      </div>
    </div>
  );
}
