import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO } from './actionType.js';
const API_URL = 'http://localhost:8000';
export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });
        dispatch({ type: ADDNEW_TODO, payload: res.data })
    } catch (error) {
        console.log("Error while calling addNewTodo", error.messasge);
    }
}

export const getAllTodo = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({ type: GETALL_TODO, payload: res.data })
    } catch (error) {
        console.log("Error while calling getAllTodo", error.messasge);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({ type: TOGGLE_TODO, payload: res.data })
    } catch (error) {
        console.log("Error while calling toggleTodo", error.messasge);
    }
}
export const updateTodo = (id,data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`,{data});
        dispatch({ type: TOGGLE_TODO, payload: res.data })
    } catch (error) {
        console.log("Error while calling toggleTodo", error.messasge);
    }
}