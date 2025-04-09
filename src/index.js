import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App'; // App will act as the layout
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import News from './pages/News';
import reportWebVitals from './reportWebVitals';

// Define routes using the data router format
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the root layout component
    children: [
      {
        index: true, // Render Home at the root path
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "news",
        element: <News />,
      },
      // Note: No separate /contact route needed
    ],
    // Error boundary could be added here later if needed
    // errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
