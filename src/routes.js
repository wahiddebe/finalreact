import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sbmptn from "./pages/SBMPTN";
import Snmptn from "./pages/SNMPTN";
import Um from "./pages/UM";
import Af from "./pages/Afirmasi";
function routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/sbmptn" component={Sbmptn} />
        <Route path="/snmptn" component={Snmptn} />
        <Route path="/um" component={Um} />
        <Route path="/afirmasi" component={Af} />
      </div>
    </Router>
  );
}
export default routes;
