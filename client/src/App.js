import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from "./pages/authentication";
import Header  from "./pages/Header";
import About from "./pages/About"

import Register from "./pages/Register";
import Teacher from "./pages/goTeacher";
import View from "./pages/View";




function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={index} />
          <Route exact path="/goTeacher" component={Teacher} />
          <Route exact path="/view" component={View} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
