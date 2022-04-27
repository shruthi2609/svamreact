import React from "react"
import axios from "axios"
class PostRequest extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"",
            id:"",
            mobile:"",
            address:"",
            message:""
        }
    }
    handleChange=(e)=>{
        this.setState({fname:e.target.value})
    }
    handleID=(e)=>{
        this.setState({id:e.target.value})
    }
    handleAddress=(e)=>{
        this.setState({address:e.target.value})
    }
    handleMobile=(e)=>{
        this.setState({mobile:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
      axios.post("http://localhost:3002/userdetails",{
        "id": this.state.id,
        "fname":this.state.fname,
        "mobile":this.state.mobile,
        "address": this.state.address
      }).then((res)=>this.setState({message:res.request.statusText})).catch((err)=>console.log(err))
     
    }
    render(){
        return(
            <div>
            <form>
                <input type="text" onChange={(e)=>this.handleChange(e)}></input>
                <input type="text" onChange={(e)=>this.handleID(e)}></input>
                <input type="text" onChange={(e)=>this.handleAddress(e)}></input>
                <input type="text" onChange={(e)=>this.handleMobile(e)}></input>
                <button onClick={(e)=>this.handleSubmit(e)}> add user</button>
            </form>
            <h3>{this.state.message}</h3>
           
            </div>
        )
    }
}
export default PostRequest