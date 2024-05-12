import { createStore, combineReducers } from "redux";

// Define action types
const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
const SET_ARTICLE_TYPE = "SET_ARTICLE_TYPE";

// Define actions
export const setSearchText = (text: string) => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});

export const setArticleType = (type: string) => ({
  type: SET_ARTICLE_TYPE,
  payload: type,
});

// Define reducers
const searchTextReducer = (state = "", action: any) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.payload;
    default:
      return state;
  }
};

const articleTypeReducer = (state = "tvShows", action: any) => {
  switch (action.type) {
    case SET_ARTICLE_TYPE:
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers into root reducer
const rootReducer = combineReducers({
  searchText: searchTextReducer,
  articleType: articleTypeReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
