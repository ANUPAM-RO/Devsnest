import {useState} from "react";

const Time = ()=> {
  let time = new Date().toLocaleTimeString();
  const [ctime,setTime] = useState(time)

const upadateTime = ()=>{
  time = new Date().toLocaleTimeString();
  setTime(time);
}
  setInterval(upadateTime,1000);
return(
  <>
  <h2>{ctime}</h2>
  </>
);
  
}
export default Time;

