import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./components/detail/detailPage";
import DetailEditPage from './components/detail/detailEditPage';
import ListPage from './components/detail/ListPage'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route  path="/"  exact component={HomePage} />
            <Route  path="/detailpage/:Id" exact component={DetailPage} />      
            <Route  path="/detaileditpage/:Id" exact component={DetailEditPage} />
            <Route  path="/listpage" exact component={ListPage} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
