import React, { Component } from "react";
import { connect } from "react-redux";
import { selectParentMenuItem, selectSubMenuItem } from "actions";

import parentMenu from "../../menuitems/parentMenu";

import "./ParentMenu.scss";
import MenuItem from "./MenuItem/MenuItem";

class ParentMenu extends Component {
  selectMenuItem = item => {
    this.props.selectParentMenuItem(item);
    this.props.selectSubMenuItem("Dashboard");
  };
  render() {
    return (
      <div className="parentmenu">
        {parentMenu.map((item, key) => {
          return (
            <MenuItem
              key={key}
              itemName={item.title}
              iconName={item.icon}
              selected={this.props.selected}
              selectMenuItem={this.selectMenuItem}
              path={item.path}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.menus.parentMenuItemSelected
});

export default connect(
  mapStateToProps,
  { selectParentMenuItem, selectSubMenuItem }
)(ParentMenu);
