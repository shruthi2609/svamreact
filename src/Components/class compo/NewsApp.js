import React from "react"
import axios from "axios"
class NewsApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:[],
            search:""
        }
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.get("https://hn.algolia.com/api/v1/search?query="+this.state.search).then((res)=>this.setState({news:res.data.hits})).catch((err)=>console.log(err))
    }

    render(){
        return(
            <div>
            <form>
                <input type="text" onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={(e)=>this.handleSubmit(e)}>search</button>
            </form>
            {
                this.state.news.map((item)=>(
                    <div>
                        <h2>{item.title}</h2>
                        <a href={item.url}>Read here</a>
                        <h3>Author :{item.author}</h3>
                    </div>
                ))
            }
            </div>
        )
    }
}
export default NewsApp