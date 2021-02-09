import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./components/detail/detailPage";
import DetailEditPage from './components/detail/detailEditPage'
import FetchData from './components/detail/FetchData'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route  path="/"  exact component={HomePage} />
            <Route  path="/detailpage/:Id" exact component={DetailPage} />
            
            <Route  path="/detaileditpage/:Id" exact component={DetailEditPage} />

            <Route  path="/fetchdata/:fetchId" exact component={FetchData} />

            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
