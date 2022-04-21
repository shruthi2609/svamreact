import React from "react";
import "./ToggleComponent.css"
class ToggleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false,
            userName:"john",
            role:"admin",
            loggedinTime:"21/04/2022"
        }  
    }
    changeStatus=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    render(){
        const h1style={color:"red"}
        return(
            <>
           {this.state.isLoggedIn?<div className="logindiv">
               <h1 style={h1style}>Username :{this.state.userName}</h1>
               <h2>Role :{this.state.role}</h2>
               <h4>CheckIn :{this.state.loggedinTime}</h4>
               <button onClick={this.changeStatus}>logout</button>
           </div>:
           <div>
           <h2>Please login in  </h2>
           <button onClick={this.changeStatus} className="btn btn-primary">login</button>
           </div>}
            </>
        )
    }
}
export default ToggleComponent