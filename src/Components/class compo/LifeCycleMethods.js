import React from "react"
class LifeCycleMethods extends React.Component{
    constructor(props){
        console.log("constructor")
        super(props)
        this.state={
            msg:"",
            role:"no role"

        }
    }
    static getDerivedStateFromProps(props,state){
       // console.log(props,state)
        console.log("inside DS method")
        return {msg:props.mg}
    }

  /*  componentDidMount(){
        console.log("did mount")
    }*/
    shouldComponentUpdate(nextProps,nextState){
        console.log("should comp update")
        console.log("next props",nextProps)
        console.log("next state",nextState)
        if(this.state.role!==nextState.role||this.props.mg!==nextProps.mg){
            return true
        }
        else{
            return false
        }  
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("prev",prevState)
       if(prevState.role!==this.state.role){
           return null
       }
       
    }
    componentDidUpdate(){
        console.log("did update")
    }
    updateRole=()=>{
        this.setState({role:"admin"})
    }
    componentWillUnmount(){
        console.log("component unmounting")
    }
    
    render(){
        console.log("render")
       
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <h2>{this.state.role}</h2>
                <button onClick={this.updateRole}>change role</button>
              
            </div>
        )
    }
}
export default LifeCycleMethods