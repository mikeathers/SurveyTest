import {
  SELECT_SUB_MENU_ITEM,
  SELECT_PARENT_MENU_ITEM
} from "../actions/types";

const menusReducerDefaultState = {
  parentMenuItemSelected: "Home",
  subMenuItemSelected: "Dashboard"
};

export default (state = menusReducerDefaultState, action) => {
  switch (action.type) {
    case SELECT_PARENT_MENU_ITEM:
      return {
        ...state,
        parentMenuItemSelected: action.item
      };
    case SELECT_SUB_MENU_ITEM:
      return {
        ...state,
        subMenuItemSelected: action.item
      };
    default:
      return state;
  }
};
