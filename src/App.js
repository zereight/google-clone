import React from "react";
import HomePresenter from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPagePresenter from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/search">
            <SearchPagePresenter />
          </Route>
          <Route path="/">
            <HomePresenter />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
