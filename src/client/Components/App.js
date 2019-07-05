
import React from "react";
import './app.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clients from "../Containers/clients"
import Analytics from "../Containers/analytics"
import Lk from "../Containers/lk"
import Settings from "../Containers/settings"
import Scheduler_Page from '../Containers/scheduler'
function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Scheduler_Page} />
        <Route path="/clients" component={Clients} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/settings" component={Settings} />
        <Route path="/lk" component={Lk} />

      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Scheduler</Link>
      </li>
      <li>
        <Link to="/clients">Clients</Link>
      </li>
      <li>
        <Link to="/analytics">Analytics</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/lk">Lkrr</Link>
      </li>
    </ul>
  );
}

export default App;