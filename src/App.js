import React from "react";
import HomePresenter from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/search">
            {/* Search Page */}
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
