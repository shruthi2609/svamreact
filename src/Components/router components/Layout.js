import { Link,Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <div>
        <nav>
   { /*    <Link to="/">Home</Link> 
        <Link to="/taskman">Task Manager</Link>*/}
        </nav>
        <Outlet></Outlet>
        </div>
    )
}
export default Layout