import { useLocation } from 'react-router-dom';
import './Header.scss';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderTop from './HeaderTop/HeaderTop';
import { useEffect, useState } from 'react';
import Stocks from './Stocks/Stocks';

const Header = () => {
  const [inMain, setInMain] = useState<boolean>(true);

  const location = useLocation();

  useEffect(() => {
    setInMain(location.pathname === '/');
  }, [location]);

  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle />
      {inMain && <Stocks />}
    </header>
  );
};

export default Header;
