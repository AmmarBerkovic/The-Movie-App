import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a slice for search text
const searchTextSlice = createSlice({
  name: "searchText",
  initialState: "",
  reducers: {
    setSearchText: (state: any, action: PayloadAction<string>) => action.payload,
  },
}); 

// Define a slice for article type
const articleTypeSlice = createSlice({
  name: "articleType",
  initialState: "tvShows",
  reducers: {
    setArticleType: (state: any, action: PayloadAction<string>) => action.payload,
  },
});

// Export actions
export const { setSearchText } = searchTextSlice.actions;
export const { setArticleType } = articleTypeSlice.actions;

// Combine reducers and create the store
const store = configureStore({
  reducer: {
    searchText: searchTextSlice.reducer,
    articleType: articleTypeSlice.reducer,
  },
});

export default store;