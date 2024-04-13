import Logo from '@common/Logo/Logo';
import Basket from '@components/Basket/Basket';
import PersonalCabinet from '@components/PersonalCabinet/PersonalCabinet';
import Container from '@container/Container/Container';
import { PhoneCallIcon } from '@icons/icons';
import Img from '@ui/Img/Img';

import cerf1 from '@assets/img/cerf/cerf1.png';
import cerf2 from '@assets/img/cerf/cerf2.png';
import cerf3 from '@assets/img/cerf/cerf3.png';

const HeaderTop = () => {
  return (
    <div className="header__top">
      <Container>
        <div className="header__top-wrap">
          <div className="header__wrap">
            <Logo />
            <div className="header__cerf">
              <div className="header__cerf-item">
                <Img src={cerf1} alt="cerf" />
              </div>
              <div className="header__cerf-item">
                <Img src={cerf2} alt="cerf" />
              </div>
              <div className="header__cerf-item">
                <Img src={cerf3} alt="cerf" />
              </div>
            </div>
            <p className="header__title">Производитель турецкого трикотажного полотна</p>
          </div>
          <div className="header__wrap">
            <Basket />
            <PersonalCabinet />
            <div className="header__call">
              <div className="header__call-wrap">
                <PhoneCallIcon />
                +90 212 547 08 26
              </div>
              <a href="tel:+902125470826" className="header__call-wrap">
                Заказать звонок
              </a>
            </div>
          </div>
          <div className="select-lang">
            <div className="select-lang__item select-lang__item_active">RU</div>/
            <div className="select-lang__item">EN</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
