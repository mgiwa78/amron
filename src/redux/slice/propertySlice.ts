import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Property {
  id: string;
  title: string;
}

interface ProperiesState {
  properties: Property[];
}

const initialState: ProperiesState = {
  properties: []
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setPropertyAction(state, action) {
      state.properties = action.payload.properties;
    }
  }
});

export const { setPropertyAction } = propertiesSlice.actions;

export default propertiesSlice.reducer;
