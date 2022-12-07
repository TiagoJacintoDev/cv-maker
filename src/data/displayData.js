import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { TiMail } from "react-icons/ti";

export const DisplayGeneral = ({
  firstName,
  lastName,
  occupation,
  phone,
  email,
  github,
  linkedin,
}) => {
  return {
    name:
      firstName || lastName ? (
        <h1 className="fs-900 fw-bold uppercase text-darken-blue">
          {firstName} {lastName}
        </h1>
      ) : null,

    occupation: occupation ? <p>{occupation}</p> : null,

    phone: phone ? (
      <p>
        <BsTelephone />
        {phone}
      </p>
    ) : null,

    email: email ? (
      <p>
        <TiMail />
        {email}
      </p>
    ) : null,

    github: github ? (
      <p>
        <FiGithub />
        {github}
      </p>
    ) : null,

    linkedin: linkedin ? (
      <p>
        <AiOutlineLinkedin />
        {linkedin}
      </p>
    ) : null,
  };
};

export const DisplayExperience = ({
  role,
  company,
  city,
  state,
  accomplishment,
  to,
  from,
}) => {
  return {
    role: role ? <p>{role}</p> : null,

    location:
      company || city || state ? (
        <p>
          {company} - {city}, {state}
        </p>
      ) : null,

    accomplishment: accomplishment ? <p>{accomplishment}</p> : null,

    date:
      from || to ? (
        <p>
          {from} - {to}
        </p>
      ) : null,
  };
};

export const DisplayEducation = ({
  degree,
  schoolName,
  city,
  state,
  achievements,
  from,
  to,
}) => {
  return {
    degree: degree ? <p>{degree}</p> : null,

    school:
      schoolName || city || state ? (
        <p>
          {schoolName} - {city}, {state}
        </p>
      ) : null,

    achievements: achievements ? <p>{achievements}</p> : null,

    date:
      from || to ? (
        <p>
          {from} - {to}
        </p>
      ) : null,
  };
};
