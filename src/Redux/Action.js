import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO } from './actionType.js';
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
        console.log(res);
        dispatch({ type: GETALL_TODO, payload: res.data })
    } catch (error) {
        console.log("Error while calling getAllTodo", error.messasge);
    }
}