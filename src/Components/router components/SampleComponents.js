import { Navigate } from "react-router-dom"

export const LandingPage=()=>{
    return(
        <div>
            <h1>Landing Page</h1>
        </div>
    )
}
export const AdminPage=(props)=>{
    if(!props.user){
        return <Navigate to="/contact" replace></Navigate>
    }
    return(
        <div>
            <h1> Details goes here</h1>
        </div>
    )
}
export const ContactPage=()=>{
    return(
        <div>
            <h1>Please contact the support team for login issues</h1>
        </div>
    )
}