import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from "./pages/authentication";


function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={index} />
          <Route exact path="/register" component={index} />
          <Route exact path="/login" component={index} />
          <Route exact path="/view" component={index} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
