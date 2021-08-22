import { useState } from "react";
const StateArray = ()=>{
    const obj = [
        {
            Name:"Anupam",
            Age: 23,
            City: "Kolkata",
            Course: "MCA"
        },
        {
            Name:"Arnab",
            Age: 24,
            City: "Kolkata",
            Course: "MCA"
        },
        {
            Name:"Arijit",
            Age: 22,
            City: "Kolkata",
            Course: "MCA"
        }
    ]
    const[curr,setclear]= useState(obj)
    const ClrData = ()=>{
        setclear([]);
    }
    return(
        <div>
            {
                curr.map((curElm)=>{
                    return <h2>Name: {curElm.Name},Age:{curElm.Age}, City: {curElm.City} and Course: {curElm.Course} </h2>
                })
            }
            <button onClick={ClrData}>Clear</button>
        </div>

    )
}
export default StateArray