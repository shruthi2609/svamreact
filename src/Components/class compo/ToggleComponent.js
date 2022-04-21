import React from "react";
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
        return(
            <>
           {this.state.isLoggedIn?<div>
               <h1>Username :{this.state.userName}</h1>
               <h2>Role :{this.state.role}</h2>
               <h4>CheckIn :{this.state.loggedinTime}</h4>
               <button onClick={this.changeStatus}>logout</button>
           </div>:
           <div>
           <h2>Please login in  </h2>
           <button onClick={this.changeStatus}>login</button>
           </div>}
            </>
        )
    }
}
export default ToggleComponent