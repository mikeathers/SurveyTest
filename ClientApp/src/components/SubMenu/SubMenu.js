import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSubMenuItem } from "actions";

import SearchBox from "./SearchBox/SearchBox";
import MenuItem from "./MenuItem/MenuItem";

import "./SubMenu.scss";

import * as menuItems from "menuitems";

class SubMenu extends Component {
  selectMenuItem = item => {
    this.props.selectSubMenuItem(item);
  };

  renderItems = () => {
    let selectedMenuItem;

    switch (this.props.selectedParentMenuItem) {
      case "Home":
        selectedMenuItem = "homeMenuItems";
        break;
      case "Core":
        selectedMenuItem = "coreMenuItems";
        break;
      case "Rehab":
        selectedMenuItem = "rehabMenuItems";
        break;
      default:
        break;
    }

    return menuItems[selectedMenuItem].map((item, key) => {
      return (
        <MenuItem
          key={key}
          title={item.title}
          icon={item.icon}
          selected={this.props.selectedSubMenuItem}
          selectMenuItem={this.selectMenuItem}
          path={item.path}
        />
      );
    });
  };
  render() {
    return (
      <div className="submenu">
        <SearchBox />
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedParentMenuItem: state.menus.parentMenuItemSelected,
  selectedSubMenuItem: state.menus.subMenuItemSelected
});

export default connect(
  mapStateToProps,
  { selectSubMenuItem }
)(SubMenu);
