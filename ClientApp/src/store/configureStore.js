import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import menusReducer from "../reducers/menusReducer";

export default function configureStore(history, initialState) {
  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";
  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }

  const reducers = {
    menus: menusReducer
  };

  const appReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  // const rootReducer = (state, action) => {
  //   if (action.type === "USER_LOGOUT") {
  //     state = undefined;
  //   }
  //   return appReducer(state, action);
  // };

  const middleware = [thunk, routerMiddleware(history)];

  const persistConfig = {
    key: "root",
    storage
  };

  const persistedReducer = persistReducer(persistConfig, appReducer);

  let store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  let persistor = persistStore(store);
  return { store, persistor };
}
