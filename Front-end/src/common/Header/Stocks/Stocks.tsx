import Container from '@container/Container/Container';
import Img from '@ui/Img/Img';

import material1 from '@assets/img/stocks/Material_1.png';
import material2 from '@assets/img/stocks/Material_2.png';
import material3 from '@assets/img/stocks/Material_3.png';
import material4 from '@assets/img/stocks/Material_4.png';
import material5 from '@assets/img/stocks/Material_5.png';
import material6 from '@assets/img/stocks/Material_6.png';
import material7 from '@assets/img/stocks/Material_7.png';
import material8 from '@assets/img/stocks/Material_8.png';
import material9 from '@assets/img/stocks/Material_9.png';

import './stocks.scss';

const Stocks = () => {
  return (
    <div className="stocks">
      <Container>
        <div className="stocks__wrapper">
          <span className="stocks__title">АКЦИИ</span>
          <ul className="stocks__list">
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material1} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Кулинарная гладь</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material2} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Футер</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material3} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Кашкорсе, рибана</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material4} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Пике</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material5} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Интерлок</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material6} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Капитоний</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material7} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Селаник</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material8} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Велюр</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <Img src={material9} alt="Материал ткани" />
              </div>
              <span className="stocks__text">Вискоза</span>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Stocks;
