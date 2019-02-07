import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import configureStore from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./components/Home";
import "semantic-ui-css/semantic.min.css";
import "normalize.css/normalize.css";
import "./styles/main.scss";

export const history = createHistory();
const store = configureStore();

export const storeChild = store.store;

const jsx = (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// registerServiceWorker();
