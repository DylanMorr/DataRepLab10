import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';

class App extends Component {
  // wrap everything in render method
  render() {
    return (
      // put router tags so we can use the switch statement
      <Router>
        <div className="App">

          {/* Create a navbar for navigating the webpage */}
          <Navbar bg="primary" variant="dark">
            {/* Link all the component pages to the navbar and name accordingly */}
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* Setup a switch statement to get the correct paths */}
          <Switch>
            {/* Sets path of file to /read */}
            <Route path="/read"><Read></Read></Route>
            {/* Sets path of file to /create */}
            <Route path="/create"><Create></Create></Route>
            {/* Sets path of file to / as it is just mainpage */}
            <Route path="/" exact><Content /></Route>
            {/* Sets path of file to /edit/:id */}
            <Route path={"/edit/:id"} component={Edit}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

// export App class
export default App;