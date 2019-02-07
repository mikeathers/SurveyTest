import React from "react";
import { NavLink } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = props => {
  const active = props.itemName === props.selected ? "parentitem-selected" : "";

  return (
    <NavLink
      to={props.path}
      className={`parentitem ${active}`}
      onClick={() => props.selectMenuItem(props.itemName)}
    >
      <i className={props.iconName} />
      <p>{props.itemName}</p>
    </NavLink>
  );
};

export default MenuItem;
