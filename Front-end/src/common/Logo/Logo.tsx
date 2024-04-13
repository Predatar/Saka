import { Link } from 'react-router-dom';
import ROUTES from '@routes';

import logo from '@assets/img/logo.png';

import './Logo.scss';

const Logo = () => {
  return (
    <Link className="logo" to={ROUTES.DEFAULT_PATH}>
      <img src={logo} alt="logo" loading='lazy'/>
    </Link>
  );
};

export default Logo;
