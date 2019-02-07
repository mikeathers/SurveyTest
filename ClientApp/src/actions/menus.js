import { SELECT_PARENT_MENU_ITEM, SELECT_SUB_MENU_ITEM } from "./types";

export const selectParentMenuItem = item => ({
  type: SELECT_PARENT_MENU_ITEM,
  item
});

export const selectSubMenuItem = item => ({
  type: SELECT_SUB_MENU_ITEM,
  item
});
