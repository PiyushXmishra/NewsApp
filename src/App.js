
import './App.css';

import React from 'react'
import Navbar from './components/navbar';
import News from './components/News';
import { BrowserRouter as Router,
         Routes, 
        Route } from "react-router-dom";

function App(){
  return (
    
    <div>
      <Router>
      <Navbar/>
      
      <Routes>

      <Route exact path='/'element={<News key="general"pageSize={9} country="in" category="general"/>}/>
      <Route exact path='/General'element={<News key="general"pageSize={9} country="in" category="general"/>}/>
      <Route exact path='/Business'element={<News key="Business" pageSize={9} country="in" category="Business"/>}/>
      <Route exact path='/Entertainment'element={<News key="Entertainment" pageSize={9} country="in" category="Entertainment"/>}/>
      <Route exact path='/Health'element={<News key="Health" pageSize={9} country="in" category="Health"/>}/>
      <Route exact path='/Science'element={<News key="Science" pageSize={9} country="in" category="Science"/>}/>
      <Route exact path='/Sports'element={<News key="Sports"pageSize={9} country="in" category="Sports"/>}/>
      <Route exact path='/Technology'element={<News key="Technology" pageSize={9} country="in" category="Technology"/>}/>
      
      

      </Routes>
      </Router>
      </div>
        )
      }
 
  export default App


