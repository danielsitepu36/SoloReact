import React, { Component } from "react";
import Link from "react-router-dom/Link";
import Switch from "@material-ui/core/Switch";
import PropTypes from "prop-types";

// MUI
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import UILink from "@material-ui/core/Link";

//REDUX stuffs
import { connect } from "react-redux";
import { changeTheme } from "../redux/actions/UIAction";

let localTheme = localStorage.theme;
if (localTheme === "true") {
  localTheme = true;
} else {
  localTheme = false;
}

export class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeChoice: localTheme,
    };
  }
  render() {
    const handleTheme = async () => {
      await this.setState({ themeChoice: !this.state.themeChoice });
      await this.props.changeTheme(this.state.themeChoice);
    };
    return (
      <AppBar color="primary">
        <ToolBar>
          <Button underline="none" component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/login">
            Login
          </Button>
          <Button component={Link} to="/signup">
            SignUp
          </Button>
          DARK MODE
          <Switch checked={this.state.themeChoice} onChange={handleTheme} />
        </ToolBar>
      </AppBar>
    );
  }
}
navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const mapActionsToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapActionsToProps)(navbar);
