import React from 'react'

const Calc = () => {
  return (
    <div className='container border border-2 border-dark my-5'>
        <div className='my-3'>
            <input type="text" name="input" id="input" className='form-control fs-3 text-end' />
        </div>
        <div className="container">
            <div className="row">
            <button className="btn btn-outline-dark col m-1 fs-3">cls</button>
            <button className="btn btn-outline-dark col m-1 fs-3">backspace</button>
            </div>
            <div className="row">
                <button className="btn btn-outline-dark col m-1 fs-3">9</button>
                <button className="btn btn-outline-dark col m-1 fs-3">8</button>
                <button className="btn btn-outline-dark col m-1 fs-3">7</button>
                <button className="btn btn-outline-dark col m-1 fs-3">+</button>
            </div>
            <div className="row">
                <button className="btn btn-outline-dark col m-1 fs-3">6</button>
                <button className="btn btn-outline-dark col m-1 fs-3">5</button>
                <button className="btn btn-outline-dark col m-1 fs-3">4</button>
                <button className="btn btn-outline-dark col m-1 fs-3">-</button>
            </div>
            <div className="row">
                <button className="btn btn-outline-dark col m-1 fs-3">3</button>
                <button className="btn btn-outline-dark col m-1 fs-3">2</button>
                <button className="btn btn-outline-dark col m-1 fs-3">1</button>
                <button className="btn btn-outline-dark col m-1 fs-3">x</button>
            </div>
            <div className="row">
                <button className="btn btn-outline-dark col m-1 fs-3">0</button>
                <button className="btn btn-outline-dark col m-1 fs-3">.</button>
                <button className="btn btn-outline-dark col m-1 fs-3">=</button>
                <button className="btn btn-outline-dark col m-1 fs-3">/</button>
            </div>
        </div>
    </div>
  )
}

export default Calc
