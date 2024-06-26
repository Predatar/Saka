import { Link } from 'react-router-dom';
import { UsetIcon } from '@icons/icons';
import ROUTES from '@routes';

import './PersonalCabinet.scss';

const PersonalCabinet = () => {
  return (
    <Link to={ROUTES.LOGIN_PATH} className="personal-cab">
      <div className="personal-cab__icon">
        <UsetIcon />
      </div>
      <p className="personal-cab__text">Войти</p>
    </Link>
  );
};

export default PersonalCabinet;
