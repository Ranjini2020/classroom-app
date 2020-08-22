import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from "./pages/authentication/index";
import About from "./pages/About"
import Register from "./pages/Register";
import Teacher from "./pages/teacher";
import View from "./pages/View";


function App() {
  return (
    <Router>
      <div>
       
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={index} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/view" component={View} />   
        </Switch>
      </div>
    </Router>
  );
}

export default App;
