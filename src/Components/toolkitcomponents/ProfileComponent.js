import { useSelector } from "react-redux"
const ProfileComponent=()=>{
   const result=useSelector((state)=>state.userReducer.value)
   console.log(result)
return(
   
    <div>
       
        <h1>Profile Information</h1>
        <h2>Username:{result.username}</h2>
        <h3>Role:{result.role}</h3>
    </div>

)
}
export default ProfileComponent