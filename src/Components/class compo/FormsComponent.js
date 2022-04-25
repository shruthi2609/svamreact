import React from "react";
class FormsComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            msg:"",
            tech:""
        }
    }
    handleLogin=(e)=>{
        e.preventDefault()
    if(this.state.username==="admin"&&this.state.password==="admin"){
        this.setState({msg:"success"})
    }
    else{
        this.setState({msg:"please try again"})
    }
    }
    handleUname=(e)=>{
        this.setState({username:e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    handleTech=(e)=>{
        this.setState({tech:e.target.value})
    }
    render(){
        return(
            <form>
               Username: <input type="text" onChange={(e)=>this.handleUname(e)}></input>
               Password: <input type="text" onChange={(e)=>this.handlePassword(e)}></input>
              <select onChange={(e)=>this.handleTech(e)}>
                  <option value="react">React</option>
                  <option value="node">Node</option>
              </select>
               <button onClick={(e)=>this.handleLogin(e)}>login</button>
                <h2>{this.state.msg}</h2>
                <h3>{this.state.tech} is the specialization</h3>
            </form>
        )
    }
}
export default FormsComponent