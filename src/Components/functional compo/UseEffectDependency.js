import { useState,useEffect } from "react"
const UseEffectDependency=(props)=>{
    const [msg,setMsg]=useState(0)
    const [uname,setUname]=useState("")
    useEffect(()=>{
        console.log("inside useeffect")
        setUname(props.prop1)
    },[props.prop1])
    useEffect(()=>{
        console.log("inside useffect 2")
    },[msg])
    const changeMsg=(e)=>{
        e.preventDefault()
        setMsg("how are you?")
    }
    return(
        <div>
            {console.log("render")}
            <h1>{msg}</h1>
            <button onClick={(e)=>changeMsg(e)}>change</button>
            <h3>{uname}</h3>
        </div>
    )
}
export default UseEffectDependency