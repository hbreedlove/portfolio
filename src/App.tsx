import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import HomeScreen from './components/screens/home-screen/HomeScreen';
import { routes } from './constants/routes';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={routes.ROOT} component={HomeScreen} />
          <Route exact path={routes.PROJECTS} component={HomeScreen} />
          <Route exact path={routes.CONTACT} component={HomeScreen} />
          <Route exact path={routes.ABOUT} component={HomeScreen} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
