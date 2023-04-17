import axios from 'axios';
import { ADDNEW_TODO } from './ActionType';
const API_URL = 'http://localhost:8000';
 export const addNewTodo = (data)=> async(dispatch)=> {
    try {
        const res = axios.post(`${API_URL}/todo`,{data});
        dispatch({type:ADDNEW_TODO,payload:res.data})
    } catch (error) {
        console.log("Error while calling addNewTodo",error.messasge);
    }
}