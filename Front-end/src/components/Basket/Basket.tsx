import { ShoppingCartIcon } from '../../icons/icons';

import './Basket.scss';

const Basket = () => {
  return (
    <div className="basket">
      <ShoppingCartIcon />
      <div className="basket__count">3</div>
    </div>
  );
};

export default Basket;
