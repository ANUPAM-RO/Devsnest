import {useState} from 'react'

const UseState1 = () => {
    
const [count,setCount] = useState(0);

const Increment = () =>{
  setCount(count+5);
}
const Decrement = () =>{
  setCount(count-1);
}
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default UseState1
