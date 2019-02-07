import React from "react";
import { NavLink } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = props => {
  const active = props.title === props.selected ? "subitem-selected" : "";

  return (
    <NavLink
      to={props.path}
      className={`subitem ${active}`}
      onClick={() => props.selectMenuItem(props.title)}
    >
      <i className={props.icon} />
      <p>{props.title}</p>
    </NavLink>
  );
};

export default MenuItem;
