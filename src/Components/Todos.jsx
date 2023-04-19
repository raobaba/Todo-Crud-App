import React, { useEffect } from 'react'
import { getAllTodo } from '../Redux/Action';
import { useDispatch } from 'react-redux';
export default function Todo() {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllTodo());
    },[]);
  return (
    <div>
      Hello from Todo app
    </div>
  )
}
