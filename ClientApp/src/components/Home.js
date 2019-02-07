import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import ParentMenu from "./ParentMenu/ParentMenu";
import SubMenu from "./SubMenu/SubMenu";

import * as menuItems from "menuitems";

import "./Home.scss";

export default class Home extends Component {
  renderRoutes = () => {
    let routes = [];
    Object.keys(menuItems).map(menu => {
      menuItems[menu].forEach((item, key) => {
        const route = (
          <Route
            key={key}
            path={item.path}
            component={item.component}
            exact={true}
          />
        );
        routes.push(route);
      });
    });
    return routes;
  };

  render() {
    return (
      <div className="home">
        <div className="menus">
          <ParentMenu />
          <SubMenu />
        </div>
        <div className="content">
          <Switch>{this.renderRoutes()}</Switch>
        </div>
      </div>
    );
  }
}
