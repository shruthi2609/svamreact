import React from "react"
class SampleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            marks:0 
        }
    }
    uploadMarks=()=>{
        console.log("hit")
        //this.state.marks=100
        this.setState({marks:100})
    }
    render(){
        //let {age,fname}=this.props
        return(
            <div>
               <h1>Username:{this.props.fname}</h1>
                <h2>Age:{this.props.age}</h2>
                <h2>Marks:{this.state.marks}</h2>
               <button onClick={this.uploadMarks}>upload marks</button>
            </div>
        )
    }
}
export default SampleComponent