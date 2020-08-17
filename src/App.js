import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Room from "./components/Room/Room.component";
import CreateRoom from "./components/CreateRoom/CreateRoom.component";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
