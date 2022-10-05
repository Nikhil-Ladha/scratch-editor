import { configureStore } from '@reduxjs/toolkit';
import actionReducer from "./actions/actionSlice";

export default configureStore({
  reducer: {
    activeActionsData: actionReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['activeActionsData/updateActiveActions'],
        // Ignore these paths in state
        ignoredPaths: ['activeActionsData.value']
      },
    })
  }
})