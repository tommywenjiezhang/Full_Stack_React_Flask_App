import React from 'react';
import {Provider}from "react-redux"
import store  from "./redux/store"
import CityIndex from "./component/city/cityIndex";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CityCreate from "./component/city/cityCreate";

function App() {
  return (
      <Provider store={store}>
             <Router>
                <Switch>
                  <Route path="/" exact component={CityIndex} />
                  <Route path="/new" exact component={CityCreate} />
                </Switch>
            </Router>
      </Provider>
  );
}

export default App;
