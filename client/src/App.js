import React from 'react';
import {Provider}from "react-redux"
import store  from "./redux/store"
import CityIndex from "./component/city/cityIndex";
import {Router, Route, Switch } from 'react-router-dom'
import CityCreate from "./component/city/cityCreate";
import history  from "./history";
import CityEdit from "./component/city/cityItems/cityEdit";
import Header from "./component/partial/Header";
import UserLogin from "./component/index/user/userLogin";
import UserRegister from "./component/index/user/userRegister";

function App() {
  return (
      <Provider store={store}>
            <Header />
             <Router history={history}>
                <Switch>
                  <Route path="/" exact component={CityIndex} />
                  <Route path="/new" exact component={CityCreate} />
                  <Route path="/edit/:id" exact component={CityEdit} />
                  <Route path="/login" exact component={UserLogin} />
                  <Route path="/register" exact component={UserRegister} />
                </Switch>
            </Router>
      </Provider>
  );
}

export default App;
