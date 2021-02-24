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

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route  path="/"  exact component={HomePage} />
            <Route  path="/detailpage/:Id" exact component={DetailPage} />      
            <Route  path="/detaileditpage/:Id" exact component={DetailEditPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
