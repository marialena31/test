import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/homepage.component';
import WebDesignPage from './pages/WebDesignPage/webdesignpage.component';
import AboutPage from './pages/AboutPage/aboutpage.component';
import AppDesignPage from './pages/AppDesignPage/appdesignpage.component';
import GraphicDesignPage from './pages/GraphicDesignPage/graphicdesignpage.component';
import LocationsPage from './pages/LocationsPage/locationspage.component';
import ContactPage from './pages/ContactPage/contactpage.component';

import './App.css';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(props) => (<HomePage {...props} />)} />
        <Route path='/web-design' render={(props) => (<WebDesignPage {...props} />)} />
        <Route path='/app-design' render={(props) => (<AppDesignPage {...props} />)} />
        <Route path='/graphic-design' render={(props) => (<GraphicDesignPage {...props} />)} />
        <Route path='/about' render={(props) => (<AboutPage {...props} />)} />
        <Route path='/locations' render={(props) => (<LocationsPage {...props} />)} />
        <Route path='/contact' render={(props) => (<ContactPage {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;
