import {useState,useRef} from 'react'

const UnController = () => {
    const forEmail = useRef("");
    const forPass = useRef("");
    const[ allEntry, setAllEntry ] = useState(false);
    const submitform=(e)=>{
        e.preventDefault();
        const email = forEmail.current.value;
        const password = forPass.current.value;
        email === "" || password === "" ?  alert("Please fill the all data"): setAllEntry(true);
        
    }
    return (
        <>
            <form action=""onSubmit={submitform}>
        <div>
            <label htmlFor="forEmail">Email</label>
            <input type="text" name="email" id ="email" autoComplete="off" ref={forEmail}/> 
        </div>
        <div>
            <label htmlFor="forPass">Password</label>
            <input type="password" name="password" id ="password" autoComplete="off" ref = {forPass}/>
        </div>
        <button>LogIn</button>
        </form>
        <p>{ allEntry ? `My Email Address is ${forEmail.current.value}` : ""}</p>
        <p>{ allEntry ? `My Password is ${forPass.current.value}` : ""}</p>
        </>
    )
}

export default UnController
