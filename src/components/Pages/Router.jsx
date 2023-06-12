import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import WhitesPage from './pages/WhitesPage';
import RedsPage from './pages/RedsPage';
import BlendsPage from './pages/BlendsPage';
import ProfilePage from './pages/ProfilePage';

import { PAGE_PATHS } from './constants';

const RouterComponent = () => (
  <Router>
    <Routes>
      <Route path={PAGE_PATHS.HOME} element={<HomePage />} />
      <Route path={PAGE_PATHS.WHITES} element={<WhitesPage />} />
      <Route path={PAGE_PATHS.REDS} element={<RedsPage />} />
      <Route path={PAGE_PATHS.BLENDS} element={<BlendsPage />} />
      <Route path={PAGE_PATHS.PROFILE} element={<ProfilePage />} />
    </Routes>
  </Router>
);

export default RouterComponent;

