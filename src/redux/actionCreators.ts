import { ADD_FILTER, IAddFilter, IRemoveFilter, REMOVE_FILTER } from "./redux.types";

export const addFilter = (payload: string): IAddFilter => ({
    type: ADD_FILTER,
    payload
})

export const removeFilter = (payload: string): IRemoveFilter => ({
    type: REMOVE_FILTER,
    payload
})