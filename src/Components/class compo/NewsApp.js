import React from "react"
import axios from "axios"
class NewsApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:[],
            search:"",
            id:""
        }
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    handleID=(e)=>{
        this.setState({id:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
      /*  axios.get("http://localhost:3002/userdetails?fname="+this.state.search).then((res)=>this.setState({news:res.data})).catch((err)=>console.log(err))*/
      axios.get(`http://localhost:3002/userdetails?fname=${this.state.search}&id=${this.state.id}`).then((res)=>this.setState({news:res.data})).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
            <form>
                <input type="text" onChange={(e)=>this.handleChange(e)}></input>
                <input type="text" onChange={(e)=>this.handleID(e)}></input>
                <button onClick={(e)=>this.handleSubmit(e)}>search</button>
            </form>
            {
                this.state.news.map((item)=>(
                    <div>
                        <h2>{item.fname}</h2>
                        <h3>Number :{item.mobile}</h3>
                    </div>
                ))
            }
            </div>
        )
    }
}
export default NewsApp