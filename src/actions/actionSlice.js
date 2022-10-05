import { createSlice } from '@reduxjs/toolkit'

export const actionSlice = createSlice({
  name: 'activeActionsData',
  initialState: {
    value: [],
  },
  reducers: {
    updateActiveActions(state, action) {
        state.value = [...action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateActiveActions } = actionSlice.actions

export default actionSlice.reducer