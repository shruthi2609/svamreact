import React from "react"
class SampleComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        //let {age,fname}=this.props
        return(
            <div>
                <h1>Username:{this.props.fname}</h1>
                <h2>Age:{this.props.age}</h2>
            </div>
        )
    }
}
export default SampleComponent