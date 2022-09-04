import CSS from './Header.module.css';
import { BsNewspaper } from 'react-icons/bs';

export default function Header() {
  return (
    <div className={`${CSS.header} container center-items`}>
      <h1 className={`${CSS.mainHeading} flex align-center gap-small`}>
        My CV-Maker <BsNewspaper />
      </h1>
      <p className={CSS.subHeading}>Build your dream CV today!</p>
    </div>
  );
}
