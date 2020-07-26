import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home"
import RestaurantList from "./components/RestaurantList"
import RestaurantDetail from "./components/RestaurantDetail"
import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantUpdate from "./components/RestaurantUpdate"
import Login from "./components/Login"
import Protected from "./components/Protected"
import Logout from "./components/Logout"

function App() {
  return (
    <div className="App" >
      <Router>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/login"
          render={props => (
            <Login {...props} />)} ></Route>
        <Protected exact path="/" component={Home} />
        <Protected exact path="/details" component={RestaurantDetail} />
        <Protected exact path="/list" component={RestaurantList} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/create" component={RestaurantCreate} />
      </Router>
    </div>
  );
}

export default App;
