import React, { useState } from 'react'

const TestAgain = () => {

    const [input, setInput] = useState('');

  return (
    <div>
       <input type="text" name="userInp" id="userInp" onKeyDown={(e) => setInput(e.target.value)} />
    </div>
  )
}

export default TestAgain
