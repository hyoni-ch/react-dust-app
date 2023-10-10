import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../actions/bookmark";

let initialState = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };

    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          bookmark => bookmark.stationName !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default bookmarkReducer;
