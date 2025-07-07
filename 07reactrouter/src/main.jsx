import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router= createBrowserRouter(createRoutesFromElements( // this is againa method
  <Route path='/' element={ <Layout/>}>  // what is the element/components want to load in path
  <Route path= '' element={<Home/>}/>
  <Route path= 'about' element={<About/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router}/>
  </React.StrictMode>,
)
