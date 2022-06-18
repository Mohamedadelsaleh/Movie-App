import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Home/HomePages';
import SinglePage from './Components/Watch/SinglePage'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singlePage/:id" component={SinglePage } />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
