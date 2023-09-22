import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../actions/bookmark";

let initialState = {
  bookmarks: [],
};

// const bookmarksString = localStorage.getItem("bookmarks");
// const bookmarks = JSON.parse(bookmarksString);

// if (bookmarks) {
//   initialState = { ...bookmarks };
// } else {
//   initialState = {
//     bookmark: [],
//   };
// }

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      // localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };

    case REMOVE_BOOKMARK:
      // localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
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
