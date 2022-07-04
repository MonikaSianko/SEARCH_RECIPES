// ACTIONS
export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

export type TAction =
  | { type: typeof ADD_FILTER; payload: string }
  | { type: typeof REMOVE_FILTER; payload: string };

export type TActionTypes =
|typeof ADD_FILTER
|typeof REMOVE_FILTER

// ACTION CREATORS

export interface IAddFilter {
  type: TActionTypes;
  payload: string;
}

export interface IRemoveFilter {
    type: TActionTypes;
    payload: string;
  }

// REDUCER

export interface IStore {
  filters: string[];
}

// TYPE
