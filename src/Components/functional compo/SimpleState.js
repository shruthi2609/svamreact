import { useState } from "react"
const SimpleState=(props)=>{
const [msg,setMsg]=useState("hello")
const [mode,setMode]=useState("light")
const updateMsg=()=>{
setMsg("hey")
}
    return(
        <div className={mode}>
            <h1>Simple Func Component for State</h1>
            <h3>{msg}</h3>
            <button onClick={updateMsg}>updatemsg</button>
        </div>

    )
}
export default SimpleState