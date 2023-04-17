import React, {useState} from 'react'

export default function TodoForm() {
    const handleChange = (e)=>{
        console.log(e.target.value);
    }
    return (
        <div className='form'>
            <input 
            placeholder='Enter Your Todo here...' 
            className='input'
            onChange={handleChange}
            />
        </div>
    )
}
