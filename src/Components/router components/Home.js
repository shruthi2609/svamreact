import { useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
export const Home=()=>{
    const [username,setUsername]=useState("")
    const navigate=useNavigate()
    const handleChange=(e)=>{
        e.preventDefault()
        setUsername(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        if(username==="admin"){
            navigate(`/dashboard/${username}`)
        }
        else{
            navigate("/unauth")
        }

    }
    return(
        <div>
            <h1>sign in</h1>
            <form>
                Username:<input type="text" onChange={(e)=>handleChange(e)}></input>
                <button onClick={(e)=>handleLogin(e)}>login</button>
            </form>
        </div>
    )
}
export const DashBoardComp=()=>{
    const {uname}=useParams()
    return(
        <div>
            
            <h1>Dashboard Page</h1>
            <h2>Welcome {uname}</h2>
        </div>
    )
}
export const CompNotFound=()=>{
    return(
        <div>
            <h1>Sorry ! the page you are looking for is not found !</h1>
        </div>
    )
}
export const UnAuth=()=>{
    return(
        <div>
            <h1>Sorry login again</h1>
            <Home></Home>
        </div>
    )
}