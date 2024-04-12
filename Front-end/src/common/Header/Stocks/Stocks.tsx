import Container from '../../../container/Container/Container';

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
                <img src="http://localhost:3000/stocks/Material_1.png" alt="Материал ткани" />
              </div>
              <span className="stocks__text">Кулинарная гладь</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <img src="http://localhost:3000/stocks/Material_2.png" alt="Материал ткани" />
              </div>
              <span className="stocks__text">Футер</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <img src="http://localhost:3000/stocks/Material_3.png" alt="Материал ткани" />
              </div>
              <span className="stocks__text">Кашкорсе, рибана</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <img src="http://localhost:3000/stocks/Material_4.png" alt="Материал ткани" />
              </div>
              <span className="stocks__text">Пике</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <img src="http://localhost:3000/stocks/Material_5.png" alt="Материал ткани" />
              </div>
              <span className="stocks__text">Интерлок</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <img src="http://localhost:3000/stocks/Material_6.png" alt="Материал ткани" />
              </div>
              <span className="stocks__text">Капитоний</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <img src="http://localhost:3000/stocks/Material_7.png" alt="Материал ткани" />
              </div>
              <span className="stocks__text">Селаник</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <img src="http://localhost:3000/stocks/Material_8.png" alt="Материал ткани" />
              </div>
              <span className="stocks__text">Велюр</span>
            </li>
            <li className="stocks__list-item">
              <div className="stocks__img">
                <img src="http://localhost:3000/stocks/Material_9.png" alt="Материал ткани" />
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
