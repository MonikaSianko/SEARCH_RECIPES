import { createSelector } from "reselect";
import { IStore } from "./redux.types";

export const getFilters = createSelector(
    (state: IStore): string[] => state.filters,
    (item: string[]): string[]=> item
)

