import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "./phonebookActions";

const contactsReducer = createReducer([], {
  [Actions.fetchContacts]: (state, action) => action.payload,
  [Actions.addContact]: (state, action) => [...state, action.payload],
  [Actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer("", {
  [Actions.filterContacts]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
