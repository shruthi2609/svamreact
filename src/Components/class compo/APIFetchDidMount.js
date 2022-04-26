import React from "react"
class APIFetchDidMount extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{return res.json()}).then((data)=>this.setState({result:data})).catch((err)=>console.log(err))
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
export default APIFetchDidMount