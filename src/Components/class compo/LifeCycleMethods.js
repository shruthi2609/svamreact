import React from "react"
class LifeCycleMethods extends React.Component{
    constructor(props){
        console.log("constructor")
        super(props)
        this.state={
            msg:"",

        }
    }
    static getDerivedStateFromProps(props,state){
       // console.log(props,state)
        console.log("inside DS method")
        return {msg:props.mg}
    }
    componentDidMount(){
        console.log("did mount")
    }
    
    render(){
        console.log("render")
       
        return (
            <div>
                <h1>{this.state.msg}</h1>
              
            </div>
        )
    }
}
export default LifeCycleMethods