import React from "react";
import { Redirect } from "react-router";
import { Button } from "reactstrap";
import Logoutbtn from "./Logoutbtn";
import "./Nav.css";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

class Nav1 extends React.Component {
  state = {
    dropdownOpen: false,
    redirect: false
  };

  handleLogout = () => {
    // call api to logout, THEN set the state to true
    this.setState({ redirect: true });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const styles = {
      text: {
        fontSize: "20px",
        color: "black"
      },
      navbar: {
        marginBottom: "35px"
      }
    };

    return (
      <div class="navbar fixed-top" style={styles.navbar}>
        <Nav tabs>
          <NavItem className="text">
            <NavLink style={styles.text} Disable href="/">
              SnapSight
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.text} href="/about">
              Newsfeed
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.text} href="/roomingcard">
              Rooming
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.text} href="/roster">
              Roster
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Add
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/participant">
                Add a New Participant
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {this.state.redirect ? (
            <Redirect to="/" />
          ) : (
            <NavItem>
              <Button
                onClick={this.handleLogout}
                className="btn1"
                outline
                color="primary"
              >
                Logout
              </Button>
            </NavItem>
          )}
        </Nav>
      </div>
    );
  }
}

export default Nav1;
