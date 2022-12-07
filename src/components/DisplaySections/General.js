import { DisplayGeneral } from "../../data/displayData";

export default function General({ formDisplayData }) {
  const { general } = formDisplayData;

  const { name, occupation, phone, email, github, linkedin } = DisplayGeneral(
    general[0]
  );

  return (
    <div className="display-section">
      <div className="flex space-between align-center">
        <div className="display-info">
          {name}
          {occupation}
        </div>
        <div>
          {phone}
          {email}
          {github}
          {linkedin}
        </div>
      </div>
    </div>
  );
}
