import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.js'
import Home from './Home/Home.js';
import About from './About/About.js';
import Contact from './components/Contact/Contact.js';
import User from './components/User/User.js';
import Github, {githubInfoLoader} from './components/Github/Github.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/' element={<User />} >
            <Route path=':userid' element={<User />} />
        </Route>
        <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />} />
        <Route path='*' element={<div>Not Found</div>} />
    </Route> 
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
