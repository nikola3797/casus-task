/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Our new error field is configured here
    const AppStateSlice = createSlice({
      name: "appState",
      initialState: "",
      reducers: {
        updateAppState: (state, action) => {
              return {
                    ...state,
                    isError: action.payload,
                  };
            },
          },
});

const defaultTemplates = [
    // fetch data from API here
];

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const TemplatesSlice = createSlice({
    name: 'templates',
    initialState: defaultTemplates,
    reducers: {},
});

// The actions contained in the slice are exported for usage in our components
export const { updateTemplateState } = TemplatesSlice.actions;

// The actions contained in the new slice are exported to be used in our components
export const { updateAppState } = AppStateSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
    reducer: {
        templates: TemplatesSlice.reducer,
        isError: AppStateSlice.reducer,
    },
});

export default store;