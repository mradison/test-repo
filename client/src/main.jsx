import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import Homepage from './pages/homepage.jsx';
import Servicespage from './pages/servicespage.jsx';
import Contactuspage from './pages/contactuspage.jsx';
import Portfoliopage from './pages/portfoliopage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      // {
      //   path: '/login',
      //   element: <Login />
      // }, {
      //   path: '/signup',
      //   element: <Signup />
      // }, 
      {
        path: '/services',
        element: <Servicespage />
      },{
        path: '/portfolio',
        element: <Portfoliopage />
      },{
        path: '/contact',
        element: <Contactuspage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
