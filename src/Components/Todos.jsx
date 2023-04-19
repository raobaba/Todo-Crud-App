import React, { useEffect } from 'react'
import { getAllTodo } from '../Redux/Action';
import { useDispatch,useSelector } from 'react-redux';
import Todo from './Todo';
export default function Todos() {
    const dispatch = useDispatch();
    const {todos} = useSelector((state)=>state);
    console.log(todos)
    useEffect(()=>{
       dispatch(getAllTodo());
    },[dispatch]);
  return (
    <article>
      <ul>
        {
          todos.map((todo)=>
            <Todo key={todo._id} todo={todo} />
          )
        }
      </ul>
    </article>
  )
}
