import { createStore } from "redux";
import bookmarksReducer from "./bookmark";

const store = createStore(bookmarksReducer);

export default store;
