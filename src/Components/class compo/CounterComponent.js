import React from "react"
class CounterComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    setIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    setDecrement=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        } 
    }
    render(){
        return(
            <>
            <button onClick={this.setIncrement}>+</button>
            {this.state.count}
            <button onClick={this.setDecrement}>-</button>
            </>
        )
    }
}
export default CounterComponent