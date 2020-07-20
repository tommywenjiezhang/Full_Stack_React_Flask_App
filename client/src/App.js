import React from 'react';
import {Provider}from "react-redux"
import store  from "./redux/store"
import CityIndex from "./component/city/cityIndex";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
            <CityIndex />
          </div>
      </Provider>
  );
}

export default App;
