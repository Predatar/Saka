import { Outlet } from 'react-router-dom';
import Header from '../../common/Header/Header';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
