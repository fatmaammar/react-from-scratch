import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App.js";


const appRouting = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));