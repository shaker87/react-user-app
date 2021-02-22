import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home/Home';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/users/add">
            <AddUser></AddUser>
          </Route>
          <Route path="/users/edit/:id">
            <EditUser></EditUser>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
