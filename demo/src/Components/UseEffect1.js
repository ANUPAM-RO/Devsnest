import { useState, useEffect } from "react";
const UseEffect1 = ()=>{
    const[count, setCount] = useState(0);

useEffect(()=>{
    if(count>=1){
        document.title = `Chats (${count})`
    }else{
        document.title = `Chats`
    }
    console.log("Call many time")
},[count]);
useEffect(()=>{
    console.log("Call one time")
},[]);
console.log("First call")
return(
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Click 👍</button>
    </div>
)
}
export default UseEffect1;