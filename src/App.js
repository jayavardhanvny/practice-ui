import React, { Component } from 'react';
import http from "./http-common";
import CustomToolBarTable1 from './components/custom-toolbar-1'
import './App.css';
import SortTable from './components/sorttable';
import AllStudents from './components/all-students';
import { BrowserRouter as Router, Route, IndexRoute, Switch, Link } 
from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Navbar from './navbar'
const ReactDOM = require('react-dom');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    http.get("http://localhost:8080/student/getAllStudents") 
    .then(response => {
      console.log("dsfadsj "+response)
      this.setState({students: response.data});
      
		});

  }


  // render() {
  //   return (<SortTable student></SortTable>);
  // }

  render(){
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <Navbar />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

export default App;
