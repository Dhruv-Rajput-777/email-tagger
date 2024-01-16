import { createSlice } from "@reduxjs/toolkit";
import userData from "../static/userData";

const emailTaggerSlice = createSlice({
  name: "emailTagger",
  initialState: {
    suggestedUsers: [...userData],
    taggedUsers: [],
    searchString: "",
  },
  reducers: {
    removeTag: (state, { payload }) => {
      state.taggedUsers = state.taggedUsers.filter(
        (user) => user.id !== payload.user.id
      );
      if (state.searchString === "") {
        state.suggestedUsers.push(payload.user);
      }
      return state;
    },
    setSearchString: (state, { payload }) => ({
      ...state,
      searchString: payload,
    }),
    findSuggestions: (state, { payload }) => {
      const untaggedUsers = userData.filter((user) => {
        let userIsTagged = state.taggedUsers.find(
          (taggedUser) => taggedUser.id === user.id
        );
        if (userIsTagged === undefined) return user;
      });

      const searchResults = untaggedUsers.filter((user) => {
        if (user.name.toLowerCase().includes(state.searchString.toLowerCase()))
          return user;
      });
      state.suggestedUsers = searchResults;
    },
    tagUser: (state, { payload }) => {
      state.taggedUsers.push(payload);
      if (state.searchString === "") {
        state.suggestedUsers = state.suggestedUsers.filter(
          (user) => user.id !== payload.id
        );
      }
      state.searchString = "";
      return state;
    },
  },
});

const { actions, reducer } = emailTaggerSlice;

export const { removeTag, setSearchString, findSuggestions, tagUser } = actions;

export default reducer;
