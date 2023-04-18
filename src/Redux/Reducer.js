import { ADDNEW_TODO } from "./actionType.js";

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADDNEW_TODO:
            return [action.payload, ...state];
        default:
            return state;
    }
}