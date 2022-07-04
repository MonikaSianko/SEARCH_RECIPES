import { removeFilter } from "./redux.methods"
import { ADD_FILTER, IStore, REMOVE_FILTER, TAction } from "./redux.types"

export const initialState = {
    filters: []
}

export const rootReducer = (
    state: IStore = initialState,
    action: TAction
): IStore => {
    switch(action.type) {
        case ADD_FILTER:
            return {
                ...state,
               filters: [...state.filters, action.payload]
                
            }
        case REMOVE_FILTER:
            return {
                ...state,
                filters: removeFilter(state.filters,action.payload)
            }
            default:
                return state;
    }
}