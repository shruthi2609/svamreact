import { useEffect,useState } from "react"
import axios from "axios"
const UseEffectComponent=(props)=>{
const [msg,setMsg]=useState("Use Effect")
const [result,setRes]=useState([])
useEffect(
    ()=>{
      console.log("inside useeffect1")
      axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setRes(res.data)).catch((err)=>console.log(err))
    }
,[])
useEffect(
    ()=>{
        console.log("inside useeffect2")
    }
,[])
return(
    <div>
        <h1>{msg}</h1>
        {
            result.map((item)=>(
                <div>
                    {item.name}
                    </div>
            ))
        }
    </div>
)
}
export default UseEffectComponent