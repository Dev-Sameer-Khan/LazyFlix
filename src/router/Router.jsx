import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Errorpage from '../components/Errorpage';
import Movies from '../pages/Movies';
import Admin from '../pages/Admin';
import HollywoodPage from '../pages/HollywoodPage';
import BollywoodPage from '../pages/BollywoodPage';
import PunjabiPage from '../pages/PunjabiPage';
import SouthPage from '../pages/SouthPage';
import Editmovie from '../components/Editmovie';
import Addmovie from '../components/Addmovie';
import Deletemovie from '../components/Deletemovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement : <Errorpage/>
  },
  {
    path: '/hollywood',
    element: <HollywoodPage />,
    errorElement : <Errorpage/>
  },
  {
    path: '/bollywood',
    element: <BollywoodPage />,
    errorElement : <Errorpage/>
  },
  {
    path: '/punjabi',
    element: <PunjabiPage />,
    errorElement : <Errorpage/>
  },
  {
    path: '/southindian',
    element: <SouthPage />,
    errorElement : <Errorpage/>
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement : <Errorpage/>
  },
  {
    path: '/admin/editmovie',
    element: <Editmovie />,
    errorElement : <Errorpage/>
  },
  {
    path: '/admin/addmovie',
    element: <Addmovie />,
    errorElement : <Errorpage/>
  },
  {
    path: '/admin/deletemovie',
    element: <Deletemovie />,
    errorElement : <Errorpage/>
  },
  {
    path: '/movies/:movieId',
    element: <Movies />,
    errorElement : <Errorpage/>
  },
]);

export default router