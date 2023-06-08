import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
// import { contactsServiceApi } from './contactsServiceApi';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // [contactsServiceApi.reducerPath]: contactsServiceApi.reducer,
    filter: filtersReducer,
  },
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactsServiceApi.middleware,
  // ],
});
