import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { PAGE_PATHS } from './constants';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path={PAGE_PATHS.HOME} element={<Main />} />
          <Route path={PAGE_PATHS.WHITES} element={<div>Whites</div>} />
          <Route path={PAGE_PATHS.REDS} element={<div>Reds</div>} />
          <Route path={PAGE_PATHS.BLENDS} element={<div>Blends</div>} />
          <Route path={PAGE_PATHS.PROFILE} element={<div>Profile</div>} />
        </Routes>
      </div>
    </Router>
  );
};
