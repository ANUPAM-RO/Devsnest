import {useState}from 'react'

const Basicform = () => {
    const[ email,setEmail ]= useState("");
    const[ password,setPass ]= useState("");
    const[ allEntry, setAllEntry ] = useState([]);
    const submitform=(e)=>{
        e.preventDefault();
    if(email && password){
            const newEntry = { id: new Date().getTime().toString() ,email, password };
            setAllEntry([...allEntry,newEntry ]);
            setEmail("")
            setPass("")
        }
        else{
            alert("Please fill up the all data");
        }
    }
    
    return (
        <>
        <form action=""onSubmit={submitform}>
        <div>
            <label htmlFor="Email">Email</label>
            <input type="text" name="email" id ="email" autoComplete="off" value= {email}
            onChange={(e)=> setEmail(e.target.value)}/> 
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id ="password" autoComplete="off" value = {password} 
            onChange={(e)=> setPass(e.target.value)}/>
        </div>
        <button>LogIn</button>
        </form>
        <div>
            {
                allEntry.map((curEle)=>{
                    const {id, email,password} = curEle;
                    return(
                       <div className="showDataStyle" key={id}>
                            <p>My Email Address is : {email}</p>
                            <p>My Password is : {password}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Basicform
