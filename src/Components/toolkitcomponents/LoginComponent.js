import { login,logout } from "../../reducers";
import { useDispatch } from "react-redux";
const LoginComponent=()=>{
    const dispatch=useDispatch()
    const handleLogin=()=>{
        dispatch(login({username:"admin",role:"admin side"}))
    }
    const handleLogout=()=>{
        dispatch(logout())
    }
    return(
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}
export default LoginComponent