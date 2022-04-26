import React from "react"
import axios from "axios"
class AxiosFetch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>this.setState({result:res.data})).catch((err)=>console.log("error"))
    }
    render(){
        console.log("state is set",this.state.result)
        return(
            <div>
                <h1>User Details</h1>
                {
                    this.state.result.map((item)=>(
                        <div>
                            <h2>{item.name}</h2>
                            <h3>{item.username}</h3>
                            <h3>{item.email}</h3>
                            </div>
                    ))
                }
               
            </div>

        )
    }
}
export default AxiosFetch