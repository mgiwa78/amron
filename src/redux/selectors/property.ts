import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectProperiesSlice = (state: RootState) => state.property;

export const selectProperiesItems = createSelector(
  selectProperiesSlice,
  (properties) => properties.properties
);
