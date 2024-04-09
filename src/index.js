import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import '../node_modules/bootstrap/dist/css/boostrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import Home1 from './linkFile/Home1';
// import Home1 from './linkFile/About1';
import Home1 from './linkFile/Contact1';
import About1 from './linkFile/About1';
import Contact1 from './linkFile/Contact1';

const root = ReactDOM.createRoot(document.getElementById('root'));


// let allRoutes = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Home1/>
//     },
//     {
//       path:'about-us',
//       element:<About1/>
//     },
//     {
//       path:'contact',
//       element:<Contact1/>
//     }
//   ]
// )
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>


  <BrowserRouter>
    <App/>
  </BrowserRouter>

  // <React.StrictMode>
  //   <RouterProvider router={allRoutes}/>
  // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
