import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import News from './pages/News';
import ErrorBoundary from './components/ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import NProgress from 'nprogress';

// Custom router that shows loading indicator
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          NProgress.start();
          await new Promise(resolve => setTimeout(resolve, 300)); // Minimum delay for smooth transition
          NProgress.done();
          return null;
        },
      },
      {
        path: "about",
        element: <About />,
        loader: async () => {
          NProgress.start();
          await new Promise(resolve => setTimeout(resolve, 300));
          NProgress.done();
          return null;
        },
      },
      {
        path: "services",
        element: <Services />,
        loader: async () => {
          NProgress.start();
          await new Promise(resolve => setTimeout(resolve, 300));
          NProgress.done();
          return null;
        },
      },
      {
        path: "projects",
        element: <Projects />,
        loader: async () => {
          NProgress.start();
          await new Promise(resolve => setTimeout(resolve, 300));
          NProgress.done();
          return null;
        },
      },
      {
        path: "news",
        element: <News />,
        loader: async () => {
          NProgress.start();
          await new Promise(resolve => setTimeout(resolve, 300));
          NProgress.done();
          return null;
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
