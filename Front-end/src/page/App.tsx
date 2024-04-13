import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@container/Layout/Layout';
import ROUTES from '@routes';
import '../styles/index.scss';
import Page404 from './Page404/Page404';
import Loader from '@components/Loader/Loader';

const Main = lazy(() => import('./Main/Main'));
const News = lazy(() => import('./News/News'));

function App() {
  return (
    <Routes>
      <Route path={ROUTES.DEFAULT_PATH} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={ROUTES.NEWS} element={<News />} />

        <Route path={ROUTES[404]} element={<Page404 />} />
        <Route path="/loader" element={<Loader />} />
      </Route>
    </Routes>
  );
}

export default App;
