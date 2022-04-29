import { useState } from "react";
const UsingStates =(props)=>{
    const [name,setName]=useState("")
    const [count,setCount]=useState(0)
    const [resp,setResp]=useState([])
    const [state,setState]=useState({msg:"hello",username:"john"})
    const [res,setResult]=useState([
        {
            id:0,
            title:"React"
        },
        {
            id:1,
            title:"Node"
        }
    ])
    const updateState=()=>{
        setState({msg:"hey",username:state.username})
    }
    return(
        <div>
            <h1>Using different Types of state</h1>
            <h3>Username : {state.username}</h3>
            <h4>Msg :{state.msg}</h4>
            <button onClick={updateState}>update</button>
            {
                res.map((item)=>(
                    <div>
                        <h3>{item.title}</h3>
                        </div>
                ))
            }
        </div>

    )
}
export default UsingStates