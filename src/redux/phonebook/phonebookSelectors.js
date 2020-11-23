import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts;

export const getFilter = (state) => state.filter;

// Memoization
export const filterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
