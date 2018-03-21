import React from "react";
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
import {
  withStyles,
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from "material-ui";
import { Person, Notifications, Dashboard, Search } from "material-ui-icons";

import { CustomInput, IconButton as SearchButton } from "components";

import headerLinksStyle from "variables/styles/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = (event) => {
    if (this.target1.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <CustomInput
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        />
        <SearchButton
          color="white"
          aria-label="edit"
          customClass={classes.top + " " + classes.searchButton}
        >
          <Search className={classes.searchIcon} />
        </SearchButton>

        <IconButton
          color="inherit"
          aria-label="Dashboard"
          className={classes.buttonLink}
        >
          <Dashboard className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Dashboard</p>
          </Hidden>
        </IconButton>
        {/* =========== Notifications here ============ */}
        <IconButton
          color="inherit"
          aria-label="Notifications"
          aria-owns={open ? "menu-list" : null}
          aria-haspopup="true"
          className={classes.buttonLink}
        >
          <Notifications className={classes.links} />
          <span className={classes.notifications}>5</span>

        </IconButton>
        {/* =========== User-view switcher here ============ */}
        <Manager style={{ display: "inline-block" }}>
          <Target>
            <div
              ref={node => {
                this.target1 = node;
              }}
            >          
              <IconButton
                color="inherit"
                aria-label="Person"
                className={classes.buttonLink}
                onClick={this.handleClick}
              >
                <Person className={classes.links} />
                <Hidden mdUp>
                  <p onClick={this.handleClick} className={classes.linkText}>
                    Person
                  </p>
                </Hidden>
              </IconButton>
            </div>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={
              classNames({ [classes.popperClose]: !open }) +
              " " +
              classes.pooperResponsive
            }
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow
                in={open}
                id="menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Ryan
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Justin
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Yu Jie
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Chen Kuang
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
