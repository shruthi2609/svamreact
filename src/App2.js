import { BrowserRouter,Routes,Route } from "react-router-dom";
import LayoutNavigation from "./Components/router components/LayoutNavigation";
import { AdminPage, ContactPage, LandingPage } from "./Components/router components/SampleComponents";
import { useState } from "react";
const App=()=>{
    const [user,setUser]=useState("")
    const handleLogin=(e)=>{
        e.preventDefault()
        setUser({username:"admin",password:"admin123"})
    }
    const handleLogout=(e)=>{
        e.preventDefault()
        setUser("")
    }
    return(
        <div>
            <BrowserRouter>
            <h1>Protecting routes</h1>
            <LayoutNavigation></LayoutNavigation>
            {
                user?<button onClick={(e)=>handleLogout(e)}>signout</button>:<button onClick={(e)=>handleLogin(e)}>signin</button>
            }
            <Routes>
                <Route index element={<LandingPage></LandingPage>}></Route>
                <Route path="/admin" element={<AdminPage user={user}></AdminPage>}></Route>
                <Route  path="/contact" element={<ContactPage></ContactPage>}></Route>
            </Routes>
            </BrowserRouter>

        </div>
    )

}
export default App