import React from "react";
import "./App.css";
import EventManager from "./Components/EventManager";
import EventDetails from "./Components/EventDetails";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f4f7f6",
    minHeight: "100vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  cursorPointer: {
    cursor: "pointer",
  },
  noDecoration: {
    textDecoration: "inherit",
    color: "inherit",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Link
              to="/"
              className={classes.noDecoration}
              style={{ flexGrow: 1 }}
            >
              <Typography variant="h6">VanHack Events</Typography>
            </Link>
            <Link to="/about" className={classes.noDecoration}>
              <InfoIcon className={classes.cursorPointer} />
            </Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <EventManager />
          </Route>
          <Route path="/event/:eventId">
            <EventDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
