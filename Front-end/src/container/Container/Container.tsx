import { ReactNode } from 'react';

import './Container.scss'

interface PropTypes {
  children: ReactNode;
}

const Container = ({ children }: PropTypes) => {
  return <div className="container">{children}</div>;
};

export default Container;
