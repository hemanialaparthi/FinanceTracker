import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";


export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

export const Root = () => {
  // check if token is present in local storage
  const isAuthenticated = !!localStorage.getItem('token');

  // then, redirect to the dashboard if authenticates, if not, redirect to the login page

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  )
}