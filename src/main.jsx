import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './components/Blogs';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import Jobs from './components/Jobs';
import AppliedJobs from './components/Pages/AppliedJobs';
import Root from './components/Root';
import Statistics from './components/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <errorElement></errorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/blogs',
        Element: <Blogs></Blogs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
 