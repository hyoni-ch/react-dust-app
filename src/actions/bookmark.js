export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const addBookmark = bookmark => ({
  type: ADD_BOOKMARK,
  payload: bookmark,
});

export const removeBookmark = stationName => ({
  type: REMOVE_BOOKMARK,
  payload: stationName,
});
