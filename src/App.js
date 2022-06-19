import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
        <Route exact path="https://mohamedadelsaleh.github.io/Movie-App/" component={Home} />
        <Route path="https://mohamedadelsaleh.github.io/singlepage/:id" component={SinglePage } exact />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
