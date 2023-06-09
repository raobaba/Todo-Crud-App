import { ADDNEW_TODO, GETALL_TODO, UPDATE_TODO, TOGGLE_TODO, DELETE_TODO, ALL_TODOS, TOGGLE_TAB } from "./actionType.js";

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADDNEW_TODO:
            return [action.payload, ...state]
        case GETALL_TODO:
            return action.payload
        case TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
            ))
        case UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
            ))
        case DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);

        default:
            return state;
    }
}

export const tabReducer = (state = ALL_TODOS, action) => {
    switch (action.type) {
        case TOGGLE_TAB:
            return action.selected
        default:
            return state;
    }
}