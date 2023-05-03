import { Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';
import Favorites from './pages/Favorites/Favorites';
import NotFound from './pages/NotFound/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Header />}>
      <Route index element={<App />} />
      <Route path='favorites' element={<Favorites />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
