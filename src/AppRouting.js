import {BrowserRouter as Router, Route, Switch, Link, Redirect, Routes, Navigate } from 'react-router-dom';
import React from 'react'
import NotfoundPage from './pages/404/NotfoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';


function AppRouting() {

    //TODO Change to value from sessionStorage
    let loggedIn = true;


  return (
    <Router>
        {/* Route Switch */}
        <Routes>
            {/* Redirections to project our routes */}
            <Route exact path ='/'
            element =
                {
                    loggedIn ?
                     (<Navigate  to = '/dashboard' />)
                     :
                     (<Navigate  to = '/login' />)
                }>
            </Route>

            <Route exact path = '/login' element={<LoginPage/>}/>

            {/* Dashboard */}
            <Route exact path ='/dashboard'
            element = 
                {
                    loggedIn ?
                     (<DashBoardPage/>)
                     :
                     (<Navigate  to = '/login' />)
                }>
            </Route>
            <Route element ={ NotfoundPage }/>
        </Routes>
    </Router>
  
    );
}

export default AppRouting