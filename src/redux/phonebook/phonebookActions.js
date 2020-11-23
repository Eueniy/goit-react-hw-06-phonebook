import { createAction } from "@reduxjs/toolkit";
import Types from "./phonebookActionTypes";

export const fetchContacts = createAction(Types.FETCH_CONTACTS);
export const addContact = createAction(Types.ADD_CONTACT);
export const deleteContact = createAction(Types.DELETE_CONTACT);
export const filterContacts = createAction(Types.FILTER_CONTACTS);
