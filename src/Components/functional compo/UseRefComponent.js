import { useEffect, useRef,useState } from "react"

const UseRefComponent=(props)=>{
    const [name,setName]=useState("")
    const [agee,setAge]=useState()
   const age=useRef()
    const handleChange=(e)=>{
        setName(e.target.value)
    }
   const showDetails=(e)=>{
       e.preventDefault()
       setAge(age.current.value)
   }
    return(
        <div>
            {console.log("render is called")}
            <form>
               Name: <input type='text' onChange={(e)=>handleChange(e)}></input>
              Age:  <input type="text" ref={age}></input>
              <button onClick={showDetails}>ok</button>
            </form>
            <h1>{name}</h1>
<h3>{agee}</h3>           
        </div>
    )
}
export default UseRefComponent