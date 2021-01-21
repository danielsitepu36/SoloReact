import "./App.css";
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles/";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";

// Redux
// import { CHANGE_THEME } from "./redux/types";
import { changeTheme } from "./redux/actions/UIAction";
import { connect } from "react-redux";

// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

// Components
import Navbar from "./components/navbar";
import Button from "@material-ui/core/Button";
import UISwitch from "@material-ui/core/Switch";

import BrightTheme from "./util/brightTheme";
import DarkTheme from "./util/darkTheme";
const styles = (theme) => ({
  ...theme.spreadIt,
  root: {},
  container: {
    margin: "80px auto 0 auto",
    maxWidth: "1200px",
    backgroundColor: "primary",
  },
});

let localTheme = localStorage.theme;
if (localTheme === undefined) {
  console.log("NULL");
  localTheme = false;
} else {
  if (localTheme === "true") {
    localTheme = true;
  } else {
    localTheme = false;
  }
}
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeChoice: localTheme,
    };
  }

  componentDidMount() {
    console.log("NULL");
    this.props.changeTheme(localTheme);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.UI !== this.props.UI) {
      this.setState({ themeChoice: this.props.UI.theme });
      // console.log(this.state.themeChoice);
    }
  }

  // handleTheme = async () => {
  //   // this.setState({ themeChoice: !this.state.themeChoice });
  //   await this.setState({ themeChoice: !this.state.themeChoice });
  //   await this.props.changeTheme(this.state.themeChoice);
  //   console.log(this.state.themeChoice);
  // };

  render() {
    const { classes } = this.props;
    const palletType = this.state.themeChoice
      ? createMuiTheme(BrightTheme)
      : createMuiTheme(DarkTheme);
    return (
      <div>
        <MuiThemeProvider theme={palletType}>
          <CssBaseline />
          <Router>
            <Navbar />
            <div className={classes.container}>
              <Button onClick={() => console.log(this.state.themeChoice)}>
                PRESS ME
              </Button>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const mapActionsToProps = {
  changeTheme,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(App));
