import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./phonebook/phonebookReducer";

const store = configureStore({ reducer: phoneBookReducer });

export default store;
