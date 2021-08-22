import { useState,useEffect } from "react"
const UseEffect2 = ()=>{

    const[widthCount, setWidthCount]=useState(window.screen.width);
    const  actualWidth = ()=>{
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize", actualWidth);
             return()=>{
                 console.log("remove")
                 window.removeEventListener("resize", actualWidth); 
             }
    });
    return(
        <div>
            <p>The Size of Window is:</p>
            <h2> { widthCount} </h2>

        </div>
    )
}
export default UseEffect2