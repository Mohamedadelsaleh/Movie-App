import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Home/HomePages';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
