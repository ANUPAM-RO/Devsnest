import {useState} from 'react'
const UseStateobj = ()=>{
    const [curElm, SetVal]= useState({Name:"Anupam",
    Age: 23,City: "Kolkata",Course: "MCA"})
    const ChgVal = () =>{
        SetVal({...curElm,Name: 'Arnab', Age:24,})
    }

    return(
        <div>
            <h2>Name: {curElm.Name},Age:{curElm.Age}, City: {curElm.City} and Course: {curElm.Course} </h2>
            <button onClick={ChgVal}>Update</button>
        </div>
    )
}
export default UseStateobj;