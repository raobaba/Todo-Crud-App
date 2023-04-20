import axios from 'axios';
import { ADDNEW_TODO, DELETE_TODO, GETALL_TODO, TOGGLE_TAB, TOGGLE_TODO, UPDATE_TODO } from './actionType.js';
const API_URL = 'https://todo-backend-server-raobaba.onrender.com';
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
        dispatch({ type: UPDATE_TODO, payload: res.data })
    } catch (error) {
        console.log("Error while calling upateTodo", error.messasge);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);
        dispatch({ type: DELETE_TODO, payload: res.data })
    } catch (error) {
        console.log("Error while calling deleteTodo", error.messasge);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}