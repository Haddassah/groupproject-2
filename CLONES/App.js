import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./components/CardBtn/CardBtn.css";
import "./App.css";
import Login from "./components/LoginPage/Login.js";
import About from "./pages/About.js";
import Participant from "./pages/Participant.js";
import Roster from "./pages/Roster.js";
import RoomingCard from "./pages/RoomingCard.js";
// import Newsfeed from "./pages/Newsfeed.js";

const App = () => (
  <Router>
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/participant" component={Participant} />
        <Route exact path="/roster" component={Roster} />
        <Route exact path="/roomingcard" component={RoomingCard} />
        <Route exact path="/newsfeed" component={Newsfeed} />
      </Switch>
    </div>
  </Router>
);

export default App;
