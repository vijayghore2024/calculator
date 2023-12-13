import React, { useState } from 'react'

const Test = () => {

    // let count = 1;
    const [count, setCount] = useState(0);
    
    const [mode, setMode] = useState('light')

    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        if(count>=1){
            setCount(count - 1);
        }else{
            alert("Counter already 0")
        }

    }

    return (
        <div className='fs-1 d-flex justify-content-center align-items-center vh-100'>
            <button className="btn btn-dark fs-1 mx-5 px-5" onClick={() => decreaseCount()}> - </button>
            <div> {count} </div>
            <button className="btn btn-dark fs-1 mx-5 px-5" onClick={() => increaseCount()}> + </button>
        </div>
    )
}

export default Test
