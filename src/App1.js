import SampleComponent from "./Components/class compo/SampleComponent"
import ComponentTwo from "./Components/functional compo/ComponentTwo"
import DashBoard from "./Components/functional compo/DashBoard"
import CounterComponent from "./Components/class compo/CounterComponent"
import ToggleComponent from "./Components/class compo/ToggleComponent"
import TaskManager from "./Components/class compo/TaskManager"
import LifeCycleMethods from "./Components/class compo/LifeCycleMethods"
import FormsComponent from "./Components/class compo/FormsComponent"
import APIFetch from "./Components/class compo/APIFetch"
import APIFetchDidMount from "./Components/class compo/APIFetchDidMount"
import AxiosFetch from "./Components/class compo/AxiosFetch"
import NewsApp from "./Components/class compo/NewsApp"
import PostRequest from "./Components/class compo/PostRequest"
import SimpleState from "./Components/functional compo/SimpleState"
import UsingStates from "./Components/functional compo/UsingDifferentTypes"
import UseEffectComponent from "./Components/functional compo/UseEffectComponent"
import UseEffectDependency from "./Components/functional compo/UseEffectDependency"
import UseRefComponent from "./Components/functional compo/UseRefComponent"
import {Routes,Route,BrowserRouter,Link} from "react-router-dom"
import Layout from "./Components/router components/Layout"
import {Home,DashBoardComp,CompNotFound, UnAuth} from "./Components/router components/Home"
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path="dashboard/:uname/:email" element={<DashBoardComp></DashBoardComp>}></Route>
                <Route path="unauth" element={<UnAuth></UnAuth>}></Route>
                <Route path="*" element={<CompNotFound></CompNotFound>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App
 



