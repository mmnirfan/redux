import React, { Component } from 'react';
import Navbar from './containers/Navbar/Navbar';
import Home from './containers/Home';
import Students from './containers/Students';
import About from './containers/About';
import Footer from './containers/Footer/Footer';
import Todo from './containers/Todo/Todo';
import Contact from './containers/Contact/ContactUs';
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Students" component={Students} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Todo" component={Todo} />
          <Route exact path="/Contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default  App;

