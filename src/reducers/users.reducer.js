import userItems from '../users.json';

import {
  USER_OPEN_FORM,
  USER_CLOSE_FORM,
  USER_CREATE,
  USER_UPDATE,
  USER_DELETE
} from '../actions/users.actions';

const initialState = {
  items: userItems,
  formOpen: false,
  editableItemId: null
};

export default function users(state=initialState, action) {
  switch (action.type) {

    case USER_OPEN_FORM:
      return {
        ...state,
        formOpen: true,
        editableItemId: action.itemId
      };

    case USER_CLOSE_FORM:
      return {
        ...state,
        formOpen: false,
        editableItemId: null
      };

    case USER_CREATE:
      return {
        ...state,
        items: createItem(action.data, state.items)
      };

    case USER_UPDATE:
      return {
        ...state,
        items: updateItem(action.itemId, action.data, state.items)
      };

    case USER_DELETE:
      return {
        ...state,
        items: deleteItem(action.itemId, state.items)
      };

    default:
      return state;

  }
}

function createItem(data, items) {
  items.unshift(data);
  return items;
}

function updateItem(itemId, data, items) {
  items[itemId] = data;
  return items;
}

function deleteItem(itemId, items) {
  items.splice(itemId, 1);
  return items;
}
