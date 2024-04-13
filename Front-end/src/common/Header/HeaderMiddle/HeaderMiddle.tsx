import { NavLink } from 'react-router-dom';
import Container from '@container/Container/Container';
import ROUTES from '@routes';

const HeaderMiddle = () => {
  return (
    <div className="header__midlle">
      <Container>
        <nav className="header__nav-list">
          <ul className="header__list">
            <NavLink to={ROUTES.DEFAULT_PATH}  className="header__list-item">
              Главная
            </NavLink>
            <NavLink to={ROUTES.CATALOG} className="header__list-item">
              Каталог
            </NavLink>
            <NavLink to={ROUTES.ABOUT_COMPANY} className="header__list-item">
              О компании
            </NavLink>
            <NavLink to={ROUTES.NEWS} className="header__list-item">
              Новости
            </NavLink>
            <NavLink to={ROUTES.DELIVERY} className="header__list-item">
              Доставка и оплата
            </NavLink>
            <NavLink to={ROUTES.CONTACTS} className="header__list-item">
              Контакты
            </NavLink>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default HeaderMiddle;
