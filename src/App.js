import React from "react";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Contacts />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
