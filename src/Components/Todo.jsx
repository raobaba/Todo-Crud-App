import React, { useEffect } from 'react'
import { getAllTodo } from '../Redux/action';
import { useDispatch } from 'react-redux';
export default function Todo() {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllTodo());
    },[dispatch]);
  return (
    <div>
      Hello from Todo app
    </div>
  )
}
