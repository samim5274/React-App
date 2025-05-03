import React from 'react'

export default function HOOKS_USESTATE2() {

    const [count, setCount] = React.useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment 27</button>
    </div>
  )
}
