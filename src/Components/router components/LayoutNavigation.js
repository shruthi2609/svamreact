import {Link} from "react-router-dom"

const LayoutNavigation=()=>{
    return(
        <nav>
            <Link to='/'>Landing Page</Link>
            <Link to='/admin'>Admin Page</Link>
            <Link to='contact'>Contact</Link>
        </nav>
    )
}
export default LayoutNavigation
