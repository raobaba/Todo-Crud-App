import React, {useState} from 'react'
import { addNewTodo } from '../Redux/Action';
import { useDispatch } from 'react-redux';
export default function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText("");
    } 
    const onInputChange = (e) => {
        setText(e.target.value);
    }
    console.log(text)
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}
